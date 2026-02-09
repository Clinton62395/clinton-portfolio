import React from "react";
import { motion } from "framer-motion";

import { FaCode } from "react-icons/fa";
import { GiLookAt } from "react-icons/gi";
import AutoScrollLogos from "../components/ImageAnime";
import { projects } from "../components/data/projectsData.js";

function Projects() {
  // Variants d'animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        yoyo: Infinity,
      },
    },
    tap: { scale: 0.95 },
  };

  const techBadgeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "backOut",
      },
    }),
    hover: {
      scale: 1.1,
      backgroundColor: "rgba(59, 130, 246, 0.4)",
      transition: { duration: 0.2 },
    },
  };

  return (
    <>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 h-full container mx-auto bg-black/50 shadow-lg shadow-blue-500/50 backdrop-blur flex items-center justify-center p-10 mt-24"
        id="projects"
      >
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="text-4xl font-bold text-orange-400 text-center mb-8"
          >
            Professional Projects Portfolio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-center mb-12 max-w-2xl mx-auto"
          >
            Discover my collection of modern web applications built with
            cutting-edge technologies. Each project demonstrates expertise in
            React.js, responsive design, and user-centered development.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(251, 191, 36, 0.3)",
                }}
                className="backdrop-blur border-2 border-dashed border-yellow-400 rounded-lg shadow-md text-center shadow-white-500/50 p-5 gap-5 transition-transform duration-300 h-full flex flex-col w-full"
              >
                <motion.div
                  className="overflow-hidden rounded-lg"
                  whileHover="hover"
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    variants={imageVariants}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="text-xl font-bold text-orange-400 mt-4"
                >
                  {project.title}
                </motion.h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-3 flex-grow">
                  {project.description}
                </p>

                {/* Technologies utilisées */}
                {project.technologies && (
                  <motion.div
                    className="flex flex-wrap justify-center gap-2 mb-4"
                    initial="hidden"
                    animate="visible"
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        custom={techIndex}
                        variants={techBadgeVariants}
                        whileHover="hover"
                        className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                )}

                {/* Features principales */}
                {projects.features && (
                  <motion.div
                    className="grid grid-cols-2 gap-1 text-xs text-gray-400 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                  >
                    {project.features.map((feature, featureIndex) => (
                      <motion.span
                        key={featureIndex}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.05 }}
                      >
                        <motion.span
                          className="w-1 h-1 bg-orange-400 rounded-full mr-2"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{
                            repeat: Infinity,
                            duration: 2,
                            delay: featureIndex * 0.2,
                          }}
                        />
                        {feature}
                      </motion.span>
                    ))}
                  </motion.div>
                )}

                <div className="flex justify-center items-center gap-4 mt-auto">
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-blue-300/50 px-4 py-2 rounded-lg flex gap-2 justify-center items-center hover:bg-blue-600 text-center transition-colors"
                  >
                    <GiLookAt /> Live Demo
                  </motion.a>
                  <motion.a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-green-500/50 px-4 py-2 rounded-lg flex justify-center items-center hover:bg-green-600 text-center gap-2 transition-colors"
                  >
                    <FaCode /> Source Code
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* les images en animation */}
      <AutoScrollLogos />
    </>
  );
}

export default Projects;
