import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import "aos/dist/aos.css";
import { BackgroundParticles } from "../components/Animation";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
function About() {
  // la barre de progression de mes competences en languages
  const skillsCategories = [
    {
      Categories: "Web languages",
      Langages: [
        {
          title: "HTML5",
          icon: <FaHtml5 className="bi-text-red-500 icone-rotate" />,
          value: 80,
        },
        {
          title: "CSS3",
          icon: <FaCss3Alt className="bi-text-blue-500  icone-rotate" />,
          value: 70,
        },
        {
          title: "JavaScript",
          icon: <FaJsSquare className="bi-text-yellow-400  icone-rotate" />,
          value: 40,
        },
      ],
    },
    // les frameworks et librairies
    {
      Categories: "Frameworks and Libraries",
      Langages: [
        {
          title: "React JS",
          icon: <FaReact className="bi-text-blue-400 icone-rotate" />,
          value: 50,
        },
        {
          title: "Bootstrap",
          icon: <FaBootstrap className="bi-text-purple-500  icone-rotate" />,
          value: 70,
        },
        {
          title: "Tailwind CSS",
          icon: <SiTailwindcss className="bi-text-cyan-400  icone-rotate" />,
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
          icon: <FaGitAlt className="bi-text-orange-500 icone-rotate" />,
          value: 60,
        },
        {
          title: "GitHub",
          icon: <FaGithub className="bi-text-white-500 icone-rotate" />,
          value: 55,
        },
        {
          title: "Visual Studio Code",
          icon: <VscVscode className="bi-text-blue-500  icone-rotate" />,
          value: 80,
        },
      ],
    },
  ];
  return (
    <>
      <div className="bi-relative bi-h-screen bi-bg-[#0a192f] bi-text-white bi-px-6 bi-py-10 bi-flex bi-items-center bi-justify-center bi-mt-20 ">
        <BackgroundParticles />

        <div
          className="bi-relative bi-z-10 bi-max-w-4xl bi-bg-black-500/80 bi-backdrop-blur-md bi-p-8 bi-rounded-xl bi-shadow-md bi-shadow-yellow-700/50 bi-text-justify"
          data-aos="fade-up"
        >
          <h1
            className="bi-text-4xl bi-font-extrabold bi-text-orange-400 bi-mb-6 border-b bi-border-orange-500 bi-pb-2 bi-text-center"
            data-aos="fade-right"
            data-aos-delay="800"
          >
            À propos de moi
          </h1>
          <p className="bi-text-lg bi-leading-relaxed bi-mb-4">
            Je suis{" "}
            <span
              className="bi-font-semibold bi-text-blue-400"
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
            className="bi-text-lg bi-leading-relaxed bi-mb-4"
            data-aos="w=fade-right"
            data-aos-delay="800"
          >
            Grâce à mon parcours en sociologie et mes expériences dans
            l'entrepreneuriat, je développe une approche humaine et stratégique
            des projets numériques.
          </p>

          <p
            className="bi-text-lg bi-leading-relaxed bi-mb-4"
            data-aos="fade-bottom"
            data-aos-delay="800"
          >
            Je suis toujours à la recherche de nouveaux défis et d'opportunités.
            Explorez mon portfolio pour découvrir mes compétences et
            réalisations, et n’hésitez pas à me contacter pour collaborer.
          </p>
        </div>
      </div>
      <hr className="bi-border-yellow-500 bi-border-[10px] bi-mx-24 bi-my-5" 
        data-aos="zoom-out"
        data-aos-duration="1000"
      />
      {/* sections des competences */}

      <div
        className="bi-relative bi-container bi-mx-auto bi-text-white bi-mb-52 bi-d-flex bi-justify-center bi-items-center"
        id="skills"
      >
        <h2
          className="bi-text-4xl bi-font-bold bi-text-center bi-text-orange-400 bi-mb-12"
          data-aos="fade-up"
        >
          Mes Compétences
        </h2>

        <div className=" bi-grid bi-grid-cols-1 md:bi-grid-cols-3 bi-gap-5  bi-rounded-xl bi-p-5 bi-shadow-lg bi-shadow-yellow-500/30 bi-m-x-auto bi-mt-10 bi-space-x-10">
          {/* Langages */}
          <div
            className="bi-border-r-2 bi-border-yellow-500/30 bi-pr-2"
            
          >
            <h3 className="bi-text-2xl bi-font-semibold bi-text-yellow-400 bi-mb-4"
             data-aos="fade-left"
            data-aos-delay="500"
            >
              Langages
            </h3>
            <ul className="bi-space-y-2">
              <li className="bi-flex bi-items-center">
                <FaHtml5 className="bi-text-red-500 bi-mr-2" /> HTML5
              </li>
              <li className="bi-flex bi-items-center">
                <FaCss3Alt className="bi-text-blue-500 bi-mr-2" /> CSS3
              </li>
              <li className="bi-flex bi-items-center">
                <FaJsSquare className="bi-text-yellow-400 bi-mr-2" /> JavaScript
                (ES6+)
              </li>
            </ul>
          </div>

          {/* Frameworks & Librairies */}
          <div
            className="bi-border-r-2 bi-border-yellow-500/30 bi-pr-2"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h3 className="bi-text-2xl bi-font-semibold bi-text-yellow-400 bi-mb-2"
             data-aos="fade-right"
            data-aos-delay="500"
            >
              Frameworks
            </h3>
            <ul className="bi-space-y-2">
              <li className="bi-flex bi-items-center">
                <FaBootstrap className="bi-text-purple-500 bi-mr-2" /> Bootstrap
                5
              </li>
              <li className="bi-flex bi-items-center">
                <SiTailwindcss className="bi-text-cyan-400 bi-mr-2" /> Tailwind
                CSS
              </li>
              <li className="bi-flex bi-items-center">
                <FaReact className="bi-text-blue-400 bi-mr-2" /> React JS
              </li>
            </ul>
          </div>

          {/* Outils & Méthodes */}
          <div
            className="bi-border-r-2 bi-border-yellow-500/30 bi-pr-2"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <h3 className="bi-text-2xl bi-font-semibold bi-text-yellow-400 bi-mb-4"
            data-aos="fade-right"
            data-aos-delay="500"
            >
              Outils
            </h3>
            <ul className="bi-space-y-2">
              <li className="bi-flex bi-items-center">
                <FaGitAlt className="bi-text-orange-500 bi-mr-2" /> Git
              </li>
              <li className="bi-flex bi-items-center">
                <FaGithub className="bi-text-white-500 bi-mr-2" />
                GitHub
              </li>
              <li className="bi-flex bi-items-center">
                <VscVscode className="bi-text-blue-500 bi-mr-2" /> Visual Studio
                Code
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* l'affichage de ma barre e progression en tableau */}

      {skillsCategories.map((category, index) => (
        <div
          key={index}
          className="bi-mt-10 bi-container bi-mx-auto bi-p-5 bi-bg-black/50 bi-backdrop-blur-md bi-rounded-xl bi-shadow-lg  bi-shadow-yellow-500/30"
        >
          <h3 className="bi-text-2xl bi-font-semibold bi-text-yellow-400 bi-mb-4 bi-text-center">
            {category.Categories}
          </h3>

          <Row className="gap-5 d-flex bi-justify-center bi-items-center flex-wrap">
            {category.Langages.map((skill, idx) => (
              <Col key={idx} md={3}>
                <div
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="bi-p-4 bi-bg-gray-800/50 bi-rounded-lg bi-shadow-md bi-shadow-yellow-500/30 bi-text-white bi-text-center bi-transition-transform bi-duration-300 bi-transform bi-hover:-translate-y-2 bi-hover:scale-105"
                >
                  {/* Icône colorée et centrée */}
                  <div className="bi-text-4xl bi-mb-2 bi-text-center d-flex bi-items-center bi-justify-center">
                    {skill.icon}
                  </div>

                  {/* Titre */}
                  <div className="bi-text-lg bi-font-semibold bi-mb-2 bi-text-center">
                    {skill.title}
                  </div>

                  {/* Pourcentage + barre */}
                  <div className="bi-flex bi-items-center bi-justify-between bi-text-sm bi-mb-1">
                    <span className="bi-text-gray-300">Level</span>
                    <span>{skill.value}%</span>
                  </div>
                  <ProgressBar
                    animated
                    now={skill.value}
                    variant="warning"
                    className="bi-h-6 bi-rounded-full bi-bg-yellow-500/30"
                  />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </>
  );
}

export default About;
