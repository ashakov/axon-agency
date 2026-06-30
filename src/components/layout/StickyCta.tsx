'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/** Mobile-only sticky CTA that appears after the hero scrolls away. */
export function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-3 bottom-3 z-40 transition-[opacity,transform] duration-300 ease-out-expo lg:hidden ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <Link
        href="/book"
        className="flex h-14 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-fg shadow-glow"
      >
        Book a strategy session
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
