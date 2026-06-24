const { MercadoPagoConfig, Preference } = require("mercadopago");

const PREMIUM_PRICE_ARS = 1999;
const SUCCESS_URL = "https://www.nexoedu.com.ar/premium-success.html";
const FAILURE_URL = "https://www.nexoedu.com.ar/premium-failure.html";
const PENDING_URL = "https://www.nexoedu.com.ar/premium-pending.html";
const NOTIFICATION_URL = "https://www.nexoedu.com.ar/api/mercadopago-webhook";

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

function bearerToken(req) {
  const header = req.headers.authorization || req.headers.Authorization || "";
  const match = header.match(/^Bearer\s+(.+)$/i);
  return match ? match[1].trim() : "";
}

async function getAuthenticatedUser(token) {
  const supabaseUrl = loadLocalEnv("SUPABASE_URL");
  const anonKey = loadLocalEnv("SUPABASE_ANON_KEY");

  if (!supabaseUrl || !anonKey) {
    throw new Error("Falta configurar SUPABASE_URL o SUPABASE_ANON_KEY.");
  }

  const response = await fetch(`${supabaseUrl.replace(/\/$/, "")}/auth/v1/user`, {
    method: "GET",
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${token}`
    }
  });

  if (!response.ok) return null;
  return response.json();
}

module.exports = async function createPreference(req, res) {
  if (req.method !== "POST") {
    sendJson(res, 405, { error: "Metodo no permitido." });
    return;
  }

  const accessToken = loadLocalEnv("MERCADOPAGO_ACCESS_TOKEN");
  if (!accessToken) {
    sendJson(res, 500, { error: "Falta configurar MERCADOPAGO_ACCESS_TOKEN." });
    return;
  }

  try {
    const token = bearerToken(req);
    if (!token) {
      sendJson(res, 401, { error: "Tenes que iniciar sesion para activar Premium." });
      return;
    }

    const user = await getAuthenticatedUser(token);
    if (!user?.id) {
      sendJson(res, 401, { error: "Sesion invalida o vencida. Inicia sesion nuevamente." });
      return;
    }

    const client = new MercadoPagoConfig({ accessToken });
    const preference = new Preference(client);
    const result = await preference.create({
      body: {
        items: [
          {
            title: "NEXO Premium",
            description: "Acceso Premium a NEXO",
            quantity: 1,
            unit_price: PREMIUM_PRICE_ARS,
            currency_id: "ARS"
          }
        ],
        external_reference: user.id,
        metadata: {
          user_id: user.id
        },
        notification_url: NOTIFICATION_URL,
        back_urls: {
          success: SUCCESS_URL,
          failure: FAILURE_URL,
          pending: PENDING_URL
        },
        auto_return: "approved"
      }
    });

    sendJson(res, 200, { init_point: result.init_point });
  } catch (error) {
    sendJson(res, 500, { error: error?.message || "No se pudo crear la preferencia de Mercado Pago." });
  }
};
