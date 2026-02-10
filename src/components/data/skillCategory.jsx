import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaServer,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiExpo } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const skillsCategories = [
  // =============================
  // Web Fundamentals
  // =============================
  {
    Categories: "Web Fundamentals",
    Langages: [
      {
        title: "HTML5",
        icon: <FaHtml5 className="text-red-500 icone-rotate" />,
        value: 80,
      },
      {
        title: "CSS3",
        icon: <FaCss3Alt className="text-blue-500 icone-rotate" />,
        value: 75,
      },
      {
        title: "JavaScript (ES6+)",
        icon: <FaJsSquare className="text-yellow-400 icone-rotate" />,
        value: 65,
      },
    ],
  },

  // =============================
  // Frontend
  // =============================
  {
    Categories: "Frontend Development",
    Langages: [
      {
        title: "React.js",
        icon: <FaReact className="text-blue-400 icone-rotate" />,
        value: 65,
      },
      {
        title: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 icone-rotate" />,
        value: 80,
      },
    ],
  },

  // =============================
  // Mobile
  // =============================
  {
    Categories: "Mobile Development",
    Langages: [
      {
        title: "React Native",
        icon: <FaReact className="text-sky-400 icone-rotate" />,
        value: 65,
      },
      {
        title: "Expo",
        icon: <SiExpo className="text-sky-400 icone-rotate" />,
        value: 70,
      },
    ],
  },

  // =============================
  // Backend
  // =============================
  {
    Categories: "Backend Development",
    Langages: [
      {
        title: "Node.js",
        icon: <FaNodeJs className="text-green-500 icone-rotate" />,
        value: 70,
      },
      {
        title: "Express.js",
        icon: <SiExpress className="text-gray-400 icone-rotate" />,
        value: 70,
      },
      {
        title: "MongoDB",
        icon: <SiMongodb className="text-green-600 icone-rotate" />,
        value: 65,
      },
    ],
  },

  // =============================
  // API & Architecture
  // =============================
  {
    Categories: "API & Architecture",
    Langages: [
      {
        title: "REST API Design",
        icon: <FaServer className="text-purple-400 icone-rotate" />,
        value: 70,
      },
      {
        title: "Authentication (JWT)",
        icon: <FaServer className="text-indigo-400 icone-rotate" />,
        value: 65,
      },
      {
        title: "Business Logic & CRUD",
        icon: <FaServer className="text-pink-400 icone-rotate" />,
        value: 75,
      },
    ],
  },

  // =============================
  // Tools
  // =============================
  {
    Categories: "Tools & Workflow",
    Langages: [
      {
        title: "Git",
        icon: <FaGitAlt className="text-orange-500 icone-rotate" />,
        value: 65,
      },
      {
        title: "GitHub",
        icon: <FaGithub className="text-white icone-rotate" />,
        value: 60,
      },
      {
        title: "VS Code",
        icon: <VscVscode className="text-blue-500 icone-rotate" />,
        value: 85,
      },
    ],
  },
];
