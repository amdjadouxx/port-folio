import { useEffect, useRef } from 'react';

export default function ProjectImagePlaceholder({
  width = 400,
  height = 225,
  className = '',
  projectId = 1,
  title = 'Projet'
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Définir la taille du canvas
    canvas.width = width;
    canvas.height = height;

    // Couleurs basées sur l'ID du projet pour une certaine cohérence
    const colors = [
      ['#3b82f6', '#1e40af'], // bleu
      ['#10b981', '#047857'], // vert
      ['#f59e0b', '#b45309'], // orange
      ['#8b5cf6', '#5b21b6'], // violet
      ['#ef4444', '#b91c1c'], // rouge
      ['#06b6d4', '#0e7490']  // cyan
    ];
    
    const colorIndex = (projectId - 1) % colors.length;
    const [primaryColor, secondaryColor] = colors[colorIndex];
    
    // Fonction pour générer un dégradé basé sur l'ID du projet
    const createGradient = () => {
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, primaryColor);
      gradient.addColorStop(1, secondaryColor);
      return gradient;
    };

    // Dessiner l'arrière-plan avec un dégradé
    ctx.fillStyle = createGradient();
    ctx.fillRect(0, 0, width, height);

    // Ajouter des motifs basés sur l'ID du projet
    const drawPatterns = () => {
      // Motif de base: points et lignes
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 20 + 5;
        
        ctx.beginPath();
        if (i % 3 === 0) {
          // Cercles
          ctx.arc(x, y, size / 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.1})`;
          ctx.fill();
        } else if (i % 3 === 1) {
          // Rectangles
          ctx.rect(x, y, size, size);
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.15 + 0.05})`;
          ctx.fill();
        } else {
          // Lignes
          const endX = x + (Math.random() - 0.5) * 100;
          const endY = y + (Math.random() - 0.5) * 100;
          ctx.moveTo(x, y);
          ctx.lineTo(endX, endY);
          ctx.strokeStyle = `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`;
          ctx.lineWidth = Math.random() * 2 + 1;
          ctx.stroke();
        }
      }
    };

    // Créer des motifs géométriques basés sur l'ID du projet
    const drawGeometricPattern = () => {
      // Motif différent basé sur l'ID du projet (modulo 6)
      switch (projectId % 6) {
        case 0: // Grille
          for (let x = 0; x < width; x += 40) {
            for (let y = 0; y < height; y += 40) {
              ctx.beginPath();
              ctx.rect(x, y, 20, 20);
              ctx.fillStyle = `rgba(255, 255, 255, 0.1)`;
              ctx.fill();
            }
          }
          break;
        case 1: // Cercles concentriques
          for (let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.arc(width / 2, height / 2, (width / 10) * (i + 1), 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 + i * 0.02})`;
            ctx.lineWidth = 2;
            ctx.stroke();
          }
          break;
        case 2: // Vagues
          for (let y = 0; y < height; y += 20) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            for (let x = 0; x < width; x += 20) {
              ctx.lineTo(x, y + Math.sin(x / 30) * 10);
            }
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.stroke();
          }
          break;
        case 3: // Diagonales
          for (let i = -height; i < width + height; i += 30) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i + height, height);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
            ctx.lineWidth = 2;
            ctx.stroke();
          }
          break;
        case 4: // Points en quadrillage
          for (let x = 20; x < width; x += 40) {
            for (let y = 20; y < height; y += 40) {
              ctx.beginPath();
              ctx.arc(x, y, 3, 0, Math.PI * 2);
              ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
              ctx.fill();
            }
          }
          break;
        case 5: // Hexagones
          const hexSize = 30;
          for (let row = 0; row < height / hexSize; row++) {
            for (let col = 0; col < width / hexSize; col++) {
              const offsetX = col * hexSize * 1.5;
              const offsetY = row * hexSize * Math.sqrt(3);
              if (row % 2 === 1) {
                ctx.beginPath();
                for (let i = 0; i < 6; i++) {
                  const angle = 2 * Math.PI / 6 * i;
                  const x = offsetX + hexSize * Math.cos(angle);
                  const y = offsetY + hexSize * Math.sin(angle);
                  if (i === 0) ctx.moveTo(x, y);
                  else ctx.lineTo(x, y);
                }
                ctx.closePath();
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
                ctx.stroke();
              }
            }
          }
          break;
      }
    };

    // Appliquer les motifs
    drawPatterns();
    drawGeometricPattern();

    // Ajouter une légère vignette
    const addVignette = () => {
      const gradient = ctx.createRadialGradient(
        width / 2, height / 2, height / 3,
        width / 2, height / 2, height
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.3)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };
    
    addVignette();

    // Ajouter le titre du projet
    ctx.font = 'bold 20px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'white';
    ctx.fillText(title, width / 2, height / 2);
    
    // Ajouter un contour au texte pour meilleure lisibilité
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.lineWidth = 3;
    ctx.strokeText(title, width / 2, height / 2);
    ctx.fillStyle = 'white';
    ctx.fillText(title, width / 2, height / 2);

  }, [width, height, projectId, title]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={className}
    />
  );
} 