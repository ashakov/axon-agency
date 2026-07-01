'use server';

import { bookingSchema, type BookingState } from '@/lib/booking-schema';
import { notifyTelegram, escapeHtml } from '@/lib/telegram';

/**
 * Server Action for the qualification form.
 * Validates server-side, then delivers the lead to Telegram (if configured
 * via TELEGRAM_BOT_TOKEN + TELEGRAM_CHAT_ID). Falls back to server logs.
 */
export async function submitBooking(
  _prev: BookingState,
  formData: FormData,
): Promise<BookingState> {
  const parsed = bookingSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    company: formData.get('company'),
    companySize: formData.get('companySize'),
    goal: formData.get('goal'),
    details: formData.get('details') ?? '',
    website: formData.get('website') ?? '',
  });

  if (!parsed.success) {
    return {
      status: 'error',
      message: 'Please fix the highlighted fields.',
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  // Honeypot tripped — pretend success, drop silently.
  if (parsed.data.website) {
    return { status: 'success' };
  }

  const lead = {
    name: parsed.data.name,
    email: parsed.data.email,
    company: parsed.data.company,
    companySize: parsed.data.companySize,
    goal: parsed.data.goal,
    details: parsed.data.details ?? '',
  };

  try {
    const e = escapeHtml;
    const message =
      '<b>🆕 Новая заявка — Axon</b>\n\n' +
      `👤 <b>Имя:</b> ${e(lead.name)}\n` +
      `✉️ <b>Почта:</b> ${e(lead.email)}\n` +
      `🏢 <b>Компания:</b> ${e(lead.company)}\n` +
      `👥 <b>Размер:</b> ${e(lead.companySize)}\n` +
      `🎯 <b>Цель:</b> ${e(lead.goal)}` +
      (lead.details ? `\n📝 <b>Детали:</b> ${e(lead.details)}` : '');

    await notifyTelegram(message);
    console.info('[booking] qualified lead', lead);
    return { status: 'success' };
  } catch {
    return {
      status: 'error',
      message: 'Something went wrong on our end. Please email us directly.',
    };
  }
}
