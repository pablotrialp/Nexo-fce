const FREE_DAILY_TEST_LIMIT = 10;
const PREMIUM_DAILY_TEST_LIMIT = 20;
const FREE_DAILY_TEST_LIMIT_MESSAGE = "Alcanzaste el limite diario gratuito del Test Diario. Activar Premium habilitara mas usos por dia.";
const PREMIUM_DAILY_TEST_LIMIT_MESSAGE = "Alcanzaste el limite diario del Test Diario. Vas a poder volver a usarlo manana.";

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

function todayDate() {
  return new Date().toISOString().slice(0, 10);
}

function dailyTestLimit(usage) {
  return usage.is_premium ? PREMIUM_DAILY_TEST_LIMIT : FREE_DAILY_TEST_LIMIT;
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
    throw new Error("No se pudo consultar el uso diario del Test Diario.");
  }

  const rows = await selectResponse.json();
  if (rows[0]) return rows[0];

  const insertResponse = await supabaseFetch(`/rest/v1/ai_usage?select=${select}`, token, {
    method: "POST",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify({ user_id: userId })
  });

  if (!insertResponse.ok) {
    throw new Error("No se pudo inicializar el uso diario del Test Diario.");
  }

  const inserted = await insertResponse.json();
  return inserted[0];
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
    throw new Error("No se pudo reiniciar el uso diario del Test Diario.");
  }

  const rows = await response.json();
  return rows[0] || normalizedUsage;
}

async function incrementDailyTestUsage(usage, token) {
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
    throw new Error("No se pudo actualizar el uso diario del Test Diario.");
  }

  const rows = await response.json();
  return rows[0] || { ...normalizedUsage, daily_test_count: nextCount, daily_test_last_reset_date: todayDate() };
}

function usagePayload(usage) {
  return {
    remainingUses: Math.max(0, dailyTestLimit(usage) - Number(usage.daily_test_count || 0)),
    isPremium: Boolean(usage.is_premium),
    used: Number(usage.daily_test_count || 0),
    limit: dailyTestLimit(usage)
  };
}

module.exports = async function dailyTestUsage(req, res) {
  if (!["GET", "POST"].includes(req.method)) {
    sendJson(res, 405, { error: "Metodo no permitido." });
    return;
  }

  const token = bearerToken(req);
  if (!token) {
    sendJson(res, 401, { error: "Tenes que iniciar sesion para usar el Test Diario." });
    return;
  }

  try {
    const user = await getAuthenticatedUser(token);
    if (!user?.id) {
      sendJson(res, 401, { error: "Sesion invalida o vencida. Inicia sesion nuevamente." });
      return;
    }

    const usage = await resetDailyTestUsageIfNeeded(await getOrCreateUsage(user.id, token), token);
    if (req.method === "GET") {
      sendJson(res, 200, usagePayload(usage));
      return;
    }

    if (Number(usage.daily_test_count || 0) >= dailyTestLimit(usage)) {
      sendJson(res, 200, {
        limitReached: true,
        message: usage.is_premium ? PREMIUM_DAILY_TEST_LIMIT_MESSAGE : FREE_DAILY_TEST_LIMIT_MESSAGE,
        ...usagePayload(usage)
      });
      return;
    }

    const updatedUsage = await incrementDailyTestUsage(usage, token);
    sendJson(res, 200, usagePayload(updatedUsage));
  } catch (error) {
    sendJson(res, 500, { error: error?.message || "Error inesperado al validar el Test Diario." });
  }
};
