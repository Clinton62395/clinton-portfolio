import React, { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AutoScrollLogos from "../components/ImageAnime";

import {
  FaGlobe,
  FaServer,
  FaUser,
  FaCodeBranch,
  FaFilter,
} from "react-icons/fa";
import FilterButton from "../components/hooks/filterButton";
import {
  FILTER_TYPES,
  FILTER_ICONS,
  FILTER_LABELS,
} from "../components/hooks/filtersData";
import { projectsData } from "../components/data/projectsData";
import ProjectCard from "../components/projectCard";

function Projects() {
  const [activeFilter, setActiveFilter] = useState(FILTER_TYPES.ALL);
  const [isAnimating, setIsAnimating] = useState(false);

  // Catégoriser les projets une fois pour toutes
  const categorizedProjects = useMemo(() => {
    return projectsData.map((project) => {
      // Si le projet a déjà une catégorie, on la conserve
      if (project.category || project.type) {
        return project;
      }

      // Sinon, on détermine la catégorie basée sur le contenu
      const title = project.title.toLowerCase();
      const description = project.description.toLowerCase();
      const technologies = project.technologies?.join(" ").toLowerCase() || "";

      if (title.includes("vanilla") || technologies.includes("vanilla")) {
        return {
          ...project,
          category: FILTER_TYPES.VANILLA_JS,
          type: "vanillajs",
        };
      }

      if (title.includes("portfolio") || project.tag?.includes("Portfolio")) {
        return {
          ...project,
          category: FILTER_TYPES.PORTFOLIO,
          type: "portfolio",
        };
      }

      if (
        description.includes("fullstack") ||
        technologies.includes("node") ||
        technologies.includes("mongodb")
      ) {
        return {
          ...project,
          category: FILTER_TYPES.FULLSTACK,
          type: "fullstack",
        };
      }
      // mobile app
      if (
        title.includes("app") ||
        technologies.includes("mobile") ||
        technologies.includes("react native")
      ) {
        return {
          ...project,
          category: FILTER_TYPES.MOBILE,
          type: "mobile",
        };
      }
      // Par défaut, c'est du frontend
      return { ...project, category: FILTER_TYPES.FRONTEND, type: "frontend" };
    });
  }, []);

  // Filtrer les projets sans utiliser useEffect pour éviter les erreurs
  const filteredProjects = useMemo(() => {
    if (activeFilter === FILTER_TYPES.ALL) {
      return categorizedProjects;
    }

    return categorizedProjects.filter(
      (project) =>
        project.category === activeFilter || project.type === activeFilter,
    );
  }, [activeFilter, categorizedProjects]);

  // Compter les projets par catégorie
  const projectCounts = useMemo(() => {
    const counts = {};

    Object.values(FILTER_TYPES).forEach((filter) => {
      if (filter === FILTER_TYPES.ALL) {
        counts[filter] = categorizedProjects.length;
      } else {
        counts[filter] = categorizedProjects.filter(
          (project) => project.category === filter || project.type === filter,
        ).length;
      }
    });

    return counts;
  }, [categorizedProjects]);

  const handleFilterClick = (filter) => {
    if (isAnimating || filter === activeFilter) return;

    setIsAnimating(true);
    setActiveFilter(filter);

    // Réinitialiser l'animation après un délai
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Variants simplifiés pour éviter les erreurs
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <div
        className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 mt-16"
        id="projects"
      >
        {/* Gradient décoratif */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          {/* En-tête de section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-amber-400 text-transparent bg-clip-text">
                Portfolio de Projets
              </span>
            </h2>

            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              Découvrez ma collection d'applications web modernes construites
              avec les dernières technologies.
            </p>

            {/* Statistiques */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8 max-w-4xl mx-auto">
              {Object.values(FILTER_TYPES).map((filter) => (
                <div
                  key={filter}
                  className={`text-center p-3 rounded-lg backdrop-blur-sm border transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-gradient-to-br from-orange-500/20 to-yellow-500/10 border-orange-500/30 transform scale-105"
                      : "bg-gray-900/30 border-white/10 hover:bg-gray-800/40"
                  }`}
                >
                  <div className="text-2xl font-bold text-white">
                    {projectCounts[filter]}
                  </div>
                  <div className="text-xs text-gray-300 mt-1 font-medium">
                    {FILTER_LABELS[filter]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Filtres */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {Object.values(FILTER_TYPES).map((filter) => (
                <FilterButton
                  key={filter}
                  label={FILTER_LABELS[filter]}
                  isActive={activeFilter === filter}
                  onClick={() => handleFilterClick(filter)}
                  count={projectCounts[filter]}
                  icon={FILTER_ICONS[filter]}
                />
              ))}
            </div>

            {/* Indicateur de filtre actif */}
            <div className="relative h-1 bg-gray-800/50 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 rounded-full" />
            </div>
          </div>

          {/* Grille de projets avec AnimatePresence pour les transitions propres */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
                  variants={cardVariants}
                  layout
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Message si aucun projet */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="text-7xl mb-6 animate-bounce">📭</div>
              <h3 className="text-2xl font-bold text-gray-200 mb-3">
                Aucun projet trouvé
              </h3>
              <p className="text-gray-400 mb-6 max-w-md mx-auto">
                {activeFilter === FILTER_TYPES.VANILLA_JS
                  ? "Aucun projet Vanilla JS trouvé. Ces projets démontrent l'utilisation pure de JavaScript sans frameworks."
                  : "Aucun projet dans cette catégorie pour le moment."}
              </p>
              <button
                onClick={() => handleFilterClick(FILTER_TYPES.ALL)}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg"
              >
                Voir tous les projets ({projectCounts[FILTER_TYPES.ALL]})
              </button>
            </motion.div>
          )}

          {/* Compteur de résultats */}
          <div className="text-center mt-12 pt-6">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-gray-800/40 rounded-full border border-white/10">
              <span className="text-gray-300">
                <span className="font-bold text-orange-400">
                  {filteredProjects.length}
                </span>{" "}
                projet{filteredProjects.length !== 1 ? "s" : ""}
                {activeFilter !== FILTER_TYPES.ALL && (
                  <span className="text-gray-400">
                    {" "}
                    en{" "}
                    <span className="font-semibold text-yellow-400">
                      {FILTER_LABELS[activeFilter]}
                    </span>
                  </span>
                )}
              </span>
              <span className="w-1 h-1 bg-orange-400 rounded-full"></span>
              <span className="text-sm text-gray-400">
                Total:{" "}
                <span className="font-bold">
                  {projectCounts[FILTER_TYPES.ALL]}
                </span>{" "}
                projets
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Section logos animés */}
      <AutoScrollLogos />
    </>
  );
}

export default Projects;
