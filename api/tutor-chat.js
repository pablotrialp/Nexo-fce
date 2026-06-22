const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-4.1-mini";
const OPENAI_TIMEOUT_MS = 35000;
const FREE_TUTOR_LIMIT_MESSAGE = "Alcanzaste el limite gratuito del Chat Tutor IA. Activar Premium habilitara consultas ilimitadas.";

function loadLocalEnv(name) {
  if (process.env[name]) return process.env[name];

  try {
    const fs = require("fs");
    const path = require("path");
    const envPath = path.join(process.cwd(), ".env.local");
    const file = fs.readFileSync(envPath, "utf8");
    const line = file.split(/\r?\n/).find((entry) => entry.trim().startsWith(`${name}=`));
    if (!line) return "";
    const value = line.slice(line.indexOf("=") + 1).trim().replace(/^['"]|['"]$/g, "");
    process.env[name] = value;
    return value;
  } catch {
    return "";
  }
}

function cleanText(value, maxLength = 1200) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function sendJson(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(body));
}

function responseText(data) {
  if (data.output_text) return data.output_text;
  return (data.output || [])
    .flatMap((item) => item.content || [])
    .map((content) => content.text || "")
    .join(" ");
}

function bearerToken(req) {
  const header = req.headers.authorization || req.headers.Authorization || "";
  const match = header.match(/^Bearer\s+(.+)$/i);
  return match ? match[1].trim() : "";
}

async function supabaseFetch(path, token, options = {}) {
  const supabaseUrl = loadLocalEnv("SUPABASE_URL");
  const anonKey = loadLocalEnv("SUPABASE_ANON_KEY");

  if (!supabaseUrl || !anonKey) {
    throw new Error("Supabase no configurado en el servidor.");
  }

  return fetch(`${supabaseUrl.replace(/\/$/, "")}${path}`, {
    ...options,
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });
}

async function getAuthenticatedUser(token) {
  const response = await supabaseFetch("/auth/v1/user", token, { method: "GET" });
  if (!response.ok) return null;
  return response.json();
}

async function getOrCreateUsage(userId, token) {
  const select = "id,user_id,used_count,limit_count,is_premium,tutor_chat_used,tutor_chat_limit";
  const query = `/rest/v1/ai_usage?user_id=eq.${encodeURIComponent(userId)}&select=${select}&limit=1`;
  const selectResponse = await supabaseFetch(query, token, { method: "GET" });

  if (!selectResponse.ok) {
    throw new Error("No se pudo consultar el uso del Chat Tutor IA. Verifica las columnas tutor_chat_used y tutor_chat_limit.");
  }

  const rows = await selectResponse.json();
  if (rows[0]) return rows[0];

  const insertResponse = await supabaseFetch(`/rest/v1/ai_usage?select=${select}`, token, {
    method: "POST",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify({ user_id: userId })
  });

  if (!insertResponse.ok) {
    throw new Error("No se pudo inicializar el uso del Chat Tutor IA.");
  }

  const inserted = await insertResponse.json();
  return inserted[0];
}

async function incrementTutorUsage(usage, token) {
  if (usage.is_premium) return usage;

  const nextCount = Number(usage.tutor_chat_used || 0) + 1;
  const response = await supabaseFetch(`/rest/v1/ai_usage?id=eq.${encodeURIComponent(usage.id)}&select=tutor_chat_used,tutor_chat_limit,is_premium`, token, {
    method: "PATCH",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify({ tutor_chat_used: nextCount, updated_at: new Date().toISOString() })
  });

  if (!response.ok) {
    throw new Error("No se pudo actualizar el uso del Chat Tutor IA.");
  }

  const rows = await response.json();
  return rows[0] || { ...usage, tutor_chat_used: nextCount };
}

function remainingTutorUses(usage) {
  if (usage.is_premium) return null;
  return Math.max(0, Number(usage.tutor_chat_limit || 10) - Number(usage.tutor_chat_used || 0));
}

function cleanHistory(history) {
  if (!Array.isArray(history)) return [];
  return history.slice(-6).map((item) => ({
    role: item?.role === "assistant" ? "assistant" : "user",
    content: cleanText(item?.content, 700)
  })).filter((item) => item.content);
}

function cleanAcademicContext(value) {
  if (!value || typeof value !== "object") return null;
  const performance = value.academic_performance && typeof value.academic_performance === "object"
    ? {
        subject: cleanText(value.academic_performance.subject, 120),
        completed_challenges: Number(value.academic_performance.completed_challenges || 0),
        total_points: Number(value.academic_performance.total_points || 0),
        correct_answers: Number(value.academic_performance.correct_answers || 0),
        wrong_answers: Number(value.academic_performance.wrong_answers || 0),
        total_responses: Number(value.academic_performance.total_responses || 0),
        accuracy_rate: Number.isFinite(Number(value.academic_performance.accuracy_rate)) ? Number(value.academic_performance.accuracy_rate) : null,
        wrong_rate: Number.isFinite(Number(value.academic_performance.wrong_rate)) ? Number(value.academic_performance.wrong_rate) : null,
        streak: Number(value.academic_performance.streak || 0),
        last_activity_at: cleanText(value.academic_performance.last_activity_at, 40)
      }
    : null;

  return {
    subject: cleanText(value.subject, 120),
    exam_date: cleanText(value.exam_date, 30),
    topics: Array.isArray(value.topics) ? value.topics.map((topic) => cleanText(topic, 80)).filter(Boolean).slice(0, 12) : [],
    days_left: Number.isFinite(Number(value.days_left)) ? Number(value.days_left) : null,
    weak_topics: Array.isArray(value.weak_topics) ? value.weak_topics.map((topic) => cleanText(topic, 80)).filter(Boolean).slice(0, 6) : [],
    academic_performance: performance
  };
}

function systemPrompt() {
  return [
    "Sos el Tutor IA de NEXO para estudiantes ingresantes de Ciencias Economicas.",
    "Responde siempre en espanol claro, breve y didactico, con maximo 8 lineas.",
    "Actua como tutor universitario: explica, ordena ideas y propone pasos concretos.",
    "Tu alcance esta estrictamente limitado a temas academicos de Ciencias Economicas y preparacion universitaria.",
    "Solo podes responder consultas relacionadas con Administracion, Contabilidad, Economia, Finanzas, Marketing, Matematica, Estadistica, Derecho empresarial y laboral, Organizacion y gestion, Ciencias Economicas en general y tecnicas de estudio universitario.",
    "No respondas consultas sobre programacion, videojuegos, deportes, politica, farandula, tecnologia general, salud, temas personales ni cualquier tema no academico de Ciencias Economicas.",
    "Si la consulta esta fuera de alcance, no respondas el contenido ni abras conversacion sobre ese tema. Responde de forma amable: Estoy especializado en acompanarte en materias de Ciencias Economicas y preparacion universitaria. Puedo ayudarte con Administracion, Contabilidad, Economia, Finanzas, Marketing, Matematica, Estadistica y temas relacionados con tu carrera.",
    "Si el estudiante insiste con temas ajenos al alcance, volve a redirigirlo a Ciencias Economicas sin agregar informacion externa.",
    "No inventes respuestas fuera del ambito academico permitido.",
    "Si la consulta trata sobre organizacion de estudio, usa el proximo examen, dias restantes y temas seleccionados cuando existan.",
    "Puede usar porcentaje de aciertos, errores y desafios completados de la materia para orientar la respuesta.",
    "No afirmes debilidades por tema si no hay datos por tema.",
    "Si hay temas seleccionados para el examen pero no hay tracking por tema, deci: Como todavia no hay medicion por tema, te propongo distribuir el repaso entre los temas seleccionados.",
    "Si el rendimiento general de la materia es bajo, sugeri mas practica.",
    "Si faltan pocos dias para el examen, propone un plan corto y concreto.",
    "Cuando el estudiante pida generar un ejercicio, genera una sola pregunta de nivel universitario inicial, multiple choice, relacionada con la materia y temas del examen.",
    "Al generar el ejercicio mostra solo este formato: Pregunta: ... A) ... B) ... C) ... No muestres respuesta correcta ni explicacion en ese primer mensaje.",
    "Cuando el estudiante responda A, B o C a un ejercicio anterior, indica si es correcto o incorrecto, muestra la respuesta correcta y da una explicacion breve.",
    "No generes mas de una pregunta por respuesta.",
    "No menciones detalles tecnicos como Supabase, OpenAI, JSON, payload, APIs o bases de datos."
  ].join(" ");
}

async function usageResponse(req, res, token) {
  const user = await getAuthenticatedUser(token);
  if (!user?.id) {
    sendJson(res, 401, { error: "Sesion invalida o vencida. Inicia sesion nuevamente." });
    return;
  }

  const usage = await getOrCreateUsage(user.id, token);
  sendJson(res, 200, {
    remainingUses: remainingTutorUses(usage),
    isPremium: Boolean(usage.is_premium),
    used: Number(usage.tutor_chat_used || 0),
    limit: Number(usage.tutor_chat_limit || 10)
  });
}

module.exports = async function tutorChat(req, res) {
  if (!["GET", "POST"].includes(req.method)) {
    sendJson(res, 405, { error: "Metodo no permitido." });
    return;
  }

  const token = bearerToken(req);
  if (!token) {
    sendJson(res, 401, { error: "Tenes que iniciar sesion para usar el Chat Tutor IA." });
    return;
  }

  try {
    if (req.method === "GET") {
      await usageResponse(req, res, token);
      return;
    }

    const user = await getAuthenticatedUser(token);
    if (!user?.id) {
      sendJson(res, 401, { error: "Sesion invalida o vencida. Inicia sesion nuevamente." });
      return;
    }

    const usage = await getOrCreateUsage(user.id, token);
    if (!usage.is_premium && Number(usage.tutor_chat_used || 0) >= Number(usage.tutor_chat_limit || 10)) {
      sendJson(res, 200, {
        limitReached: true,
        message: FREE_TUTOR_LIMIT_MESSAGE,
        remainingUses: 0,
        isPremium: false
      });
      return;
    }

    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
    const message = cleanText(body.message, 900);
    const history = cleanHistory(body.history);
    const academicContext = cleanAcademicContext(body.academic_context);

    if (!message) {
      sendJson(res, 400, { error: "Escribi una consulta para el Tutor IA." });
      return;
    }

    const apiKey = loadLocalEnv("OPENAI_API_KEY");
    const model = loadLocalEnv("OPENAI_MODEL") || OPENAI_MODEL;
    if (!apiKey) {
      sendJson(res, 500, { error: "Falta configurar OPENAI_API_KEY en el servidor." });
      return;
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), OPENAI_TIMEOUT_MS);

    let response;
    try {
      response = await fetch("https://api.openai.com/v1/responses", {
        method: "POST",
        signal: controller.signal,
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model,
          max_output_tokens: 360,
          temperature: 0.45,
          input: [
            { role: "system", content: systemPrompt() },
            {
              role: "user",
              content: [
                `Contexto academico actual: ${JSON.stringify(academicContext)}`,
                `Historial reciente: ${JSON.stringify(history)}`,
                `Consulta del estudiante: ${message}`
              ].join("\n")
            }
          ]
        })
      });
    } finally {
      clearTimeout(timeout);
    }

    const data = await response.json();
    if (!response.ok) {
      sendJson(res, response.status, { error: "No se pudo responder con el Tutor IA." });
      return;
    }

    const answer = cleanText(responseText(data), 1600);
    if (!answer) {
      sendJson(res, 502, { error: "El Tutor IA no devolvio una respuesta." });
      return;
    }

    const updatedUsage = await incrementTutorUsage(usage, token);
    sendJson(res, 200, {
      answer,
      remainingUses: remainingTutorUses(updatedUsage),
      isPremium: Boolean(updatedUsage.is_premium)
    });
  } catch (error) {
    if (error?.name === "AbortError") {
      sendJson(res, 504, { error: "El Tutor IA no respondio a tiempo." });
      return;
    }
    sendJson(res, 500, { error: error?.message || "Error inesperado en el Chat Tutor IA." });
  }
};
