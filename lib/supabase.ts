import { createClient } from '@supabase/supabase-js'

let supabase: any = null

export function getSupabaseClient() {
  if (!supabase) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'
    
    supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        storage: {
          getItem: (key: string) => {
            if (typeof window !== 'undefined') {
              // Try to get from current domain first
              let value = window.localStorage.getItem(key)
              
              // If not found and we're on marketing site, try to sync from app subdomain
              if (!value && window.location.hostname === 'supplycart.io') {
                // Check if there's a token in URL params (shared from app)
                const urlParams = new URLSearchParams(window.location.search)
                if (urlParams.get('token')) {
                  const tokenData = {
                    access_token: urlParams.get('token'),
                    refresh_token: urlParams.get('refresh_token') || '',
                    expires_at: Date.now() + (60 * 60 * 1000), // 1 hour
                    token_type: 'bearer',
                    user: null
                  }
                  window.localStorage.setItem(key, JSON.stringify(tokenData))
                  // Clean URL
                  window.history.replaceState({}, document.title, window.location.pathname)
                  return JSON.stringify(tokenData)
                }
              }
              
              return value
            }
            return null
          },
          setItem: (key: string, value: string) => {
            if (typeof window !== 'undefined') {
              window.localStorage.setItem(key, value)
            }
          },
          removeItem: (key: string) => {
            if (typeof window !== 'undefined') {
              window.localStorage.removeItem(key)
            }
          }
        },
        storageKey: 'supabase.auth.token',
        cookieOptions: {
          domain: '.supplycart.io', // Share cookies across subdomains
          secure: true,
          sameSite: 'lax'
        }
      }
    })
  }
  return supabase
}

export { getSupabaseClient as supabase }