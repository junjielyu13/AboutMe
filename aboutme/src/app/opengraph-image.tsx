import { ImageResponse } from 'next/server'
import { profile } from '@/lib/content'

export const runtime = 'edge'
export const alt = 'Junjie Li — Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#0A0E16',
          backgroundImage:
            'radial-gradient(circle at 20% 0%, rgba(77,226,226,0.10), transparent 45%)',
          padding: '80px',
          fontFamily: 'monospace',
        }}
      >
        {/* window chrome */}
        <div style={{ display: 'flex', gap: 14, marginBottom: 56 }}>
          <div style={{ width: 18, height: 18, borderRadius: 9, background: '#FF5F57' }} />
          <div style={{ width: 18, height: 18, borderRadius: 9, background: '#FEBC2E' }} />
          <div style={{ width: 18, height: 18, borderRadius: 9, background: '#28C840' }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', color: '#5B6472', fontSize: 30 }}>
          <span style={{ color: '#4DE2E2' }}>~/junjie</span>
          <span style={{ margin: '0 14px' }}>$</span>
          <span>whoami</span>
        </div>

        <div
          style={{
            display: 'flex',
            color: '#E6EDF3',
            fontSize: 92,
            fontWeight: 700,
            marginTop: 24,
          }}
        >
          {profile.name}
        </div>

        <div style={{ display: 'flex', color: '#4DE2E2', fontSize: 44, marginTop: 12 }}>
          Software Engineer
        </div>

        <div
          style={{
            display: 'flex',
            color: '#8B94A3',
            fontSize: 30,
            marginTop: 40,
            maxWidth: 900,
          }}
        >
          Large-scale systems · Applied AI · High-performance computing
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            color: '#5B6472',
            fontSize: 26,
            marginTop: 48,
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 9,
              background: '#28C840',
              marginRight: 14,
            }}
          />
          Barcelona, Spain — open to opportunities
        </div>
      </div>
    ),
    { ...size }
  )
}
