'use client';

import { useId, useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { clamp, formatCurrencyCompact, formatNumber } from '@/lib/utils';

type Field = {
  key: 'employees' | 'hourlyCost' | 'hoursWasted';
  label: string;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
};

const FIELDS: Field[] = [
  {
    key: 'employees',
    label: 'People doing repetitive work',
    min: 1,
    max: 50,
    step: 1,
    format: (v) => formatNumber(v),
  },
  {
    key: 'hourlyCost',
    label: 'Average fully-loaded hourly cost',
    min: 15,
    max: 120,
    step: 5,
    format: (v) => `$${v}`,
  },
  {
    key: 'hoursWasted',
    label: 'Hours/week each loses to manual tasks',
    min: 2,
    max: 30,
    step: 1,
    format: (v) => `${v}h`,
  },
];

// Conservative assumption: automation removes ~65% of the measured manual hours.
const AUTOMATION_RATE = 0.65;
const WEEKS_PER_YEAR = 48;

export function RoiCalculator() {
  const sliderId = useId();
  const [values, setValues] = useState({
    employees: 6,
    hourlyCost: 45,
    hoursWasted: 12,
  });

  const result = useMemo(() => {
    const weeklyHours = values.employees * values.hoursWasted;
    const reclaimedHours = weeklyHours * AUTOMATION_RATE;
    const annualSavings =
      reclaimedHours * values.hourlyCost * WEEKS_PER_YEAR;
    const annualHours = Math.round(reclaimedHours * WEEKS_PER_YEAR);
    return { annualSavings, annualHours };
  }, [values]);

  return (
    <Section id="roi" labelledBy="roi-title">
      <SectionHeader
        eyebrow="ROI calculator"
        id="roi-title"
        title="See what manual work is costing you."
        lead="A conservative estimate based on recovering 65% of repetitive hours. Move the sliders."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Inputs */}
        <Reveal className="card p-7 sm:p-9">
          <div className="flex flex-col gap-9">
            {FIELDS.map((f) => {
              const id = `${sliderId}-${f.key}`;
              const value = values[f.key];
              const pct = ((value - f.min) / (f.max - f.min)) * 100;
              return (
                <div key={f.key}>
                  <div className="flex items-center justify-between">
                    <label htmlFor={id} className="text-sm text-muted">
                      {f.label}
                    </label>
                    <span className="font-mono text-base font-medium text-fg">
                      {f.format(value)}
                    </span>
                  </div>
                  <input
                    id={id}
                    type="range"
                    min={f.min}
                    max={f.max}
                    step={f.step}
                    value={value}
                    onChange={(e) =>
                      setValues((v) => ({
                        ...v,
                        [f.key]: clamp(Number(e.target.value), f.min, f.max),
                      }))
                    }
                    aria-valuetext={f.format(value)}
                    className="roi-slider mt-4 w-full"
                    style={{
                      background: `linear-gradient(to right, hsl(var(--accent)) ${pct}%, hsl(var(--border)) ${pct}%)`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Result */}
        <Reveal
          delay={0.08}
          className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-accent-muted bg-[linear-gradient(160deg,hsl(var(--accent)/0.1),transparent_55%)] p-7 shadow-glow sm:p-9"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-accent">
              Estimated annual saving
            </p>
            <p className="mt-4 font-mono text-5xl font-semibold tracking-tight text-fg sm:text-6xl">
              {formatCurrencyCompact(result.annualSavings)}
            </p>
            <p className="mt-4 text-muted">
              That&apos;s about{' '}
              <span className="font-medium text-fg">
                {formatNumber(result.annualHours)} hours
              </span>{' '}
              returned to your team every year — time they can spend growing the
              business instead of maintaining it.
            </p>
          </div>
          <Button asChild size="lg" className="mt-8 w-full sm:w-fit">
            <Link href="/book">
              Turn this into a plan
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </div>

      <p className="mt-6 max-w-prose text-xs text-subtle">
        Estimates are illustrative and depend on your workflows. We validate the
        real number with you during the strategy session.
      </p>
    </Section>
  );
}
