# Axon — AI Automation Agency website

A production-ready, conversion-focused marketing site for an AI automation
agency. Built with the Next.js 15 App Router, TypeScript (strict), Tailwind, and
Framer Motion. Dark-first, editorial, accessible, and tuned for one goal:
**qualified consultation bookings.**

> **Brand is a placeholder.** Everything ("Axon", tagline, email, social) lives
> in `src/lib/site.ts`. Rename in one place and it propagates across the UI,
> metadata, JSON-LD, sitemap, and OG image.

---

## Quick start

```bash
pnpm install
cp .env.example .env.local   # then edit values
pnpm dev                     # http://localhost:3000
```

Other scripts:

```bash
pnpm build       # production build
pnpm start       # serve the production build
pnpm lint        # next lint (eslint)
pnpm typecheck   # tsc --noEmit (strict)
pnpm format      # prettier write
```

Node 18.18+ (tested on Node 22). Package manager: **pnpm**.

---

## Environment variables

All optional for local dev — the site runs with zero secrets.

| Variable                   | Purpose                                                        |
| -------------------------- | ------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`     | Canonical URL for metadata, sitemap, robots, OG.              |
| `NEXT_PUBLIC_CALENDLY_URL` | Where the booking form routes after qualification.            |
| `LEAD_NOTIFY_EMAIL`        | Where to forward qualified leads (used in the Server Action). |

---

## Architecture

Feature-based, no duplicated content. Copy and data live once in `src/lib`.

```
src/
├─ app/
│  ├─ layout.tsx            # fonts, metadata, JSON-LD, analytics
│  ├─ page.tsx              # home — composes sections in conversion order
│  ├─ book/page.tsx         # dedicated booking page
│  ├─ actions/book.ts       # 'use server' lead handler (validated)
│  ├─ globals.css           # design tokens + base + utilities
│  ├─ opengraph-image.tsx   # dynamic 1200×630 OG image
│  ├─ robots.ts · sitemap.ts · not-found.tsx
├─ components/
│  ├─ layout/   # Navbar, Footer, Logo, StickyCta (mobile)
│  ├─ sections/ # Hero … FinalCta (one file per section)
│  ├─ ui/       # Button, Badge, Card utils, Section, Reveal, Accordion, Dialog…
│  ├─ forms/    # BookingForm (multi-step, RHF + Zod)
│  └─ visuals/  # NeuralCanvas (animated hero topology)
├─ hooks/       # use-prefers-reduced-motion
└─ lib/         # site config, content data, seo (JSON-LD), animation presets, utils
```

### Page order (conversion-led)

Hero → Social proof → Outcomes → Pain → Transformation → Process → Services →
Industries → ROI calculator → Case studies → Testimonials → Technology → FAQ →
Final CTA → Footer. A mobile sticky CTA appears after the hero.

---

## Design system

Tokens are CSS variables in `globals.css`, surfaced through
`tailwind.config.ts` so utilities stay token-driven.

- **Color** — dark-first, single green accent. Optional light theme via
  `[data-theme='light']`.
- **Type** — Inter (display + body) and JetBrains Mono (figures), via
  `next/font`. Fluid editorial scale (`display-xl` … `overline`).
- **Spacing / radius / shadow / motion** — all tokenized; motion uses a shared
  `ease-out-expo` curve and presets in `lib/animation.ts`.

---

## Accessibility

- Semantic landmarks, labelled sections, skip link, visible focus rings.
- Full keyboard support (Radix Accordion/Dialog, native form controls).
- `prefers-reduced-motion` honored globally (CSS guardrail) **and** per
  component (canvas renders a static frame; counters snap to value).
- Form fields use real `<label>`s, `aria-invalid`, and `role="alert"` errors.

## Performance

- Server Components by default; client JS only where it earns its place
  (Navbar, Hero, Reveal, form, canvas).
- The hero canvas is a single DPR-aware `<canvas>` that pauses off-screen and
  for reduced motion — no animation library, no layout shift.
- `next/font` (no external font CSS, no FOUT), `optimizePackageImports` for
  `lucide-react`/`framer-motion`, compression and security headers in
  `next.config.mjs`.

## SEO

Metadata API (title template, OG, Twitter), canonical URLs, `robots.ts`,
`sitemap.ts`, a dynamic OG image, and three JSON-LD blocks
(`Organization`, `ProfessionalService` with the full service catalogue,
`FAQPage`).

---

## The booking flow

`BookingForm` is a 3-step qualification form (React Hook Form + Zod) with a
honeypot. On submit it calls the `submitBooking` Server Action, which
re-validates server-side and currently logs the lead. **Wire your CRM/email at
the marked integration point in `src/app/actions/book.ts`.** On success the user
is routed to `NEXT_PUBLIC_CALENDLY_URL` to pick a time.

---

## Documented assumptions

1. **Language is English.** The repo in this folder contains Russian-language
   business material; the brief and design references were English, so the site
   ships in English. The token + content split makes localization straightforward.
2. **Brand "Axon"** and all sample names, logos, testimonials, case-study
   figures, and the trusted-by list are **placeholders** — replace before launch.
3. **CTA = qualify-then-Calendly.** Per the brief, the form captures a lead and
   then hands off to Calendly; both halves are wired, Calendly URL is a constant.
4. **ROI calculator** uses a conservative 65%-of-manual-hours recovery over 48
   working weeks. Tune the constants in `RoiCalculator.tsx` if needed.
5. **No CMS.** Content is code (`src/lib/content.ts`) for speed and type safety;
   swap to a CMS later without touching the components.

---

## Deploy

Optimized for Vercel: push the repo, set the env vars, deploy. Vercel Analytics
and Speed Insights are already wired in `layout.tsx`.
