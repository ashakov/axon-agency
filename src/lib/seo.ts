import { site } from './site';
import { services, faqs } from './content';

/** Organisation + website JSON-LD for rich results. */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    email: site.email,
    description: site.description,
    foundingDate: site.founded,
    sameAs: [site.social.linkedin, site.social.x],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: site.email,
      availableLanguage: ['Russian'],
    },
  };
}

/** ProfessionalService with the full service catalogue. */
export function serviceJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.legalName,
    url: site.url,
    description: site.description,
    areaServed: 'Россия и СНГ',
    serviceType: 'AI-автоматизация и разработка ПО',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Automation Services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, description: s.description },
      })),
    },
  };
}

/** FAQPage JSON-LD generated from the on-page FAQ. */
export function faqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
