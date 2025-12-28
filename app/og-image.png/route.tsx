import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0D9488',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Logo/Brand area */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: 'white',
              letterSpacing: '-2px',
              marginBottom: 20,
            }}
          >
            EalyBooks
          </div>
          <div
            style={{
              fontSize: 32,
              color: 'rgba(255,255,255,0.9)',
              textAlign: 'center',
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            Modern Bookkeeping for Growing Businesses
          </div>
        </div>

        {/* Features */}
        <div
          style={{
            display: 'flex',
            marginTop: 60,
            gap: 40,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(255,255,255,0.15)',
              padding: '12px 24px',
              borderRadius: 8,
              color: 'white',
              fontSize: 20,
            }}
          >
            24hr Response Time
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(255,255,255,0.15)',
              padding: '12px 24px',
              borderRadius: 8,
              color: 'white',
              fontSize: 20,
            }}
          >
            Real-time Dashboard
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(255,255,255,0.15)',
              padding: '12px 24px',
              borderRadius: 8,
              color: 'white',
              fontSize: 20,
            }}
          >
            NYC Based
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 24,
            color: 'rgba(255,255,255,0.7)',
          }}
        >
          ealybooks.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
