const { MercadoPagoConfig, Preference } = require("mercadopago");

const PREMIUM_PRICE_ARS = 1999;
const SUCCESS_URL = "https://www.nexoedu.com.ar/premium-success.html";
const FAILURE_URL = "https://www.nexoedu.com.ar/premium-failure.html";
const PENDING_URL = "https://www.nexoedu.com.ar/premium-pending.html";

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
