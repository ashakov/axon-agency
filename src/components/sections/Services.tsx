import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';
import { services } from '@/lib/content';

export function Services() {
  return (
    <Section id="services" labelledBy="services-title">
      <SectionHeader
        eyebrow="Услуги"
        id="services-title"
        title="Одна студия для всех систем, что вам нужны."
        lead="От одного AI-агента до полной операционной платформы — проектируем, строим и сопровождаем сами."
      />
      <Reveal
        group
        className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((s) => (
          <RevealItem key={s.title}>
            <article
              className={cn(
                'group relative h-full bg-bg p-7 transition-colors duration-300 hover:bg-surface',
                s.featured && 'bg-surface/50',
              )}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-bg-elevated text-accent transition-transform duration-300 group-hover:-translate-y-0.5">
                <s.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-medium text-fg">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
              {s.featured ? (
                <span className="absolute right-5 top-5 text-[0.625rem] font-medium uppercase tracking-wider text-accent">
                  Популярно
                </span>
              ) : null}
            </article>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
