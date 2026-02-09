import React from "react";
import { motion } from "framer-motion";
import { BiDownload } from "react-icons/bi";
import { FaBookOpenReader } from "react-icons/fa6";

const CVSection = () => {
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
    tap: { scale: 0.95 },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
      className="relative max-w-5xl mx-auto my-20 px-4 sm:px-6 lg:px-8"
      id="cv"
    >
      {/* Card avec effet glassmorphism */}
      <div className="relative backdrop-blur-xl bg-gradient-to-r from-teal-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
        {/* Gradient décoratif en arrière-plan */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-purple-500/5 pointer-events-none" />

        <div className="relative px-6 sm:px-10 py-12 sm:py-16 text-center space-y-8">
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
              Téléchargez mon CV
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto"
            >
              Découvrez mon parcours professionnel, mes compétences techniques
              et mes réalisations.
            </motion.p>
          </motion.div>

          {/* Boutons d'action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center"
          >
            {/* Bouton Télécharger */}
            <motion.a
              href="/Billy-Doumbouya-FlowCV-Resume-20250526.pdf"
              download="Billy-Doumbouya-CV.pdf"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 w-full sm:w-auto"
            >
              <BiDownload size={22} className="group-hover:animate-bounce" />
              <span>Télécharger le CV</span>

              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-full" />
            </motion.a>

            {/* Bouton Ouvrir */}
            <motion.button
              onClick={() =>
                window.open(
                  "/Billy-Doumbouya-FlowCV-Resume-20250526.pdf",
                  "_blank",
                )
              }
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold rounded-full shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 w-full sm:w-auto"
            >
              <FaBookOpenReader
                size={22}
                className="group-hover:scale-110 transition-transform"
              />
              <span>Ouvrir le CV</span>

              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-full" />
            </motion.button>
          </motion.div>

          {/* Indicateur visuel subtil */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center gap-2 text-sm text-gray-400"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Disponible pour de nouvelles opportunités</span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CVSection;
