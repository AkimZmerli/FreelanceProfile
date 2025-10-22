import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    // Check for environment variable at runtime
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not defined in environment variables');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    const senderEmail = formData.get('SenderEmail');
    const message = formData.get('message');
    const name = formData.get('name');
    const recaptchaToken = formData.get('g-recaptcha-response');

    if (!senderEmail || !message || !name) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required.' },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const data = await resend.emails.send({
      from: 'mail@akimzmerli.site',
      to: ['akim.zmerli@googlemail.com'],
      replyTo: senderEmail.toString(),
      subject: `New Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${senderEmail}
        Message: ${message}
      `,
    });
    
    if (data.error) {
      console.error('Resend API Error:', data.error);
      return NextResponse.json(
        { error: `Failed to send email: ${data.error.message || 'Unknown error from email service'}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Error details:', error);
    
    // Provide more specific error messages
    if (error.message?.includes('RESEND_API_KEY')) {
      return NextResponse.json(
        { error: 'Email service configuration error. Please try again later.' },
        { status: 500 }
      );
    }
    
    if (error.message?.includes('Unauthorized')) {
      return NextResponse.json(
        { error: 'Email service authentication failed. Please try again later.' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: error?.message || 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}