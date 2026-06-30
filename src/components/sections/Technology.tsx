import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { technologies } from '@/lib/content';

export function Technology() {
  return (
    <Section id="technology" labelledBy="technology-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
        <SectionHeader
          eyebrow="Технологии"
          id="technology-title"
          title="Лучшие модели. Скучно-надёжная инженерия."
          lead="Подбираем инструмент под результат и владеем интеграцией от и до. Вы получаете передовой AI без операционного риска."
        />
        <Reveal group className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {technologies.map((t) => (
            <RevealItem key={t}>
              <div className="flex h-20 items-center justify-center bg-bg text-sm font-medium text-muted transition-colors duration-300 hover:bg-surface hover:text-fg">
                {t}
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
