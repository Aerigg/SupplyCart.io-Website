'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { getSupabaseClient } from './supabase'

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  signOut: async () => {}
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const supabase = getSupabaseClient()
    
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }: any) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event: any, session: any) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Function to check session
    const checkSession = async () => {
      try {
        const { data: { session: currentSession } } = await supabase.auth.getSession()
        const currentSessionString = JSON.stringify(currentSession)
        const stateSessionString = JSON.stringify(session)
        
        if (currentSessionString !== stateSessionString) {
          console.log('Session changed from external source, updating...')
          setSession(currentSession)
          setUser(currentSession?.user ?? null)
        }
      } catch (error) {
        console.error('Error checking session:', error)
      }
    }

    // Check for session changes from other domains every 5 seconds
    const checkSessionInterval = setInterval(checkSession, 5000)

    // Also check when window gets focus (user switches back to tab)
    const handleWindowFocus = () => {
      checkSession()
    }

    window.addEventListener('focus', handleWindowFocus)
    
    return () => {
      subscription.unsubscribe()
      clearInterval(checkSessionInterval)
      window.removeEventListener('focus', handleWindowFocus)
    }
  }, [session])

  const signOut = async () => {
    const supabase = getSupabaseClient()
    await supabase.auth.signOut()
    // Manually clear state to ensure immediate update
    setSession(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, session, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}