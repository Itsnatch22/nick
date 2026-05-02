# Nick Fitness - Personal Trainer Website

A modern, professional personal trainer portfolio website built with Next.js 16, featuring personal training services, client testimonials, transformation stories, and a contact inquiry system.

## About This Site

This is the official website of Nicholas Kondigo, a certified personal trainer and fitness model based in Nairobi, Kenya. The site showcases his training services, client transformations, testimonials, and provides an easy way for potential clients to get in touch.

## Features

- Hero Section - Introduction with profile image and call-to-action
- About Section - Personal story, statistics, and certifications
- Services - Personal Training, Online Coaching, Fitness Modeling, Nutrition Guidance
- Gallery - Visual showcase of fitness work
- Testimonials - Client reviews and feedback
- Transformations - Before and after client results
- Contact Form - Integrated inquiry system with email notifications

## Tech Stack

- Framework: Next.js 16.2.4 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS 4
- UI Components: Shadcn UI + Radix UI
- Database: Supabase
- Email: Resend
- Validation: Zod
- Icons: Lucide React

## Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
git clone [repository-url]
cd nick-fitness

2. Install dependencies:
npm install

3. Set up environment variables:
cp .env.example .env.local
# Add your Supabase and Resend API keys to .env.local

4. Run the development server:
npm run dev

### Environment Variables

Create a .env.local file with the following variables:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=your_from_email
CONTACT_EMAIL=your_contact_email

### Build for Production

npm run build
npm start

## Project Structure

nick-fitness/
├── app/                    # Next.js App Router
│   ├── api/
│   │   └── contact/       # Contact form API endpoint
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx         # Main page
├── components/           # React components
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx      # About section
│   ├── Services.tsx   # Services section
│   ├── Gallery.tsx    # Gallery section
│   ├── Testimonials.tsx
│   ├── Contact.tsx    # Contact form
│   ├── Footer.tsx     # Footer
│   └── ui/            # Shadcn UI components
├── data/
│   └── nick.js        # Site content data
├── emails/
│   └── ContactEmail.tsx  # React Email template
├── lib/
│   ├── supabase/     # Supabase client
│   ├── validation/  # Zod schemas
│   └── utils.ts     # Utility functions
└── public/          # Static assets

## Nicholas Kondigo Stats

- 500+ Clients Transformed
- 5+ Years Experience
- 50+ Competition Preps
- Certifications:
  - NASM Certified Personal Trainer
  - Precision Nutrition Level 1
  - Functional Movement Specialist
  - Sports Nutrition Certification

## Services Offered

1. Personal Training - KES 500/session
   - One-on-one customized sessions
   - Form correction and technique
   - Progressive overload tracking

2. Online Coaching - KES 5,000/month
   - Custom training programs
   - Weekly check-ins and adjustments
   - Video form reviews
   - 24/7 messaging support

3. Fitness Modeling
   - Brand ambassadorships
   - Photo and video shoots
   - Social media collaborations

4. Nutrition Guidance
   - Macro-based meal plans
   - Supplement recommendations
   - Meal prep strategies

## Contact

- Email: nicknyjel68@gmail.com
- Phone: +254 795 101 750
- Location: Nairobi, Kenya
- Instagram: @keepingupwithnicck

## License

Private - All rights reserved

## Credits

Built with Next.js and Shadcn UI
