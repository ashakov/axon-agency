import { cn } from '@/lib/utils';

/** Infinite, accessible marquee. Pauses on hover and for reduced motion. */
export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <div className={cn('mask-fade-x overflow-hidden', className)} aria-hidden="true">
      <div className="flex w-max animate-marquee gap-12 pr-12 hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-sm font-medium tracking-tight text-subtle"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
