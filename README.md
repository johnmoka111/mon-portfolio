# Portfolio Professionnel - John Moka

Ce dépôt contient le code source du site web professionnel de John Moka, développeur Full-Stack, concepteur UI/UX et co-fondateur de TAL Communities. C'est une application monopage (SPA) haut de gamme, moderne et responsive, construite avec Next.js 14, Tailwind CSS, TypeScript et next-intl.

L'application est optimisée pour l'export statique, configurée pour Firebase Hosting, et supporte le multilinguisme (Français, Anglais, Swahili), un mode sombre natif sans scintillement (zero-flash), ainsi que des fonctionnalités de Progressive Web App (PWA).

---

## Fonctionnalités Principales

* **Internationalisation Complète (next-intl) :** Gestion des langues (Français, Anglais, Swahili) pré-rendues statiquement avec détection et persistance automatique de la langue préférée de l'utilisateur.
* **Mode Sombre Natif :** Toggle de thème (sombre/clair) persistant via le stockage local (localStorage) avec un script d'initialisation inséré dans l'en-tête (head) pour éviter le scintillement au chargement de la page.
* **Animations Premium (Framer Motion) :** Transitions fluides, révélations progressives, effets de survol interactifs et suivi visuel de la navigation mobile.
* **Progressive Web App (PWA) :** Intégration d'un Service Worker personnalisé assurant le fonctionnement hors ligne (mode déconnecté) avec un fichier manifest.json complet et des icônes d'application adaptatives.
* **Optimisation SEO & Indexation :** Balises meta détaillées pour chaque langue, configuration de la clé Google Search Console, et génération automatisée d'un sitemap XML multilingue intégrant les balises alternatives hreflang.
* **Hébergement Firebase Hosting :** Configuration des redirections de langues et des URL propres (clean URLs) directement gérées côté serveur via firebase.json.

---

## Pile Technique

* **Framework Principal :** Next.js 14.2 (App Router)
* **Langage de Programmation :** TypeScript
* **Style et Mise en Page :** Tailwind CSS v3.4
* **Bibliothèque d'Animations :** Framer Motion
* **Bibliothèque d'Icônes :** Lucide React
* **Gestion des Traductions :** next-intl
* **Hébergement et Déploiement :** Firebase Hosting

---

## Structure du Projet

```text
├── app/
│   ├── layout.tsx         # Layout racine (polices, styles globaux, métadonnées, validation Google)
│   ├── page.tsx           # Redirection automatique vers la langue préférée (/fr, /en, ou /sw)
│   └── [lang]/
│       ├── layout.tsx     # Fournisseur de contexte i18n et paramètres statiques de langue
│       ├── page.tsx       # Assemblage des sections de la page d'accueil
│       └── privacy/
│           └── page.tsx   # Page de Politique de Confidentialité & Cookies (multilingue)
├── components/
│   ├── Header.tsx         # En-tête, sélecteur de thème, sélecteur de langue et navigation mobile
│   ├── Hero.tsx           # Section d'introduction avec portrait et boutons d'appel à l'action
│   ├── About.tsx          # Ligne du temps du parcours professionnel
│   ├── Skills.tsx         # Grille de compétences avec interactions
│   ├── Leadership.tsx     # Présentation des rôles de leadership sous forme de cartes
│   ├── Gallery.tsx        # Galerie de projets et réalisations
│   ├── Contact.tsx        # Formulaire de contact sécurisé et liens sociaux
│   ├── Footer.tsx         # Pied de page avec droits d'auteur et lien de confidentialité
│   └── PWARegister.tsx    # Enregistrement du service worker pour le fonctionnement PWA
├── messages/
│   ├── fr.json            # Fichier de traduction en Français
│   ├── en.json            # Fichier de traduction en Anglais
│   └── sw.json            # Fichier de traduction en Swahili
├── public/
│   ├── sitemap.xml        # Plan du site global pour les moteurs de recherche
│   ├── robots.txt         # Directives pour les robots d'indexation
│   ├── manifest.json      # Configuration de l'application PWA
│   ├── sw.js              # Script du Service Worker pour la mise en cache
│   ├── fr/
│   │   └── sitemap.xml    # Plan du site secondaire dédié au sous-répertoire Search Console
│   └── john.png           # Photo de profil
├── firebase.json          # Configuration des règles d'hébergement Firebase
├── next.config.mjs        # Configuration des options d'export Next.js
├── tailwind.config.ts     # Configuration de la charte graphique et des couleurs personnalisées
└── tsconfig.json          # Options du compilateur TypeScript
```

---

## Installation et Développement Local

### Prérequis

Assurez-vous d'avoir Node.js (version 18 ou supérieure) installé sur votre machine.

### Instructions

1. Cloner le dépôt et se placer dans le dossier du projet :
   ```bash
   git clone https://github.com/johnmoka111/mon-portfolio.git
   cd mon-portfolio
   ```

2. Installer les dépendances npm :
   ```bash
   npm install
   ```

3. Lancer le serveur de développement local :
   ```bash
   npm run dev
   ```
   Le site sera accessible localement à l'adresse http://localhost:3000 (ou sur le port libre indiqué dans le terminal).

4. Valider le code et vérifier les erreurs de type / syntaxe :
   ```bash
   npm run lint
   ```

---

## Build et Déploiement

Le site est configuré pour générer un export HTML entièrement statique (dossier out/).

### Compilation de Production

Pour compiler le projet et générer les fichiers statiques de production, exécutez :
```bash
npm run build
```

### Déploiement sur Firebase Hosting

Les déploiements s'appuient sur l'outil en ligne de commande officiel de Firebase (firebase-tools).

1. Connexion au compte Google associé à Firebase :
   ```bash
   npx firebase-tools login
   ```

2. Déployer les fichiers compilés (contenus dans le dossier out/) sur Firebase Hosting :
   ```bash
   npx firebase-tools deploy
   ```

Une fois le déploiement terminé, l'application est en ligne sur l'adresse configurée dans la console Firebase.
