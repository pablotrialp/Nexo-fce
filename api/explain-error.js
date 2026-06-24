const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-4.1-mini";
const OPENAI_TIMEOUT_MS = 35000;
const FREE_DAILY_TEST_LIMIT = 10;
const PREMIUM_DAILY_TEST_LIMIT = 20;
const FREE_AI_LIMIT_MESSAGE = "Alcanzaste el limite diario gratuito de explicaciones IA. Activar Premium habilitara mas explicaciones por dia.";
const PREMIUM_AI_LIMIT_MESSAGE = "Alcanzaste el limite diario de explicaciones IA. Vas a poder volver a usarlas manana.";
const UPGRADE_URL = "https://www.mercadopago.com.ar/";

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

function requestId(req) {
  const header = req.headers["x-request-id"] || req.headers["X-Request-Id"];
  return cleanText(header, 120) || `explain-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function todayDate() {
  return new Date().toISOString().slice(0, 10);
}

function dailyTestLimit(usage) {
  return usage.is_premium ? PREMIUM_DAILY_TEST_LIMIT : FREE_DAILY_TEST_LIMIT;
}

function normalizeDailyTestUsage(usage) {
  const today = todayDate();
  const storedDate = String(usage.daily_test_last_reset_date || "");
  if (storedDate !== today) {
    return { ...usage, daily_test_count: 0, daily_test_last_reset_date: today };
  }
  return {
    ...usage,
    daily_test_count: Number(usage.daily_test_count || 0),
    daily_test_last_reset_date: today
  };
}

function remainingUses(usage) {
  const normalizedUsage = normalizeDailyTestUsage(usage);
  return Math.max(0, dailyTestLimit(normalizedUsage) - Number(normalizedUsage.daily_test_count || 0));
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
  const select = "id,user_id,is_premium,daily_test_count,daily_test_last_reset_date";
  const query = `/rest/v1/ai_usage?user_id=eq.${encodeURIComponent(userId)}&select=${select}&limit=1`;
  const selectResponse = await supabaseFetch(query, token, { method: "GET" });

  if (!selectResponse.ok) {
    throw new Error("No se pudo consultar el uso diario de explicaciones IA.");
  }

  const rows = await selectResponse.json();
  if (rows[0]) return rows[0];

  const insertResponse = await supabaseFetch(`/rest/v1/ai_usage?select=${select}`, token, {
    method: "POST",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify({ user_id: userId })
  });

  if (!insertResponse.ok) {
    throw new Error("No se pudo inicializar el uso diario de explicaciones IA.");
  }

  const inserted = await insertResponse.json();
  return inserted[0];
}

async function resetDailyTestUsageIfNeeded(usage, token) {
  const normalizedUsage = normalizeDailyTestUsage(usage);
  if (
    Number(normalizedUsage.daily_test_count || 0) === Number(usage.daily_test_count || 0) &&
    normalizedUsage.daily_test_last_reset_date === usage.daily_test_last_reset_date
  ) {
    return normalizedUsage;
  }

  const response = await supabaseFetch(`/rest/v1/ai_usage?id=eq.${encodeURIComponent(usage.id)}&select=id,daily_test_count,daily_test_last_reset_date,is_premium`, token, {
    method: "PATCH",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify({
      daily_test_count: 0,
      daily_test_last_reset_date: todayDate(),
      updated_at: new Date().toISOString()
    })
  });

  if (!response.ok) {
    throw new Error("No se pudo reiniciar el uso diario de explicaciones IA.");
  }

  const rows = await response.json();
  return rows[0] || normalizedUsage;
}

async function incrementUsage(usage, token) {
  const normalizedUsage = normalizeDailyTestUsage(usage);
  const nextCount = Number(normalizedUsage.daily_test_count || 0) + 1;
  const response = await supabaseFetch(`/rest/v1/ai_usage?id=eq.${encodeURIComponent(usage.id)}&select=daily_test_count,daily_test_last_reset_date,is_premium`, token, {
    method: "PATCH",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify({
      daily_test_count: nextCount,
      daily_test_last_reset_date: todayDate(),
      updated_at: new Date().toISOString()
    })
  });

  if (!response.ok) {
    throw new Error("No se pudo actualizar el uso diario de explicaciones IA.");
  }

  const rows = await response.json();
  return rows[0] || { ...normalizedUsage, daily_test_count: nextCount, daily_test_last_reset_date: todayDate() };
}

module.exports = async function explainError(req, res) {
  if (req.method !== "POST") {
    sendJson(res, 405, { error: "Metodo no permitido." });
    return;
  }

  const token = bearerToken(req);
  const traceId = requestId(req);

  if (!token) {
    sendJson(res, 401, { error: "Tenes que iniciar sesion para usar el Tutor IA." });
    return;
  }

  try {
    const user = await getAuthenticatedUser(token);
    if (!user?.id) {
      sendJson(res, 401, { error: "Sesion invalida o vencida. Inicia sesion nuevamente." });
      return;
    }

    const usage = await resetDailyTestUsageIfNeeded(await getOrCreateUsage(user.id, token), token);
    const countBefore = Number(usage.daily_test_count || 0);
    console.log("[USAGE_STATUS]", {
      request_id: traceId,
      endpoint: "/api/explain-error",
      action: "read_before_explanation",
      user_id: user.id,
      before: countBefore,
      after: countBefore
    });

    if (Number(usage.daily_test_count || 0) >= dailyTestLimit(usage)) {
      console.log("[USAGE_STATUS]", {
        request_id: traceId,
        endpoint: "/api/explain-error",
        action: "limit_reached",
        user_id: user.id,
        before: countBefore,
        after: countBefore,
        limit_reached: true
      });
      sendJson(res, 200, {
        limitReached: true,
        message: usage.is_premium ? PREMIUM_AI_LIMIT_MESSAGE : FREE_AI_LIMIT_MESSAGE,
        upgradeUrl: UPGRADE_URL,
        remainingUses: 0,
        isPremium: Boolean(usage.is_premium)
      });
      return;
    }

    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
    const subject = cleanText(body.subject, 120);
    const question = cleanText(body.question_text || body.question, 700);
    const selectedAnswer = cleanText(body.selected_answer_text || body.selectedAnswer, 300);
    const correctAnswer = cleanText(body.correct_answer_text || body.correctAnswer, 300);
    const officialExplanation = cleanText(body.official_explanation || body.officialExplanation, 700);

    if (!subject || !question || !selectedAnswer || !correctAnswer || !officialExplanation) {
      sendJson(res, 400, { error: "Faltan datos para explicar el error." });
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
          max_output_tokens: 140,
          input: [
            {
              role: "system",
              content: "Sos tutor academico FCE. Explica directo, sin introducciones largas. Usa solo la explicacion oficial. Maximo 80 palabras."
            },
            {
              role: "user",
              content: [
                `Materia: ${subject}`,
                `Pregunta: ${question}`,
                `Elegida: ${selectedAnswer}`,
                `Correcta: ${correctAnswer}`,
                `Base oficial: ${officialExplanation}`,
                "Explica por que la elegida esta mal y como reconocer la correcta."
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
      sendJson(res, response.status, { error: "No se pudo generar la explicacion con IA." });
      return;
    }

    const explanation = cleanText(responseText(data), 1200);
    if (!explanation) {
      sendJson(res, 502, { error: "La IA no devolvio una explicacion." });
      return;
    }

    const updatedUsage = await incrementUsage(usage, token);
    const countAfter = Number(updatedUsage.daily_test_count || 0);
    console.log("[USAGE_INCREMENT]", {
      request_id: traceId,
      endpoint: "/api/explain-error",
      action: "generated_explanation",
      user_id: user.id,
      before: countBefore,
      after: countAfter
    });
    sendJson(res, 200, {
      explanation,
      remainingUses: remainingUses(updatedUsage),
      isPremium: Boolean(updatedUsage.is_premium),
      requestId: traceId
    });
  } catch (error) {
    if (error?.name === "AbortError") {
      sendJson(res, 504, { error: "OpenAI no respondio a tiempo." });
      return;
    }
    sendJson(res, 500, { error: error?.message || "Error inesperado al explicar el error." });
  }
};
