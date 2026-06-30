'use client';

import { motion, type Variants } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/animation';
import { cn } from '@/lib/utils';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** When true, children animate in sequence (use with RevealItem). */
  group?: boolean;
  as?: 'div' | 'ul' | 'li' | 'span';
  variants?: Variants;
};

/**
 * Scroll-triggered reveal. Respects reduced motion automatically because the
 * global CSS guardrail collapses transition/animation durations.
 *
 * RevealItem is a separate named export (not a static property on Reveal) so
 * it survives the React Server Component boundary intact.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  group = false,
  as = 'div',
  variants,
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      variants={variants ?? (group ? stagger : fadeUp)}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  children,
  className,
  as = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'li' | 'span';
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag className={className} variants={fadeUp}>
      {children}
    </MotionTag>
  );
}
