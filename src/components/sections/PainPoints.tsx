import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { pains } from '@/lib/content';

export function PainPoints() {
  return (
    <Section id="pain" labelledBy="pain-title" className="bg-bg-elevated/40">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <SectionHeader
          eyebrow="Реальная цена"
          id="pain-title"
          title="Каждый ручной шаг — тихая утечка."
          lead="Большинство бизнесов проигрывают не конкурентам, а медленным ответам, забытым касаниям и работе, которая не масштабируется без конкретных людей."
        />
        <Reveal group as="ul" className="flex flex-col">
          {pains.map((p, i) => (
            <RevealItem as="li" key={p.problem}>
              <div className="flex gap-5 border-b border-border py-6 last:border-b-0">
                <span className="font-mono text-sm text-subtle">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-lg text-fg">
                  {p.problem}{' '}
                  <span className="text-muted">{p.cost}</span>
                </p>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
