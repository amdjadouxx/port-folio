"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import About from '@/components/about/About';
import Projects from '@/components/projects/Projects';
import Contact from '@/components/contact/Contact';
import AnimatedBackground from '@/components/3d/AnimatedBackground';

interface AnimationVariant {
  initial: { opacity: number; y?: number; scale?: number; x?: number } | ((index: number) => { opacity: number; x: number });
  animate: { opacity: number; y?: number; scale?: number; x?: number };
  transition: { duration: number; ease?: string | number[] | undefined; delay?: number };
}

const sectionAnimations: AnimationVariant[] = [
  {
    initial: { opacity: 0, y: -50, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.8, ease: [0.19, 1.0, 0.22, 1.0] }
  },
  {
    initial: (index) => ({ opacity: 0, x: index % 2 === 0 ? -100 : 100 }),
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
  },
  {
    initial: { opacity: 0, y: 80 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: "easeInOut" }
  }
];

const sectionNames = [
  { id: 'home', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'projects', label: 'Projets' },
  { id: 'contact', label: 'Contact' }
];

interface AnimatedSectionProps {
  children: React.ReactNode;
  id: string;
  index: number;
  activeSections: number[];
}

interface SectionIndicatorProps {
  activeSections: number[];
}

const AnimatedSection = ({ children, id, index, activeSections }: AnimatedSectionProps) => {
  const animationGroupIndex = Math.floor(index / 2);
  const animation = sectionAnimations[Math.min(animationGroupIndex, sectionAnimations.length - 1)];

  return (
    <motion.div
      id={id}
      initial={typeof animation.initial === 'function' ? animation.initial(index) : animation.initial}
      animate={activeSections.includes(index) ? animation.animate : (typeof animation.initial === 'function' ? animation.initial(index) : animation.initial)}
      transition={animation.transition}
      className="relative"
    >
      {activeSections.includes(index) && (
        <motion.div
          className="absolute -z-10 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-3xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.5 }}
          style={{
            width: '60%',
            height: '60%',
            top: '20%',
            left: index % 2 === 0 ? '10%' : '30%',
          }}
        />
      )}
      {children}
    </motion.div>
  );
};

const SectionIndicator = ({ activeSections }: SectionIndicatorProps) => {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col gap-4 items-center">
        {sectionNames.map((section, index) => (
          <a
            key={index}
            href={`#${section.id}`}
            className="group flex items-center"
          >
            <span className="mr-3 opacity-0 group-hover:opacity-100 text-sm font-medium text-gray-700 dark:text-gray-300 transition-opacity duration-300">
              {section.label}
            </span>
            <div 
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSections.includes(index)
                  ? 'w-5 h-5 bg-blue-500 border-blue-300 dark:bg-blue-600 dark:border-blue-400'
                  : 'border-gray-400 dark:border-gray-600 group-hover:border-blue-500 dark:group-hover:border-blue-400'
              }`}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const [activeSections, setActiveSections] = useState<number[]>([0, 1]);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const visibleSections: number[] = [];

      sectionsRef.current.forEach((sectionRef, index) => {
        if (!sectionRef) return;
        
        const rect = sectionRef.getBoundingClientRect();
        if (rect.top < windowHeight * 0.75 && rect.bottom > 0) {
          const pairIndex = Math.floor(index / 2) * 2;
          visibleSections.push(pairIndex);
          if (pairIndex + 1 < sectionsRef.current.length) {
            visibleSections.push(pairIndex + 1);
          }
        }
      });

      if (visibleSections.length > 0) {
        const newSectionsJson = JSON.stringify([...new Set(visibleSections)].sort());
        const currentSectionsJson = JSON.stringify([...activeSections].sort());
        
        if (newSectionsJson !== currentSectionsJson) {
          setActiveSections([...new Set(visibleSections)]);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current[index] = el;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50/80 via-indigo-50/80 to-white/80 dark:from-gray-900/90 dark:via-indigo-950/90 dark:to-gray-900/90">
      <AnimatedBackground />
      
      <Header />
      
      <SectionIndicator activeSections={activeSections} />
      
      <main>
        <div ref={el => addToRefs(el, 0)}>
          <AnimatedSection id="home" index={0} activeSections={activeSections}>
            <Hero />
          </AnimatedSection>
        </div>
        
        <div ref={el => addToRefs(el, 1)}>
          <AnimatedSection id="about" index={1} activeSections={activeSections}>
            <About />
          </AnimatedSection>
        </div>
        
        <div ref={el => addToRefs(el, 2)}>
          <AnimatedSection id="projects" index={2} activeSections={activeSections}>
            <Projects />
          </AnimatedSection>
        </div>
        
        <div ref={el => addToRefs(el, 3)}>
          <AnimatedSection id="contact" index={3} activeSections={activeSections}>
            <Contact />
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
