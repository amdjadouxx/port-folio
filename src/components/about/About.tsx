"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
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
      stiffness: 100,
      damping: 12
    }
  }
};

const experienceItems = [
  {
    id: 1,
    role: "Consultant technique principal",
    company: "ARIPA",
    date: "Oct. 2024 - Mars 2025",
    type: "Temps partiel",
    location: "La Réunion · Sur site",
    description: "Mise en place d'un cahier des charges afin d'optimiser le stockage, l'exploitation des données, et la sécurité. Automatisation des processus internes et des tâches répétitives.",
    skills: ["Python", "Automatisation des processus", "Data Analysis", "Sécurité informatique", "Optimisation"]
  },
  {
    id: 2,
    role: "Développeur Full Stack",
    company: "CGSS Réunion",
    date: "Sept. 2023 - Déc. 2023",
    type: "Stage",
    location: "Réunion · Sur site",
    description: "Durant ce stage, j'ai eu l'opportunité d'évoluer dans le monde de l'entreprise. Celui-ci m'a permis d'appréhender : les différents profils au sein d'une équipe, la mise en place d'une bonne CICD, et le développement web et ses différentes facettes.",
    skills: ["Travail d'équipe", "DevOps", "CI/CD", "Web Development"]
  },
  {
    id: 3,
    role: "Développeur Fullstack / Data scientist / Développeur IA (étudiant+ freelance)",
    company: "Projets indépendants",
    date: "2025 - Présent",
    description: "Développement d'applications web, de modèles d'IA, de pipeline de traitement de données, de chatbot (RAG ou autres), d'automatisation, etc..."
  }
];

export default function About() {
  const [selectedTab, setSelectedTab] = useState('experience');
  
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Section de gauche - Bio et informations personnelles */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
                À propos de moi
              </h2>
              <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-8"></div>
              
              <div className="prose prose-lg dark:prose-invert max-w-none mb-10">
                <p className="mb-4">
                  🚀 <strong>Passionné et polyvalent</strong>, j&apos;acquiers constamment de nouvelles compétences techniques pour résoudre des problèmes concrets. Je me spécialise dans plusieurs domaines clés:
                </p>
                
                <ul className="space-y-2">
                  <li>
                    <strong>🔬 Data Science & Machine Learning:</strong> Développement de modèles prédictifs, réseaux neuronaux, traitement d&apos;images et NLP.
                  </li>
                  <li>
                    <strong>💻 Développement Web & API:</strong> Création d&apos;applications web performantes avec React, Next.js, Node.js et Python.
                  </li>
                  <li>
                    <strong>⚡ Optimisation & Performance:</strong> Amélioration des systèmes existants, programmation bas niveau (Assembleur, COBOL) pour une meilleure efficacité.
                  </li>
                  <li>
                    <strong>📚 Formation:</strong> Partage des connaissances à travers des workshops et des projets collaboratifs.
                  </li>
                </ul>
                
                <p className="mt-4">
                  Je cherche constamment à relever de nouveaux défis pour étendre mes compétences et contribuer à des projets innovants.
                </p>
              </div>
              
              {/* Informations personnelles avec icônes améliorées */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500 dark:text-gray-400">Nom</h3>
                    <p className="font-medium text-gray-800 dark:text-white">Amdjad AHMOD ALI</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500 dark:text-gray-400">Disponibilité</h3>
                    <p className="font-medium text-gray-800 dark:text-white">Disponible</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500 dark:text-gray-400">Localisation</h3>
                    <p className="font-medium text-gray-800 dark:text-white">Île de La Réunion</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600 dark:text-yellow-400 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500 dark:text-gray-400">Email</h3>
                    <p className="font-medium text-gray-800 dark:text-white">amdjad.ahmod-ali@epitech.eu</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500 dark:text-gray-400">Téléphone</h3>
                    <p className="font-medium text-gray-800 dark:text-white">06 93 11 67 91</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500 dark:text-gray-400">Langues</h3>
                    <p className="font-medium text-gray-800 dark:text-white">Français, Anglais</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Section de droite - Expérience et Éducation */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setSelectedTab('experience')}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedTab === 'experience' 
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  Expérience professionnelle
                </button>
                <button
                  onClick={() => setSelectedTab('education')}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedTab === 'education' 
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  Éducation
                </button>
              </div>
              
              {/* Expérience professionnelle */}
              {selectedTab === 'experience' && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700"
                >
                  {experienceItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      variants={itemVariants}
                      className={`relative pb-12 ${index === experienceItems.length - 1 ? '' : ''}`}
                    >
                      <div className="absolute -left-8 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white shadow-md z-10">
                        <span className="text-xs font-bold">{item.id}</span>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <div className="flex flex-wrap justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{item.role}</h3>
                          <span className="text-sm text-blue-600 dark:text-blue-400 font-medium px-3 py-1 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                            {item.date}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <p className="text-sm text-blue-600 dark:text-blue-400">{item.company}</p>
                          {item.type && (
                            <span className="text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 px-2 py-1 rounded-full">
                              {item.type}
                            </span>
                          )}
                        </div>
                        {item.location && (
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {item.location}
                          </p>
                        )}
                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                        
                        {item.skills && item.skills.length > 0 && (
                          <div className="mt-4">
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Compétences</p>
                            <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill, skillIndex) => (
                                <span 
                                  key={skillIndex}
                                  className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
              
              {/* Éducation */}
              {selectedTab === 'education' && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700"
                >
                  <motion.div
                    variants={itemVariants}
                    className="relative pb-12"
                  >
                    <div className="absolute -left-8 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white shadow-md z-10">
                      <span className="text-xs font-bold">1</span>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                      <div className="flex flex-wrap justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">Programme grande école, Informatique</h3>
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium px-3 py-1 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                          2022 - 2027
                        </span>
                      </div>
                      <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">Epitech - L&apos;école de l&apos;excellence informatique</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Formation d&apos;expert en technologies de l&apos;information avec spécialisation en Data Science et Intelligence Artificielle.
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Dans mon rôle actuel chez Epitech, j&apos;acquiers des compétences avancées en Data Science, incluant 
                        le Machine Learning, le Deep Learning, le NLP, et l&apos;analyse de données.
                        Je développe également des compétences en développement web et mobile, avec une emphase sur 
                        les technologies modernes.
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">
                        <strong>Activités et associations :</strong> Cobra
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    variants={itemVariants}
                    className="relative pb-12"
                  >
                    <div className="absolute -left-8 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white shadow-md z-10">
                      <span className="text-xs font-bold">2</span>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                      <div className="flex flex-wrap justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">BTS SIO (Services Informatiques aux Organisations)</h3>
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium px-3 py-1 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                          2020 - 2022
                        </span>
                      </div>
                      <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">Lycée de Bel Air</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Formation en développement d&apos;applications et gestion de systèmes d&apos;information.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    variants={itemVariants}
                    className="relative"
                  >
                    <div className="absolute -left-8 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white shadow-md z-10">
                      <span className="text-xs font-bold">3</span>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                      <div className="flex flex-wrap justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">Baccalauréat Scientifique</h3>
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium px-3 py-1 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                          2019 - 2020
                        </span>
                      </div>
                      <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">Lycée de Bel Air</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Diplôme obtenu avec mention, spécialisation en mathématiques et physique.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 