import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

export const runtime = 'edge';
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Og() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background:
            'radial-gradient(900px 500px at 80% -10%, #10362a 0%, transparent 60%), #0b0d12',
          padding: 80,
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: '#2ee6a0',
              display: 'flex',
            }}
          />
          <div style={{ color: '#f5f9fb', fontSize: 30, fontWeight: 600, letterSpacing: -1 }}>
            {site.name}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              color: '#f5f9fb',
              fontSize: 76,
              fontWeight: 600,
              lineHeight: 1.02,
              letterSpacing: -3,
              maxWidth: 920,
            }}
          >
            AI-системы, которые ведут ваш бизнес.
          </div>
          <div style={{ color: '#9fb0bd', fontSize: 30, maxWidth: 820 }}>
            Больше выручки. Ниже издержки. Меньше рутины.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
