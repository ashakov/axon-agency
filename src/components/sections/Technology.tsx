'use client';

import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { useDictionary } from '@/components/i18n/LocaleProvider';

export function Technology() {
  const t = useDictionary();
  return (
    <Section id="technology" labelledBy="technology-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
        <SectionHeader
          eyebrow={t.technology.eyebrow}
          id="technology-title"
          title={t.technology.title}
          lead={t.technology.lead}
        />
        <Reveal group className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {t.technology.items.map((tech) => (
            <RevealItem key={tech}>
              <div className="flex h-20 items-center justify-center bg-bg text-sm font-medium text-muted transition-colors duration-300 hover:bg-surface hover:text-fg">
                {tech}
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
