import { ImageResponse } from 'next/og';

export const dynamic = "force-static";

export async function GET() {
  const size = 32;
  
  return new ImageResponse(
    (
      <div
        style={{
          width: size,
          height: size,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          background: '#3B82F6',
          borderRadius: size / 4,
          fontFamily: 'sans-serif',
          fontSize: size * 0.6,
          fontWeight: 'bold',
        }}
      >
        D
      </div>
    ),
    {
      width: size,
      height: size,
    }
  );
} 