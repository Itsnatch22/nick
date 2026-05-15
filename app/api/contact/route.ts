import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactEmail from '../../../emails/ContactEmail';
import { contactSchema } from '@/lib/validation/contact';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid data', details: validationResult.error.issues },
        { status: 400 }
      );
    }

    const { name, email, phone, service, message } = validationResult.data;

    const { CONTACT_EMAIL, FROM_EMAIL, RESEND_API_KEY } = process.env;

    if (!CONTACT_EMAIL || !FROM_EMAIL || !RESEND_API_KEY) {
      console.error('Contact email configuration is missing');
      return NextResponse.json(
        { error: 'Contact email is not configured' },
        { status: 500 }
      );
    }

    try {
      const resend = new Resend(RESEND_API_KEY);
      const { error: emailError } = await resend.emails.send({
        from: FROM_EMAIL,
        to: CONTACT_EMAIL,
        subject: `New Contact Inquiry: ${service} - ${name}`,
        react: ContactEmail({
          name,
          email,
          phone,
          service,
          message,
          submittedAt: new Date().toLocaleString(),
        }),
      });

      if (emailError) {
        console.error('Email error:', emailError);
        return NextResponse.json(
          { error: 'Failed to send inquiry' },
          { status: 500 }
        );
      }
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      return NextResponse.json(
        { error: 'Failed to send inquiry' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Inquiry submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
