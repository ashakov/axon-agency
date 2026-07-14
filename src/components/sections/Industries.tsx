'use client';

import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { useDictionary } from '@/components/i18n/LocaleProvider';

export function Industries() {
  const t = useDictionary();
  return (
    <Section id="industries" labelledBy="industries-title" className="bg-bg-elevated/40">
      <SectionHeader
        eyebrow={t.industries.eyebrow}
        id="industries-title"
        title={t.industries.title}
        lead={t.industries.lead}
      />
      <Reveal group className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.industries.items.map((ind) => (
          <RevealItem key={ind.name}>
            <div className="card card-hover flex h-full items-start gap-4 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-bg-elevated text-accent">
                <ind.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-medium text-fg">{ind.name}</h3>
                <p className="mt-1 text-sm text-muted">{ind.outcome}</p>
              </div>
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
