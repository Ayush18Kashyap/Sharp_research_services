import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error(
    "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY. Copy .env.local.example to .env.local and fill them in."
  );
}

/**
 * Server-only client, authenticated with the service role key.
 *
 * The service role key bypasses row-level security, so this file must
 * NEVER be imported from a "use client" component or anything that ships
 * to the browser — only from API routes / server components. Neither env
 * var is prefixed with NEXT_PUBLIC_, so Next.js won't bundle it into
 * client-side JavaScript by default, but keep the import server-side too.
 */
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: { persistSession: false },
});
