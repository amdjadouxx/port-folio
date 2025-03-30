"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchGitHubProjects } from '@/services/github';

// Interface pour le type Technology
interface Technology {
  name: string;
  count: number; // Nombre d'occurrences dans les projets
  icon?: string;
}

// Catégories prédéfinies pour regrouper les technologies
const techCategories = {
  'frontend': ['javascript', 'typescript', 'react', 'vue', 'next', 'html', 'css', 'sass', 'tailwind', 'webpack', 'vite', 'angular'],
  'backend': ['node', 'express', 'python', 'django', 'flask', 'java', 'spring', 'php', 'laravel', 'ruby', 'rails', 'go', 'rust', 'c#', '.net', 'nestjs'],
  'database': ['mongodb', 'mysql', 'postgresql', 'sqlite', 'redis', 'firebase', 'supabase', 'dynamodb', 'cassandra'],
  'mobile': ['react-native', 'flutter', 'swift', 'kotlin', 'android', 'ios'],
  'devops': ['git', 'github', 'gitlab', 'docker', 'kubernetes', 'aws', 'azure', 'gcp', 'jenkins', 'ci/cd', 'terraform', 'ansible'],
  'tools': ['figma', 'adobe', 'photoshop', 'illustrator', 'xd'],
  'other': [] // Catégorie par défaut
};

// Animation des éléments lors du défilement
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

// Fonction pour déterminer la catégorie d'une technologie
const getTechCategory = (techName: string): string => {
  const lowerTech = techName.toLowerCase();
  
  for (const [category, techs] of Object.entries(techCategories)) {
    if (techs.some((tech: string) => lowerTech.includes(tech))) {
      return category;
    }
  }
  
  return 'other';
};

// Fonction pour obtenir la première lettre de la technologie (pour l'icône)
const getTechInitial = (techName: string): string => {
  // Cas spéciaux
  const specialCases: Record<string, string> = {
    'javascript': 'JS',
    'typescript': 'TS',
    'react': 'R',
    'vue': 'V',
    'nextjs': 'N',
    'node': 'N',
    'python': 'PY',
    'html': 'H',
    'css': 'C',
  };
  
  const lowerTech = techName.toLowerCase();
  for (const [key, value] of Object.entries(specialCases)) {
    if (lowerTech.includes(key)) {
      return value;
    }
  }
  
  return techName.charAt(0).toUpperCase();
};

export default function Skills() {
  const [technologies, setTechnologies] = useState<Record<string, Technology[]>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [categoryNames, setCategoryNames] = useState<string[]>([]);
  
  // Récupérer les technologies à partir des projets GitHub
  useEffect(() => {
    const extractTechnologies = async () => {
      try {
        setIsLoading(true);
        const projects = await fetchGitHubProjects(20); // Récupérer jusqu'à 20 projets pour un meilleur échantillon
        
        // Map pour compter les occurrences de chaque technologie
        const techMap = new Map<string, number>();
        
        // Analyser chaque projet pour extraire les technologies
        projects.forEach(project => {
          // Extraire du langage principal
          if (project.language) {
            techMap.set(project.language, (techMap.get(project.language) || 0) + 1);
          }
          
          // Extraire des topics
          project.topics.forEach((topic: string) => {
            techMap.set(topic, (techMap.get(topic) || 0) + 1);
          });
          
          // Analyser le nom du projet pour des indices sur les technologies
          const projectNameLower = project.name.toLowerCase();
          for (const [, techs] of Object.entries(techCategories)) {
            techs.forEach((tech: string) => {
              if (projectNameLower.includes(tech)) {
                techMap.set(tech, (techMap.get(tech) || 0) + 1);
              }
            });
          }
        });
        
        // Filtrer pour ne garder que les technologies qui apparaissent dans au moins 2 projets
        const filteredTechs = Array.from(techMap.entries())
          .filter(([, count]) => count >= 2)
          .map(([name, count]): Technology => ({
            name: name.charAt(0).toUpperCase() + name.slice(1),
            count,
            icon: getTechInitial(name)
          }));
        
        // Regrouper par catégorie
        const groupedTechs: Record<string, Technology[]> = {};
        filteredTechs.forEach(tech => {
          const category = getTechCategory(tech.name);
          if (!groupedTechs[category]) {
            groupedTechs[category] = [];
          }
          groupedTechs[category].push(tech);
        });
        
        // Trier chaque catégorie par nombre d'occurrences
        Object.keys(groupedTechs).forEach(category => {
          groupedTechs[category].sort((a, b) => b.count - a.count);
        });
        
        setTechnologies(groupedTechs);
        setCategoryNames(Object.keys(groupedTechs).sort());
        
        // Si aucune technologie n'est trouvée dans la catégorie active, choisir la première catégorie disponible
        if (groupedTechs[activeCategory]?.length === 0 && categoryNames.length > 0) {
          setActiveCategory(categoryNames[0]);
        }
        
        setIsLoading(false);
      } catch (err) {
        console.error('Erreur lors de l\'extraction des technologies:', err);
        setError('Impossible de charger les technologies.');
        setIsLoading(false);
      }
    };
    
    extractTechnologies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Mes Compétences
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-8" />
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Ces technologies sont reflétées dans mes projets GitHub. Elles représentent les outils et langages que j&apos;utilise régulièrement dans mon travail.
          </p>
        </div>
        
        {/* État de chargement */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}
        
        {/* Message d'erreur */}
        {error && (
          <div className="text-center py-10">
            <p className="text-red-500 dark:text-red-400 text-lg">{error}</p>
          </div>
        )}
        
        {/* Affichage des technologies */}
        {!isLoading && !error && Object.keys(technologies).length > 0 && (
          <div className="mx-auto">
            {/* Navigation entre catégories */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categoryNames.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
            
            {/* Grille de technologies */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl mx-auto"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              {technologies[activeCategory]?.map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center group"
                  variants={fadeInUp}
                  custom={index}
                >
                  <div className="w-20 h-20 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 mb-3 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20">
                    <span className="text-blue-600 dark:text-blue-400 text-3xl font-bold">
                      {tech.icon}
                    </span>
                  </div>
                  <span className="text-center">
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{tech.name}</span>
                  </span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Message si aucune technologie dans la catégorie */}
            {technologies[activeCategory]?.length === 0 && (
              <div className="text-center py-10">
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Aucune technologie trouvée dans cette catégorie.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
} 