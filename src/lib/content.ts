/**
 * Single source of truth for all marketing content.
 * Sections import from here so copy and data never duplicate.
 */
import type { LucideIcon } from 'lucide-react';
import {
  Bot,
  Users,
  Workflow,
  LineChart,
  Headphones,
  PhoneCall,
  MessagesSquare,
  Cog,
  Sparkles,
  BookOpen,
  Globe,
  LayoutTemplate,
  Plug,
  Gauge,
  Boxes,
  Building2,
  Home,
  Hotel,
  Stethoscope,
  HardHat,
  Scale,
  Megaphone,
  Rocket,
  ShoppingCart,
} from 'lucide-react';

/* ── Hero ───────────────────────────────────────────────── */
export const hero = {
  eyebrow: 'AI Automation Studio',
  title: ['Put the repetitive', 'work on autopilot.'],
  subtitle:
    'We design AI systems that capture every lead, answer every customer, and run the operations your team shouldn’t. You keep the margin.',
  primaryCta: 'Book a strategy session',
  secondaryCta: 'See how it works',
} as const;

/* ── Stats / outcomes ───────────────────────────────────── */
export type Stat = { value: number; suffix: string; label: string; prefix?: string };
export const stats: Stat[] = [
  { value: 42, suffix: '%', label: 'Lower operational cost on automated workflows' },
  { value: 3.1, suffix: '×', label: 'More qualified leads handled per rep' },
  { value: 24, suffix: '/7', label: 'Coverage across calls, chat, and email' },
  { value: 9, suffix: ' days', label: 'Median time from kickoff to first system live' },
];

/* ── Logo cloud ─────────────────────────────────────────── */
export const trustedBy: string[] = [
  'Northbridge',
  'Meridian Clinics',
  'Vance & Cole',
  'Harbor Realty',
  'Lumen Retail',
  'Atlas Construction',
  'Sierra Hotels',
  'Foundry Labs',
];

/* ── Pain points ────────────────────────────────────────── */
export type Pain = { problem: string; cost: string };
export const pains: Pain[] = [
  {
    problem: 'Leads wait hours for a reply',
    cost: 'and book with whoever answered first.',
  },
  {
    problem: 'Your team drowns in repetitive tickets',
    cost: 'instead of the work that actually grows revenue.',
  },
  {
    problem: 'After-hours enquiries go unanswered',
    cost: 'so demand quietly leaks out of the funnel.',
  },
  {
    problem: 'Knowledge lives in five tools and three heads',
    cost: 'and nothing scales past the people who hold it.',
  },
];

/* ── Transformation (before / after) ────────────────────── */
export const transformation = {
  before: [
    'Manual follow-up, missed at night and on weekends',
    'Reps re-typing the same answers all day',
    'No record of why a deal stalled',
    'Hiring more people to handle more volume',
  ],
  after: [
    'Every lead answered in seconds, any hour',
    'AI handles the repetitive 80%, people handle the rest',
    'Every interaction logged, searchable, and improving',
    'Volume scales without the headcount curve',
  ],
} as const;

/* ── Process / how it works ─────────────────────────────── */
export type Step = { n: string; title: string; body: string; icon: LucideIcon };
export const steps: Step[] = [
  {
    n: '01',
    title: 'Map',
    body: 'We audit your workflows and find where time and revenue leak. You get a prioritised automation roadmap — no jargon.',
    icon: Gauge,
  },
  {
    n: '02',
    title: 'Design',
    body: 'We architect the system around your tools and your numbers, then agree on the outcome before a line of code ships.',
    icon: Boxes,
  },
  {
    n: '03',
    title: 'Build',
    body: 'We deploy and integrate into your stack — CRM, calendar, phone, inbox — and test against real cases until it’s reliable.',
    icon: Cog,
  },
  {
    n: '04',
    title: 'Scale',
    body: 'We monitor, tune, and expand. Your systems compound: more coverage, lower cost, better data, every month.',
    icon: LineChart,
  },
];

/* ── Services ───────────────────────────────────────────── */
export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  featured?: boolean;
};
export const services: Service[] = [
  { title: 'AI Agents', description: 'Autonomous agents that complete multi-step work across your tools.', icon: Bot, featured: true },
  { title: 'AI Employees', description: 'Always-on digital teammates for sales, support, and operations.', icon: Users },
  { title: 'CRM Automation', description: 'Enrichment, routing, and follow-up that keeps your pipeline clean.', icon: Workflow },
  { title: 'AI Sales Systems', description: 'Qualify, nurture, and book — from first touch to closed deal.', icon: LineChart, featured: true },
  { title: 'AI Customer Support', description: 'Resolve the repetitive 80% instantly, escalate the rest with context.', icon: Headphones },
  { title: 'AI Voice Agents', description: 'Natural-sounding agents that answer and place calls 24/7.', icon: PhoneCall },
  { title: 'AI Chatbots', description: 'On-brand assistants on your site that convert visitors into bookings.', icon: MessagesSquare },
  { title: 'Process Automation', description: 'Remove the manual handoffs between your apps and teams.', icon: Cog },
  { title: 'GPT Solutions', description: 'Custom models grounded in your data, your tone, your rules.', icon: Sparkles, featured: true },
  { title: 'Knowledge Bases', description: 'Internal AI search so answers live in one place, not five.', icon: BookOpen },
  { title: 'Websites & Landing Pages', description: 'Fast, conversion-built pages that match this level of polish.', icon: LayoutTemplate },
  { title: 'API Integrations', description: 'Connect anything to anything with reliable, monitored pipelines.', icon: Plug },
  { title: 'Dashboards', description: 'Live operational visibility your leadership will actually use.', icon: Globe },
  { title: 'Custom Software', description: 'Bespoke tools when off-the-shelf can’t carry the workflow.', icon: Boxes },
];

/* ── Industries ─────────────────────────────────────────── */
export type Industry = { name: string; outcome: string; icon: LucideIcon };
export const industries: Industry[] = [
  { name: 'Real Estate', outcome: 'Instant lead response and viewing scheduling', icon: Home },
  { name: 'Hotels', outcome: 'Round-the-clock booking and concierge', icon: Hotel },
  { name: 'Medical Clinics', outcome: 'Reminders, intake, and front-desk triage', icon: Stethoscope },
  { name: 'Construction', outcome: 'Quote intake and subcontractor coordination', icon: HardHat },
  { name: 'Law Firms', outcome: 'Client intake and document automation', icon: Scale },
  { name: 'Marketing Agencies', outcome: 'Reporting and client comms on autopilot', icon: Megaphone },
  { name: 'Startups', outcome: 'Lean ops that scale without headcount', icon: Rocket },
  { name: 'E-commerce', outcome: 'Support, recovery, and order automation', icon: ShoppingCart },
  { name: 'SMBs', outcome: 'Enterprise leverage on a small-team budget', icon: Building2 },
];

/* ── Case studies ───────────────────────────────────────── */
export type CaseStudy = {
  industry: string;
  title: string;
  metric: string;
  metricLabel: string;
  body: string;
};
export const caseStudies: CaseStudy[] = [
  {
    industry: 'Real Estate',
    title: 'A 30-agent brokerage stopped losing night-time leads',
    metric: '+38%',
    metricLabel: 'booked viewings',
    body: 'An AI voice and chat agent now answers every enquiry in seconds, qualifies intent, and books viewings straight into agent calendars.',
  },
  {
    industry: 'Medical',
    title: 'A multi-site clinic cut no-shows and front-desk load',
    metric: '−61%',
    metricLabel: 'no-show rate',
    body: 'Automated intake, reminders, and rescheduling freed the front desk for patients in the room instead of the phone.',
  },
  {
    industry: 'E-commerce',
    title: 'A retailer resolved most tickets before a human looked',
    metric: '74%',
    metricLabel: 'tickets auto-resolved',
    body: 'A support agent grounded in order data and policy now handles returns, tracking, and FAQs instantly — humans handle the edge cases.',
  },
];

/* ── Testimonials ───────────────────────────────────────── */
export type Testimonial = { quote: string; name: string; role: string };
export const testimonials: Testimonial[] = [
  {
    quote:
      'We replaced an entire shift of manual follow-up. Response times went from hours to seconds and our close rate followed.',
    name: 'Daniel Reyes',
    role: 'Managing Partner, Harbor Realty',
  },
  {
    quote:
      'It paid for itself in the first month. The team finally works on patients, not the phone.',
    name: 'Dr. Lena Whitfield',
    role: 'Director, Meridian Clinics',
  },
  {
    quote:
      'Axon understood the business before they touched the tech. That’s rare. The system just works.',
    name: 'Marcus Hale',
    role: 'COO, Lumen Retail',
  },
  {
    quote:
      'Clean, fast, and exactly what they promised. It feels like we hired a senior ops team overnight.',
    name: 'Sofia Brandt',
    role: 'Founder, Foundry Labs',
  },
];

/* ── Technology ─────────────────────────────────────────── */
export const technologies: string[] = [
  'OpenAI',
  'Anthropic',
  'Next.js',
  'Vercel',
  'Twilio',
  'Supabase',
  'n8n',
  'Zapier',
  'HubSpot',
  'Salesforce',
  'Postgres',
  'Pinecone',
];

/* ── FAQ ────────────────────────────────────────────────── */
export type Faq = { q: string; a: string };
export const faqs: Faq[] = [
  {
    q: 'How fast can we get a system live?',
    a: 'Most clients have their first system in production within 9 days of kickoff. We scope tightly, ship a working slice early, then expand from there.',
  },
  {
    q: 'Will this work with the tools we already use?',
    a: 'Yes. We integrate with your existing CRM, calendar, phone, and inbox rather than replacing them. If it has an API, we can connect it.',
  },
  {
    q: 'Is it actually reliable, or will it go off-script?',
    a: 'Every agent is grounded in your data and policy with guardrails and human-escalation paths. We test against real cases before anything touches a customer.',
  },
  {
    q: 'What does it cost?',
    a: 'Projects are scoped to outcomes, not hours. We size the investment to the cost or revenue you’re recovering, and you’ll see the model before you commit.',
  },
  {
    q: 'Do you only build for technical companies?',
    a: 'No. Most of our clients are owner-led businesses — clinics, brokerages, hotels, agencies. You bring the operations; we handle the engineering.',
  },
  {
    q: 'What happens after launch?',
    a: 'We monitor and tune continuously. Your systems improve with usage, and we expand coverage as you see results. You’re never left with an unsupported black box.',
  },
];

/* ── Final CTA ──────────────────────────────────────────── */
export const finalCta = {
  title: 'Stop paying people to do what AI can.',
  subtitle:
    'Book a strategy session. We’ll map where automation moves your numbers — and you’ll leave with a plan whether or not we work together.',
  cta: 'Book a strategy session',
} as const;
