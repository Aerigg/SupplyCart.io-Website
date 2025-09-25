import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_dummy_key_for_build', {
  apiVersion: '2025-08-27.basil',
})

export async function POST(req: NextRequest) {
  try {
    const { priceId, email, organizationName, userEmail } = await req.json()

    if (!priceId || !email || !organizationName) {
      return NextResponse.json(
        { error: 'Missing required fields: priceId, email, organizationName' },
        { status: 400 }
      )
    }

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      {
        cookies: {
          get() { return undefined },
          set() {},
          remove() {},
        },
      }
    )

    // Erstelle Stripe Customer für Marketing Checkout
    const customer = await stripe.customers.create({
      email: userEmail || email,
      name: organizationName,
      metadata: {
        source: 'marketing_website',
        organization_name: organizationName,
      },
    })

    // Erstelle Checkout Session mit Marketing-spezifischen URLs
    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      payment_method_types: ['card', 'sepa_debit'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/account/setup?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/?canceled=true`,
      metadata: {
        source: 'marketing_website',
        organization_name: organizationName,
        contact_email: email,
      },
      subscription_data: {
        metadata: {
          source: 'marketing_website',
          organization_name: organizationName,
          contact_email: email,
        },
      },
      customer_update: {
        address: 'auto',
      },
      tax_id_collection: {
        enabled: true,
      },
      automatic_tax: {
        enabled: true,
      },
      // Sammle zusätzliche Informationen für Setup
      custom_fields: [
        {
          key: 'company_size',
          label: {
            type: 'custom',
            custom: 'Unternehmensgröße (Mitarbeiter)',
          },
          type: 'dropdown',
          dropdown: {
            options: [
              { label: '1-10 Mitarbeiter', value: '1-10' },
              { label: '11-50 Mitarbeiter', value: '11-50' },
              { label: '51-200 Mitarbeiter', value: '51-200' },
              { label: '200+ Mitarbeiter', value: '200+' },
            ],
          },
        },
      ],
    })

    // Speichere Marketing Lead in Supabase für Follow-up
    try {
      await supabase.from('marketing_leads').insert({
        email: email,
        organization_name: organizationName,
        stripe_customer_id: customer.id,
        stripe_checkout_session_id: session.id,
        status: 'checkout_created',
        created_at: new Date().toISOString(),
      }).select().single()
    } catch (error) {
      console.warn('Could not save marketing lead:', error)
      // Don't fail the checkout if lead tracking fails
    }

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
      customerId: customer.id
    })
  } catch (error) {
    console.error('Marketing checkout error:', error)
    return NextResponse.json(
      { error: 'Fehler beim Erstellen der Checkout Session' },
      { status: 500 }
    )
  }
}