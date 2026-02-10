import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { GiLookAt } from "react-icons/gi";
import TechBadge from "./utils/techbadge";
const ProjectCard = ({ project, index }) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -2,
    },
    tap: { scale: 0.95 },
  };

  const getCategoryColor = (project) => {
    if (project.type === "fullstack") return "purple";
    if (project.category === "PORTFOLIO") return "orange";
    if (project.tag?.includes("Vanilla")) return "green";
    return "blue";
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
      className="group relative backdrop-blur-xl bg-gradient-to-br from-gray-900/70 via-gray-800/50 to-gray-900/70 rounded-2xl shadow-xl border border-white/10 overflow-hidden flex flex-col h-full"
    >
      {/* Ligne de gradient en haut */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
          getCategoryColor(project) === "purple"
            ? "from-purple-500 to-pink-500"
            : getCategoryColor(project) === "orange"
              ? "from-orange-500 to-amber-500"
              : getCategoryColor(project) === "green"
                ? "from-green-500 to-emerald-500"
                : "from-blue-500 to-cyan-500"
        }`}
      />

      {/* Badge de catégorie */}
      {(project.category || project.type) && (
        <div className="absolute top-4 left-4 z-10">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold ${
              getCategoryColor(project) === "purple"
                ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                : getCategoryColor(project) === "orange"
                  ? "bg-orange-500/20 text-orange-300 border border-orange-500/30"
                  : getCategoryColor(project) === "green"
                    ? "bg-green-500/20 text-green-300 border border-green-500/30"
                    : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
            }`}
          >
            {project.category || project.type || "Frontend"}
          </span>
        </div>
      )}

      {/* Effet de glow au survol */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-yellow-500/0 to-amber-500/0 group-hover:from-orange-500/5 group-hover:via-yellow-500/5 group-hover:to-amber-500/5 transition-all duration-500 pointer-events-none" />

      {/* Image du projet */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <motion.div whileHover="hover" className="relative h-48 sm:h-56">
          <motion.img
            src={project.image}
            alt={project.title}
            variants={imageVariants}
            className="w-full h-full object-cover"
          />

          {/* Overlay au survol */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badge "Voir le projet" au survol */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold flex items-center gap-2">
              <FaExternalLinkAlt className="text-sm" />
              Voir le projet
            </span>
          </div>
        </motion.div>
      </div>

      {/* Contenu de la carte */}
      <div className="relative flex flex-col flex-grow p-6">
        {/* Titre */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.5 }}
          className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 text-transparent bg-clip-text mb-3"
        >
          {project.title}
        </motion.h3>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        {/* Technologies */}
        {project.technologies && (
          <motion.div
            className="flex flex-wrap gap-2 mb-4"
            initial="hidden"
            animate="visible"
          >
            {project.technologies.map((tech, techIndex) => (
              <TechBadge
                key={techIndex}
                index={techIndex}
                color={getCategoryColor(project)}
              >
                {tech}
              </TechBadge>
            ))}
          </motion.div>
        )}

        {/* Features */}
        {project.features && (
          <motion.div
            className="grid grid-cols-2 gap-2 text-xs text-gray-400 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.7 }}
          >
            {project.features.map((feature, featureIndex) => (
              <motion.div
                key={featureIndex}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: featureIndex * 0.05 }}
              >
                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0" />
                <span className="truncate">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Boutons d'action */}
        <div className="flex gap-3 mt-auto pt-4 border-t border-white/10">
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
          >
            <GiLookAt className="text-lg" />
            <span className="text-sm">Demo</span>
          </motion.a>

          <motion.a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-500 hover:to-emerald-600 text-white font-semibold rounded-lg shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300"
          >
            <FaCode className="text-lg" />
            <span className="text-sm">Code</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
