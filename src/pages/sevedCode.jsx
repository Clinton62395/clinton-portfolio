import React from "react";
import BackgroundParticles from "../components/Animation";
import airbnb from "../assets/airbnb.png";
import dropbox from "../assets/dropbox.png";
import asana from "../assets/asana.png";
import khan_academy from "../assets/khan_academy.png";
import neipaltel from "../assets/neipal.png";
import Netflix from "../assets/netflix.png";
import pinterest from "../assets/pinterest.png";
import whatsapp from "../assets/whasapp.png";
import { FaCode } from "react-icons/fa";
import { GiLookAt } from "react-icons/gi";
import AutoScrollLogos from "../components/ImageAnime";
function Projects() {
 

  return (
    <>
      <BackgroundParticles />

      <div
        className="relative h-full z-10 container mx-auto bg-black/50 shadow-lg shadow-blue-500/50 backdrop-blur flex items-center justify-center p-10 mt-24"
        id="projects"
      >
        <div>
          <h2 className="text-4xl font-bold text-orange-400 text-center mb-8 hover:animate-bounce">
            Mes Projets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center space-y-5 animate__animated animate__fadeIn animate__delay-1s animate__slow">
            {projects.map((project, index) => (
              <div
                key={index}
                className="backdrop-blur border-2 border-dashed border-yellow-400 rounded-lg shadow-md text-center p-5 gap-5 transition-transform duration-300 hover:shadow-lg hover:shadow-yellow-500/50 hover:scale-105"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg transition-transform duration-300 hover:scale-105 hover:backdrop-blur image-backdrop"
                />
                <h3 className="text-xl font-bold text-orange-400 mt-4">
                  {project.title}
                </h3>
                <p className="text-gray-300">{project.description}</p>

                <div className="flex justify-center items-center gap-4 mt-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-300/50 px-4 py-2 rounded-lg flex gap-3 justify-center items-center hover:bg-blue-600 text-center animate__animated animate__bounce animate__delay-1s animate__infinite animate__slower"
                  >
                    <GiLookAt /> Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500/50 px-4 py-2 rounded-lg flex justify-center items-center hover:bg-green-600 text-center gap-3 animate__animated animate__bounce animate__delay-1s animate__infinite animate__slow"
                  >
                    <FaCode />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* les images en animation */}
      <AutoScrollLogos />
    </>
  );
}

export default Projects;
