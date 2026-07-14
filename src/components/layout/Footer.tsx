'use client';

import Link from 'next/link';
import { site } from '@/lib/site';
import { Logo } from './Logo';
import { useDictionary } from '@/components/i18n/LocaleProvider';

export function Footer() {
  const t = useDictionary();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-bg-elevated">
      <div className="container-content py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm text-muted">{t.meta.description}</p>
            <a
              href={`mailto:${site.email}`}
              className="w-fit text-sm text-fg underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
          </div>

          <nav aria-label={t.footer.navigate} className="flex flex-col gap-3">
            <h2 className="text-xs font-medium uppercase tracking-wider text-subtle">
              {t.footer.navigate}
            </h2>
            {t.nav.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-muted transition-colors hover:text-fg"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <nav aria-label={t.footer.services} className="flex flex-col gap-3">
            <h2 className="text-xs font-medium uppercase tracking-wider text-subtle">
              {t.footer.services}
            </h2>
            {t.services.items.slice(0, 6).map((s) => (
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
              {t.footer.company}
            </h2>
            <a href={site.social.linkedin} className="text-sm text-muted transition-colors hover:text-fg" rel="noopener noreferrer" target="_blank">
              {t.footer.linkedin}
            </a>
            <a href={site.social.x} className="text-sm text-muted transition-colors hover:text-fg" rel="noopener noreferrer" target="_blank">
              {t.footer.x}
            </a>
            <Link href="/book" className="text-sm text-muted transition-colors hover:text-fg">
              {t.footer.bookSession}
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-subtle sm:flex-row sm:items-center">
          <p>
            &copy; {year} {site.legalName}. {t.footer.rights}
          </p>
          <p className="font-mono text-xs">{t.footer.kicker}</p>
        </div>
      </div>
    </footer>
  );
}
