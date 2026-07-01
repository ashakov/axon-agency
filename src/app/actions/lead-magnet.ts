'use server';

import { z } from 'zod';
import { notifyTelegram, escapeHtml } from '@/lib/telegram';

const schema = z.object({
  email: z.string().trim().email('Укажите корректную почту'),
  // Honeypot — должно остаться пустым.
  company_url: z.string().max(0).optional(),
});

export type GuideState =
  | { status: 'idle' }
  | { status: 'success' }
  | { status: 'error'; message: string };

/**
 * Подписка на гайд (lead-magnet). Валидирует email на сервере и
 * возвращает успех — фронт показывает ссылку на скачивание.
 * Точка интеграции: добавьте отправку в рассылку/CRM ниже.
 */
export async function requestGuide(
  _prev: GuideState,
  formData: FormData,
): Promise<GuideState> {
  const parsed = schema.safeParse({
    email: formData.get('email'),
    company_url: formData.get('company_url') ?? '',
  });

  if (!parsed.success) {
    return { status: 'error', message: 'Укажите корректную почту' };
  }
  if (parsed.data.company_url) {
    return { status: 'success' }; // honeypot
  }

  try {
    // ── ТОЧКА ИНТЕГРАЦИИ ────────────────────────────────────
    // await addToNewsletter(parsed.data.email);
    await notifyTelegram(`📩 <b>Новый подписчик на гайд</b>\n${escapeHtml(parsed.data.email)}`);
    console.info('[lead-magnet] new subscriber', parsed.data.email);
    // ────────────────────────────────────────────────────────
    return { status: 'success' };
  } catch {
    return { status: 'error', message: 'Не удалось отправить. Попробуйте ещё раз.' };
  }
}
