/** Centralised brand + site configuration. Rename the brand in one place. */
export const site = {
  name: 'Axon',
  legalName: 'Axon Automation',
  tagline: 'AI systems that run your business.',
  description:
    'Axon designs and deploys AI systems that grow revenue, cut operating cost, and remove repetitive work — built for businesses that want outcomes, not experiments.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://axon.agency',
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ??
    'https://calendly.com/axon/strategy-session',
  email: 'hello@axon.agency',
  locale: 'en_US',
  founded: '2023',
  social: {
    linkedin: 'https://www.linkedin.com/company/axon-automation',
    x: 'https://x.com/axonautomation',
  },
} as const;

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'How it works', href: '#process' },
  { label: 'Industries', href: '#industries' },
  { label: 'ROI', href: '#roi' },
  { label: 'Work', href: '#work' },
  { label: 'FAQ', href: '#faq' },
];
