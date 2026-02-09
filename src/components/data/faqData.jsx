import {
  FaLaptopCode,
  FaGlobe,
  FaTools,
  FaRegLightbulb,
  FaClock,
  FaEnvelope,
} from "react-icons/fa";

export const faqItems = [
  {
    icon: <FaLaptopCode className="text-4xl text-green-500" />,
    question: "Quels services proposes-tu ?",
    answer:
      "Je propose la création de sites web modernes, du développement front-end avec React, ainsi que du design d'interfaces interactives.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <FaGlobe className="text-4xl text-blue-500" />,
    question: "Travailles-tu à distance ?",
    answer:
      "Oui, je travaille à distance avec des clients dans plusieurs pays.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaTools className="text-4xl text-purple-500" />,
    question: "Quels langages et outils maîtrises-tu ?",
    answer:
      "Je maîtrise HTML, CSS, JavaScript, React, Tailwind CSS, Git, Bootstrap et bien d'autres.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: <FaRegLightbulb className="text-4xl text-yellow-500" />,
    question: "Peux-tu créer un site vitrine personnalisé ?",
    answer:
      "Oui, je conçois des sites vitrines responsives adaptés à ton image ou activité.",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: <FaClock className="text-4xl text-pink-500" />,
    question: "Combien de temps prend un projet moyen ?",
    answer: "En moyenne, un site simple peut être prêt en 1 à 2 semaines.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <FaEnvelope className="text-4xl text-red-500" />,
    question: "Comment peut-on te contacter ?",
    answer:
      "Via le formulaire de contact, par email ou sur les réseaux sociaux (voir bas de page).",
    color: "from-red-500 to-orange-500",
  },
];
