'use client'

class SessionSyncManager {
  private static instance: SessionSyncManager
  private syncFrame: HTMLIFrameElement | null = null
  private messageHandlers: Map<string, Function> = new Map()

  static getInstance(): SessionSyncManager {
    if (!SessionSyncManager.instance) {
      SessionSyncManager.instance = new SessionSyncManager()
    }
    return SessionSyncManager.instance
  }

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeSync()
      this.setupMessageListener()
    }
  }

  private initializeSync() {
    // Create hidden iframe to communicate with app domain
    this.syncFrame = document.createElement('iframe')
    this.syncFrame.style.display = 'none'
    this.syncFrame.src = 'https://app.supplycart.io/session-sync'
    document.body.appendChild(this.syncFrame)

    // Send our current session to app domain every 5 seconds
    setInterval(() => {
      this.sendSessionToApp()
    }, 5000)
  }

  private setupMessageListener() {
    window.addEventListener('message', (event) => {
      // Only accept messages from our app domain
      if (event.origin !== 'https://app.supplycart.io') return

      if (event.data.type === 'SESSION_UPDATE') {
        console.log('Received session update from app domain:', event.data.session)
        this.handleSessionUpdate(event.data.session)
      }
    })
  }

  private sendSessionToApp() {
    if (!this.syncFrame?.contentWindow) return

    const session = this.getCurrentSession()
    this.syncFrame.contentWindow.postMessage({
      type: 'SESSION_SYNC_FROM_MARKETING',
      session: session
    }, 'https://app.supplycart.io')
  }

  private getCurrentSession() {
    try {
      const authKey = 'supabase.auth.token'
      const authData = localStorage.getItem(authKey)
      return authData ? JSON.parse(authData) : null
    } catch {
      return null
    }
  }

  private handleSessionUpdate(session: any) {
    if (!session) {
      // Clear session
      localStorage.removeItem('supabase.auth.token')
      window.location.reload()
      return
    }

    try {
      localStorage.setItem('supabase.auth.token', JSON.stringify(session))
      window.location.reload()
    } catch (error) {
      console.error('Failed to update session:', error)
    }
  }

  // Public method to trigger immediate sync
  syncNow() {
    this.sendSessionToApp()
  }
}

export default SessionSyncManager