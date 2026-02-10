import airbnb from "../../assets/airbnb.png";
import dropbox from "../../assets/dropbox.png";
import asana from "../../assets/asana.png";
import khan_academy from "../../assets/khan_academy.png";
import Neipaltel from "../../assets/neipal.png";
import Netflix from "../../assets/netflix.png";
import pinterest from "../../assets/pinterest.png";
import whatsapp from "../../assets/whasapp.png";
import affinesale from "../../assets/affinesale.png";
import ecommerce from "../../assets/e-commerce-image.png";
import estate from "../../assets/estate-image.png";
import portfolioImage from "../../assets/portfolio-image.png";
import Chakam from "../../assets/portfolio-image.png";
import Edutrack from "../../assets/edutrack.png";

export const projectsData = [
  // html css boostrap projects
  {
    title: "Property Booking Platform",
    category: "FRONTEND", // Ajoutez cette ligne
    type: "frontend", // Ajoutez cette ligne
    description:
      "Modern vacation rental platform featuring property listings, advanced search filters, booking calendar, and user authentication. Built with React.js and responsive design for seamless mobile experience.",
    image: airbnb,
    demo: "https://airbnb-web-site.vercel.app/",
    code: "https://github.com/Clinton62395/clinton-projects/tree/master/",
    technologies: ["React.js", "CSS3", "JavaScript", "Responsive Design"],
    features: [
      "Property Search",
      "Booking System",
      "User Authentication",
      "Mobile Responsive",
    ],
  },

  {
    title: "Project Management Platform",
    category: "FRONTEND", // Ajoutez cette ligne
    type: "frontend", // Ajoutez cette ligne
    description:
      "Comprehensive team collaboration tool with task management, project tracking, team workflows, and progress monitoring. Features modern dashboard interface and intuitive user experience design.",
    image: asana,
    demo: "https://asana-project-web.vercel.app/",
    code: "https://github.com/Clinton62395/clinton-projects/tree/master/Asana",
    technologies: ["React.js", "Modern CSS", "JavaScript ES6+", "UI/UX Design"],
    features: [
      "Task Management",
      "Team Collaboration",
      "Progress Tracking",
      "Dashboard Analytics",
    ],
  },

  {
    title: "Cloud Storage Platform",
    category: "FRONTEND", // Ajoutez cette ligne
    type: "frontend", // Ajoutez cette ligne
    description:
      "Secure file sharing and storage solution with drag-and-drop functionality, folder organization, and file management system. Clean, professional interface optimized for business productivity.",
    image: dropbox,
    demo: "https://dropbox-web-five.vercel.app/",
    code: "https://github.com/Clinton62395/clinton-projects/tree/master/Dropbox",
    technologies: ["React.js", "File API", "CSS Grid", "Responsive Framework"],
    features: [
      "File Upload",
      "Folder Management",
      "Secure Sharing",
      "Cross-Platform",
    ],
  },

  {
    title: "Educational Learning Platform",
    category: "FRONTEND", // Ajoutez cette ligne
    type: "frontend", // Ajoutez cette ligne
    description:
      "Interactive e-learning website with course catalog, progress tracking, and educational content management. Features engaging user interface and optimized learning experience for students and educators.",
    image: khan_academy,
    demo: "https://khan-academy-web-site.vercel.app/",
    code: "https://github.com/Clinton62395/clinton-projects/tree/master/Khan-academy",
    technologies: [
      "React.js",
      "Educational UI",
      "Progress APIs",
      "Responsive Design",
    ],
    features: [
      "Course Management",
      "Progress Tracking",
      "Interactive Learning",
      "Student Dashboard",
    ],
  },
  {
    title: "Neipatel ",
    category: "FRONTEND", // Ajoutez cette ligne
    type: "frontend", // Ajoutez cette ligne
    description:
      "Neipatel est un site web de référence pour les professionnels de la santé et les médecins. Il propose une interface simple et conviviale pour trouver des informations sur les services de santé disponibles dans votre région. Le site est conçu pour être accessible sur tous les appareils, y compris les smartphones.",
    image: Neipaltel,
    demo: "https://neipatel-web-site.vercel.app/",
    code: "https://github.com/clinton62395/neipaltel",
    technologies: ["React.js", "Tailwind CSS", "TypeScript", "Node.js"],
    features: [
      "Interface conviviale",
      "Recherche de services de santé",
      "Informations sur les services de santé",
      "Navigation fluide",
    ],
    tag: ["Santé", "Interface conviviale", "Recherche de services de santé"],
  },

  {
    title: "Visual Discovery Platform",
    category: "FRONTEND", // Ajoutez cette ligne
    type: "frontend", // Ajoutez cette ligne
    description:
      "Pinterest-inspired social platform for visual content sharing with image galleries, user profiles, and discovery features. Implements modern grid layouts and infinite scrolling for optimal user engagement.",
    image: pinterest,
    demo: "https://pinterest-web-site.vercel.app/",
    code: "https://github.com/Clinton62395/clinton-projects/tree/master/Pinterest",
    technologies: [
      "React.js",
      "CSS Grid",
      "Image Optimization",
      "Social Features",
    ],
    features: [
      "Image Galleries",
      "User Profiles",
      "Content Discovery",
      "Social Sharing",
    ],
  },

  {
    title: "Real-Time Messaging Application",
    category: "FRONTEND", // Ajoutez cette ligne
    type: "frontend", // Ajoutez cette ligne
    description:
      "WhatsApp-inspired chat application with real-time messaging, user status, and modern communication interface. Features responsive design and optimized for both desktop and mobile platforms.",
    image: whatsapp,
    demo: "https://whasapp-landing-page.vercel.app/",
    code: "https://github.com/Clinton62395/clinton-projects/tree/master/Whatsapp",
    technologies: ["React.js", "Real-time APIs", "Modern UI", "Cross-Platform"],
    features: [
      "Real-time Messaging",
      "User Status",
      "Media Sharing",
      "Mobile Responsive",
    ],
  },

  {
    title: "Video Streaming Platform",
    category: "FRONTEND", // Ajoutez cette ligne
    type: "frontend", // Ajoutez cette ligne
    description:
      "Netflix-inspired streaming service with video player, content categories, user authentication, and personalized recommendations. Built with modern React architecture and optimized for video content delivery.",
    image: Netflix,
    demo: "https://netflix-web-site-three.vercel.app/",
    code: "https://github.com/Clinton62395/clinton-projects/tree/master/Netflix",
    technologies: [
      "React.js",
      "Video APIs",
      "Authentication",
      "Content Management",
    ],
    features: [
      "Video Streaming",
      "User Authentication",
      "Content Categories",
      "Personalized Interface",
    ],
  },

  //  ===================== vanillajs =================
  {
    title: " vanilla js",
    category: "VANILLA_JS",
    type: "VANILLA_JS",
    description:
      "Collection of dynamic web applications built with vanilla JavaScript showcasing DOM manipulation, API integrations, and interactive user interfaces. Demonstrates strong foundation in core web technologies.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtgzsGkfT4EzquXh4TCm66xky7OSITGbUZ-g&s",
    demo: "https://javascript-class-delta.vercel.app/",
    code: "https://github.com/Clinton62395/javascript-class/tree/master/",
    technologies: [
      "Vanilla JavaScript",
      "DOM Manipulation",
      "API Integration",
      "Modern Web Standards",
    ],
    features: [
      "Interactive UI",
      "API Consumption",
      "Dynamic Content",
      "Pure JavaScript",
    ],
  },
  // ================= PORTFOLIO =================
  {
    title: "Personal Portfolio",
    category: "PORTFOLIO",
    type: "frontend",
    tag: "My Portfolio",
    image: portfolioImage,
    description:
      "Portfolio professionnel présentant mes compétences, projets et expériences avec animations modernes et performance optimisée.",
    demo: "https://clinton-portfolio-five.vercel.app/",
    code: "https://github.com/clinton62395/ ",
    technologies: ["React", "Tailwind CSS", "Animations"],
    features: [
      "Présentation professionnelle",
      "Animations fluides",
      "SEO friendly",
      "Design responsive",
    ],
  },

  // ================= FULLSTACK / Affiliation =================
  {
    title: " Affiliate Platform",
    category: "FULLSTACK", // Ajoutez cette ligne
    type: "fullstack", // Ajoutez cette ligne
    description:
      "AfineSale is my first fullstack project — an innovative e-commerce affiliate platform. It features a comprehensive system for managing products, commissions, and partners. Built with a modern architecture and advanced e-commerce functionalities.",
    image: affinesale,
    demo: "https://affinatesale.vercel.app/",
    code: "https://github.com/clinton62395/Affinatesale",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Authentication",
      "Internal Payment Integration",
    ],
    features: [
      "Affiliate System",
      "Dashboard",
      "Commission Management",
      "Sales Tracking",
    ],
  },

  // ================= FULLSTACK / E-COMMERCE =================
  {
    title: "E-commerce Platform",
    category: "FULLSTACK",
    type: "fullstack",
    tag: "Fullstack App",
    image: ecommerce,
    description:
      "Application e-commerce complète avec gestion des produits, panier, authentification et système de paiement. Développée avec React et Node.js.",
    demo: "https://e-commerce-project-azure-five.vercel.app/",
    code: "https://github.com/clinton62395/Affinatesale",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT Auth"],
    features: [
      "Catalogue produits",
      "Panier & commandes",
      "Authentification utilisateur",
      "Dashboard admin",
    ],
  },

  // ================= FULLSTACK / IMMOBILIER =================
  {
    title: "Real Estate Management Platform",
    category: "FULLSTACK",
    type: "fullstack",
    tag: "Real Estate App",
    image: estate,
    description:
      "Plateforme immobilière permettant la gestion des biens, annonces, clients et demandes. Solution pensée pour agences et promoteurs.",
    demo: "https://easiland-kappa.vercel.app/",
    code: "",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Authentication",
      "session",
    ],
    features: [
      "Gestion des biens immobiliers",
      "Publication d’annonces",
      "Système d’authentification",
      "Tableau de bord",
    ],
  },

  // ================= Mobile / App =================

  // ===================== MOBILE =================
  {
    title: "Eductrack - E-learning app",
    category: "MOBILE",
    type: "mobile",
    tag: "SaaS E-learning",
    image: Edutrack, // import ton image correspondante
    description:
      "Eductrack est une application SaaS de e-learning développée avec React Native et connectée à Firebase. Elle offre un suivi avancé des cours, la gestion des utilisateurs et des fonctionnalités interactives grâce aux capacités d’Expo.",
    demo: "https://expo.dev/accounts/billydoumbouya/projects/EduTrack/builds/5efa4c1b-1f7f-4ece-8f67-3c8465e7f79f",
    code: "https://github.com/Clinton62395/tree/master/Eductrack",
    technologies: [
      "React Native",
      "Firebase",
      "Expo",
      "Authentication",
      "Push Notifications",
      "Offline Storage",
    ],
    features: [
      "Suivi des cours en temps réel",
      "Gestion des utilisateurs",
      "Notifications push",
      "Mode hors-ligne pour les leçons",
      "Interface mobile intuitive et réactive",
    ],
  },

  // ================= MOBILE / GESTION DE FICHIERS =================
  {
    title: "Chakam  app ",
    category: "MOBILE",
    type: "mobile",
    tag: "File Manager App",
    image: Chakam, // import ton image correspondante
    description:
      "Chakam est une application mobile pour le stockage et la gestion personnelle de fichiers. Les utilisateurs peuvent uploader, organiser et partager leurs images et documents en toute sécurité via Firebase.",
    demo: "https://expo.dev/accounts/billydoumbouya/projects/Chakam-app/builds/aa51276f-4e2f-4ccc-aaff-f86a0faab563",
    code: "https://github.com/Clinton62395/tree/master/Chakam",
    technologies: [
      "React Native",
      "Firebase Storage",
      "Authentication",
      "Expo",
      "Image Picker",
    ],
    features: [
      "Upload et gestion de fichiers",
      "Organisation par dossiers",
      "Partage sécurisé de fichiers",
      "Interface mobile intuitive",
      "Notifications et suivi des actions utilisateur",
    ],
  },
];
