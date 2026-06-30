'use server';

import { bookingSchema, type BookingState } from '@/lib/booking-schema';

/**
 * Server Action for the qualification form.
 *
 * In production, wire the `lead` payload to your CRM / email (e.g. Resend,
 * HubSpot, a webhook). It's intentionally provider-agnostic here so the repo
 * runs with zero secrets — replace the marked block with your integration.
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

  // Drop the honeypot field; forward only real lead data.
  const lead = {
    name: parsed.data.name,
    email: parsed.data.email,
    company: parsed.data.company,
    companySize: parsed.data.companySize,
    goal: parsed.data.goal,
    details: parsed.data.details,
  };

  try {
    // ── INTEGRATION POINT ───────────────────────────────────
    // await sendToCrm(lead);
    // await notifyTeam(process.env.LEAD_NOTIFY_EMAIL, lead);
    // For now we log server-side so the flow is verifiable end-to-end.
    console.info('[booking] qualified lead', lead);
    // ────────────────────────────────────────────────────────
    return { status: 'success' };
  } catch {
    return {
      status: 'error',
      message: 'Something went wrong on our end. Please email us directly.',
    };
  }
}
