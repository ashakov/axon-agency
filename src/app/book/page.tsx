import type { Metadata } from 'next';
import { BookView } from '@/components/sections/BookView';

export const metadata: Metadata = {
  title: 'Book a strategy session',
  description:
    'Book a free strategy session with Axon. We map where AI automation moves your revenue and cost — and you leave with a plan, with zero obligation.',
  alternates: { canonical: '/book' },
};

export default function BookPage() {
  return (
    <main id="main" className="relative min-h-screen overflow-hidden">
      <BookView />
    </main>
  );
}
