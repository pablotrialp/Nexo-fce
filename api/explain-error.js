const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-4.1-mini";
const OPENAI_TIMEOUT_MS = 35000;

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

module.exports = async function explainError(req, res) {
  if (req.method !== "POST") {
    sendJson(res, 405, { error: "Metodo no permitido." });
    return;
  }

  const apiKey = loadLocalEnv("OPENAI_API_KEY");
  const model = loadLocalEnv("OPENAI_MODEL") || OPENAI_MODEL;

  if (!apiKey) {
    sendJson(res, 500, { error: "Falta configurar OPENAI_API_KEY en el servidor." });
    return;
  }

  try {
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

    sendJson(res, 200, { explanation });
  } catch (error) {
    if (error?.name === "AbortError") {
      sendJson(res, 504, { error: "OpenAI no respondio a tiempo." });
      return;
    }
    sendJson(res, 500, { error: "Error inesperado al explicar el error." });
  }
};
