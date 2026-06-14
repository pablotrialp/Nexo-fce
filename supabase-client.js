const SUPABASE_URL = "https://pschsrmgdjjjfpfdqpau.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_IASjA8TkTWIB71BmXAm5aA_mWdHQyFI";

if (!window.supabase) {
  console.error("Supabase SDK no esta cargado. Revisa el script CDN en el HTML.");
} else if (SUPABASE_ANON_KEY.includes("REEMPLAZAR")) {
  console.error("Falta configurar SUPABASE_ANON_KEY en supabase-client.js.");
} else {
  window.nexoSupabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  });
}
