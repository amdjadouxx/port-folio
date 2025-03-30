import { ImageResponse } from 'next/og';

export const dynamic = "force-static";

export const alt = 'Portfolio de Développeur Web & Mobile';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function OGImage() {
  // Polices personnalisées
  const fontRegular = await fetch(
    'https://cdn.jsdelivr.net/npm/@fontsource/geist-sans/files/geist-sans-latin-400-normal.woff'
  ).then((res) => res.arrayBuffer());
  
  const fontBold = await fetch(
    'https://cdn.jsdelivr.net/npm/@fontsource/geist-sans/files/geist-sans-latin-700-normal.woff'
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom right, #1E293B, #0F172A)',
          color: 'white',
          fontFamily: 'Geist Sans',
          textAlign: 'center',
          padding: 40,
        }}
      >
        {/* Cercles décoratifs */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'rgba(59, 130, 246, 0.15)',
            filter: 'blur(60px)',
            transform: 'translate(-30%, -30%)',
          }}
        />
        <div 
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 250,
            height: 250,
            borderRadius: '50%',
            background: 'rgba(124, 58, 237, 0.15)',
            filter: 'blur(60px)',
            transform: 'translate(30%, 30%)',
          }}
        />
        
        {/* Logo */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 100,
            background: '#3B82F6',
            borderRadius: 20,
            marginBottom: 40,
            fontSize: 60,
            fontWeight: 'bold',
          }}
        >
          D
        </div>
        
        {/* Titre */}
        <h1 
          style={{
            fontSize: 68,
            fontWeight: 'bold',
            margin: 0,
            marginBottom: 20,
            letterSpacing: '-0.025em',
            lineHeight: 1.1,
          }}
        >
          Portfolio Développeur
        </h1>
        
        {/* Sous-titre */}
        <p
          style={{
            fontSize: 36,
            margin: 0,
            marginBottom: 40,
            color: '#94A3B8',
          }}
        >
          Web & Mobile • Design • UX/UI
        </p>
        
        {/* Technologies */}
        <div
          style={{
            display: 'flex',
            gap: 20,
            marginTop: 20,
          }}
        >
          {['Next.js', 'React', 'TypeScript', 'Tailwind CSS'].map((tech) => (
            <div
              key={tech}
              style={{
                padding: '8px 20px',
                background: 'rgba(59, 130, 246, 0.15)',
                borderRadius: 50,
                fontSize: 24,
                color: '#3B82F6',
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Geist Sans',
          data: fontRegular,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Geist Sans',
          data: fontBold,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  );
} 