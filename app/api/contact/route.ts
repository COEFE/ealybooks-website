import { neon } from '@neondatabase/serverless'
import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/mailjet'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, business, message } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Get client info for spam prevention
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown'
    const userAgent = request.headers.get('user-agent') || 'unknown'

    // Connect to database
    const sql = neon(process.env.DATABASE_URL!)

    // Insert submission
    await sql`
      INSERT INTO ealybooks_contact_submissions (name, email, business_type, message, ip_address, user_agent)
      VALUES (${name}, ${email}, ${business || null}, ${message || null}, ${ip}, ${userAgent})
    `

    // Send email notification
    const notificationEmail = process.env.CONTACT_NOTIFICATION_EMAIL || 'chris@ealybooks.com'

    await sendEmail({
      to: notificationEmail,
      subject: `New Contact Form Submission from ${name}`,
      htmlContent: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        ${business ? `<p><strong>Business Type:</strong> ${business}</p>` : ''}
        ${message ? `<p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>` : ''}
        <hr>
        <p style="color: #666; font-size: 12px;">
          Submitted at ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET<br>
          IP: ${ip}
        </p>
      `,
      textContent: `
New Contact Form Submission

From: ${name} (${email})
${business ? `Business Type: ${business}` : ''}
${message ? `Message:\n${message}` : ''}

---
Submitted at ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET
IP: ${ip}
      `.trim()
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
