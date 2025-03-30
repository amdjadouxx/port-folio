# Portfolio Développeur - 2025

Un portfolio moderne pour développeur web & mobile, créé avec Next.js, React et Tailwind CSS. Ce projet présente une conception élégante et une expérience utilisateur intuitive, avec des animations fluides et un design réactif.

## Fonctionnalités

- 🌓 Mode Sombre / Clair
- 🎨 Animations et transitions fluides avec Framer Motion
- 📱 Design entièrement réactif (mobile, tablette, bureau)
- 🚀 Performance optimisée (Core Web Vitals)
- 🔍 SEO optimisé
- 🧩 Architecture modulaire et composants réutilisables

## Sections

- **Header** - Navigation intuitive avec mode sombre/clair
- **Hero** - Introduction avec animation de texte et image de profil
- **À propos** - Présentation personnelle avec timeline animée
- **Projets** - Présentation des projets avec filtrage par catégorie
- **Compétences** - Visualisation des compétences techniques
- **Footer** - Liens sociaux et informations complémentaires

## Technologies

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **UI** : React, Tailwind CSS
- **Animations** : Framer Motion
- **Déploiement** : Vercel
- **Thème** : next-themes

## Personnalisation

- Modifier les informations personnelles dans les composants
- Remplacer les images par défaut dans le dossier `public/images`
- Ajuster les couleurs dans `tailwind.config.js`
- Mettre à jour les métadonnées dans `src/app/layout.tsx`

## Structure du projet

```
portfolio-2025/
├── public/
│   └── images/
│       ├── profile.jpg
│       └── projects/
├── src/
│   ├── app/
│   │   ├── favicon.tsx
│   │   ├── icon.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── header/
│   │   ├── home/
│   │   ├── projects/
│   │   ├── skills/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── ui/
│   │   └── ThemeProvider.tsx
│   └── styles/
└── tailwind.config.js
```

## Déploiement

Le moyen le plus simple de déployer ce portfolio est d'utiliser la [Plateforme Vercel](https://vercel.com/new).

## Licence

Ce projet est sous licence MIT.
