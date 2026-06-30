import { site } from '@/lib/site';
import { cn } from '@/lib/utils';

/** Geometric wordmark — abstract "axon" node + branch, no literal AI imagery. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden="true"
        className="text-accent"
      >
        <circle cx="5" cy="11" r="2.4" fill="currentColor" />
        <circle cx="17" cy="5" r="1.8" fill="currentColor" opacity="0.85" />
        <circle cx="17" cy="17" r="1.8" fill="currentColor" opacity="0.85" />
        <path
          d="M6.8 9.8 15.4 5.8M6.8 12.2 15.4 16.2"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-[1.0625rem] font-semibold tracking-tight text-fg">
        {site.name}
      </span>
    </span>
  );
}
