import Link from 'next/link';
import { site, navLinks } from '@/lib/site';
import { services } from '@/lib/content';
import { Logo } from './Logo';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-bg-elevated">
      <div className="container-content py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm text-muted">{site.description}</p>
            <a
              href={`mailto:${site.email}`}
              className="w-fit text-sm text-fg underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
          </div>

          <nav aria-label="Site" className="flex flex-col gap-3">
            <h2 className="text-xs font-medium uppercase tracking-wider text-subtle">
              Navigate
            </h2>
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-muted transition-colors hover:text-fg"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <nav aria-label="Services" className="flex flex-col gap-3">
            <h2 className="text-xs font-medium uppercase tracking-wider text-subtle">
              Services
            </h2>
            {services.slice(0, 6).map((s) => (
              <Link
                key={s.title}
                href="#services"
                className="text-sm text-muted transition-colors hover:text-fg"
              >
                {s.title}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <h2 className="text-xs font-medium uppercase tracking-wider text-subtle">
              Company
            </h2>
            <a href={site.social.linkedin} className="text-sm text-muted transition-colors hover:text-fg" rel="noopener noreferrer" target="_blank">
              LinkedIn
            </a>
            <a href={site.social.x} className="text-sm text-muted transition-colors hover:text-fg" rel="noopener noreferrer" target="_blank">
              X / Twitter
            </a>
            <Link href="/book" className="text-sm text-muted transition-colors hover:text-fg">
              Book a session
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-subtle sm:flex-row sm:items-center">
          <p>
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
          <p className="font-mono text-xs">Built for outcomes, not demos.</p>
        </div>
      </div>
    </footer>
  );
}
