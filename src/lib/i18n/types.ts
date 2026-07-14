import type { LucideIcon } from 'lucide-react';

export type Stat = { value: number; suffix: string; label: string; prefix?: string };
export type Pillar = { icon: LucideIcon; title: string; body: string };
export type Pain = { problem: string; cost: string };
export type Step = { n: string; title: string; body: string; icon: LucideIcon };
export type Service = { title: string; description: string; icon: LucideIcon; featured?: boolean };
export type Industry = { name: string; outcome: string; icon: LucideIcon };
export type CaseStudy = {
  industry: string;
  title: string;
  metric: string;
  metricLabel: string;
  body: string;
};
export type Testimonial = { quote: string; name: string; role: string };
export type Faq = { q: string; a: string };
export type RoiField = {
  key: 'employees' | 'hourlyCost' | 'hoursWasted';
  label: string;
  min: number;
  max: number;
  step: number;
  unit: 'number' | 'currency' | 'hours';
};

export interface Dictionary {
  meta: { tagline: string; description: string };
  nav: {
    links: { label: string; href: string }[];
    bookCall: string;
    getStarted: string;
    bookSession: string;
    home: string;
    primary: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    reassurance: string;
  };
  stats: Stat[];
  logoCloud: { caption: string; ariaLabel: string; items: string[] };
  outcomes: { eyebrow: string; title: string; lead: string; pillars: Pillar[] };
  pains: { eyebrow: string; title: string; lead: string; items: Pain[] };
  transformation: {
    eyebrow: string;
    title: string;
    beforeLabel: string;
    afterLabel: string;
    before: string[];
    after: string[];
  };
  process: { eyebrow: string; title: string; lead: string; steps: Step[] };
  services: {
    eyebrow: string;
    title: string;
    lead: string;
    popular: string;
    items: Service[];
  };
  industries: { eyebrow: string; title: string; lead: string; items: Industry[] };
  roi: {
    eyebrow: string;
    title: string;
    lead: string;
    fields: RoiField[];
    currency: 'USD' | 'RUB';
    locale: string;
    defaults: { employees: number; hourlyCost: number; hoursWasted: number };
    resultLabel: string;
    hoursWord: string;
    resultDescPre: string;
    resultDescPost: string;
    cta: string;
    disclaimer: string;
  };
  caseStudies: { eyebrow: string; title: string; lead: string; items: CaseStudy[] };
  testimonials: { eyebrow: string; title: string; items: Testimonial[] };
  technology: { eyebrow: string; title: string; lead: string; items: string[] };
  leadMagnet: {
    eyebrow: string;
    title: string;
    subtitle: string;
    bullets: string[];
    cta: string;
    file: string;
    formLabel: string;
    placeholder: string;
    success: string;
    download: string;
    error: string;
    noSpam: string;
  };
  faq: { eyebrow: string; title: string; lead: string; items: Faq[] };
  finalCta: { title: string; subtitle: string; cta: string };
  footer: {
    navigate: string;
    services: string;
    company: string;
    linkedin: string;
    x: string;
    bookSession: string;
    rights: string;
    kicker: string;
  };
  stickyCta: string;
  book: {
    back: string;
    title: string;
    subtitle: string;
    reassurances: string[];
    prefEmail: string;
  };
  form: {
    steps: { title: string; fields: ('name' | 'email' | 'company' | 'companySize' | 'goal' | 'details')[] }[];
    stepLabel: string;
    stepOf: string;
    name: string;
    email: string;
    company: string;
    companySizeLabel: string;
    goalLabel: string;
    companySizes: string[];
    goals: string[];
    detailsLabel: string;
    optional: string;
    detailsPlaceholder: string;
    back: string;
    next: string;
    submit: string;
    submitting: string;
    genericError: string;
    doneTitle: string;
    doneBody: string;
    doneCta: string;
    errName: string;
    errEmail: string;
    errCompany: string;
    errSize: string;
    errGoal: string;
  };
  notFound: { code: string; title: string; body: string; back: string };
}
