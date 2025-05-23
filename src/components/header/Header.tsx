"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '#about', label: 'À propos' },
  { href: '#projects', label: 'Projets' },
  { href: '#skills', label: 'Compétences' },
  { href: '#contact', label: 'Contact' }
];

const mobileMenuVariants = {
  closed: { opacity: 0, x: 300 },
  open: { opacity: 1, x: 0 }
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = navLinks.map(link => link.href.substring(1));
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <motion.div 
            className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xl"
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            D
          </motion.div>
          <span className="ml-2 font-bold text-lg text-gray-800 dark:text-white">
            <span className="hidden sm:inline">Developer</span>
            <span className="sm:hidden">Dev</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 rounded-full font-medium transition-colors ${
                activeSection === link.href.substring(1)
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
              }`}
            >
              {activeSection === link.href.substring(1) && (
                <motion.span
                  className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-full -z-10"
                  layoutId="activeSection"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {link.label}
            </Link>
          ))}
          
          <Link
            href="#contact"
            className="ml-4 px-6 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-sm"
          >
            Me contacter
          </Link>

          <Link
            href="/cgv"
            className="ml-3 px-3 py-1 text-xs rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
            aria-label="Conditions Générales de Vente"
          >
            CGV
          </Link>
          
          <ThemeToggle />
        </nav>

        <div className="flex items-center space-x-2 md:hidden">
          <Link
            href="/cgv"
            className="p-2 rounded-full text-xs border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 font-medium"
            aria-label="Conditions Générales de Vente"
          >
            CGV
          </Link>
          
          <ThemeToggle />
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 dark:text-gray-200"
            aria-label="Menu mobile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white dark:bg-gray-900 z-40 pt-20"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="container mx-auto px-4">
              <nav className="flex flex-col space-y-5 items-center py-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-xl font-medium px-8 py-3 rounded-xl w-full text-center ${
                      activeSection === link.href.substring(1)
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center px-8 py-3 rounded-xl bg-blue-600 text-white font-medium text-xl"
                >
                  Me contacter
                </Link>
                <Link
                  href="/cgv"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center px-8 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 font-medium text-xl"
                >
                  Conditions Générales de Vente (CGV)
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}