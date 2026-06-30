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
    label: 'Сотрудников на рутинной работе',
    min: 1,
    max: 50,
    step: 1,
    format: (v) => formatNumber(v),
  },
  {
    key: 'hourlyCost',
    label: 'Средняя стоимость часа сотрудника',
    min: 300,
    max: 5000,
    step: 100,
    format: (v) => `${formatNumber(v)} ₽`,
  },
  {
    key: 'hoursWasted',
    label: 'Часов в неделю на ручные задачи у каждого',
    min: 2,
    max: 30,
    step: 1,
    format: (v) => `${v} ч`,
  },
];

// Conservative assumption: automation removes ~65% of the measured manual hours.
const AUTOMATION_RATE = 0.65;
const WEEKS_PER_YEAR = 48;

export function RoiCalculator() {
  const sliderId = useId();
  const [values, setValues] = useState({
    employees: 6,
    hourlyCost: 800,
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
        eyebrow="ROI-калькулятор"
        id="roi-title"
        title="Посмотрите, во что обходится ручная работа."
        lead="Консервативная оценка: возвращаем 65% рутинных часов. Подвигайте ползунки."
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
              Оценка экономии в год
            </p>
            <p className="mt-4 font-mono text-5xl font-semibold tracking-tight text-fg sm:text-6xl">
              {formatCurrencyCompact(result.annualSavings)}
            </p>
            <p className="mt-4 text-muted">
              Это около{' '}
              <span className="font-medium text-fg">
                {formatNumber(result.annualHours)} часов
              </span>{' '}
              , которые команда возвращает себе каждый год — время на рост
              бизнеса вместо его обслуживания.
            </p>
          </div>
          <Button asChild size="lg" className="mt-8 w-full sm:w-fit">
            <Link href="/book">
              Превратить в план
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </div>

      <p className="mt-6 max-w-prose text-xs text-subtle">
        Оценки иллюстративны и зависят от ваших процессов. Точную цифру мы
        считаем с вами на стратегической сессии.
      </p>
    </Section>
  );
}
