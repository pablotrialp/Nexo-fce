const PREMIUM_APPROVED_STATUS = "approved";

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

function sendJson(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(body));
}

function cleanId(value) {
  const id = String(value || "").replace(/[^\w.-]/g, "").slice(0, 80);
  return ["null", "undefined"].includes(id.toLowerCase()) ? "" : id;
}

async function readRequestBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") return JSON.parse(req.body || "{}");

  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

async function getMercadoPagoPayment(paymentId) {
  const accessToken = loadLocalEnv("MERCADOPAGO_ACCESS_TOKEN");
  if (!accessToken) throw new Error("Falta configurar MERCADOPAGO_ACCESS_TOKEN.");

  const response = await fetch(`https://api.mercadopago.com/v1/payments/${encodeURIComponent(paymentId)}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(text || "No se pudo verificar el pago en Mercado Pago.");
  }

  return response.json();
}

async function activatePremium(userId) {
  const supabaseUrl = loadLocalEnv("SUPABASE_URL");
  const serviceRoleKey = loadLocalEnv("SUPABASE_SERVICE_ROLE_KEY");

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Falta configurar SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY.");
  }

  const response = await fetch(`${supabaseUrl.replace(/\/$/, "")}/rest/v1/ai_usage?on_conflict=user_id`, {
    method: "POST",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "resolution=merge-duplicates,return=representation"
    },
    body: JSON.stringify({
      user_id: userId,
      is_premium: true,
      updated_at: new Date().toISOString()
    })
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(text || "No se pudo activar Premium en Supabase.");
  }

  return response.json();
}

module.exports = async function confirmPremium(req, res) {
  if (req.method !== "POST") {
    sendJson(res, 405, { error: "Metodo no permitido." });
    return;
  }

  try {
    const body = await readRequestBody(req);
    const paymentId = cleanId(body.payment_id || body.collection_id);

    if (!paymentId) {
      sendJson(res, 400, { status: "missing_payment", message: "No pudimos verificar el pago." });
      return;
    }

    const payment = await getMercadoPagoPayment(paymentId);
    if (payment.status !== PREMIUM_APPROVED_STATUS) {
      sendJson(res, 200, {
        status: "not_approved",
        payment_status: payment.status || null,
        message: "El pago todavia no fue aprobado."
      });
      return;
    }

    const userId = String(payment.external_reference || "").trim();
    if (!userId) {
      sendJson(res, 400, { status: "missing_reference", message: "No pudimos verificar el usuario del pago." });
      return;
    }

    await activatePremium(userId);
    sendJson(res, 200, { status: "approved", message: "Premium activado correctamente." });
  } catch (error) {
    sendJson(res, 500, {
      status: "error",
      message: error?.message || "No pudimos activar Premium. Intenta nuevamente o contacta soporte."
    });
  }
};
