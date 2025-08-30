'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '@/lib/auth-context'
import { getSupabaseClient } from '@/lib/supabase'
import { LogOut, Settings, ExternalLink } from 'lucide-react'

export default function Navbar() {
  const { user, loading, signOut } = useAuth()
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
  const mobileDropdownRef = useRef<HTMLDivElement>(null)

  const handleSignOut = async () => {
    try {
      console.log('Attempting to sign out...')
      const supabase = getSupabaseClient()
      
      // Clear all Supabase data
      await supabase.auth.signOut({ scope: 'global' })
      
      // Clear all local storage
      localStorage.clear()
      sessionStorage.clear()
      
      // Clear all cookies
      document.cookie.split(";").forEach((c) => {
        const eqPos = c.indexOf("=")
        const name = eqPos > -1 ? c.substr(0, eqPos) : c
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/"
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=" + window.location.hostname
      })
      
      console.log('Sign out successful, forcing hard reload...')
      window.location.href = window.location.href
    } catch (error) {
      console.error('Sign out failed:', error)
      // Force reload even if signout failed
      window.location.reload()
    }
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

  // Check for auth tokens in URL on page load (from app subdomain)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('token') && urlParams.get('refresh_token')) {
      console.log('Found auth tokens in URL, triggering auth sync...')
      // Force re-initialization of auth context
      window.location.reload()
    }
  }, [])

  // Close mobile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target as Node)) {
        setMobileDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])


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
              <div className="relative" ref={mobileDropdownRef}>
                <button
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {getInitials(user)}
                  </div>
                </button>
                
                {mobileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 border border-gray-200">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                      <div className="font-medium">
                        {user.user_metadata?.first_name} {user.user_metadata?.last_name}
                      </div>
                      <div className="text-gray-500 truncate" title={user.email}>
                        {user.email}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => {
                        setMobileDropdownOpen(false)
                        handleAppRedirect()
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Zu SupplyCart
                    </button>
                    
                    <a
                      href="/account"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setMobileDropdownOpen(false)}
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Account
                    </a>
                    
                    <button
                      onClick={() => {
                        console.log('Mobile Abmelden clicked')
                        handleSignOut()
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Abmelden
                    </button>
                  </div>
                )}
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