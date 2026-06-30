import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Reveal } from '@/components/ui/Reveal';
import { finalCta } from '@/lib/content';

export function FinalCta() {
  return (
    <section id="cta" aria-labelledby="cta-title" className="section">
      <Container>
        <Reveal className="relative isolate overflow-hidden rounded-2xl border border-border bg-bg-elevated px-6 py-16 text-center sm:px-12 sm:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-20%,hsl(var(--accent)/0.16),transparent_60%)]"
          />
          <h2 id="cta-title" className="mx-auto max-w-2xl text-display-md text-gradient">
            {finalCta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lead text-muted">
            {finalCta.subtitle}
          </p>
          <div className="mt-9 flex justify-center">
            <MagneticButton className="inline-block">
              <Button asChild size="lg">
                <Link href="/book">
                  {finalCta.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                </Link>
              </Button>
            </MagneticButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
