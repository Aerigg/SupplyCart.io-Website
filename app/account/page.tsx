'use client'

import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { User, Building2, ExternalLink, Settings, ArrowRight } from 'lucide-react'
import Navbar from '@/components/navbar'
import { getSupabaseClient } from '@/lib/supabase'

export default function Account() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [isNewUser, setIsNewUser] = useState(true) // Später aus DB oder user_metadata holen

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
    
    // Simuliere Check ob User schon Setup gemacht hat
    // In Realität würdest du das aus der DB oder user_metadata holen
    if (user?.user_metadata?.app_setup_completed) {
      setIsNewUser(false)
    }
  }, [user, loading, router])

  const getAppUrlWithAuth = async (path: string = '') => {
    if (!user) return 'https://app.supplycart.io'
    
    try {
      const supabase = getSupabaseClient()
      const { data: { session } } = await supabase.auth.getSession()
      
      if (session?.access_token) {
        const baseUrl = 'https://app.supplycart.io'
        const url = new URL(path ? `${baseUrl}${path}` : baseUrl)
        url.searchParams.set('token', session.access_token)
        url.searchParams.set('refresh_token', session.refresh_token || '')
        return url.toString()
      }
    } catch (error) {
      console.error('Error getting session for app URL:', error)
    }
    
    return 'https://app.supplycart.io'
  }

  const handleAppRedirect = async (path: string = '') => {
    const url = await getAppUrlWithAuth(path)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Laden...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto pt-20 py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          
          {isNewUser ? (
            // Neuer User - Setup Wizard
            <>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  Willkommen bei SupplyCart! 🎉
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Lassen Sie uns gemeinsam Ihre Beschaffungsprozesse einrichten. 
                  Klicken Sie auf den Button unten, um den Setup-Wizard zu starten.
                </p>
                <button 
                  onClick={() => setIsNewUser(false)}
                  className="mt-4 text-sm text-blue-600 hover:text-blue-500"
                >
                  Demo: Setup bereits abgeschlossen
                </button>
              </div>

              {/* Setup Card */}
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Settings className="h-8 w-8 text-primary-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Setup-Wizard starten
                      </h2>
                      <p className="text-gray-600">
                        In wenigen Schritten zu Ihrer persönlichen Beschaffungsplattform
                      </p>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 text-sm font-semibold">1</span>
                        </div>
                        <span className="text-gray-700">Mitarbeiter einladen</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 text-sm font-semibold">2</span>
                        </div>
                        <span className="text-gray-700">Grundeinstellungen festlegen</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 text-sm font-semibold">3</span>
                        </div>
                        <span className="text-gray-700">Erste Lieferanten und Artikel anlegen</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleAppRedirect('/setup')}
                      className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition font-semibold text-center flex items-center justify-center space-x-2"
                    >
                      <span>Setup-Wizard starten</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>

                    <p className="text-center text-sm text-gray-500 mt-4">
                      Der Setup dauert nur 5-10 Minuten
                    </p>
                  </div>
                </div>
              </div>

              {/* User Info */}
              <div className="mt-8 max-w-2xl mx-auto">
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <User className="h-8 w-8 text-gray-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Ihr Profil</h3>
                      <p className="text-sm text-gray-500">{user.email}</p>
                      {user.user_metadata?.company && (
                        <p className="text-sm text-gray-500 flex items-center mt-1">
                          <Building2 className="h-4 w-4 mr-1" />
                          {user.user_metadata.company}
                        </p>
                      )}
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-2">
                        Free Tier
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            // Bestehender User
            <>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  Willkommen zurück!
                </h1>
                <p className="text-lg text-gray-600">
                  Ihr SupplyCart System ist eingerichtet und bereit für Sie.
                </p>
                <button 
                  onClick={() => setIsNewUser(true)}
                  className="mt-4 text-sm text-blue-600 hover:text-blue-500"
                >
                  Demo: Zurück zum Setup-Wizard
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* App Access Card */}
                <div className="lg:col-span-2 bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          Zu SupplyCart wechseln
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Öffnen Sie Ihre Beschaffungsplattform und verwalten Sie Bestellungen, 
                          Lagerbestände und Ihr Team.
                        </p>
                        <button
                          onClick={() => handleAppRedirect()}
                          className="inline-flex items-center bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition font-semibold space-x-2"
                        >
                          <span>SupplyCart öffnen</span>
                          <ExternalLink className="h-5 w-5" />
                        </button>
                      </div>
                      <div className="hidden md:block">
                        <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center">
                          <ExternalLink className="h-12 w-12 text-primary-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* User Info Card */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-6">
                    <div className="text-center">
                      <div className="flex-shrink-0 mx-auto mb-4">
                        <User className="h-12 w-12 text-gray-400 mx-auto" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Ihr Profil</h3>
                      <p className="text-sm text-gray-500 mb-1">{user.email}</p>
                      {user.user_metadata?.company && (
                        <p className="text-sm text-gray-500 flex items-center justify-center mt-1">
                          <Building2 className="h-4 w-4 mr-1" />
                          {user.user_metadata.company}
                        </p>
                      )}
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-3">
                        Free Tier
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions Card */}
                <div className="md:col-span-2 lg:col-span-3 bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Schnellaktionen</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <button className="text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                        <div className="text-blue-600 font-medium">Upgrade auf Pro Plan</div>
                        <div className="text-sm text-gray-500 mt-1">Erweiterte Features freischalten</div>
                      </button>
                      <button className="text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                        <div className="text-gray-700 font-medium">Profil bearbeiten</div>
                        <div className="text-sm text-gray-500 mt-1">Persönliche Daten anpassen</div>
                      </button>
                      <button
                        onClick={() => handleAppRedirect('/help')}
                        className="text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition w-full"
                      >
                        <div className="text-gray-700 font-medium">Hilfe & Support</div>
                        <div className="text-sm text-gray-500 mt-1">Dokumentation und Support</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

        </div>
      </main>
    </div>
  )
}