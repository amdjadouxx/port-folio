"use client";

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MathUtils, Group, Object3D } from 'three';
import { Float, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';

// Composant pour les particules flottantes
function Particles({ count = 100, color = '#88ccff' }) {
  const meshRef = useRef<Object3D>(null);
  const [positions, setPositions] = useState<[number, number, number][]>([]);
  
  useEffect(() => {
    const pos: [number, number, number][] = [];
    for (let i = 0; i < count; i++) {
      // Créer une distribution plus intéressante avec concentration au centre
      const distance = Math.random() * 15;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.random() * Math.PI;
      
      // Conversion de coordonnées sphériques en cartésiennes
      pos.push([
        distance * Math.sin(phi) * Math.cos(theta),
        distance * Math.sin(phi) * Math.sin(theta) * 0.6, // Aplatir légèrement sur l'axe Y
        distance * Math.cos(phi),
      ]);
    }
    setPositions(pos);
  }, [count]);
  
  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.001;
    meshRef.current.rotation.y += 0.001;
  });
  
  return (
    <group ref={meshRef}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.025, 8, 8]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} transparent opacity={0.7} />
        </mesh>
      ))}
    </group>
  );
}

// Composant pour les formes géométriques flottantes
function FloatingShapes() {
  return (
    <group position={[0, 0, 0]}>
      <Float
        speed={1.5}
        rotationIntensity={1}
        floatIntensity={2}
      >
        <mesh position={[-2, -1, -3]}>
          <torusGeometry args={[1, 0.2, 16, 32]} />
          <meshStandardMaterial color="#5d7dcf" wireframe />
        </mesh>
      </Float>
      
      <Float
        speed={1.2}
        rotationIntensity={1.5}
        floatIntensity={1.5}
      >
        <mesh position={[2.5, 1, -2]}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#de3c4b" wireframe />
        </mesh>
      </Float>
      
      <Float
        speed={2}
        rotationIntensity={0.8}
        floatIntensity={2}
      >
        <mesh position={[0, 2, -5]}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#22D3EE" wireframe />
        </mesh>
      </Float>

      <Float
        speed={1.8}
        rotationIntensity={1.2}
        floatIntensity={1.8}
      >
        <mesh position={[-3, 3, -4]}>
          <dodecahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial color="#8b5cf6" wireframe />
        </mesh>
      </Float>

      <Float
        speed={1.3}
        rotationIntensity={0.9}
        floatIntensity={1.3}
      >
        <mesh position={[3, -2, -3]}>
          <tetrahedronGeometry args={[0.9, 0]} />
          <meshStandardMaterial color="#10b981" wireframe />
        </mesh>
      </Float>
    </group>
  );
}

// Composant pour le controleur interactif avec la souris
function MouseController() {
  const groupRef = useRef<Group>(null);
  
  useFrame(({ mouse }) => {
    if (!groupRef.current) return;
    
    // Effet paralaxe doux
    groupRef.current.rotation.y = MathUtils.lerp(
      groupRef.current.rotation.y,
      (mouse.x * Math.PI) / 15,
      0.05
    );
    
    groupRef.current.rotation.x = MathUtils.lerp(
      groupRef.current.rotation.x,
      (mouse.y * Math.PI) / 15,
      0.05
    );
  });
  
  return (
    <group ref={groupRef}>
      <Particles count={150} />
      <FloatingShapes />
    </group>
  );
}

// Composant principal d'arrière-plan animé
export default function AnimatedBackground() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Détection du mode sombre
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches || document.documentElement.classList.contains('dark'));

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches || document.documentElement.classList.contains('dark'));
    };

    mediaQuery.addEventListener('change', handleChange);
    
    // Observer pour détecter les changements de classe sur l'élément html
    const observer = new MutationObserver((mutations: MutationRecord[]) => {
      mutations.forEach((mutation: MutationRecord) => {
        if (mutation.attributeName === 'class') {
          setIsDarkMode(document.documentElement.classList.contains('dark'));
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 2 }}
      className="absolute inset-0 z-0 pointer-events-none"
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 2]}
        style={{ 
          background: 'transparent',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={isDarkMode ? 0.8 : 1.5} color={isDarkMode ? "#a1c4fd" : "#ffffff"} />
        <MouseController />
        <Environment preset={isDarkMode ? "night" : "city"} />
      </Canvas>
    </motion.div>
  );
} 