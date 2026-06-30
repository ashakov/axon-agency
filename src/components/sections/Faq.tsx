import { Section, SectionHeader } from '@/components/ui/Section';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/Accordion';
import { faqs } from '@/lib/content';

export function Faq() {
  return (
    <Section id="faq" labelledBy="faq-title" className="bg-bg-elevated/40">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeader
          eyebrow="Questions"
          id="faq-title"
          title="The things owners ask before booking."
          lead="Still unsure? A strategy session answers the rest, with zero obligation."
        />
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
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
