import { cn } from '@/lib/utils';
import { Container } from './Container';

type SectionProps = {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  /** Render as <section aria-labelledby> for a11y when a heading id is given. */
  labelledBy?: string;
};

export function Section({
  id,
  className,
  containerClassName,
  children,
  labelledBy,
}: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn('section', className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

/** Small eyebrow + heading + lead cluster used at the top of most sections. */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  id,
  align = 'left',
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  id?: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow ? <span className="overline">{eyebrow}</span> : null}
      <h2 id={id} className="max-w-narrow text-display-md text-gradient">
        {title}
      </h2>
      {lead ? (
        <p className={cn('max-w-prose text-lead text-muted', align === 'center' && 'mx-auto')}>
          {lead}
        </p>
      ) : null}
    </div>
  );
}
