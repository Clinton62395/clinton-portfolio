import React from "react";
import { BackgroundParticles } from "../components/Animation";
import airbnb from "../assets/airbnb.png";
import dropbox from "../assets/airbnb.png";
import asana from "../assets/airbnb.png";
import khan_academy from "../assets/khan_academy.png";
import neipal from "../assets/neipal.png";
import netflix from "../assets/neipal.png";
import pinterest from "../assets/pinterest.png";
import whatsapp from "../assets/whasapp.png";
function Projects() {
  const projects = [
    {
      title: "netflix",
      description:
        "This is a student project made for educational purposes only.",
      image: netflix,
      demo: "https://clinton62395.github.io/My-frontend-projects/",
      code: "https://github.com/Clinton62395/My-frontend-projects.git",
    },

    {
      title: "Asana",
      description:
        "This is a student project made for educational purposes only.",
      image: asana,
      demo: "https://clinton62395.github.io/My-frontend-projects/",
      code: "https://github.com/Clinton62395/My-frontend-projects.git",
    },
    {
      title: "Dropbox",
      description:
        "This is a student project made for educational purposes only.",
      image: dropbox,
      demo: "https://clinton62395.github.io/My-frontend-projects/",
      code: "https://github.com/Clinton62395/My-frontend-projects.git",
    },
    {
      title: "Khan Academy",
      description:
        "This is a student project made for educational purposes only.",
      image: khan_academy,
      demo: "https://clinton62395.github.io/My-frontend-projects/",
      code: "https://github.com/Clinton62395/My-frontend-projects.git",
    },
    {
      title: "Neipatel",
      description:
        "This is a student project made for educational purposes only.",
      image: neipal,
      demo: "https://clinton62395.github.io/My-frontend-projects/",
      code: "https://github.com/Clinton62395/My-frontend-projects.git",
    },
    {
      title: "Pinterest",
      description:
        "This is a student project made for educational purposes only.",
      image: pinterest,
      demo: "https://clinton62395.github.io/My-frontend-projects/",
      code: "https://github.com/Clinton62395/My-frontend-projects.git",
    },
    {
      title: "Whasapp",
      description:
        "This is a student project made for educational purposes only.",
      image: whatsapp,
      demo: "https://clinton62395.github.io/My-frontend-projects/",
      code: "https://github.com/Clinton62395/My-frontend-projects.git",
    },
    {
      title: "Airbnb",
      description:
        "This is a student project made for educational purposes only.",
      image: airbnb,
      demo: "https://clinton62395.github.io/My-frontend-projects/",
      code: "https://github.com/Clinton62395/My-frontend-projects.git",
    },
  ];

  return (
    <>
      <BackgroundParticles />

      <div
        className="bi-relative bi-z-10 bi-h-full bi-container bi-mx-auto  bi-bg-black-500/50 bi-shadow-lg bi-shadow-blue-500/50 bi-backdrop-blur bi-flex bi-items-center bi-justify-center bi-p-10 bi-mt-52"
        id="projects"
      >
        <div
          className="bi- bi-h-screen bi-mx-auto bi-w-full"
          data-aos="slide-down"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h2 className="bi-text-4xl bi-font-bold bi-text-orange-400 bi-text-center bi-mb-8">
            Mes Projets
          </h2>
          <div className="bi-grid bi-grid-cols-1 md:bi-grid-cols-2 lg:bi-grid-cols-3 bi-gap-10 bi-place-items-center">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bi-backdrop-blur border-2 border-warning bi-rounded-lg bi-shadow-md bi-text-center bi-shadow-white-500/50 bi-p-5 gap-5 bi-transition-transform bi-duration-300 hover:bi-shadow-lg hover:bi-shadow-yellow-500/50 hover:bi-scale-105"
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
                    className="bi-bg-blue-300/50 bi-px-4 bi-py-2 bi-rounded-lg bi-flex bi-justify-center bi-items-center hover:bi-bg-blue-600 bi-text-center animate__animated animate__bounce"
                  >
                    Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bi-bg-green-500/50 bi-px-4 bi-py-2 bi-rounded-lg bi-flex bi-justify-center bi-items-center hover:bi-bg-green-600 bi-text-center animate__animated animate__bounce"
                  >
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
