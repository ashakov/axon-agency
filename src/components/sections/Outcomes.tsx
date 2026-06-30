import { TrendingUp, Banknote, Clock } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal, RevealItem } from '@/components/ui/Reveal';

const pillars = [
  {
    icon: TrendingUp,
    title: 'Растить выручку',
    body: 'Ловим каждую заявку, отвечаем за секунды и догреваем без конца. Спрос перестаёт утекать из воронки.',
  },
  {
    icon: Banknote,
    title: 'Снижать издержки',
    body: 'Автоматизируем рутинные 80% операций. Берём больше объёма без линейного роста штата.',
  },
  {
    icon: Clock,
    title: 'Возвращать время',
    body: 'Возвращаем команде часы, потерянные на ручной работе, чтобы они занимались тем, что двигает бизнес.',
  },
];

export function Outcomes() {
  return (
    <Section id="outcomes" labelledBy="outcomes-title">
      <SectionHeader
        eyebrow="Бизнес-результаты"
        id="outcomes-title"
        title="Три цифры, которые волнуют ваше руководство."
        lead="Мы продаём не технологии. Мы продаём то, что они делают с вашим P&L."
      />
      <Reveal group className="mt-14 grid gap-6 md:grid-cols-3">
        {pillars.map((p) => (
          <RevealItem key={p.title}>
            <div className="card card-hover h-full p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-bg-elevated text-accent">
                <p.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-display-sm">{p.title}</h3>
              <p className="mt-3 text-muted">{p.body}</p>
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
