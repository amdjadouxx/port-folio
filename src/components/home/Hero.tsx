"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ProfilePlaceholder from '@/components/ui/ProfilePlaceholder';

// Animation pour le texte tapé
interface TypeAnimationProps {
  text: string;
  className?: string;
  speed?: number;
}

const TypeAnimation = ({ text, className = '', speed = 75 }: TypeAnimationProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default function Hero() {
  // Détecte si une image de profil personnalisée est disponible
  const [hasCustomProfileImage, setHasCustomProfileImage] = useState(false);

  useEffect(() => {
    // Vérifier si l'image de profil personnalisée existe
    // Utiliser une approche qui fonctionne côté client uniquement
    if (typeof window !== 'undefined') {
      const imgElement = new window.Image(); // Constructeur Image côté client
      imgElement.src = '/images/profile.jpg';
      
      imgElement.onload = () => setHasCustomProfileImage(true);
      imgElement.onerror = () => setHasCustomProfileImage(false);
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-24 pb-20">
      {/* Fond coloré dégradé amélioré */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-indigo-50 to-white dark:from-gray-900 dark:via-indigo-950/20 dark:to-gray-800 z-[-2]" />
      
      {/* Éléments décoratifs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 dark:bg-blue-500/10 rounded-full filter blur-3xl z-[-1]" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full filter blur-3xl z-[-1]" />
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Contenu gauche */}
          <div className="flex-1 text-center md:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4"
            >
              Bonjour, je suis
            </motion.h2>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white mb-6"
            >
              <TypeAnimation text="Amdjad Ahmod Ali" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500" />
            </motion.h1>
            
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-8"
            >
              <TypeAnimation 
                text="Spécialiste en Data Science & Full Stack" 
                speed={50} 
                className="relative inline-block"
              />
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-gray-600 dark:text-gray-300 text-lg max-w-xl mb-10 leading-relaxed"
            >
              Passionné par la résolution de défis techniques complexes, je combine expertise en Data Science, 
              Machine Learning et développement web pour créer des solutions innovantes et performantes,
              toujours prêt à apprendre.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-5 justify-center md:justify-start"
            >
              <Link href="#projects" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Voir mes projets
              </Link>
              
              <Link href="#contact" className="px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-medium rounded-full hover:bg-blue-600/10 transition-all duration-300">
                Me contacter
              </Link>
            </motion.div>
          </div>
          
          {/* Image ou illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
              {hasCustomProfileImage ? (
                <Image 
                  src="/images/profile.jpg" 
                  alt="Amdjad AHMOD ALI - Développeur" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 18rem, 24rem"
                  priority
                />
              ) : (
                <ProfilePlaceholder 
                  size={384}
                  colorPrimary="#4f46e5"
                  colorSecondary="#3b82f6"
                  colorBackground="#e5e7eb"
                  className="w-full h-full"
                />
              )}
              
              {/* Élément décoratif en arrière-plan de la photo */}
              <div className="absolute -z-10 -inset-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-xl opacity-30 animate-pulse-slow" />
            </div>
          </motion.div>
        </div>
        
        {/* Technologies en vedette */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center mt-12"
        >
          <div className="py-3 px-6 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md flex items-center gap-4 overflow-x-auto">
            <span className="text-gray-500 dark:text-gray-400 text-sm font-medium whitespace-nowrap">Technologies :</span>
            {[
              'Python', 
              'Machine Learning', 
              'React', 
              'TypeScript', 
              'Node.js', 
              'TensorFlow',
              'NLP',
              'SQL'
            ].map((tech, index) => (
              <span 
                key={index} 
                className="bg-gray-100 dark:bg-gray-700 py-1 px-3 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
        
        {/* Icônes de défilement */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium tracking-wide">Découvrir</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 animate-bounce">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 