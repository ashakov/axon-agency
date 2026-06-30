import { z } from 'zod';

export const COMPANY_SIZES = [
  '1–10',
  '11–50',
  '51–200',
  '201–1000',
  '1000+',
] as const;

export const GOALS = [
  'Grow revenue / capture more leads',
  'Cut operational cost',
  'Automate customer support',
  'Build a custom AI system',
  'Not sure yet — need direction',
] as const;

export const bookingSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name').max(80),
  email: z.string().trim().email('Enter a valid work email'),
  company: z.string().trim().min(2, 'Tell us your company').max(120),
  companySize: z.enum(COMPANY_SIZES, {
    errorMap: () => ({ message: 'Select a company size' }),
  }),
  goal: z.enum(GOALS, {
    errorMap: () => ({ message: 'Pick the closest goal' }),
  }),
  details: z.string().trim().max(800).optional().or(z.literal('')),
  // Honeypot — must stay empty (bots fill it).
  website: z.string().max(0).optional(),
});

export type BookingInput = z.infer<typeof bookingSchema>;

export type BookingState =
  | { status: 'idle' }
  | { status: 'success' }
  | { status: 'error'; message: string; fieldErrors?: Record<string, string[]> };
