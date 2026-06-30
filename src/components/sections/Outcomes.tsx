import { TrendingUp, Banknote, Clock } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal, RevealItem } from '@/components/ui/Reveal';

const pillars = [
  {
    icon: TrendingUp,
    title: 'Grow revenue',
    body: 'Capture every lead, respond in seconds, and follow up forever. Demand stops leaking out of your funnel.',
  },
  {
    icon: Banknote,
    title: 'Cut cost',
    body: 'Automate the repetitive 80% of operations. Handle more volume without the linear rise in headcount.',
  },
  {
    icon: Clock,
    title: 'Reclaim time',
    body: 'Give your team back the hours lost to manual work, so they focus on what actually moves the business.',
  },
];

export function Outcomes() {
  return (
    <Section id="outcomes" labelledBy="outcomes-title">
      <SectionHeader
        eyebrow="Business outcomes"
        id="outcomes-title"
        title="Three numbers your leadership cares about."
        lead="We don't sell technology. We sell what it does to your P&L."
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
