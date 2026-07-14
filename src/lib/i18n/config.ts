export const locales = ['en', 'ru'] as const;
export type Locale = (typeof locales)[number];

/** English is the primary/default language. */
export const defaultLocale: Locale = 'en';

export const LOCALE_COOKIE = 'NEXT_LOCALE';

export const localeNames: Record<Locale, string> = { en: 'EN', ru: 'RU' };

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value);
}
