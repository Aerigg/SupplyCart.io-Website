'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getSupabaseClient } from '@/lib/supabase'

export default function SetupAccountPage() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [profile, setProfile] = useState<any>(null)
  const router = useRouter()
  const supabase = getSupabaseClient()

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Check for both URL search params AND fragment params (hash)
        const urlParams = new URLSearchParams(window.location.search)
        const hashParams = new URLSearchParams(window.location.hash.substring(1))
        
        const tokenHash = urlParams.get('token_hash') || hashParams.get('token_hash')
        const type = urlParams.get('type') || hashParams.get('type') 
        const accessToken = hashParams.get('access_token')
        
        // If we have access token in fragment (from invite link), process it first
        if (accessToken && hashParams.get('type') === 'invite') {
          console.log('Processing Supabase invite confirmation with access token...')
          
          // Exchange the tokens for a session
          const { data, error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: hashParams.get('refresh_token') || ''
          })
          
          if (error) {
            console.error('Error setting session:', error)
            setError('Fehler beim Verarbeiten der Einladung.')
            setLoading(false)
            return
          }
          
          console.log('Session established from invite token')
        }
        
        // If this looks like a Supabase invite confirmation, let Supabase handle it
        if (tokenHash && type === 'invite') {
          console.log('Processing Supabase invite confirmation with token hash...')
        }
        
        // Get the current session (should exist if we came from callback)
        const { data: { session }, error: sessionError } = await supabase.auth.getSession()
        
        if (sessionError || !session?.user) {
          console.error('Session error:', sessionError)
          setError('Keine gültige Session gefunden. Bitte versuchen Sie es erneut.')
          setLoading(false)
          return
        }

        // Check if this is an invited user who needs to set password
        // Invited users have user_metadata.invited_at but no password set
        const isInvitedUser = session.user.user_metadata?.invited_at || session.user.app_metadata?.provider === 'email'
        const needsPasswordSetup = session.user.user_metadata?.needs_password_setup !== false
        
        if (isInvitedUser && needsPasswordSetup) {
          // Redirect to set-password page
          router.push('/auth/set-password')
          return
        }

        // Get user profile from database
        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select(`
            *,
            user_roles!fk_profiles_user_role_id(
              name,
              can_access_management
            ),
            organizations(
              name,
              slug
            )
          `)
          .eq('id', session.user.id)
          .single()

        if (profileError) {
          console.error('Profile error:', profileError)
          setError('Fehler beim Laden des Profils.')
          setLoading(false)
          return
        }

        setProfile(profileData)
        setLoading(false)

        // Wait a moment for UI feedback, then redirect based on role
        setTimeout(() => {
          if (profileData.role === 'company_admin' || profileData.user_roles?.can_access_management) {
            // Company admin stays on supplycart.io for account management
            router.push('/account')
          } else {
            // Orderer gets redirected to the app
            window.location.href = 'https://app.supplycart.io'
          }
        }, 2000)

      } catch (err) {
        console.error('Unexpected error:', err)
        setError('Ein unerwarteter Fehler ist aufgetreten.')
        setLoading(false)
      }
    }

    handleAuthCallback()
  }, [router, supabase])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <img
              className="mx-auto h-12 w-auto"
              src="/images/sc-logo.png"
              alt="SupplyCart"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Konto wird eingerichtet...
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Bitte warten Sie einen Moment, während wir Ihr Konto einrichten.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
          </div>

          {profile && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
              <p className="text-sm text-green-800">
                Willkommen, {profile.full_name}! 
              </p>
              <p className="text-xs text-green-600 mt-1">
                {profile.role === 'company_admin' 
                  ? 'Sie werden zu Ihrem Account-Dashboard weitergeleitet...' 
                  : 'Sie werden zur SupplyCart-App weitergeleitet...'
                }
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <img
              className="mx-auto h-12 w-auto"
              src="/images/sc-logo.png"
              alt="SupplyCart"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Fehler beim Einrichten
            </h2>
            <p className="mt-2 text-sm text-red-600">
              {error}
            </p>
            
            <div className="mt-6">
              <button
                onClick={() => router.push('/login')}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Zur Anmeldung
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}