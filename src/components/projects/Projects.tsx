"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fetchGitHubProjects } from '@/services/github';

interface GitHubProject {
  id: number;
  name: string;
  description: string;
  url: string;
  homepage: string;
  stars: number;
  forks: number;
  language: string;
  created: string;
  updated: string;
  topics: string[];
  image: string;
  category?: string;
}

interface ProjectCategory {
  name: string;
  topics: string[];
}

const projectCategories: Record<string, ProjectCategory> = {
  'data-science': {
    name: 'Data Science & ML',
    topics: ['machine-learning', 'deep-learning', 'data-science', 'data-analysis', 'neural-networks', 'tensorflow', 'pytorch', 'scikit-learn', 'pandas', 'numpy', 'computer-vision', 'nlp']
  },
  'web-development': {
    name: 'Développement Web',
    topics: ['web', 'react', 'javascript', 'typescript', 'node', 'express', 'next', 'vue', 'angular', 'css', 'html', 'frontend', 'backend', 'fullstack']
  },
  'mobile-development': {
    name: 'Développement Mobile',
    topics: ['mobile', 'android', 'ios', 'react-native', 'flutter', 'swift', 'kotlin']
  },
  'devops': {
    name: 'DevOps & Infrastructure',
    topics: ['devops', 'docker', 'kubernetes', 'aws', 'azure', 'gcp', 'cicd', 'ci-cd', 'infrastructure']
  },
  'low-level': {
    name: 'Programmation Bas Niveau',
    topics: ['c', 'cpp', 'c++', 'assembly', 'cobol', 'low-level', 'embedded', 'system']
  },
  'other': {
    name: 'Autres Projets',
    topics: []
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 20,
      duration: 0.5 
    }
  }
};

const determineProjectCategory = (project: GitHubProject): string => {
  for (const [categoryKey, category] of Object.entries(projectCategories)) {
    if (categoryKey === 'other') continue;
    
    if (project.topics.some(topic => category.topics.includes(topic as string))) {
      return categoryKey;
    }
    
    if (project.language && category.topics.includes(project.language.toLowerCase())) {
      return categoryKey;
    }
  }
  
  if (project.language === 'Python' || project.language === 'Jupyter Notebook') {
    return 'data-science';
  }
  
  if (['JavaScript', 'TypeScript', 'HTML', 'CSS'].includes(project.language)) {
    return 'web-development';
  }
  
  return 'other';
};

export default function Projects() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [projectsByCategory, setProjectsByCategory] = useState<Record<string, GitHubProject[]>>({});
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  useEffect(() => {
    const getProjects = async () => {
      try {
        setLoading(true);
        const githubProjects = await fetchGitHubProjects(30);
        
        const projectsWithCategories = githubProjects.map(project => ({
          ...project,
          category: determineProjectCategory(project)
        }));

        const groupedProjects: Record<string, GitHubProject[]> = {
          'all': projectsWithCategories
        };

        Object.keys(projectCategories).forEach(key => {
          groupedProjects[key] = projectsWithCategories.filter(project => project.category === key);
        });
        
        setProjectsByCategory(groupedProjects);
        setLoading(false);
      } catch (err) {
        setError('Impossible de charger les projets GitHub');
        setLoading(false);
        console.error(err);
      }
    };
    
    getProjects();
  }, []);
  
  const filteredProjects = projectsByCategory[activeCategory] || [];
  
  const formatProjectName = (name: string) => {
    return name
      .replace(/-/g, ' ')
      .replace(/_/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            Mes Projets
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-8" />
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            Explorez mes projets, de l&apos;intelligence artificielle aux applications web, tous disponibles sur GitHub.
          </p>
        </div>
        
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}
        
        {error && (
          <div className="text-center py-10">
            <p className="text-red-500 dark:text-red-400 text-lg">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              Réessayer
            </button>
          </div>
        )}
        
        {!loading && !error && (
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              key="all"
              onClick={() => setActiveCategory('all')}
              className={`px-8 py-3 rounded-full text-base font-medium transition-all duration-300 shadow-sm hover:shadow 
                ${activeCategory === 'all'
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md transform -translate-y-1'
                  : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              Tous les projets
            </button>
            
            {Object.entries(projectCategories).map(([key, category]) => (
              projectsByCategory[key]?.length > 0 && (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-8 py-3 rounded-full text-base font-medium transition-all duration-300 shadow-sm hover:shadow 
                    ${activeCategory === key
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md transform -translate-y-1'
                      : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                  {category.name}
                </button>
              )
            ))}
          </div>
        )}
        
        {!loading && !error && (
          <>
            {activeCategory === 'all' ? (
              Object.entries(projectCategories).map(([categoryKey, category]) => {
                const categoryProjects = projectsByCategory[categoryKey] || [];
                if (categoryProjects.length === 0) return null;
                
                return (
                  <div key={categoryKey} className="mb-20">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
                      <span className="w-2 h-8 bg-blue-600 mr-3 rounded-full"></span>
                      {category.name}
                    </h3>
                    
                    <motion.div 
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                    >
                      {categoryProjects.slice(0, 6).map((project) => (
                        <ProjectCard 
                          key={project.id}
                          project={project}
                          hoveredProject={hoveredProject}
                          setHoveredProject={setHoveredProject}
                          formatProjectName={formatProjectName}
                        />
                      ))}
                    </motion.div>
                    
                    {categoryProjects.length > 6 && (
                      <div className="text-center mt-8">
                        <button
                          onClick={() => setActiveCategory(categoryKey)}
                          className="px-6 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors font-medium"
                        >
                          Voir tous les projets {category.name}
                        </button>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {filteredProjects.map((project) => (
                  <ProjectCard 
                    key={project.id}
                    project={project}
                    hoveredProject={hoveredProject}
                    setHoveredProject={setHoveredProject}
                    formatProjectName={formatProjectName}
                  />
                ))}
              </motion.div>
            )}
          </>
        )}
        
        {!loading && !error && filteredProjects.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Aucun projet ne correspond à cette catégorie.
            </p>
            <button 
              onClick={() => setActiveCategory('all')}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Voir tous les projets
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: GitHubProject;
  hoveredProject: number | null;
  setHoveredProject: (id: number | null) => void;
  formatProjectName: (name: string) => string;
}

function ProjectCard({ project, hoveredProject, setHoveredProject, formatProjectName }: ProjectCardProps) {
  return (
    <motion.div
      key={project.id}
      className="group flex flex-col h-full relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
      variants={itemVariants}
    >
      <div className="relative h-52 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70 z-10" />
        
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              const placeholder = document.createElement('div');
              placeholder.className = "w-full h-full";
              parent.appendChild(placeholder);
              
              const canvas = document.createElement('canvas');
              canvas.width = 400;
              canvas.height = 225;
              canvas.className = "w-full h-full object-cover";
              placeholder.appendChild(canvas);
              
              const ctx = canvas.getContext('2d');
              if (ctx) {
                const gradient = ctx.createLinearGradient(0, 0, 400, 225);
                gradient.addColorStop(0, '#4f46e5');
                gradient.addColorStop(1, '#3b82f6');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, 400, 225);
                
                ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
                ctx.beginPath();
                ctx.arc(50, 50, 80, 0, Math.PI * 2);
                ctx.fill();
                
                ctx.fillStyle = 'rgba(255, 255, 255, 0.07)';
                ctx.beginPath();
                ctx.arc(350, 150, 100, 0, Math.PI * 2);
                ctx.fill();
                
                ctx.font = 'bold 20px system-ui, -apple-system, sans-serif';
                ctx.textAlign = 'center';
                ctx.fillStyle = 'white';
                ctx.fillText(formatProjectName(project.name), 200, 112);
              }
            }
          }}
        />
        
        {project.language && (
          <span 
            className="absolute top-4 left-4 z-20 text-xs font-medium px-4 py-1.5 bg-blue-600 text-white rounded-full shadow-lg backdrop-blur-sm"
          >
            {project.language}
          </span>
        )}
      </div>
      
      <div className="flex flex-col flex-grow p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {formatProjectName(project.name)}
          </h3>
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              {project.stars}
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              {project.forks}
            </div>
          </div>
        </div>
        
        {project.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.topics.slice(0, 3).map((topic: string, index: number) => (
              <span 
                key={index} 
                className="text-xs font-medium px-3 py-1 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 rounded-full"
              >
                {topic}
              </span>
            ))}
            {project.topics.length > 3 && (
              <span className="text-xs font-medium px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-full">
                +{project.topics.length - 3}
              </span>
            )}
          </div>
        )}
        
        <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow mb-5">
          {project.description ? (
            hoveredProject === project.id 
              ? project.description 
              : `${project.description.substring(0, 100)}${project.description.length > 100 ? '...' : ''}`
          ) : (
            "Aucune description disponible pour ce projet."
          )}
        </p>
        
        <div className="flex gap-4 pt-2 mt-auto">
          {project.homepage && (
            <a 
              href={project.homepage} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg flex items-center justify-center transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Démo
            </a>
          )}
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${project.homepage ? 'flex-1' : 'w-full'} py-2 px-4 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg flex items-center justify-center transition-colors`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}