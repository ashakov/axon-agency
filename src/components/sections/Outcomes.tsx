'use client';

import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { useDictionary } from '@/components/i18n/LocaleProvider';

export function Outcomes() {
  const t = useDictionary();
  return (
    <Section id="outcomes" labelledBy="outcomes-title">
      <SectionHeader
        eyebrow={t.outcomes.eyebrow}
        id="outcomes-title"
        title={t.outcomes.title}
        lead={t.outcomes.lead}
      />
      <Reveal group className="mt-14 grid gap-6 md:grid-cols-3">
        {t.outcomes.pillars.map((p) => (
          <RevealItem key={p.title}>
            <div className="card card-hover h-full p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-bg-elevated text-accent">
                <p.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-display-sm">{p.title}</h3>
              <p className="mt-3 text-muted">{p.body}</p>
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
