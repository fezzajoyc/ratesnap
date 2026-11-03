import type { Dictionary } from "../i18n";

// Français (fr) — vouvoiement constant, sans anglicismes évitables.
// Contrat : forme des clés identique à en (tests/seo.test.ts), valeurs en français.
const fr: Dictionary = {
  brand: "RateSnap",
  tagline: "Des outils de devises qui tournent dans votre navigateur.",
  metaDesc:
    "Outils de devises gratuits dans votre navigateur : convertisseur à précision réglable, tables de conversion, taux croisés et calcul de marge FX. Taux d'open.er-api.com, en cache sur votre appareil.",

  nav: {
    tools: "Tous les outils",
    categories: "Catégories",
    about: "À propos",
    menu: "Menu",
    language: "Langue",
  },

  home: {
    heroTitle: "Des taux de change à la précision qu'exige votre comptable",
    heroSub:
      "Convertissez plus de 160 devises avec 2 à 6 décimales, lisez des tables entières, vérifiez les taux croisés et voyez ce que la marge de la banque laisse de votre facture — en 15 langues, sans inscription.",
    browseAll: "Voir tous les outils",
    pinned: "Épinglés",
    pin: "Épingler",
    unpin: "Désépingler",
    popular: "Populaires en ce moment",
    categoriesTitle: "Catégories",
    featuredTitle: "Outils populaires",
    trustLocal: "Vos fichiers restent sur votre appareil",
    trustFree: "Gratuit, sans compte",
    trustFast: "Instantané, fonctionne hors ligne",
    rotating: [
      "USD vers EUR à 4 décimales — les chiffres que l'encadré-réponse jette",
      "De 1 à 10 000 dans une table — une seule capture, toute la colonne cohérente",
      "Taux croisés enchaînés puis vérifiés contre la cote directe",
      "Voyez ce que les 2 % de la banque prennent sur votre facture — avant de signer",
    ],
    statsLabels: { tools: "outils", languages: "langues", uploads: "envois", accounts: "comptes" },
    eyebrow: "Gratuit, pour toujours",
    heroCtaSecondary: "Comment ça marche",
    statsTools: "{n} outils",
    statsLanguages: "{n} langues",
    statsUploads: "0 envoi",
    statsAccounts: "0 compte",
    categoriesSub: "Quatre outils, une table de taux honnête, tout sur votre appareil.",
    popularSub: "Les outils que l'on ouvre le plus.",
    privacyTitle: "Vos montants ne quittent jamais votre appareil.",
    privacySub:
      "Il n'y a pas d'étape d'envoi. Les outils sont du JavaScript dans votre navigateur — le seul appel réseau est la table de taux gratuite d'open.er-api.com, avec cache, horodatage et mention explicite.",
    privacyPoint1T: "Traitement local",
    privacyPoint1D:
      "Les montants saisis sont convertis en mémoire par JavaScript. Rien n'est transmis nulle part — le seul trafic réseau est le téléchargement de la table de taux, et il ne contient aucune de vos données.",
    privacyPoint2T: "Aucun compte",
    privacyPoint2D: "Pas d'inscription, pas d'e-mail, pas d'historique conservé. Ouvrez un outil et utilisez-le.",
    privacyPoint3T: "Honnête par conception",
    privacyPoint3D:
      "Si quelque chose ne peut réellement pas être fait dans le navigateur, nous le disons au lieu de le faire semblant.",
    privacyLink: "Lire la note de confidentialité complète",
    endTitle: "Choisissez un outil. Il fonctionne, tout simplement.",
    endSub: "Quinze langues, une source de taux gratuite, rien à installer.",
  },

  tools: {
    title: "Tous les outils",
    subtitle: "Cherchez parmi {count} outils gratuits dans le navigateur. Sans envoi, sans inscription.",
    filterPlaceholder: "Rechercher un outil…",
    count: "{count} outils",
    empty: "Aucun outil ne correspond à « {query} ».",
  },

  categories: {
    pdf: { name: "PDF", desc: "Fusionnez, divisez, convertissez et modifiez des fichiers PDF sans les envoyer nulle part." },
    image: { name: "Image", desc: "Compressez, redimensionnez, recadrez et convertissez des images directement dans votre navigateur." },
    text: { name: "Texte", desc: "Comptez, nettoyez, triez et transformez du texte instantanément, pendant la saisie." },
    developer: { name: "Développement", desc: "Formateurs, encodeurs, décodeurs et générateurs pour le quotidien du développeur." },
    seo: { name: "SEO", desc: "Balises meta, données structurées, aperçu SERP et autres assistants de référencement." },
    security: { name: "Sécurité", desc: "Mots de passe, empreintes et vérifications — générés et contrôlés sur votre appareil." },
    utility: { name: "Utilitaires", desc: "Convertisseur, tables de conversion, taux croisés et marge FX — sur des taux de marché médian, en cache sur votre appareil." },
  },

  tool: {
    howTo: "Mode d'emploi",
    faq: "Questions fréquentes",
    related: "Outils associés",
    nextStep: "Étapes suivantes",
    copyLink: "Copier le lien",
    privacyNote:
      "Cet outil s'exécute entièrement dans votre navigateur. Vos données ne quittent jamais votre appareil — elles ne sont envoyées à aucun serveur.",
    inCategory: "Plus d'outils dans {category}",
    backToCategory: "Tous les outils {category}",
  },

  common: {
    openTool: "Ouvrir l'outil",
    copy: "Copier",
    copied: "Copié",
    download: "Télécharger",
    reset: "Réinitialiser",
    swap: "Inverser",
    clear: "Effacer",
    error: "Une erreur est survenue. Vérifiez votre saisie et réessayez.",
    input: "Entrée",
    output: "Résultat",
    settings: "Options",
    dropFiles: "Déposez des fichiers ici ou cliquez pour choisir",
    dropFile: "Déposez un fichier ici ou cliquez pour choisir",
    processing: "Traitement…",
    fileSize: "Taille",
    sample: "Essayer un exemple",
    uppercase: "MAJUSCULES",
  },

  unit: {
    from: "De",
    to: "Vers",
    amount: "Quantité",
    result: "Résultat",
    common: "Conversions courantes",
    formula: "Formule",
    allUnits: "Toutes les unités",
  },

  text: {
    stats: {
      words: "Mots",
      characters: "Caractères",
      charsNoSpaces: "Sans espaces",
      sentences: "Phrases",
      paragraphs: "Paragraphes",
      lines: "Lignes",
      readingTime: "Temps de lecture",
      readingMinutes: "{n} min de lecture",
    },
  },

  footer: {
    line: "Outils de devises gratuits. Taux d'open.er-api.com, en cache sur votre appareil ; vos chiffres n'en sortent jamais.",
    privacy: "Confidentialité",
    terms: "Conditions",
    about: "À propos",
    badges: "Badges",
    language: "Langue",
  },

  badge: {
    title: "Badges RateSnap",
    desc: "Affichez un badge RateSnap sur votre site, votre README ou votre documentation. Il renvoie ici et signale que les outils de devises derrière tournent dans le navigateur, sur des taux affichés et mis en cache.",
    voluntary: "L'intégration est entièrement volontaire — prenez un badge si le projet vous plaît. Aucune autorisation nécessaire.",
    md: "Markdown (README)",
    html: "HTML (site web)",
    thanks: "Merci de faire passer le mot — chaque intégration aide plus de personnes à découvrir des outils qui respectent leurs fichiers.",
  },

  embed: {
    title: "Intégrer cet outil",
    desc: "Ajoutez cet outil à votre site en une ligne — il s'exécute dans le navigateur du visiteur.",
  },

    mcp: {
    title: "Serveur MCP — outils accessibles aux IA",
    desc1: "RateSnap embarque un serveur MCP (Model Context Protocol) : les assistants IA comme Claude ou Cursor peuvent exécuter les mêmes conversions et calculs de taux que ce site — même logique testée, aucune réimplémentation.",
    desc2: "Les outils exécutent les fonctions pures du site lui-même : conversion, taux croisés, marge et arrondi monétaire. Vous fournissez le taux ; l'exécution se fait sur la machine du client IA via npx — rien n'est envoyé à nos serveurs.",
    toolsTitle: "Outils exécutables ({n})",
    requiresNode: "Nécessite Node.js 18+. Le serveur tourne localement en stdio ; seuls les appels que vous lancez sont calculés sur votre machine.",
    privacy: "Nécessite Node.js 18+. Le serveur tourne localement en stdio ; seuls les appels que vous lancez sont calculés sur votre machine.",
  },

    notFound: {
    title: "Page introuvable",
    body: "L'outil que vous cherchez n'existe pas. Parcourez plutôt tous les outils.",
    home: "Retour à l'accueil",
  },
};

export default fr;
