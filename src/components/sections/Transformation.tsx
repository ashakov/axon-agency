'use client';

import { Check, Minus } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { useDictionary } from '@/components/i18n/LocaleProvider';

export function Transformation() {
  const t = useDictionary();
  return (
    <Section id="transformation" labelledBy="transformation-title">
      <SectionHeader
        eyebrow={t.transformation.eyebrow}
        id="transformation-title"
        title={t.transformation.title}
        align="center"
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <Reveal className="rounded-xl border border-border bg-surface/40 p-7 sm:p-9">
          <p className="text-xs uppercase tracking-[0.18em] text-subtle">
            {t.transformation.beforeLabel}
          </p>
          <ul className="mt-6 flex flex-col gap-4">
            {t.transformation.before.map((b) => (
              <li key={b} className="flex items-start gap-3 text-muted">
                <Minus className="mt-1 h-4 w-4 shrink-0 text-subtle" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal
          delay={0.08}
          className="relative overflow-hidden rounded-xl border border-accent-muted bg-[linear-gradient(135deg,hsl(var(--accent)/0.08),transparent_60%)] p-7 shadow-glow sm:p-9"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-accent">
            {t.transformation.afterLabel}
          </p>
          <ul className="mt-6 flex flex-col gap-4">
            {t.transformation.after.map((a) => (
              <li key={a} className="flex items-start gap-3 text-fg">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
