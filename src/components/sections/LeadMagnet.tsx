'use client';

import { useState } from 'react';
import { Check, Download, Loader2, FileText } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { leadMagnet } from '@/lib/content';
import { requestGuide } from '@/app/actions/lead-magnet';

export function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const [company, setCompany] = useState(''); // honeypot

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('loading');
    const fd = new FormData();
    fd.append('email', email);
    fd.append('company_url', company);
    const res = await requestGuide({ status: 'idle' }, fd);
    setState(res.status === 'success' ? 'done' : 'error');
  }

  return (
    <section id="guide" aria-labelledby="guide-title" className="section">
      <Container>
        <Reveal className="relative overflow-hidden rounded-2xl border border-border bg-bg-elevated p-7 sm:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_15%,hsl(var(--accent)/0.12),transparent_55%)]"
          />
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="overline">{leadMagnet.eyebrow}</span>
              <h2 id="guide-title" className="mt-4 text-display-sm text-gradient">
                {leadMagnet.title}
              </h2>
              <p className="mt-4 max-w-prose text-muted">{leadMagnet.subtitle}</p>
              <ul className="mt-6 flex flex-col gap-3">
                {leadMagnet.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-fg">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6 sm:p-7">
              {state === 'done' ? (
                <div className="flex flex-col items-start gap-4 text-left">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/15 text-accent">
                    <FileText className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="text-fg">
                    Готово — гайд ваш. Мы также отправим копию на почту.
                  </p>
                  <Button asChild size="lg" className="w-full">
                    <a href={leadMagnet.file} download>
                      <Download className="h-4 w-4" />
                      Скачать PDF
                    </a>
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="flex flex-col gap-3">
                  <label htmlFor="guide-email" className="text-sm font-medium text-fg">
                    Куда прислать гайд?
                  </label>
                  {/* honeypot */}
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                  <input
                    id="guide-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.ru"
                    aria-invalid={state === 'error'}
                    className="h-12 w-full rounded-lg border border-border bg-bg-elevated px-4 text-fg placeholder:text-subtle focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                  {state === 'error' ? (
                    <p role="alert" className="text-sm text-warning">
                      Укажите корректную почту и попробуйте снова.
                    </p>
                  ) : null}
                  <Button type="submit" size="lg" disabled={state === 'loading'} className="w-full">
                    {state === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Отправляем…
                      </>
                    ) : (
                      leadMagnet.cta
                    )}
                  </Button>
                  <p className="text-xs text-subtle">
                    Без спама. Отписаться можно в один клик.
                  </p>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
