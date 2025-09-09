'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getSupabaseClient } from '@/lib/supabase'
import { Eye, EyeOff } from 'lucide-react'

export default function SetPasswordPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const router = useRouter()
  const supabase = getSupabaseClient()

  useEffect(() => {
    const checkUser = async () => {
      try {
        // Check for password reset token in URL
        const urlParams = new URLSearchParams(window.location.search)
        const hashParams = new URLSearchParams(window.location.hash.substring(1))
        
        const tokenHash = urlParams.get('token_hash') || hashParams.get('token_hash')
        const type = urlParams.get('type') || hashParams.get('type')
        const accessToken = hashParams.get('access_token')
        const refreshToken = hashParams.get('refresh_token')
        
        // Handle password reset token
        if ((tokenHash && type === 'recovery') || (accessToken && type === 'recovery')) {
          console.log('Processing password reset token...')
          
          if (accessToken && refreshToken) {
            // Set session from tokens
            const { data, error } = await supabase.auth.setSession({
              access_token: accessToken,
              refresh_token: refreshToken
            })
            
            if (error) {
              console.error('Error setting session from reset token:', error)
              setError('Ungültiger oder abgelaufener Link. Bitte fordern Sie einen neuen Link an.')
              return
            }
            
            console.log('Session established from reset token')
          } else if (tokenHash) {
            // Verify OTP token
            const { data, error } = await supabase.auth.verifyOtp({
              token_hash: tokenHash,
              type: 'recovery'
            })
            
            if (error) {
              console.error('Error verifying reset token:', error)
              setError('Ungültiger oder abgelaufener Link. Bitte fordern Sie einen neuen Link an.')
              return
            }
            
            console.log('Reset token verified')
          }
        }
        
        // Now check for session (either existing or just created from token)
        const { data: { session }, error: sessionError } = await supabase.auth.getSession()
        
        if (sessionError || !session?.user) {
          console.error('No session found')
          // Only redirect to login if we didn't get an error message
          if (!error) {
            router.push('/login')
          }
          return
        }

        setUser(session.user)

        // Get user profile
        const { data: profileData } = await supabase
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

        if (profileData) {
          setProfile(profileData)
        }

        // Check if password is already set
        if (session.user.user_metadata?.needs_password_setup === false) {
          // Password already set, redirect based on role
          if (profileData?.role === 'company_admin' || profileData?.user_roles?.can_access_management) {
            router.push('/account')
          } else {
            window.location.href = 'https://app.supplycart.io'
          }
        }

      } catch (err) {
        console.error('Error checking user:', err)
        router.push('/login')
      }
    }

    checkUser()
  }, [router, supabase])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwörter stimmen nicht überein')
      return
    }

    if (formData.password.length < 6) {
      setError('Passwort muss mindestens 6 Zeichen lang sein')
      return
    }

    setLoading(true)

    try {
      // Update user password
      const { error: updateError } = await supabase.auth.updateUser({
        password: formData.password,
        data: {
          needs_password_setup: false
        }
      })

      if (updateError) {
        console.error('Password update error:', updateError)
        setError('Fehler beim Setzen des Passworts: ' + updateError.message)
        setLoading(false)
        return
      }

      // CREATE PROFILE IMMEDIATELY AFTER PASSWORD IS SET!
      console.log('Password set successfully, now creating profile...')
      
      try {
        const response = await fetch('/api/auth/create-profile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        
        const result = await response.json()
        
        if (response.ok) {
          console.log('Profile created successfully:', result)
        } else {
          console.error('Profile creation failed:', result)
        }
      } catch (profileError) {
        console.error('Error calling create-profile API:', profileError)
        // Don't fail the whole process, just log it
      }

      setSuccess(true)

      // Redirect based on role after 2 seconds
      setTimeout(() => {
        if (profile?.role === 'company_admin' || profile?.user_roles?.can_access_management) {
          router.push('/account')
        } else {
          window.location.href = 'https://app.supplycart.io'
        }
      }, 2000)

    } catch (err) {
      console.error('Unexpected error:', err)
      setError('Ein unerwarteter Fehler ist aufgetreten.')
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Laden...</p>
        </div>
      </div>
    )
  }

  if (success) {
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
              Passwort erfolgreich gesetzt!
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Sie werden weitergeleitet...
            </p>
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
          </div>
          {profile && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
              <p className="text-sm text-green-800">
                Willkommen bei {profile.organizations?.name}!
              </p>
              <p className="text-xs text-green-600 mt-1">
                {profile.role === 'company_admin' || profile.user_roles?.can_access_management
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

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="/images/sc-logo.png"
          alt="SupplyCart"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Passwort festlegen
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Bitte legen Sie ein sicheres Passwort für Ihren Account fest
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {profile && (
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
              <div className="text-sm text-blue-800">
                <p><strong>E-Mail:</strong> {user.email}</p>
                <p><strong>Name:</strong> {profile.full_name || user.user_metadata?.full_name}</p>
                <p><strong>Organisation:</strong> {profile.organizations?.name}</p>
                <p><strong>Rolle:</strong> {
                  profile.user_roles?.display_name || 
                  profile.user_roles?.name || 
                  (profile.role === 'orderer' ? 'Besteller' : 
                   profile.role === 'company_admin' ? 'Verwalter' : 
                   profile.role)
                }</p>
              </div>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Neues Passwort
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full border border-gray-300 rounded-md px-3 py-2 pr-10 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Mindestens 6 Zeichen"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Passwort bestätigen
              </label>
              <div className="mt-1 relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="block w-full border border-gray-300 rounded-md px-3 py-2 pr-10 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Passwort wiederholen"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Passwort wird gesetzt...' : 'Passwort festlegen'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}