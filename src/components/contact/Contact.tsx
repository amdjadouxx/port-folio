"use client";

const contactInfo = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email',
    value: 'amdjad.freelance@gmail.com',
    link: 'mailto:amdjad.freelance@gmail.com'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Téléphone',
    value: '06 93 11 67 91',
    link: 'tel:+33693116791'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Localisation',
    value: 'Île de La Réunion',
    link: 'https://maps.google.com/?q=La+Reunion'
  }
];

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

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Me Contacter
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-8" />
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Vous recherchez un expert pour vos projets de Data Science, de développement web ou d&apos;optimisation de performances ? Contactez-moi directement par email ou téléphone.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mb-16 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Projets techniques et collaborations</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Toujours en quête de nouveaux défis pour améliorer mes compétences et contribuer à des projets innovants. Si vous avez besoin d&apos;un professionnel pour renforcer votre équipe ou mener à bien un projet spécifique, n&apos;hésitez pas à me contacter.
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-white">
              Mes coordonnées
            </h3>
            
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-200">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Suivez-moi sur les réseaux
            </h3>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}