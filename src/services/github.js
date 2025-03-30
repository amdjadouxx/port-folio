/**
 * Service pour récupérer les projets GitHub
 */

// Nom d'utilisateur GitHub
const GITHUB_USERNAME = 'amdjadouxx';

/**
 * Récupère les projets GitHub de l'utilisateur
 * @param {number} limit - Nombre maximum de projets à récupérer
 * @returns {Promise<Array>} Liste des projets
 */
export async function fetchGitHubProjects(limit = 10) {
  try {
    // Appel à l'API GitHub pour récupérer les dépôts publics
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
    );

    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`);
    }

    const repos = await response.json();

    // Filtrer et transformer les données pour les adapter au format de notre application
    return repos
      .filter(repo => 
        !repo.fork && 
        !repo.archived && 
        repo.name !== 'amdjadouxx' && 
        repo.name !== 'amdjadouxx.github.io'
      ) // Exclure les forks, les archives, et les repos spécifiques
      .slice(0, limit) // Limiter le nombre de projets après filtrage
      .map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || 'Aucune description disponible',
        url: repo.html_url,
        homepage: repo.homepage,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
        created: repo.created_at,
        updated: repo.updated_at,
        topics: repo.topics || [],
        // Une valeur par défaut pour l'image si nous n'avons pas de miniature GitHub
        image: `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`,
      }));
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    return []; // Retourner un tableau vide en cas d'erreur
  }
}

/**
 * Récupère les détails d'un projet GitHub spécifique
 * @param {string} repoName - Nom du dépôt
 * @returns {Promise<Object>} Détails du projet
 */
export async function fetchGitHubProjectDetails(repoName) {
  try {
    // Récupérer les détails du dépôt
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}`
    );

    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`);
    }

    const repo = await response.json();
    
    // Récupérer le contenu du README.md s'il existe
    let readme = null;
    try {
      const readmeResponse = await fetch(
        `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/readme`
      );
      
      if (readmeResponse.ok) {
        const readmeData = await readmeResponse.json();
        // Le contenu est encodé en base64
        const readmeContent = atob(readmeData.content);
        readme = readmeContent;
      }
    } catch (error) {
      console.error('Error fetching README:', error);
    }

    // Récupérer les langages utilisés
    const languagesResponse = await fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/languages`
    );
    
    const languages = languagesResponse.ok ? await languagesResponse.json() : {};

    return {
      id: repo.id,
      name: repo.name,
      description: repo.description || 'Aucune description disponible',
      url: repo.html_url,
      homepage: repo.homepage,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language,
      languages,
      created: repo.created_at,
      updated: repo.updated_at,
      topics: repo.topics || [],
      readme,
      image: `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`,
    };
  } catch (error) {
    console.error(`Error fetching details for project ${repoName}:`, error);
    return null;
  }
} 