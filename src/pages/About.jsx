import React from "react";
// React-Bootstrap removed: using Tailwind CSS utilities instead
import "aos/dist/aos.css";
import BackgroundParticles from "../components/Animation.jsx";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  // FaBootstrap removed (migrated to Tailwind)
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
function About() {
  // la barre de progression de mes competences en languages
  const skillsCategories = [
    {
      Categories: "Web languages",
      Langages: [
        {
          title: "HTML5",
          icon: <FaHtml5 className="text-red-500 icone-rotate" />,
          value: 80,
        },
        {
          title: "CSS3",
          icon: <FaCss3Alt className="text-blue-500 icone-rotate" />,
          value: 70,
        },
        {
          title: "JavaScript",
          icon: <FaJsSquare className="text-yellow-400 icone-rotate" />,
          value: 40,
        },
      ],
    },
    // Backend Technologies
    {
      Categories: "Backend Technologies",
      Langages: [
        {
          title: "Node.js",
          icon: <FaNodeJs className="text-green-500 icone-rotate" />,
          value: 65,
        },
        {
          title: "MongoDB",
          icon: <SiMongodb className="text-green-600 icone-rotate" />,
          value: 60,
        },
        {
          title: "Express.js",
          icon: <SiExpress className="text-gray-400 icone-rotate" />,
          value: 70,
        },
      ],
    },
    // les frameworks et librairies
    {
      Categories: "Frameworks and Libraries",
      Langages: [
        {
          title: "React JS",
          icon: <FaReact className="text-blue-400 icone-rotate" />,
          value: 50,
        },
        {
          title: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-400 icone-rotate" />,
          value: 85,
        },
        {
          title: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-400 icone-rotate" />,
          value: 60,
        },
      ],
    },
    // les outils et methodes
    {
      Categories: "Tools and Methods",
      Langages: [
        {
          title: "Git",
          icon: <FaGitAlt className="text-orange-500 icone-rotate" />,
          value: 60,
        },
        {
          title: "GitHub",
          icon: <FaGithub className="text-white icone-rotate" />,
          value: 55,
        },
        {
          title: "Visual Studio Code",
          icon: <VscVscode className="text-blue-500 icone-rotate" />,
          value: 80,
        },
      ],
    },
  ];
  return (
    <>
      <div className="relative h-screen bg-[#0a192f] text-white px-6 py-10 flex items-center justify-center mt-20">
        <BackgroundParticles />

        <div
          className="relative z-10 max-w-4xl bg-black/80 backdrop-blur-md p-8 rounded-xl shadow-md shadow-yellow-700/50 text-justify"
          data-aos="fade-up"
        >
          <h1
            className="text-2xl left-10 md:text-4xl font-extrabold text-orange-400 mb-6 border-b border-orange-500 pb-2 text-center"
            data-aos="fade-right"
            data-aos-delay="800"
          >
            À propos de moi
          </h1>
          <p className="text-lg leading-relaxed mb-4">
            Je suis{" "}
            <span
              className="font-semibold text-blue-400"
              data-aos="fade-left"
              data-aos-delay="800"
            >
              Billy Doumbouya
            </span>
            , passionné par le développement web, l’infographie, la
            cybersécurité et les nouvelles technologies. Mon objectif est de
            créer des interfaces modernes, dynamiques et accessibles.
          </p>

          <p
            className="text-lg leading-relaxed mb-4"
            data-aos="w=fade-right"
            data-aos-delay="800"
          >
            Grâce à mon parcours en sociologie et mes expériences dans
            l'entrepreneuriat, je développe une approche humaine et stratégique
            des projets numériques.
          </p>

          <p
            className="text-lg leading-relaxed mb-4"
            data-aos="fade-bottom"
            data-aos-delay="800"
          >
            Je suis toujours à la recherche de nouveaux défis et d'opportunités.
            Explorez mon portfolio pour découvrir mes compétences et
            réalisations, et n’hésitez pas à me contacter pour collaborer.
          </p>
        </div>
      </div>
      <hr
        className="border-yellow-500 border-[10px] mx-24 my-5"
        data-aos="zoom-out"
        data-aos-duration="1000"
      />
      {/* sections des competences */}

      <div
        className="relative container py-5 mx-auto text-white mb-52 md:flex justify-center items-center"
        id="skills"
      >
        <h2
          className="text-3xl left-10 md:text-4xl font-bold text-center text-orange-400 mb-12"
          data-aos="fade-up"
        >
          Mes Compétences
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 rounded-xl p-5 shadow-lg shadow-yellow-500/30 mx-auto mt-10">
          {/* Langages */}
          <div className="border-b-2 md:border-r-2 border-yellow-500/30 pr-2">
            <h3
              className="text-3xl md:text-4xl left-0 font-semibold text-yellow-400 mb-4"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              Langages
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaHtml5 className="text-red-500 mr-2" /> HTML5
              </li>
              <li className="flex items-center">
                <FaCss3Alt className="text-blue-500 mr-2" /> CSS3
              </li>
              <li className="flex items-center">
                <FaJsSquare className="text-yellow-400 mr-2" /> JavaScript
                (ES6+)
              </li>
            </ul>
          </div>

          {/* Frameworks & Librairies */}
          <div
            className="border-b-2 md:border-r-2 border-yellow-500/30 pr-2"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h3
              className="text-3xl left-0 md:text-4xl font-semibold text-yellow-400 mb-2"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              Frameworks
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <SiTailwindcss className="text-cyan-400 mr-2" /> Tailwind CSS 5
              </li>
              <li className="flex items-center">
                <SiTailwindcss className="text-cyan-400 mr-2" /> Tailwind CSS
              </li>
              <li className="flex items-center">
                <FaReact className="text-blue-400 mr-2" /> React JS
              </li>
            </ul>
          </div>

          {/* Outils & Méthodes */}
          <div
            className="border-b-2 md:border-r-2 border-yellow-500/30 pr-2"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <h3
              className="text-3xl left-0 md:text-4xl font-semibold text-yellow-400 mb-4"
              data-aos="fade-right"
            >
              Outils
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaGitAlt className="text-orange-500 mr-2" /> Git
              </li>
              <li className="flex items-center">
                <FaGithub className="text-white mr-2" />
                GitHub
              </li>
              <li className="flex items-center">
                <VscVscode className="text-blue-500 mr-2" /> Visual Studio Code
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* l'affichage de ma barre e progression en tableau */}

      {skillsCategories.map((category, index) => (
        <div
          key={index}
          className="mt-10 container mx-auto p-5 bg-black/50 backdrop-blur-md rounded-xl shadow-lg shadow-yellow-500/30"
        >
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4 text-center">
            {category.Categories}
          </h3>

          <div className="flex flex-wrap gap-5 justify-center items-center">
            {category.Langages.map((skill, idx) => (
              <div key={idx} className="w-full md:w-1/4">
                <div
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="p-4 bg-gray-800/50 rounded-lg shadow-md shadow-yellow-500/30 text-white text-center transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105"
                >
                  {/* Icône colorée et centrée */}
                  <div className="text-4xl mb-2 text-center d-flex items-center justify-center">
                    {skill.icon}
                  </div>

                  {/* Titre */}
                  <div className="text-lg font-semibold mb-2 text-center">
                    {skill.title}
                  </div>

                  {/* Pourcentage + barre */}
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-300">Level</span>
                    <span>{skill.value}%</span>
                  </div>
                  {/* Custom Tailwind progress bar */}
                  <div className="w-full bg-gray-700/30 rounded-full h-3">
                    <div
                      className="bg-yellow-400 h-3 rounded-full transition-all duration-700"
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default About;
