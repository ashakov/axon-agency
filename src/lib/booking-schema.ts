import { z } from 'zod';

export const COMPANY_SIZES = [
  '1–10',
  '11–50',
  '51–200',
  '201–1000',
  '1000+',
] as const;

export const GOALS = [
  'Растить выручку / ловить больше заявок',
  'Снизить операционные издержки',
  'Автоматизировать поддержку клиентов',
  'Построить кастомную AI-систему',
  'Пока не уверен — нужен совет',
] as const;

export const bookingSchema = z.object({
  name: z.string().trim().min(2, 'Укажите ваше имя').max(80),
  email: z.string().trim().email('Укажите корректную почту'),
  company: z.string().trim().min(2, 'Укажите компанию').max(120),
  companySize: z.enum(COMPANY_SIZES, {
    errorMap: () => ({ message: 'Выберите размер компании' }),
  }),
  goal: z.enum(GOALS, {
    errorMap: () => ({ message: 'Выберите ближайшую цель' }),
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
