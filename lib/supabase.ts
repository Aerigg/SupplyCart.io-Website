import { createBrowserClient } from '@supabase/ssr'

let supabase: any = null

export function getSupabaseClient() {
  if (!supabase) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'
    
    supabase = createBrowserClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        storage: {
          getItem: (key: string) => {
            if (typeof window !== 'undefined') {
              // Use localStorage as primary storage
              const item = window.localStorage.getItem(key)
              if (item) return item
              
              // Also check sessionStorage as fallback
              return window.sessionStorage.getItem(key)
            }
            return null
          },
          setItem: (key: string, value: string) => {
            if (typeof window !== 'undefined') {
              // Store in both localStorage and sessionStorage
              window.localStorage.setItem(key, value)
              window.sessionStorage.setItem(key, value)
              
              // Try to sync with other domains via postMessage
              try {
                window.postMessage({
                  type: 'supabase-session-update',
                  key,
                  value
                }, '*')
              } catch (e) {
                console.log('PostMessage failed:', e)
              }
            }
          },
          removeItem: (key: string) => {
            if (typeof window !== 'undefined') {
              window.localStorage.removeItem(key)
              window.sessionStorage.removeItem(key)
              
              // Notify other domains of removal
              try {
                window.postMessage({
                  type: 'supabase-session-remove',
                  key
                }, '*')
              } catch (e) {
                console.log('PostMessage failed:', e)
              }
            }
          }
        }
      },
      cookieOptions: {
        domain: '.supplycart.io',
        maxAge: 100000000,
        path: '/',
        sameSite: 'lax',
        secure: true
      }
    })
  }
  return supabase
}

export { getSupabaseClient as supabase }