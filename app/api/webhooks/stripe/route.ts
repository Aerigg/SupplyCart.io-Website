import { headers } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_dummy_key_for_build', {
  apiVersion: '2025-08-27.basil',
})

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || 'whsec_dummy_for_build'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const headersList = await headers()
  const sig = headersList.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret)
  } catch (err: any) {
    console.error('Marketing webhook signature verification failed:', err.message)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
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

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session, supabase)
        break

      case 'customer.subscription.created':
      case 'customer.subscription.updated':
        await handleSubscriptionUpdate(event.data.object as Stripe.Subscription, supabase)
        break

      case 'customer.subscription.deleted':
        await handleSubscriptionCancellation(event.data.object as Stripe.Subscription, supabase)
        break

      case 'invoice.payment_succeeded':
        await handlePaymentSucceeded(event.data.object as Stripe.Invoice, supabase)
        break

      case 'invoice.payment_failed':
        await handlePaymentFailed(event.data.object as Stripe.Invoice, supabase)
        break

      default:
        console.log(`Marketing webhook - Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Marketing webhook processing failed:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session, supabase: any) {
  console.log('Marketing checkout completed:', session.id)

  const customerId = session.customer as string
  const subscriptionId = session.subscription as string
  const organizationName = session.metadata?.organization_name
  const contactEmail = session.metadata?.contact_email

  // Update marketing lead
  await supabase
    .from('marketing_leads')
    .update({
      status: 'payment_completed',
      stripe_subscription_id: subscriptionId,
      updated_at: new Date().toISOString(),
    })
    .eq('stripe_checkout_session_id', session.id)

  // Create organization setup record for later processing
  try {
    await supabase.from('organization_setups').insert({
      stripe_customer_id: customerId,
      stripe_subscription_id: subscriptionId,
      organization_name: organizationName,
      contact_email: contactEmail,
      setup_status: 'payment_completed',
      source: 'marketing_website',
      custom_fields: session.custom_fields || [],
      created_at: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Failed to create organization setup record:', error)
  }

  console.log(`Marketing checkout completed for ${organizationName} (${contactEmail})`)
}

async function handleSubscriptionUpdate(subscription: Stripe.Subscription, supabase: any) {
  const customerId = subscription.customer as string
  const subscriptionId = subscription.id
  const status = subscription.status
  const currentPeriodEnd = new Date((subscription as any).current_period_end * 1000)

  // Update organization setup if it exists
  await supabase
    .from('organization_setups')
    .update({
      subscription_status: mapStripeStatusToOurStatus(status),
      subscription_period_end: currentPeriodEnd.toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq('stripe_subscription_id', subscriptionId)

  // If this subscription becomes active, trigger setup process
  if (status === 'active') {
    await triggerOrganizationSetup(subscriptionId, supabase)
  }
}

async function handleSubscriptionCancellation(subscription: Stripe.Subscription, supabase: any) {
  const subscriptionId = subscription.id
  const cancelledAt = new Date()

  await supabase
    .from('organization_setups')
    .update({
      subscription_status: 'cancelled',
      cancelled_at: cancelledAt.toISOString(),
      updated_at: cancelledAt.toISOString(),
    })
    .eq('stripe_subscription_id', subscriptionId)
}

async function handlePaymentSucceeded(invoice: Stripe.Invoice, supabase: any) {
  const subscriptionId = (invoice as any).subscription as string

  if (subscriptionId) {
    await supabase
      .from('organization_setups')
      .update({
        subscription_status: 'active',
        updated_at: new Date().toISOString(),
      })
      .eq('stripe_subscription_id', subscriptionId)

    // Trigger setup process for first payment
    if (invoice.billing_reason === 'subscription_create') {
      await triggerOrganizationSetup(subscriptionId, supabase)
    }
  }
}

async function handlePaymentFailed(invoice: Stripe.Invoice, supabase: any) {
  const subscriptionId = (invoice as any).subscription as string

  if (subscriptionId) {
    await supabase
      .from('organization_setups')
      .update({
        subscription_status: 'past_due',
        updated_at: new Date().toISOString(),
      })
      .eq('stripe_subscription_id', subscriptionId)
  }
}

async function triggerOrganizationSetup(subscriptionId: string, supabase: any) {
  // Get setup record
  const { data: setupRecord } = await supabase
    .from('organization_setups')
    .select('*')
    .eq('stripe_subscription_id', subscriptionId)
    .eq('setup_status', 'payment_completed')
    .single()

  if (setupRecord) {
    // Here you can trigger automated organization setup
    // For now, just mark as ready for setup
    await supabase
      .from('organization_setups')
      .update({
        setup_status: 'ready_for_setup',
        updated_at: new Date().toISOString(),
      })
      .eq('id', setupRecord.id)

    console.log(`Organization setup triggered for: ${setupRecord.organization_name}`)

    // TODO: Here you could:
    // 1. Send welcome email
    // 2. Create Supabase user account
    // 3. Set up organization in main app
    // 4. Send setup instructions
  }
}

function mapStripeStatusToOurStatus(stripeStatus: string): string {
  switch (stripeStatus) {
    case 'active':
      return 'active'
    case 'past_due':
      return 'past_due'
    case 'canceled':
    case 'cancelled':
      return 'cancelled'
    case 'unpaid':
      return 'suspended'
    case 'incomplete':
      return 'pending'
    default:
      return 'unknown'
  }
}