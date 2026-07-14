'use client';

import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { BookingForm } from '@/components/forms/BookingForm';
import { Logo } from '@/components/layout/Logo';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';
import { site } from '@/lib/site';
import { useDictionary } from '@/components/i18n/LocaleProvider';

const icons = [Clock, Sparkles, ShieldCheck];

export function BookView() {
  const t = useDictionary();
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-10%,hsl(var(--accent)/0.1),transparent_55%)]"
      />
      <div className="container-content flex items-center justify-between py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md text-sm text-muted transition-colors hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.book.back}
        </Link>
        <LanguageSwitcher />
      </div>

      <div className="container-content grid items-start gap-12 pb-24 pt-6 lg:grid-cols-[1fr_1.05fr] lg:gap-20 lg:pt-12">
        <div className="lg:sticky lg:top-24">
          <Logo />
          <h1 className="mt-8 text-display-md text-gradient">{t.book.title}</h1>
          <p className="mt-5 max-w-md text-lead text-muted">{t.book.subtitle}</p>
          <ul className="mt-10 flex flex-col gap-5">
            {t.book.reassurances.map((r, i) => {
              const Icon = icons[i] ?? ShieldCheck;
              return (
                <li key={r} className="flex items-start gap-3 text-muted">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-bg-elevated text-accent">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {r}
                </li>
              );
            })}
          </ul>
          <p className="mt-10 text-sm text-subtle">
            {t.book.prefEmail}{' '}
            <a href={`mailto:${site.email}`} className="text-fg underline-offset-4 hover:underline">
              {site.email}
            </a>
          </p>
        </div>

        <BookingForm />
      </div>
    </>
  );
}
