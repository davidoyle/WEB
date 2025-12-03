import { createClient } from '@supabase/supabase-js'

let supabaseClient

// Client-side Supabase instance — only uses public environment variables
export function getSupabaseClient() {
  if (supabaseClient) return supabaseClient

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase public environment variables are missing.')
  }

  supabaseClient = createClient(supabaseUrl, supabaseKey)
  return supabaseClient
}
