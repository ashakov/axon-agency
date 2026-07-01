/**
 * Server-side Telegram delivery for leads.
 * Reads secrets from env (never committed): TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID.
 * If not configured, silently no-ops so the app still works locally.
 */

/** Escape user text for Telegram HTML parse mode. */
export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export async function notifyTelegram(text: string): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return false;

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
      cache: 'no-store',
    });
    if (!res.ok) {
      console.error('[telegram] send failed', res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error('[telegram] send error', err);
    return false;
  }
}
