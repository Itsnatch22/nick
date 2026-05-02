import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import ContactEmail from '../../../emails/ContactEmail';
import { contactSchema } from '@/lib/validation/contact';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid data', details: validationResult.error.issues },
        { status: 400 }
      );
    }

    const { name, email, phone, service, message } = validationResult.data;

    const { error: supabaseError } = await supabase
      .from('inquiry')
      .insert({
        name,
        email,
        phone,
        service,
        message,
      });

    if (supabaseError) {
      console.error('Supabase error:', supabaseError);
      return NextResponse.json(
        { error: 'Failed to store inquiry' },
        { status: 500 }
      );
    }

    try {
      const { data, error: emailError } = await resend.emails.send({
        from: process.env.FROM_EMAIL!,
        to: process.env.CONTACT_EMAIL!,
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
        // Don't fail the request if email fails, just log it
      }
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails, just log it
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
