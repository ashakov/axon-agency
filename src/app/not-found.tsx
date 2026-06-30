import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/layout/Logo';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <Logo />
      <p className="mt-10 font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-display-md text-gradient">This page took the day off.</h1>
      <p className="mt-4 max-w-md text-muted">
        The link may be broken or the page may have moved. Let&apos;s get you back
        to something useful.
      </p>
      <Button asChild size="lg" className="mt-8">
        <Link href="/">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </Button>
    </main>
  );
}
