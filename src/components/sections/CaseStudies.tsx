'use client';

import { ArrowUpRight } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { useDictionary } from '@/components/i18n/LocaleProvider';

export function CaseStudies() {
  const t = useDictionary();
  return (
    <Section id="work" labelledBy="work-title">
      <SectionHeader
        eyebrow={t.caseStudies.eyebrow}
        id="work-title"
        title={t.caseStudies.title}
        lead={t.caseStudies.lead}
      />
      <Reveal group className="mt-14 grid gap-6 lg:grid-cols-3">
        {t.caseStudies.items.map((c) => (
          <RevealItem key={c.title}>
            <article className="card card-hover group flex h-full flex-col p-7">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-subtle">
                  {c.industry}
                </span>
                <ArrowUpRight className="h-4 w-4 text-subtle transition-colors group-hover:text-accent" aria-hidden="true" />
              </div>
              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-mono text-4xl font-medium tracking-tight text-accent">
                  {c.metric}
                </span>
                <span className="text-sm text-muted">{c.metricLabel}</span>
              </div>
              <h3 className="mt-5 text-lg font-medium text-fg">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.body}</p>
            </article>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
