/** Центральная конфигурация бренда и сайта. Переименование — в одном месте. */
export const site = {
  name: 'Axon',
  legalName: 'Axon Automation',
  tagline: 'AI-системы, которые ведут ваш бизнес.',
  description:
    'Axon проектирует и внедряет AI-системы, которые растят выручку, снижают издержки и убирают рутину — для бизнеса, которому нужен результат, а не эксперименты.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://axonstudio.qzz.io',
  telegramUrl:
    process.env.NEXT_PUBLIC_TELEGRAM_URL ??
    'https://t.me/your_username',
  email: 'hello@axon.agency',
  locale: 'ru_RU',
  founded: '2023',
  social: {
    linkedin: 'https://www.linkedin.com/company/axon-automation',
    x: 'https://x.com/axonautomation',
  },
} as const;

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: 'Услуги', href: '#services' },
  { label: 'Как работаем', href: '#process' },
  { label: 'Индустрии', href: '#industries' },
  { label: 'ROI', href: '#roi' },
  { label: 'Кейсы', href: '#work' },
  { label: 'FAQ', href: '#faq' },
];
