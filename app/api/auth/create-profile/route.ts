import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseClient } from '@/lib/supabase'

// SIMPLE DIRECT PROFILE CREATION AFTER PASSWORD SETUP
export async function POST(request: NextRequest) {
  try {
    console.log('create-profile API called')
    
    const supabase = getSupabaseClient()
    
    // Get current user
    const { data: { user }, error: userError } = await supabase.auth.getUser()
    
    if (userError || !user) {
      console.error('No user found:', userError)
      return NextResponse.json({ error: 'User not authenticated' }, { status: 401 })
    }
    
    console.log('User found:', user.id, user.email)
    
    // Check if profile already exists
    const { data: existingProfile } = await supabase
      .from('profiles')
      .select('id')
      .eq('id', user.id)
      .single()
    
    if (existingProfile) {
      console.log('Profile already exists for user:', user.email)
      return NextResponse.json({ 
        success: true, 
        message: 'Profile already exists',
        userId: user.id
      })
    }
    
    // Get pending user data
    const { data: pendingData, error: pendingError } = await supabase
      .from('pending_user_data')
      .select('*')
      .eq('email', user.email)
      .is('processed_at', null)
      .order('created_at', { ascending: false })
      .limit(1)
      .single()
    
    if (pendingError || !pendingData) {
      console.error('No pending user data found for:', user.email, pendingError)
      return NextResponse.json({ 
        error: 'No pending user data found',
        details: pendingError?.message 
      }, { status: 404 })
    }
    
    console.log('Found pending data for user:', user.email, {
      fullName: pendingData.full_name,
      role: pendingData.role,
      organizationId: pendingData.organization_id
    })
    
    // Create profile from pending data
    const { error: profileError } = await supabase
      .from('profiles')
      .insert({
        id: user.id,
        full_name: pendingData.full_name,
        role: pendingData.role,
        organization_id: pendingData.organization_id,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
    
    if (profileError) {
      console.error('Error creating profile:', profileError)
      return NextResponse.json({ 
        error: 'Failed to create profile',
        details: profileError.message 
      }, { status: 500 })
    }
    
    // Mark pending data as processed
    const { error: updateError } = await supabase
      .from('pending_user_data')
      .update({ processed_at: new Date().toISOString() })
      .eq('id', pendingData.id)
    
    if (updateError) {
      console.error('Error updating pending data:', updateError)
      // Don't fail the request, profile was created successfully
    }
    
    console.log('Profile created successfully for user:', user.email)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Profile created successfully',
      userId: user.id,
      userEmail: user.email
    })
    
  } catch (error) {
    console.error('create-profile API error:', error)
    return NextResponse.json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}