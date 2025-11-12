import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // 更高权限的key
)

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json()

  const { error } = await supabase
    .from('tpa_contact_messages')
    .insert([{ name, email, subject, message }])

  if (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true, message: 'Data saved!' })
}
