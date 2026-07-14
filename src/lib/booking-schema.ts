import { z } from 'zod';

export type BookingMessages = {
  errName: string;
  errEmail: string;
  errCompany: string;
  errSize: string;
  errGoal: string;
};

const defaultMessages: BookingMessages = {
  errName: 'Please enter your name',
  errEmail: 'Enter a valid work email',
  errCompany: 'Tell us your company',
  errSize: 'Select a company size',
  errGoal: 'Pick the closest goal',
};

/** Build the booking schema with locale-aware validation messages. */
export function makeBookingSchema(m: BookingMessages = defaultMessages) {
  return z.object({
    name: z.string().trim().min(2, m.errName).max(80),
    email: z.string().trim().email(m.errEmail),
    company: z.string().trim().min(2, m.errCompany).max(120),
    companySize: z.string().trim().min(1, m.errSize).max(40),
    goal: z.string().trim().min(1, m.errGoal).max(160),
    details: z.string().trim().max(800).optional().or(z.literal('')),
    // Honeypot — must stay empty (bots fill it).
    website: z.string().max(0).optional(),
  });
}

/** Default (English) schema used server-side as a safety net. */
export const bookingSchema = makeBookingSchema();

export type BookingInput = z.infer<ReturnType<typeof makeBookingSchema>>;

export type BookingState =
  | { status: 'idle' }
  | { status: 'success' }
  | { status: 'error'; message: string; fieldErrors?: Record<string, string[]> };
