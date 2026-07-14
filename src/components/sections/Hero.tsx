'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { NeuralCanvas } from '@/components/visuals/NeuralCanvas';
import { AnimatedNumber } from '@/components/ui/AnimatedNumber';
import { easeOutExpo } from '@/lib/animation';
import { useDictionary } from '@/components/i18n/LocaleProvider';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOutExpo } },
};

export function Hero() {
  const t = useDictionary();
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="hero-title">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20%] h-[640px] w-[940px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--accent)/0.12),transparent_70%)] blur-2xl" />
        <div className="absolute inset-0 noise opacity-70" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 mask-fade-b opacity-90">
        <NeuralCanvas className="h-full w-full" />
      </div>

      <div className="container-content flex min-h-[88vh] flex-col justify-center pb-24 pt-36 sm:min-h-[92vh] sm:pt-40">
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.div variants={item}>
            <Badge dot>{t.hero.badge}</Badge>
          </motion.div>

          <motion.h1 id="hero-title" variants={item} className="mt-7 text-display-xl text-gradient">
            {t.hero.titleLine1}
            <br />
            <span className="text-fg">{t.hero.titleLine2}</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lead text-muted">
            {t.hero.subtitle}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <MagneticButton className="inline-block">
              <Button asChild size="lg">
                <Link href="/book">
                  {t.hero.primaryCta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                </Link>
              </Button>
            </MagneticButton>
            <Button asChild size="lg" variant="secondary">
              <Link href="#process">
                <Play className="h-4 w-4" />
                {t.hero.secondaryCta}
              </Link>
            </Button>
          </motion.div>

          <motion.p variants={item} className="mt-5 text-sm text-subtle">
            {t.hero.reassurance}
          </motion.p>
        </motion.div>

        <motion.dl
          variants={item}
          initial="hidden"
          animate="visible"
          className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-border pt-10 sm:mt-20 lg:grid-cols-4"
        >
          {t.stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1.5">
              <dt className="font-mono text-3xl font-medium tracking-tight text-fg sm:text-4xl">
                {s.prefix}
                <AnimatedNumber value={s.value} />
                <span className="text-accent">{s.suffix}</span>
              </dt>
              <dd className="text-sm leading-snug text-muted">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
