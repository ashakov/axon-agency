'use client';

import { useI18n } from '@/components/i18n/LocaleProvider';
import { locales, localeNames } from '@/lib/i18n/config';
import { cn } from '@/lib/utils';

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useI18n();
  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        'inline-flex items-center rounded-full border border-border bg-surface/40 p-0.5 backdrop-blur',
        className,
      )}
    >
      {locales.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={active}
            className={cn(
              'rounded-full px-2.5 py-1 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
              active ? 'bg-fg/10 text-fg' : 'text-muted hover:text-fg',
            )}
          >
            {localeNames[l]}
          </button>
        );
      })}
    </div>
  );
}
