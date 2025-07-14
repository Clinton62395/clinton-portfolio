import React from "react";
import { BackgroundParticles } from "../components/Animation";
import airbnb from "../assets/airbnb.png";
import dropbox from "../assets/dropbox.png";
import asana from "../assets/asana.png";
import khan_academy from "../assets/khan_academy.png";
import neipal from "../assets/neipal.png";
import netflix from "../assets/neipal.png";
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
      code: "https://github.com/Clinton62395/clinton-projects/tree/master/clinton-projects",
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
      image: 'Netflix',
      demo: "https://clinton62395.github.io/clinton-projects/Netflix",
      code: "https://github.com/Clinton62395/clinton-projects/tree/master/Netflix",
    },
  ];

  return (
    <>
      <BackgroundParticles />

      <div
        className="bi-relative bi-h-full bi-z-10 bi-h-full bi-container bi-mx-auto  bi-bg-black-500/50 bi-shadow-lg bi-shadow-blue-500/50 bi-backdrop-blur bi-flex bi-items-center bi-justify-center bi-p-10 bi-mt-24"
        id="projects"
      >
        <div>
          <h2 className="bi-text-4xl bi-font-bold bi-text-orange-400 bi-text-center bi-mb-8 hover:bi-animate-bounce">
            Mes Projets
          </h2>
          <div className="bi-grid bi-grid-cols-1 md:bi-grid-cols-2 lg:bi-grid-cols-3 bi-gap-10 bi-place-items-center bi-space-y-5 animate__animated animate__fadeIn animate__delay-1s animate__slow">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bi-backdrop-blur border-2 bi-border-dashed border-warning bi-rounded-lg bi-shadow-md bi-text-center bi-shadow-white-500/50 bi-p-5 gap-5 bi-transition-transform bi-duration-300 hover:bi-shadow-lg hover:bi-shadow-yellow-500/50 hover:bi-scale-105"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="bi-w-full bi-h-40 bi-object-cover bi-rounded-lg
                bi-transition-transform bi-duration-300 bi-hover:bi-scale-105 hover:bi-backdrop-blur image-backdrop"
                />
                <h3 className="bi-text-xl bi-font-bold bi-text-orange-400 bi-mt-4">
                  {project.title}
                </h3>
                <p className="bi-text-gray-300">{project.description}</p>

                <div className="bi-flex bi-justify-center bi-items-center bi-gap-4 bi-mt-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bi-bg-blue-300/50 bi-px-4 bi-py-2 bi-rounded-lg bi-flex bi-gap-3 bi-justify-center bi-items-center hover:bi-bg-blue-600 bi-text-center animate__animated animate__bounce animate__delay-1s animate__infinite animate__slower"
                  >
                    <GiLookAt /> Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bi-bg-green-500/50 bi-px-4 bi-py-2 bi-rounded-lg bi-flex bi-justify-center bi-items-center hover:bi-bg-green-600 bi-text-center bi-gap-3 animate__animated animate__bounce animate__delay-1s animate__infinite animate__slow"
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
