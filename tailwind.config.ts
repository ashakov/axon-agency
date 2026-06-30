import type { Config } from 'tailwindcss';

/**
 * Axon design system — Tailwind theme.
 * Color, type, spacing, radius, shadow and motion tokens are defined as CSS
 * variables in globals.css and surfaced here so utilities stay token-driven.
 */
const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', sm: '1.5rem', lg: '2rem' },
      screens: { '2xl': '1200px' },
    },
    extend: {
      colors: {
        bg: 'hsl(var(--bg) / <alpha-value>)',
        'bg-elevated': 'hsl(var(--bg-elevated) / <alpha-value>)',
        surface: 'hsl(var(--surface) / <alpha-value>)',
        'surface-hover': 'hsl(var(--surface-hover) / <alpha-value>)',
        border: 'hsl(var(--border) / <alpha-value>)',
        'border-strong': 'hsl(var(--border-strong) / <alpha-value>)',
        fg: 'hsl(var(--fg) / <alpha-value>)',
        muted: 'hsl(var(--muted) / <alpha-value>)',
        subtle: 'hsl(var(--subtle) / <alpha-value>)',
        accent: 'hsl(var(--accent) / <alpha-value>)',
        'accent-fg': 'hsl(var(--accent-fg) / <alpha-value>)',
        'accent-muted': 'hsl(var(--accent-muted) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
        success: 'hsl(var(--success) / <alpha-value>)',
        warning: 'hsl(var(--warning) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // editorial type scale (fluid via clamp)
        'display-xl': ['clamp(2.75rem, 1.6rem + 5.2vw, 5.5rem)', { lineHeight: '0.98', letterSpacing: '-0.035em', fontWeight: '600' }],
        'display-lg': ['clamp(2.25rem, 1.4rem + 3.8vw, 4rem)', { lineHeight: '1.02', letterSpacing: '-0.03em', fontWeight: '600' }],
        'display-md': ['clamp(1.875rem, 1.3rem + 2.4vw, 2.75rem)', { lineHeight: '1.06', letterSpacing: '-0.025em', fontWeight: '600' }],
        'display-sm': ['clamp(1.5rem, 1.2rem + 1.3vw, 2rem)', { lineHeight: '1.12', letterSpacing: '-0.02em', fontWeight: '600' }],
        lead: ['clamp(1.0625rem, 1rem + 0.4vw, 1.25rem)', { lineHeight: '1.55', letterSpacing: '-0.01em' }],
        overline: ['0.75rem', { lineHeight: '1', letterSpacing: '0.18em', fontWeight: '500' }],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        full: '9999px',
      },
      boxShadow: {
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        glow: 'var(--shadow-glow)',
      },
      maxWidth: {
        prose: '68ch',
        content: '1200px',
        narrow: '760px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-quint': 'cubic-bezier(0.83, 0, 0.17, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, transparent, hsl(var(--bg))), radial-gradient(hsl(var(--border) / 0.6) 1px, transparent 1px)',
        'accent-sheen':
          'linear-gradient(135deg, hsl(var(--accent) / 0.16), transparent 60%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s var(--ease-out-expo) both',
        'accordion-down': 'accordion-down 0.3s var(--ease-out-expo)',
        'accordion-up': 'accordion-up 0.3s var(--ease-out-expo)',
        marquee: 'marquee 38s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
