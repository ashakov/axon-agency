import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { BookingForm } from '@/components/forms/BookingForm';
import { Logo } from '@/components/layout/Logo';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Book a strategy session',
  description:
    'Book a free strategy session with Axon. We map where AI automation moves your revenue and cost — and you leave with a plan, with zero obligation.',
  alternates: { canonical: '/book' },
};

const reassurances = [
  { icon: Clock, text: '30 minutes. No slide deck, no hard sell.' },
  { icon: Sparkles, text: 'A prioritised automation plan you keep either way.' },
  { icon: ShieldCheck, text: 'Your details stay private. Never shared or sold.' },
];

export default function BookPage() {
  return (
    <main id="main" className="relative min-h-screen overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-10%,hsl(var(--accent)/0.1),transparent_55%)]"
      />
      <div className="container-content py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md text-sm text-muted transition-colors hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>

      <div className="container-content grid items-start gap-12 pb-24 pt-6 lg:grid-cols-[1fr_1.05fr] lg:gap-20 lg:pt-12">
        <div className="lg:sticky lg:top-24">
          <Logo />
          <h1 className="mt-8 text-display-md text-gradient">
            Let&apos;s find where AI moves your numbers.
          </h1>
          <p className="mt-5 max-w-md text-lead text-muted">
            Tell us a little about your business. We&apos;ll come to the call with
            a point of view, not a pitch.
          </p>
          <ul className="mt-10 flex flex-col gap-5">
            {reassurances.map((r) => (
              <li key={r.text} className="flex items-start gap-3 text-muted">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-bg-elevated text-accent">
                  <r.icon className="h-4 w-4" aria-hidden="true" />
                </span>
                {r.text}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-subtle">
            Prefer email?{' '}
            <a href={`mailto:${site.email}`} className="text-fg underline-offset-4 hover:underline">
              {site.email}
            </a>
          </p>
        </div>

        <BookingForm />
      </div>
    </main>
  );
}
