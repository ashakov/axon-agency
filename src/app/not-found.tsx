'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/layout/Logo';
import { useDictionary } from '@/components/i18n/LocaleProvider';

export default function NotFound() {
  const t = useDictionary();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <Logo />
      <p className="mt-10 font-mono text-sm text-accent">{t.notFound.code}</p>
      <h1 className="mt-3 text-display-md text-gradient">{t.notFound.title}</h1>
      <p className="mt-4 max-w-md text-muted">{t.notFound.body}</p>
      <Button asChild size="lg" className="mt-8">
        <Link href="/">
          <ArrowLeft className="h-4 w-4" />
          {t.notFound.back}
        </Link>
      </Button>
    </main>
  );
}
