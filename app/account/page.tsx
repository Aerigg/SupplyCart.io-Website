'use client'

import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { User, Building2 } from 'lucide-react'
import Navbar from '@/components/navbar'

export default function Account() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* User Info Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <User className="h-8 w-8 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Profil</h3>
                    <p className="text-sm text-gray-500">{user.email}</p>
                    {user.user_metadata?.company && (
                      <p className="text-sm text-gray-500 flex items-center mt-1">
                        <Building2 className="h-4 w-4 mr-1" />
                        {user.user_metadata.company}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Subscription Info Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Aktueller Plan</h3>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Free Tier
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Sie nutzen aktuell unser kostenloses Angebot.
                </p>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Schnellaktionen</h3>
                <div className="space-y-2">
                  <button className="w-full text-left px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded">
                    Upgrade auf Pro Plan
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
                    Profil bearbeiten
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-md p-6">
            <h2 className="text-lg font-medium text-blue-900 mb-2">
              Willkommen bei SupplyCart!
            </h2>
            <p className="text-blue-800">
              Sie haben erfolgreich Ihr kostenloses Konto erstellt. Erkunden Sie unsere Funktionen 
              oder upgraden Sie auf einen kostenpflichtigen Plan für erweiterte Features.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}