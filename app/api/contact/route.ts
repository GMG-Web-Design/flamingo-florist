import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    // Initialize Resend only when needed
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    
    const body = await request.json()
    const { name, email, phone, eventType, date, message } = body

    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Name, phone, and message are required fields' },
        { status: 400 }
      )
    }

    // Format the email content
    const emailContent = `
<h2>New Contact Form Submission - Flamingo Florist</h2>

<div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
  <h3 style="color: #2c3e50; margin-top: 0;">Customer Information</h3>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Phone:</strong> ${phone}</p>
  ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
  ${eventType ? `<p><strong>Occasion:</strong> ${eventType}</p>` : ''}
  ${date ? `<p><strong>Needed By:</strong> ${date}</p>` : ''}
</div>

<div style="background: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px; margin: 20px 0;">
  <h3 style="color: #2c3e50; margin-top: 0;">Customer's Vision & Story</h3>
  <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
</div>

<div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
  <p style="margin: 0; color: #1976d2;"><strong>Next Steps:</strong> Follow up with the customer within 2-4 hours during business hours. For urgent requests, call them directly at ${phone}.</p>
</div>
`

    // Create a descriptive subject line
    const subject = eventType 
      ? `New ${eventType} inquiry from ${name} - Flamingo Florist`
      : `New floral inquiry from ${name} - Flamingo Florist`

    // Send email notification
    const { data, error } = await resend.emails.send({
      from: 'notifications@gmgwebdesign.com',
      to: ['flamingofloristtn@gmail.com'],
      subject: subject,
      html: emailContent,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email notification' },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      message: 'Contact form submitted successfully',
      emailId: data?.id 
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 