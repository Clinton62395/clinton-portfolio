import {
  FaLaptopCode,
  FaPaintBrush,
  FaMobileAlt,
  FaServer,
  FaUserTie,
} from "react-icons/fa";

export const services = [
  {
    icon: <FaLaptopCode className="text-blue-500 text-5xl" />,
    title: "Développement Web Full-Stack",
    description:
      "Applications web robustes et scalables avec React et Node.js. Architectures modernes, performance optimisée, et déploiement en production.",
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500",
  },

  {
    icon: <FaMobileAlt className="text-sky-500 text-5xl" />,
    title: "Applications Mobiles",
    description:
      "Solutions cross-platform avec React Native et Expo. Déploiement sur iOS et Android avec une expérience utilisateur native.",
    color: "from-sky-500 to-blue-500",
    borderColor: "border-sky-500",
  },

  {
    icon: <FaServer className="text-green-500 text-5xl" />,
    title: "Architecture & Backend",
    description:
      "APIs REST sécurisées, gestion de bases de données (MongoDB, Firebase), authentification et logique métier complexe.",
    color: "from-green-500 to-emerald-500",
    borderColor: "border-green-500",
  },

  {
    icon: <FaPaintBrush className="text-pink-500 text-5xl" />,
    title: "UI/UX & Integration",
    description:
      "Interfaces modernes responsives avec Tailwind CSS. Intégration de designs professionnels et optimisation d'expérience utilisateur.",
    color: "from-pink-500 to-rose-500",
    borderColor: "border-pink-500",
  },

  {
    icon: <FaUserTie className="text-orange-500 text-5xl" />,
    title: "Consulting & Audit Technique",
    description:
      "Assistance technique, audit d'architecture, recommandations de stack technologique et support expert sur vos projets.",
    color: "from-orange-500 to-amber-500",
    borderColor: "border-orange-500",
  },
];
