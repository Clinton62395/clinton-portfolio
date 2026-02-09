import {
  FaLaptopCode,
  FaPaintBrush,
  FaMobileAlt,
  FaChalkboardTeacher,
  FaServer,
  FaUserTie,
} from "react-icons/fa";

export const services = [
  {
    icon: <FaLaptopCode className="text-blue-500 text-5xl" />,
    title: "Développement Web",
    description:
      "Conception d'applications web modernes, performantes et maintenables avec React et Node.js.",
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500",
  },

  {
    icon: <FaMobileAlt className="text-sky-500 text-5xl" />,
    title: "Développement Mobile",
    description:
      "Création d'applications mobiles Android et iOS avec React Native et Expo.",
    color: "from-sky-500 to-blue-500",
    borderColor: "border-sky-500",
  },

  {
    icon: <FaServer className="text-green-500 text-5xl" />,
    title: "Backend & API",
    description:
      "Développement d’APIs REST sécurisées, gestion des bases de données et logique métier.",
    color: "from-green-500 to-emerald-500",
    borderColor: "border-green-500",
  },

  {
    icon: <FaPaintBrush className="text-pink-500 text-5xl" />,
    title: "UI / Intégration Frontend",
    description:
      "Intégration de maquettes modernes et responsives avec Tailwind CSS.",
    color: "from-pink-500 to-rose-500",
    borderColor: "border-pink-500",
  },

  {
    icon: <FaChalkboardTeacher className="text-purple-500 text-5xl" />,
    title: "Formation & Coaching",
    description:
      "Formation pratique en développement web et accompagnement pour débuter dans le numérique.",
    color: "from-purple-500 to-violet-500",
    borderColor: "border-purple-500",
  },

  {
    icon: <FaUserTie className="text-orange-500 text-5xl" />,
    title: "Freelance & Consulting",
    description:
      "Collaboration freelance, assistance technique et accompagnement sur des projets digitaux.",
    color: "from-orange-500 to-amber-500",
    borderColor: "border-orange-500",
  },
];
