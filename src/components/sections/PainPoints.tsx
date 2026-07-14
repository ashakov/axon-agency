'use client';

import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { useDictionary } from '@/components/i18n/LocaleProvider';

export function PainPoints() {
  const t = useDictionary();
  return (
    <Section id="pain" labelledBy="pain-title" className="bg-bg-elevated/40">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <SectionHeader
          eyebrow={t.pains.eyebrow}
          id="pain-title"
          title={t.pains.title}
          lead={t.pains.lead}
        />
        <Reveal group as="ul" className="flex flex-col">
          {t.pains.items.map((p, i) => (
            <RevealItem as="li" key={p.problem}>
              <div className="flex gap-5 border-b border-border py-6 last:border-b-0">
                <span className="font-mono text-sm text-subtle">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-lg text-fg">
                  {p.problem} <span className="text-muted">{p.cost}</span>
                </p>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
