'use client';

import { Marquee } from '@/components/ui/Marquee';
import { Container } from '@/components/ui/Container';
import { useDictionary } from '@/components/i18n/LocaleProvider';

export function LogoCloud() {
  const t = useDictionary();
  return (
    <section aria-label={t.logoCloud.ariaLabel} className="border-y border-border bg-bg-elevated/40 py-10">
      <Container className="flex flex-col items-center gap-6">
        <p className="text-xs uppercase tracking-[0.18em] text-subtle">
          {t.logoCloud.caption}
        </p>
        <Marquee items={t.logoCloud.items} className="w-full" />
      </Container>
    </section>
  );
}
