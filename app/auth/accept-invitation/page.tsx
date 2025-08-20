'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getSupabaseClient } from '@/lib/supabase'
import { Eye, EyeOff } from 'lucide-react'

export default function AcceptInvitationPage() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [invitation, setInvitation] = useState<any>(null)
  const [step, setStep] = useState<'loading' | 'set-password' | 'completing'>('loading')
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const router = useRouter()
  const supabase = getSupabaseClient()

  useEffect(() => {
    const validateInvitation = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search)
        const token = urlParams.get('token')

        if (!token) {
          setError('Ungültiger Einladungslink.')
          setLoading(false)
          return
        }

        // Validate invitation token
        const { data: invitationData, error: invitationError } = await supabase
          .from('organization_invitations')
          .select(`
            *,
            organizations(name, slug),
            invited_by:profiles!organization_invitations_invited_by_fkey(full_name)
          `)
          .eq('invitation_token', token)
          .eq('status', 'pending')
          .gt('expires_at', new Date().toISOString())
          .single()

        if (invitationError || !invitationData) {
          console.error('Invitation validation error:', invitationError)
          setError('Einladungslink ist ungültig oder abgelaufen.')
          setLoading(false)
          return
        }

        setInvitation(invitationData)
        setStep('set-password')
        setLoading(false)

      } catch (err) {
        console.error('Unexpected error:', err)
        setError('Ein unerwarteter Fehler ist aufgetreten.')
        setLoading(false)
      }
    }

    validateInvitation()
  }, [supabase])

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

    setStep('completing')

    try {
      // Create user account
      const { data: signupData, error: signupError } = await supabase.auth.signUp({
        email: invitation.email,
        password: formData.password,
        options: {
          data: {
            full_name: invitation.full_name || invitation.email.split('@')[0],
            organization_id: invitation.organization_id,
            role: invitation.role === 'besteller' ? 'orderer' : 'company_admin',
            invitation_accepted: true
          }
        }
      })

      if (signupError) {
        console.error('Signup error:', signupError)
        setError('Fehler beim Erstellen des Kontos: ' + signupError.message)
        setStep('set-password')
        return
      }

      // Mark invitation as accepted
      const { error: updateError } = await supabase
        .from('organization_invitations')
        .update({
          status: 'accepted',
          accepted_by: signupData.user?.id,
          accepted_at: new Date().toISOString()
        })
        .eq('id', invitation.id)

      if (updateError) {
        console.error('Failed to update invitation status:', updateError)
      }

      // Sign in the user immediately
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: invitation.email,
        password: formData.password
      })

      if (signInError) {
        console.error('Sign in error:', signInError)
        router.push('/login?message=account_created')
        return
      }

      // Redirect based on role
      setTimeout(() => {
        if (invitation.role === 'besteller') {
          // Orderer goes to app
          window.location.href = 'https://app.supplycart.io'
        } else {
          // Admin stays on marketing site
          router.push('/account')
        }
      }, 1500)

    } catch (err) {
      console.error('Unexpected error:', err)
      setError('Ein unerwarteter Fehler ist aufgetreten.')
      setStep('set-password')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (loading || step === 'loading') {
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
              Einladung wird überprüft...
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
          </div>
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
              Fehler bei der Einladung
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

  if (step === 'completing') {
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
              Konto wird erstellt...
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Willkommen bei {invitation.organizations?.name}!
            </p>
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
          </div>
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
            <p className="text-sm text-green-800">
              {invitation.role === 'besteller' 
                ? 'Sie werden zur SupplyCart-App weitergeleitet...' 
                : 'Sie werden zu Ihrem Account-Dashboard weitergeleitet...'
              }
            </p>
          </div>
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
          Einladung annehmen
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Sie wurden zu {invitation.organizations?.name} eingeladen
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
            <div className="text-sm text-blue-800">
              <p><strong>E-Mail:</strong> {invitation.email}</p>
              <p><strong>Rolle:</strong> {invitation.role === 'besteller' ? 'Besteller' : 'Verwalter'}</p>
              <p><strong>Eingeladen von:</strong> {invitation.invited_by?.full_name || 'System'}</p>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Passwort festlegen
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
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Konto erstellen und beitreten
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}