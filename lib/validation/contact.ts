import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, 'Full name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(1, 'Message is required'),
});