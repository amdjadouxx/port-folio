"use client";

import Link from 'next/link';

// Liens de navigation du footer
const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { name: 'Accueil', href: '#home' },
      { name: 'À propos', href: '#about' },
      { name: 'Projets', href: '#projects' },
      { name: 'Contact', href: '#contact' }
    ]
  },
  {
    title: 'Expertises',
    links: [
      { name: 'Data Science & ML', href: '#projects?category=data-science' },
      { name: 'Développement Web', href: '#projects?category=web-development' },
      { name: 'Automatisation & DevOps', href: '#projects?category=devops' },
      { name: 'Programmation Système', href: '#projects?category=low-level' },
      { name: 'Conseil Technique', href: '#contact' }
    ]
  }
];

// Réseaux sociaux
const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/amdjad-ahmod-ali-92023b258/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm8 0h-4.98v16h4.98v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.971v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    )
  },
  {
    name: 'GitHub',
    url: 'https://github.com/amdjadouxx',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    )
  }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        {/* Section principale du footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* À propos */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                Amdjad AHMOD ALI
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
                Développeur web full stack passionné par la création d&apos;expériences numériques innovantes et performantes. Spécialisé dans le développement d&apos;applications modernes avec les technologies les plus récentes.
              </p>
              
              {/* Réseaux sociaux */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors border border-gray-300 dark:border-gray-700"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Liens */}
            {footerLinks.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href} 
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Ligne de séparation */}
        <div className="border-t border-gray-200 dark:border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              &copy; {currentYear} Amdjad AHMOD ALI. Ce site ne collecte aucune donnée personnelle. Tous droits réservés.
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0">
              Développé avec ❤️ en utilisant Next.js et TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 