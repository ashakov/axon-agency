'use client';

import { Section, SectionHeader } from '@/components/ui/Section';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/Accordion';
import { useDictionary } from '@/components/i18n/LocaleProvider';

export function Faq() {
  const t = useDictionary();
  return (
    <Section id="faq" labelledBy="faq-title" className="bg-bg-elevated/40">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeader
          eyebrow={t.faq.eyebrow}
          id="faq-title"
          title={t.faq.title}
          lead={t.faq.lead}
        />
        <Accordion type="single" collapsible className="w-full">
          {t.faq.items.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
