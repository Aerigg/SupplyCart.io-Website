'use client'

import { useState } from 'react'
import { CreditCard, Loader2 } from 'lucide-react'

interface StripeCheckoutButtonProps {
  priceId: string
  planName: string
  price: string
  className?: string
  variant?: 'primary' | 'secondary'
}

export default function StripeCheckoutButton({
  priceId,
  planName,
  price,
  className = '',
  variant = 'primary'
}: StripeCheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    organizationName: '',
    userEmail: ''
  })

  const handleCheckout = async () => {
    if (!formData.email || !formData.organizationName) {
      setShowForm(true)
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/stripe/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
          email: formData.email,
          organizationName: formData.organizationName,
          userEmail: formData.userEmail || formData.email
        }),
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error(data.error || 'Checkout-Session konnte nicht erstellt werden')
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.')
      setIsLoading(false)
    }
  }

  const baseClasses = `
    inline-flex items-center justify-center px-6 py-3 border border-transparent
    text-base font-medium rounded-lg transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2 min-w-[200px]
    disabled:opacity-50 disabled:cursor-not-allowed
  `

  const variantClasses = {
    primary: 'text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'text-blue-600 bg-blue-50 hover:bg-blue-100 border-blue-200 focus:ring-blue-500'
  }

  if (showForm) {
    return (
      <div className="space-y-4 p-6 bg-gray-50 rounded-lg border">
        <h3 className="font-semibold text-lg text-gray-900">
          {planName} - {price} bestellen
        </h3>

        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-Mail-Adresse *
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="ihre@email.de"
            />
          </div>

          <div>
            <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700 mb-1">
              Firmenname *
            </label>
            <input
              type="text"
              id="organizationName"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.organizationName}
              onChange={(e) => setFormData({...formData, organizationName: e.target.value})}
              placeholder="Ihre Firma GmbH"
            />
          </div>

          <div>
            <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700 mb-1">
              Admin-E-Mail (optional)
            </label>
            <input
              type="email"
              id="userEmail"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.userEmail}
              onChange={(e) => setFormData({...formData, userEmail: e.target.value})}
              placeholder="admin@ihre-firma.de"
            />
            <p className="text-xs text-gray-500 mt-1">
              Falls abweichend von der Hauptkontakt-E-Mail
            </p>
          </div>
        </div>

        <div className="flex space-x-3 pt-4">
          <button
            onClick={handleCheckout}
            disabled={isLoading || !formData.email || !formData.organizationName}
            className={`${baseClasses} ${variantClasses.primary} ${className}`}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Wird geladen...
              </>
            ) : (
              <>
                <CreditCard className="w-5 h-5 mr-2" />
                Jetzt bestellen
              </>
            )}
          </button>

          <button
            onClick={() => setShowForm(false)}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Abbrechen
          </button>
        </div>

        <p className="text-xs text-gray-500">
          Sie werden zu Stripe weitergeleitet, um die Zahlung sicher abzuschließen.
          Nach dem Kauf erhalten Sie eine E-Mail mit den Zugangs­daten.
        </p>
      </div>
    )
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={isLoading}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
          Wird geladen...
        </>
      ) : (
        <>
          <CreditCard className="w-5 h-5 mr-2" />
          {planName} bestellen
        </>
      )}
    </button>
  )
}