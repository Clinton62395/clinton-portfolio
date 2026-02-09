import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FcContacts } from "react-icons/fc";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { faqItems } from "./data/faqData";

const FAQCarousel = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % faqItems.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % faqItems.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + faqItems.length) % faqItems.length);
  };

  const goToSlide = (index) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  // Variants d'animation
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="relative py-20 overflow-hidden"
      id="services"
    >
      {/* Gradient de fond */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text">
              À vos services
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Découvrez les services et solutions que je propose pour donner vie à
            vos projets
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          variants={itemVariants}
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Boutons de navigation */}
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 sm:-left-12 top-1/2 transform -translate-y-1/2 z-30 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm hover:from-gray-700 hover:to-gray-800 text-white p-3 sm:p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl border border-white/10"
            aria-label="Slide précédent"
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-0 sm:-right-12 top-1/2 transform -translate-y-1/2 z-30 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm hover:from-gray-700 hover:to-gray-800 text-white p-3 sm:p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl border border-white/10"
            aria-label="Slide suivant"
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Slide actif */}
          <div className="relative min-h-[400px] sm:min-h-[450px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 flex items-center justify-center px-4 sm:px-12"
              >
                <div className="relative w-full max-w-3xl">
                  {/* Effet de glow derrière la carte */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 blur-3xl rounded-3xl" />

                  {/* Carte principale */}
                  <div className="relative backdrop-blur-xl bg-gradient-to-br from-gray-900/70 via-gray-800/50 to-gray-900/70 rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10">
                    {/* Ligne de gradient en haut */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-t-3xl" />

                    <div className="text-center space-y-6">
                      {/* Icône */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          duration: 0.6,
                          ease: "backOut",
                          delay: 0.1,
                        }}
                        className="flex justify-center"
                      >
                        <div className="p-6 bg-gradient-to-br from-purple-500/20 to-orange-500/20 rounded-2xl border border-purple-500/30">
                          {faqItems[active].icon}
                        </div>
                      </motion.div>

                      {/* Question */}
                      <motion.h3
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        {faqItems[active].question}
                      </motion.h3>

                      {/* Réponse */}
                      <motion.p
                        className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        {faqItems[active].answer}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicateurs de slide */}
          <div className="flex justify-center mt-8 gap-2">
            {faqItems.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`relative transition-all duration-300 ${
                  index === active ? "w-8 h-3" : "w-3 h-3"
                }`}
                aria-label={`Aller à la question ${index + 1}`}
              >
                <div
                  className={`w-full h-full rounded-full transition-all duration-300 ${
                    index === active
                      ? "bg-gradient-to-r from-purple-500 to-pink-500"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />

                {/* Barre de progression pour le slide actif */}
                {index === active && !isPaused && (
                  <motion.div
                    className="absolute inset-0 bg-white/30 rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 6, ease: "linear" }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Compteur */}
          <div className="text-center mt-4">
            <span className="text-gray-400 text-sm font-medium">
              {active + 1} / {faqItems.length}
            </span>
          </div>
        </motion.div>

        {/* Section contact */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <p className="text-gray-300 text-lg mb-6">
            Vous avez d'autres questions ?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-full shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
          >
            <motion.span
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FcContacts className="text-2xl" />
            </motion.span>
            <span>Me contacter</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Particules décoratives flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * 600,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default FAQCarousel;
