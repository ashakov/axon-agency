import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal, RevealItem } from '@/components/ui/Reveal';
import { steps } from '@/lib/content';

export function Process() {
  return (
    <Section id="process" labelledBy="process-title" className="bg-bg-elevated/40">
      <SectionHeader
        eyebrow="How it works"
        id="process-title"
        title="A short path from chaos to compounding systems."
        lead="No six-month discovery. We move in tight cycles and put something working in front of you fast."
      />
      <Reveal group className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <RevealItem key={s.n}>
            <div className="group h-full bg-bg p-7 transition-colors duration-300 hover:bg-surface">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-subtle">{s.n}</span>
                <s.icon className="h-5 w-5 text-muted transition-colors group-hover:text-accent" aria-hidden="true" />
              </div>
              <h3 className="mt-8 text-display-sm">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
