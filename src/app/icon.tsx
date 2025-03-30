import { ImageResponse } from 'next/og';

export const dynamic = "force-static";
export const contentType = 'image/png';
export const size = { width: 32, height: 32 };

// Default icon (for /icon route)
export default function Icon() {
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
          borderRadius: 8,
          fontFamily: 'sans-serif',
          fontSize: 18,
          fontWeight: 'bold',
        }}
      >
        D
      </div>
    ),
    {
      width: 32,
      height: 32,
    }
  );
} 