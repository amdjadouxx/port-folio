import { ImageResponse } from 'next/og';

export const dynamic = "force-static";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          background: '#3B82F6',
          borderRadius: 128,
          fontFamily: 'sans-serif',
          fontSize: 280,
          fontWeight: 'bold',
        }}
      >
        D
      </div>
    ),
    {
      width: 512,
      height: 512,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    }
  );
} 