import { createClient } from '@supabase/supabase-js'

let supabase: any = null

export function getSupabaseClient() {
  if (!supabase) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'
    
    supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        storageKey: 'supabase.auth.token',
        cookieOptions: {
          domain: '.supplycart.io', // Share cookies across ALL subdomains
          maxAge: 100000000, // Very far future expiration
          path: '/',
          sameSite: 'lax',
          secure: true
        }
      }
    })
  }
  return supabase
}

export { getSupabaseClient as supabase }