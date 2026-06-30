import { Check, Minus } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { transformation } from '@/lib/content';

export function Transformation() {
  return (
    <Section id="transformation" labelledBy="transformation-title">
      <SectionHeader
        eyebrow="Сдвиг"
        id="transformation-title"
        title="От работы на людях — к работе на системах."
        align="center"
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <Reveal className="rounded-xl border border-border bg-surface/40 p-7 sm:p-9">
          <p className="text-xs uppercase tracking-[0.18em] text-subtle">До</p>
          <ul className="mt-6 flex flex-col gap-4">
            {transformation.before.map((b) => (
              <li key={b} className="flex items-start gap-3 text-muted">
                <Minus className="mt-1 h-4 w-4 shrink-0 text-subtle" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal
          delay={0.08}
          className="relative overflow-hidden rounded-xl border border-accent-muted bg-[linear-gradient(135deg,hsl(var(--accent)/0.08),transparent_60%)] p-7 shadow-glow sm:p-9"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-accent">После</p>
          <ul className="mt-6 flex flex-col gap-4">
            {transformation.after.map((a) => (
              <li key={a} className="flex items-start gap-3 text-fg">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
