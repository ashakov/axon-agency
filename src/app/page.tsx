import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StickyCta } from '@/components/layout/StickyCta';
import { Hero } from '@/components/sections/Hero';
import { LogoCloud } from '@/components/sections/LogoCloud';
import { Outcomes } from '@/components/sections/Outcomes';
import { PainPoints } from '@/components/sections/PainPoints';
import { Transformation } from '@/components/sections/Transformation';
import { Process } from '@/components/sections/Process';
import { Services } from '@/components/sections/Services';
import { Industries } from '@/components/sections/Industries';
import { RoiCalculator } from '@/components/sections/RoiCalculator';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { Testimonials } from '@/components/sections/Testimonials';
import { Technology } from '@/components/sections/Technology';
import { Faq } from '@/components/sections/Faq';
import { FinalCta } from '@/components/sections/FinalCta';
import { faqJsonLd } from '@/lib/seo';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <LogoCloud />
        <Outcomes />
        <PainPoints />
        <Transformation />
        <Process />
        <Services />
        <Industries />
        <RoiCalculator />
        <CaseStudies />
        <Testimonials />
        <Technology />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />
    </>
  );
}
