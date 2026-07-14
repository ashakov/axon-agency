/** Centralised brand + site configuration (locale-neutral). */
export const site = {
  name: 'Axon',
  legalName: 'Axon Automation',
  tagline: 'AI systems that run your business.',
  description:
    'Axon designs and deploys AI systems that grow revenue, cut operating cost, and remove repetitive work — built for businesses that want outcomes, not experiments.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://axonstudio.qzz.io',
  telegramUrl: process.env.NEXT_PUBLIC_TELEGRAM_URL ?? 'https://t.me/arshakua',
  email: 'hello@axon.agency',
  locale: 'en_US',
  founded: '2023',
  social: {
    linkedin: 'https://www.linkedin.com/company/axon-automation',
    x: 'https://x.com/axonautomation',
  },
} as const;
