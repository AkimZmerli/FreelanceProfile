'use server'

import { Resend } from 'resend';

export async function SendEmail(formData: FormData) {
  // Check for environment variable at runtime instead of module load time
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not defined in environment variables');
    throw new Error('Email service is not configured. Please contact the administrator.');
  }

  const senderEmail = formData.get('SenderEmail');
  const message = formData.get('message');
  const name = formData.get('name');

  if (!senderEmail || !message || !name) {
    throw new Error('Missing required fields: name, email, and message are required.');
  }

  try {
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
      throw new Error(`Failed to send email: ${data.error.message || 'Unknown error from email service'}`);
    }

    return { success: true, data };
  } catch (error: any) {
    console.error('Error details:', error);
    
    // Provide more specific error messages
    if (error.message?.includes('RESEND_API_KEY')) {
      throw new Error('Email service configuration error. Please try again later.');
    }
    
    if (error.message?.includes('Unauthorized')) {
      throw new Error('Email service authentication failed. Please try again later.');
    }
    
    throw new Error(error?.message || 'Failed to send email. Please try again later.');
  }
}