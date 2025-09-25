'use client'

import { Check } from 'lucide-react'
import StripeCheckoutButton from './StripeCheckoutButton'

interface PricingTier {
  name: string
  price: string
  priceId: string
  description: string
  features: string[]
  popular?: boolean
  buttonText?: string
}

interface PricingCardProps {
  tier: PricingTier
  className?: string
}

export default function PricingCard({ tier, className = '' }: PricingCardProps) {
  return (
    <div className={`
      relative flex flex-col h-full p-8 bg-white border border-gray-200 rounded-2xl shadow-sm
      ${tier.popular ? 'ring-2 ring-blue-500 scale-105' : 'hover:shadow-lg'}
      transition-all duration-300 ${className}
    `}>
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-full">
            Am beliebtesten
          </span>
        </div>
      )}

      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
        <div className="mt-4 flex items-baseline justify-center">
          <span className="text-5xl font-extrabold text-gray-900">{tier.price}</span>
          <span className="ml-1 text-xl font-semibold text-gray-500">/Monat</span>
        </div>
        <p className="mt-4 text-lg text-gray-500">{tier.description}</p>
      </div>

      <ul className="mt-8 space-y-4 flex-1">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0">
              <Check className="w-6 h-6 text-blue-500" />
            </div>
            <span className="ml-3 text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <StripeCheckoutButton
          priceId={tier.priceId}
          planName={tier.name}
          price={tier.price}
          variant={tier.popular ? 'primary' : 'secondary'}
          className="w-full"
        />
      </div>

      <p className="mt-4 text-xs text-center text-gray-500">
        30 Tage kostenlos testen • Jederzeit kündbar
      </p>
    </div>
  )
}