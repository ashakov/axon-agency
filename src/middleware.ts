import { NextResponse, type NextRequest } from 'next/server';
import { LOCALE_COOKIE, defaultLocale, isLocale, type Locale } from '@/lib/i18n/config';

/** Pick a locale from the Accept-Language header (primary tag wins). */
function detectLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;
  const primary = acceptLanguage.split(',')[0]?.trim().toLowerCase() ?? '';
  return primary.startsWith('ru') ? 'ru' : 'en';
}

export function middleware(request: NextRequest) {
  // A saved choice (cookie) always wins — never override the user.
  const existing = request.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(existing)) return NextResponse.next();

  const locale = detectLocale(request.headers.get('accept-language'));

  // Expose the detected locale to this request so the first paint is correct...
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-locale', locale);
  const response = NextResponse.next({ request: { headers: requestHeaders } });

  // ...and persist it so subsequent requests skip detection.
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  });
  return response;
}

export const config = {
  // Run on pages only — skip static assets, images, and files with an extension.
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.).*)'],
};
