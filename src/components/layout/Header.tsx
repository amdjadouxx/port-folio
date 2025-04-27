"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Accueil', href: '#home' },
  { name: 'À propos', href: '#about' },
  { name: 'Projets', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine which section is currently in view
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="#home" className="text-2xl font-bold relative group">
          <span className="text-gray-800 dark:text-white">Portfolio</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={`text-sm font-medium relative group ${
                activeSection === item.href.substring(1) 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {item.name}
              <span 
                className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                  activeSection === item.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </Link>
          ))}
          
          <Link
            href="/cgv"
            className="text-xs px-3 py-1 ml-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
            aria-label="Conditions Générales de Vente"
          >
            CGV
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <Link
            href="/cgv"
            className="text-xs px-2 py-1 rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300"
            aria-label="Conditions Générales de Vente"
          >
            CGV
          </Link>
          
          <button 
            className="flex items-center p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="relative w-6 h-5">
              <span 
                className={`absolute h-0.5 w-6 bg-gray-800 dark:bg-white transform transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 top-2.5' : 'rotate-0 top-0'
                }`}
              ></span>
              <span 
                className={`absolute h-0.5 w-6 bg-gray-800 dark:bg-white transform transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100 top-2'
                }`}
              ></span>
              <span 
                className={`absolute h-0.5 w-6 bg-gray-800 dark:bg-white transform transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 top-2.5' : 'rotate-0 top-4'
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div 
        initial={false}
        animate={{ height: mobileMenuOpen ? 'auto' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden overflow-hidden bg-white dark:bg-gray-900`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={`text-sm font-medium px-2 py-1 ${
                activeSection === item.href.substring(1) 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-md' 
                  : 'text-gray-600 dark:text-gray-300'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          
          <Link
            href="/cgv"
            className="text-sm font-medium px-2 py-1 text-gray-600 dark:text-gray-300 mt-2 border-t border-gray-100 dark:border-gray-800 pt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Conditions Générales de Vente (CGV)
          </Link>
        </nav>
      </motion.div>
    </header>
  );
}