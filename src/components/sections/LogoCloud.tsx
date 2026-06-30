import { Marquee } from '@/components/ui/Marquee';
import { Container } from '@/components/ui/Container';
import { trustedBy } from '@/lib/content';

export function LogoCloud() {
  return (
    <section aria-label="Нам доверяют" className="border-y border-border bg-bg-elevated/40 py-10">
      <Container className="flex flex-col items-center gap-6">
        <p className="text-xs uppercase tracking-[0.18em] text-subtle">
          Тихо работаем внутри команд вроде этих
        </p>
        <Marquee items={trustedBy} className="w-full" />
      </Container>
    </section>
  );
}
