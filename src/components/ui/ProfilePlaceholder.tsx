"use client";

import { useEffect, useRef } from 'react';

interface ProfilePlaceholderProps {
  size?: number;
  className?: string;
  colorPrimary?: string;
  colorSecondary?: string;
  colorBackground?: string;
}

export default function ProfilePlaceholder({
  size = 200,
  className = '',
  colorPrimary = '#4f46e5',
  colorSecondary = '#3b82f6',
  colorBackground = '#e5e7eb'
}: ProfilePlaceholderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = size;
    canvas.height = size;

    ctx.fillStyle = colorBackground;
    ctx.fillRect(0, 0, size, size);

    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 4, 0, Math.PI * 2);
    ctx.fillStyle = colorPrimary;
    ctx.fill();

    const drawRandomShapes = () => {
      for (let i = 0; i < 10; i++) {
        const x = Math.random() * size;
        const y = Math.random() * size;
        const radius = Math.random() * (size / 12) + 5;
        
        ctx.beginPath();
        
        if (i % 2 === 0) {
          ctx.arc(x, y, radius, 0, Math.PI * 2);
        } else {
          ctx.rect(x - radius, y - radius, radius * 2, radius * 2);
        }
        
        ctx.fillStyle = i % 3 === 0 ? colorSecondary : `${colorPrimary}80`;
        ctx.fill();
      }
    };

    const drawPattern = () => {
      for (let i = 0; i < 5; i++) {
        const startX = Math.random() * size;
        const startY = Math.random() * size;
        const endX = Math.random() * size;
        const endY = Math.random() * size;
        
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.lineWidth = Math.random() * 5 + 2;
        ctx.strokeStyle = i % 2 === 0 ? colorSecondary : colorPrimary;
        ctx.stroke();
      }
    };

    drawRandomShapes();
    drawPattern();
    
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 4, 0, Math.PI * 2);
    ctx.fillStyle = colorPrimary;
    ctx.fill();

  }, [size, colorPrimary, colorSecondary, colorBackground]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className={`rounded-full ${className}`}
    />
  );
} 