import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
  Font,
} from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  submittedAt: string;
}

export default function ContactEmail({
  name,
  email,
  phone,
  service,
  message,
  submittedAt,
}: ContactEmailProps) {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Arial"
          webFont={{
            url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>New Contact Inquiry from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New Contact Inquiry</Heading>
          
          <Section style={section}>
            <Text style={label}>Client Information</Text>
            <Text style={text}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={text}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={text}>
              <strong>Phone:</strong> {phone}
            </Text>
            <Text style={text}>
              <strong>Service Interest:</strong> {service}
            </Text>
            <Text style={text}>
              <strong>Submitted:</strong> {submittedAt}
            </Text>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Text style={label}>Message</Text>
            <Text style={messageText}>{message}</Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              This inquiry was submitted through the Nicholas Kondigo Fitness website.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#000000',
  fontFamily: 'Inter, Arial, sans-serif',
};

const container = {
  maxWidth: '600px',
  margin: '40px auto',
  padding: '20px',
  backgroundColor: '#111111',
  borderRadius: '12px',
  border: '1px solid #333333',
};

const heading = {
  color: '#ffffff',
  fontSize: '28px',
  fontWeight: '700',
  marginBottom: '24px',
  textAlign: 'center' as const,
};

const section = {
  marginBottom: '24px',
};

const label = {
  color: '#f59e0b',
  fontSize: '14px',
  fontWeight: '600',
  textTransform: 'uppercase' as const,
  marginBottom: '8px',
  letterSpacing: '0.5px',
};

const text = {
  color: '#ffffff',
  fontSize: '16px',
  lineHeight: '1.6',
  marginBottom: '8px',
};

const messageText = {
  color: '#ffffff',
  fontSize: '16px',
  lineHeight: '1.6',
  whiteSpace: 'pre-wrap' as const,
  backgroundColor: '#1a1a1a',
  padding: '16px',
  borderRadius: '8px',
  border: '1px solid #333333',
};

const hr = {
  border: 'none',
  borderTop: '1px solid #333333',
  margin: '32px 0',
};

const footer = {
  marginTop: '32px',
};

const footerText = {
  color: '#666666',
  fontSize: '12px',
  textAlign: 'center' as const,
};
