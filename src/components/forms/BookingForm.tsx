'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Loader2, CalendarCheck } from 'lucide-react';
import {
  bookingSchema,
  type BookingInput,
  COMPANY_SIZES,
  GOALS,
} from '@/lib/booking-schema';
import { submitBooking } from '@/app/actions/book';
import { Button } from '@/components/ui/Button';
import { site } from '@/lib/site';
import { cn } from '@/lib/utils';

type FieldName = keyof BookingInput;
const STEPS: { title: string; fields: FieldName[] }[] = [
  { title: 'О вас', fields: ['name', 'email', 'company'] },
  { title: 'Ваш бизнес', fields: ['companySize', 'goal'] },
  { title: 'Детали', fields: ['details'] },
];

export function BookingForm() {
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    mode: 'onBlur',
    defaultValues: { website: '', details: '' },
  });

  const goal = watch('goal');
  const companySize = watch('companySize');

  // Auto-redirect to Telegram shortly after success.
  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => {
      window.location.href = site.telegramUrl;
    }, 2600);
    return () => clearTimeout(t);
  }, [done]);

  async function next() {
    const fields = STEPS[step]?.fields ?? [];
    const valid = await trigger(fields);
    if (valid) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  const submitFinal = handleSubmit(async (data) => {
    setSubmitting(true);
    setServerError(null);
    const fd = new FormData();
    Object.entries(data).forEach(([k, v]) => fd.append(k, String(v ?? '')));
    const res = await submitBooking({ status: 'idle' }, fd);
    setSubmitting(false);
    if (res.status === 'success') {
      setDone(true);
    } else {
      setServerError(
        res.status === 'error'
          ? res.message
          : 'Что-то пошло не так. Попробуйте ещё раз.',
      );
    }
  });

  // Guard against implicit submission (e.g. pressing Enter): only the final
  // step actually submits; earlier steps advance instead.
  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (step < STEPS.length - 1) {
      void next();
      return;
    }
    void submitFinal();
  }

  if (done) {
    return (
      <div className="card flex flex-col items-center gap-5 p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
          <CalendarCheck className="h-7 w-7" aria-hidden="true" />
        </span>
        <h2 className="text-display-sm">Готово.</h2>
        <p className="max-w-sm text-muted">
          Мы получили ваши данные. Сейчас откроем Telegram — если он
          не откроется автоматически, нажмите кнопку ниже.
        </p>
        <Button asChild size="lg">
          <a href={site.telegramUrl}>Написать в Telegram</a>
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleFormSubmit} noValidate className="card p-6 sm:p-8">
      {/* Progress */}
      <div className="mb-8 flex items-center gap-2" aria-hidden="true">
        {STEPS.map((s, i) => (
          <div
            key={s.title}
            className={cn(
              'h-1 flex-1 rounded-full transition-colors duration-300',
              i <= step ? 'bg-accent' : 'bg-border',
            )}
          />
        ))}
      </div>
      <p className="mb-6 text-sm text-subtle">
        Шаг {step + 1} из {STEPS.length} · {STEPS[step]?.title}
      </p>

      {/* Honeypot (visually hidden, off the a11y tree) */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Оставьте поле пустым</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-5"
        >
          {step === 0 && (
            <>
              <TextField label="Имя" error={errors.name?.message} {...register('name')} autoComplete="name" />
              <TextField label="Рабочая почта" type="email" error={errors.email?.message} {...register('email')} autoComplete="email" />
              <TextField label="Компания" error={errors.company?.message} {...register('company')} autoComplete="organization" />
            </>
          )}

          {step === 1 && (
            <>
              <ChipGroup
                label="Размер компании"
                name="companySize"
                options={COMPANY_SIZES}
                selected={companySize}
                error={errors.companySize?.message}
                register={register('companySize')}
              />
              <ChipGroup
                label="Что в приоритете?"
                name="goal"
                options={GOALS}
                selected={goal}
                error={errors.goal?.message}
                register={register('goal')}
              />
            </>
          )}

          {step === 2 && (
            <div className="flex flex-col gap-2">
              <label htmlFor="details" className="text-sm font-medium text-fg">
                Что нам важно знать? <span className="text-subtle">(необязательно)</span>
              </label>
              <textarea
                id="details"
                rows={5}
                {...register('details')}
                placeholder="Какие сервисы используете, какой процесс съедает время, примерные сроки…"
                className="w-full resize-none rounded-lg border border-border bg-bg-elevated px-4 py-3 text-fg placeholder:text-subtle focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {serverError ? (
        <p role="alert" className="mt-5 text-sm text-warning">
          {serverError}
        </p>
      ) : null}

      <div className="mt-8 flex items-center justify-between gap-3">
        {step > 0 ? (
          <Button type="button" variant="ghost" onClick={back}>
            <ArrowLeft className="h-4 w-4" />
            Назад
          </Button>
        ) : (
          <span />
        )}

        {step < STEPS.length - 1 ? (
          <Button type="button" onClick={next}>
            Далее
            <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button type="submit" disabled={submitting}>
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Отправляем…
              </>
            ) : (
              <>
                Оставить заявку
                <Check className="h-4 w-4" />
              </>
            )}
          </Button>
        )}
      </div>
    </form>
  );
}

/* ── Field primitives ───────────────────────────────────── */

const TextField = ({
  label,
  error,
  type = 'text',
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
}) => {
  const id = props.name;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-fg">
        {label}
      </label>
      <input
        id={id}
        type={type}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          'h-12 w-full rounded-lg border bg-bg-elevated px-4 text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          error ? 'border-warning' : 'border-border focus-visible:border-accent',
        )}
        {...props}
      />
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-sm text-warning">
          {error}
        </p>
      ) : null}
    </div>
  );
};

function ChipGroup({
  label,
  name,
  options,
  selected,
  error,
  register,
}: {
  label: string;
  name: string;
  options: readonly string[];
  selected?: string;
  error?: string;
  register: ReturnType<ReturnType<typeof useForm<BookingInput>>['register']>;
}) {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="text-sm font-medium text-fg">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const id = `${name}-${opt}`;
          const active = selected === opt;
          return (
            <label
              key={opt}
              htmlFor={id}
              className={cn(
                'cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors duration-200',
                active
                  ? 'border-accent bg-accent/15 text-fg'
                  : 'border-border bg-bg-elevated text-muted hover:border-border-strong hover:text-fg',
              )}
            >
              <input
                id={id}
                type="radio"
                value={opt}
                className="sr-only"
                {...register}
              />
              {opt}
            </label>
          );
        })}
      </div>
      {error ? (
        <p role="alert" className="text-sm text-warning">
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}
