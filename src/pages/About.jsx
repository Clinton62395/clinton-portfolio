import React from "react";
import "aos/dist/aos.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { skillsCategories } from "../components/data/skillCategory.jsx";
import { Mybio } from "../components/data/Mybio.jsx";

function About() {
  return (
    <>
      {/* SECTION ABOUT */}
      <Mybio />
      {/* SECTION COMPÉTENCES */}
      <section className="relative px-4 py-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-14"
            data-aos="fade-up"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text">
              Mes Compétences
            </span>
          </h2>

          {/* Cartes principales */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Langages */}
            <div className="p-6 rounded-2xl bg-gray-800/40 border border-gray-700/50 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                Langages
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <FaHtml5 className="text-red-500" /> HTML5
                </li>
                <li className="flex items-center gap-2">
                  <FaCss3Alt className="text-blue-500" /> CSS3
                </li>
                <li className="flex items-center gap-2">
                  <FaJsSquare className="text-yellow-400" /> JavaScript (ES6+)
                </li>
              </ul>
            </div>

            {/* Frameworks */}
            <div className="p-6 rounded-2xl bg-gray-800/40 border border-gray-700/50 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                Frameworks
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <SiTailwindcss className="text-cyan-400" /> Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <FaReact className="text-blue-400" /> React JS
                </li>
              </ul>
            </div>

            {/* Outils */}
            <div className="p-6 rounded-2xl bg-gray-800/40 border border-gray-700/50 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                Outils
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <FaGitAlt className="text-orange-500" /> Git
                </li>
                <li className="flex items-center gap-2">
                  <FaGithub /> GitHub
                </li>
                <li className="flex items-center gap-2">
                  <VscVscode className="text-blue-500" /> VS Code
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BARRES DE PROGRESSION */}
      {skillsCategories.map((category, index) => (
        <section key={index} className="relative px-4 py-20" data-aos="fade-up">
          <div className="max-w-6xl  backdrop-blur-xl bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 rounded-3xl border border-white/10 shadow-xl p-8 mx-auto">
            <h3 className="text-3xl font-bold text-center mb-10">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text">
                {category.Categories}
              </span>
            </h3>

            <div className="space-y-3 flex justify-center items">
              <div
                style={{
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                }}
                className="grid  gap-6 w-full justify-items-center "
              >
                {category.Langages.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-5 max-w-xs w-full rounded-xl bg-gray-800/40 border border-gray-700/50 hover:scale-[1.03] transition"
                  >
                    <div className="text-4xl text-center mb-3">
                      {skill.icon}
                    </div>
                    <h4 className="text-center font-semibold mb-2 text-gray-200">
                      {skill.title}
                    </h4>

                    <div className="flex justify-between text-sm text-gray-400 mb-1">
                      <span>Level</span>
                      <span>{skill.value}%</span>
                    </div>

                    <div className="w-full bg-gray-700/30 rounded-full h-3">
                      <div
                        className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-700"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default About;
