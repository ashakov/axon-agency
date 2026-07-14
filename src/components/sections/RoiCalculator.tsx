'use client';

import { useId, useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { clamp } from '@/lib/utils';
import { useDictionary } from '@/components/i18n/LocaleProvider';

const AUTOMATION_RATE = 0.65;
const WEEKS_PER_YEAR = 48;

export function RoiCalculator() {
  const t = useDictionary();
  const roi = t.roi;
  const sliderId = useId();
  const [values, setValues] = useState(roi.defaults);

  const nf = useMemo(
    () => new Intl.NumberFormat(roi.locale, { maximumFractionDigits: 0 }),
    [roi.locale],
  );
  const cf = useMemo(
    () =>
      new Intl.NumberFormat(roi.locale, {
        style: 'currency',
        currency: roi.currency,
        maximumFractionDigits: 0,
      }),
    [roi.locale, roi.currency],
  );
  const cfCompact = useMemo(
    () =>
      new Intl.NumberFormat(roi.locale, {
        style: 'currency',
        currency: roi.currency,
        notation: 'compact',
        maximumFractionDigits: 1,
      }),
    [roi.locale, roi.currency],
  );

  function fmt(unit: 'number' | 'currency' | 'hours', v: number): string {
    if (unit === 'currency') return cf.format(v);
    if (unit === 'hours') return `${v} ${roi.hoursWord}`;
    return nf.format(v);
  }

  const result = useMemo(() => {
    const weeklyHours = values.employees * values.hoursWasted;
    const reclaimedHours = weeklyHours * AUTOMATION_RATE;
    const annualSavings = reclaimedHours * values.hourlyCost * WEEKS_PER_YEAR;
    const annualHours = Math.round(reclaimedHours * WEEKS_PER_YEAR);
    return { annualSavings, annualHours };
  }, [values]);

  return (
    <Section id="roi" labelledBy="roi-title">
      <SectionHeader eyebrow={roi.eyebrow} id="roi-title" title={roi.title} lead={roi.lead} />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="card p-7 sm:p-9">
          <div className="flex flex-col gap-9">
            {roi.fields.map((f) => {
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
                      {fmt(f.unit, value)}
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
                    aria-valuetext={fmt(f.unit, value)}
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

        <Reveal
          delay={0.08}
          className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-accent-muted bg-[linear-gradient(160deg,hsl(var(--accent)/0.1),transparent_55%)] p-7 shadow-glow sm:p-9"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-accent">{roi.resultLabel}</p>
            <p className="mt-4 font-mono text-5xl font-semibold tracking-tight text-fg sm:text-6xl">
              {cfCompact.format(result.annualSavings)}
            </p>
            <p className="mt-4 text-muted">
              {roi.resultDescPre}{' '}
              <span className="font-medium text-fg">
                {nf.format(result.annualHours)} {roi.hoursWord}
              </span>
              {roi.resultDescPost}
            </p>
          </div>
          <Button asChild size="lg" className="mt-8 w-full sm:w-fit">
            <Link href="/book">
              {roi.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </div>

      <p className="mt-6 max-w-prose text-xs text-subtle">{roi.disclaimer}</p>
    </Section>
  );
}
