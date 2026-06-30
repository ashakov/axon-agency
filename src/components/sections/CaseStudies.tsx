import { ArrowUpRight } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { caseStudies } from '@/lib/content';

export function CaseStudies() {
  return (
    <Section id="work" labelledBy="work-title">
      <SectionHeader
        eyebrow="Избранные кейсы"
        id="work-title"
        title="Результаты, которые можно выразить цифрой."
        lead="Несколько показательных проектов. Цифры обезличены по просьбе клиентов."
      />
      <Reveal group className="mt-14 grid gap-6 lg:grid-cols-3">
        {caseStudies.map((c) => (
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
