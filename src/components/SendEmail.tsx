'use server'

import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not defined in environment variables');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function SendEmail(formData: FormData) {
  const senderEmail = formData.get('SenderEmail');
  const message = formData.get('message');
  const name = formData.get('name');

  if (!senderEmail || !message || !name) {
    throw new Error('Missing required fields');
  }

  try {
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
      throw new Error(`Resend API Error: ${JSON.stringify(data.error)}`);
    }

    return { success: true, data };
  } catch (error: any) {
    console.error('Error details:', error);
    throw new Error(error?.message || 'Failed to send email. Please try again later.');
  }
}