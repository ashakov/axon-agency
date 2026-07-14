'use client';

import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { useDictionary } from '@/components/i18n/LocaleProvider';

export function Testimonials() {
  const t = useDictionary();
  return (
    <Section id="testimonials" labelledBy="testimonials-title" className="bg-bg-elevated/40">
      <SectionHeader
        eyebrow={t.testimonials.eyebrow}
        id="testimonials-title"
        title={t.testimonials.title}
      />
      <Reveal group className="mt-14 grid gap-6 md:grid-cols-2">
        {t.testimonials.items.map((item) => (
          <RevealItem key={item.name}>
            <figure className="card h-full p-7 sm:p-9">
              <blockquote className="text-lg leading-relaxed text-fg">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-6">
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-sm font-medium text-accent"
                >
                  {item.name.charAt(0)}
                </span>
                <div className="text-sm">
                  <span className="font-medium text-fg">{item.name}</span>
                  <span className="block text-muted">{item.role}</span>
                </div>
              </figcaption>
            </figure>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
