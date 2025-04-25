import React from 'react';

interface FaviconGeneratorProps {
  text?: string;
  backgroundColor?: string;
  textColor?: string;
  size?: number;
}

const FaviconGenerator: React.FC<FaviconGeneratorProps> = ({
  text = 'D',
  backgroundColor = '#3B82F6',
  textColor = '#FFFFFF',
  size = 32
}) => {
  const svgString = `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${size}" height="${size}" rx="${size / 4}" fill="${backgroundColor}" />
      <text 
        x="50%" 
        y="50%" 
        font-family="Arial, sans-serif" 
        font-weight="bold" 
        font-size="${size * 0.6}" 
        fill="${textColor}" 
        text-anchor="middle" 
        dominant-baseline="middle"
      >${text}</text>
    </svg>
  `;

  const encodedSvg = encodeURIComponent(svgString.trim())
    .replace(/%20/g, ' ')
    .replace(/%3D/g, '=')
    .replace(/%22/g, "'")
    .replace(/%3A/g, ':')
    .replace(/%2F/g, '/')
    .replace(/%3C/g, '<')
    .replace(/%3E/g, '>')
    .replace(/%23/g, '#');

  const dataUri = `data:image/svg+xml,${encodedSvg}`;

  return dataUri;
};

export default FaviconGenerator; 