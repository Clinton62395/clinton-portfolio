import React from "react";
import { motion } from "framer-motion";
import TypingText from "./TypingEffect";
import { span } from "framer-motion/client";

const HeroSection = () => {
  // Variants d'animation optimisées
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const NameSpan = motion.create(span);
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 mt-16 md:mt-10"
    >
      {/* Gradient overlay décoratif */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Contenu texte */}
          <motion.div
            variants={itemVariants}
            className="flex-1 text-center lg:text-left space-y-6"
          >
            {/* Titre principal */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                <span className="block bg-gradient-to-r from-yellow-400 via-purple-500 to-green-400 text-transparent bg-clip-text">
                  Bonjour !
                </span>
              </h1>

              <motion.h2
                variants={itemVariants}
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-yellow-400"
              >
                Bienvenue sur mon portfolio
              </motion.h2>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Je m'appelle{" "}
                <NameSpan
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="text-yellow-400 font-semibold"
                >
                  Billy Doumbouya
                </NameSpan>
                . Passionné par le développement web et les technologies
                modernes, je conçois des interfaces interactives, dynamiques et
                efficaces.
              </p>

              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Parcourez mes projets, découvrez mes compétences et n'hésitez
                pas à me contacter pour une collaboration.
              </p>
            </motion.div>

            {/* Typing effect */}
            <motion.div variants={itemVariants} className="pt-4">
              <TypingText />
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={imageVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="flex-1 max-w-md lg:max-w-lg mt-24"
          >
            <div className="relative">
              {/* Effet de glow derrière l'image */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl rounded-full" />

              <img
                src="/image.png"
                alt="Billy Doumbouya"
                className="relative w-full h-auto rounded-2xl shadow-2xl shadow-purple-500/20 border border-purple-500/10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
