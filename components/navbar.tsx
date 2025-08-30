'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '@/lib/auth-context'
import { getSupabaseClient } from '@/lib/supabase'
import { LogOut, Settings, ExternalLink } from 'lucide-react'

export default function Navbar() {
  const { user, loading, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
  }

  const getInitials = (user: any) => {
    if (user?.user_metadata?.first_name && user?.user_metadata?.last_name) {
      return `${user.user_metadata.first_name[0]}${user.user_metadata.last_name[0]}`.toUpperCase()
    }
    if (user?.email) {
      return user.email.substring(0, 2).toUpperCase()
    }
    return 'U'
  }

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


  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/sc-logo.png"
                alt="SupplyCart.io Logo"
                width={150}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-gray-700 hover:text-primary-600 transition">
              Features
            </Link>
            <Link href="/#vorteile" className="text-gray-700 hover:text-primary-600 transition">
              Vorteile
            </Link>
            <Link href="/#preise" className="text-gray-700 hover:text-primary-600 transition">
              Preise
            </Link>
            
            {loading ? (
              <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
            ) : user ? (
              <>
                <button
                  onClick={() => handleAppRedirect()}
                  className="flex items-center space-x-1 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition"
                >
                  <span>Zu SupplyCart</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
                
                <div className="flex items-center space-x-4">
                  <a
                    href="/account"
                    className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition"
                  >
                    <Settings className="h-4 w-4" />
                    <span>Account</span>
                  </a>
                  
                  <button
                    onClick={() => {
                      console.log('Desktop Abmelden clicked')
                      handleSignOut()
                    }}
                    className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Abmelden</span>
                  </button>
                  
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {getInitials(user)}
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link 
                  href="/login" 
                  className="text-gray-700 hover:text-primary-600 transition"
                >
                  Anmelden
                </Link>
                <Link 
                  href="/register" 
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition"
                >
                  Registrieren
                </Link>
              </div>
            )}
          </div>
          
          {/* Mobile menu */}
          <div className="md:hidden">
            {!loading && user ? (
              <div className="flex items-center space-x-2">
                <a
                  href="/account"
                  className="text-gray-700 hover:text-primary-600 transition"
                >
                  <Settings className="h-4 w-4" />
                </a>
                
                <button
                  onClick={() => {
                    console.log('Mobile Abmelden clicked')
                    handleSignOut()
                  }}
                  className="text-gray-700 hover:text-primary-600 transition"
                >
                  <LogOut className="h-4 w-4" />
                </button>
                
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  {getInitials(user)}
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link 
                  href="/login" 
                  className="text-gray-700 hover:text-primary-600 transition text-sm"
                >
                  Login
                </Link>
                <Link 
                  href="/register" 
                  className="bg-primary-600 text-white px-3 py-1 rounded text-sm hover:bg-primary-700 transition"
                >
                  Registrieren
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}