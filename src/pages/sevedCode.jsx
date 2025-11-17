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
  const projects = [
    {
      title: "Airbnb",
      description:
        "This is a student project made for educational purposes only.",
      image: airbnb,
      demo: "https://clinton62395.github.io/clinton-projects/",
      code: "https://github.com/Clinton62395/clinton-projects/tree/master/",
    },

    {
      title: "Asana",
      description:
        "This is a student project made for educational purposes only.",
      image: asana,
      demo: "https://clinton62395.github.io/clinton-projects/Asana/",
      code: "https://github.com/Clinton62395/clinton-projects/tree/master/Asana",
    },
    {
      title: "Dropbox",
      description:
        "This is a student project made for educational purposes only.",
      image: dropbox,
      demo: "https://clinton62395.github.io/clinton-projects/Dropbox/",
      code: "https://github.com/Clinton62395/clinton-projects/tree/master/Dropbox",
    },
    {
      title: "Khan Academy",
      description:
        "This is a student project made for educational purposes only.",
      image: khan_academy,
      demo: "https://clinton62395.github.io/clinton-projects/Khan-academy/",
      code: "https://github.com/Clinton62395/clinton-projects/tree/master/Khan-academy",
    },
    {
      title: "Neipatel",
      description:
        "This is a student project made for educational purposes only.",
      image: neipaltel,
      demo: "https://clinton62395.github.io/clinton-projects/Neipatel/",
      code: "https://github.com/Clinton62395/clinton-projects/tree/master/Neipatel",
    },
    {
      title: "Pinterest",
      description:
        "This is a student project made for educational purposes only.",
      image: pinterest,
      demo: "https://clinton62395.github.io/clinton-projects/Pinterest/",
      code: "https://github.com/Clinton62395/clinton-projects/tree/master/Pinterest",
    },
    {
      title: "WhatsApp",
      description:
        "This is a student project made for educational purposes only.",
      image: whatsapp,
      demo: "https://clinton62395.github.io/clinton-projects/Whatsapp/",
      code: "https://github.com/Clinton62395/clinton-projects/tree/master/Whatsapp",
    },
    {
      title: "Netflix",
      description:
        "This is a student project made for educational purposes only.",
      image: Netflix,
      demo: "https://clinton62395.github.io/clinton-projects/Netflix",
      code: "https://github.com/Clinton62395/clinton-projects/tree/master/Netflix",
    },
    {
      title: "Vanilla js",
      description:
        "These are some of the projects I have been working on during my frontend programming training.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtgzsGkfT4EzquXh4TCm66xky7OSITGbUZ-g&s",
      demo: "https://clinton62395.github.io/javascript-class/",
      code: "https://github.com/Clinton62395/javascript-class/tree/master/",
    },
  ];

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
