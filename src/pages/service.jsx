import React from "react";
import { motion } from "framer-motion";
import { PiPhoneCall } from "react-icons/pi";
import { services } from "../components/data/serviceData";
import { Link } from "react-router-dom";

function Services() {
  // Variants d'animation
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
    hidden: { opacity: 0, y: 50, scale: 0.95 },
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

  const cardVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.15,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
    },
    tap: {
      scale: 0.95,
    },
  };

  const MotionLink = motion(Link);

  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 mt-16 overflow-hidden">
      {/* Gradient décoratif */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent pointer-events-none" />

      {/* Particules décoratives */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 1000),
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {/* En-tête */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text">
              Mes Services
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Voici ce que je propose pour accompagner vos projets avec
            <span className="text-yellow-400 font-semibold">
              {" "}
              professionnalisme{" "}
            </span>
            et <span className="text-yellow-400 font-semibold">passion</span>.
          </motion.p>
        </motion.div>

        {/* Grille des services */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
            >
              <motion.div
                className="relative h-full backdrop-blur-xl bg-gradient-to-br from-gray-900/70 via-gray-800/50 to-gray-900/70 rounded-2xl p-8 shadow-2xl border border-white/10 overflow-hidden flex flex-col"
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Ligne de gradient en haut */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`}
                />

                {/* Effet de glow au hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Bordure animée au hover */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl border-2 ${service.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Icône */}
                <motion.div
                  className="relative z-10 mb-6 flex justify-center"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <div
                    className={`p-4 bg-gradient-to-br ${service.color} bg-opacity-20 rounded-2xl border border-opacity-30 ${service.borderColor}`}
                  >
                    {service.icon}
                  </div>
                </motion.div>

                {/* Contenu */}
                <div className="relative z-10 text-center flex-grow flex flex-col">
                  <motion.h3
                    className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {service.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-300 leading-relaxed mb-6 flex-grow"
                    initial={{ opacity: 0.9 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {service.description}
                  </motion.p>

                  {/* Badge de catégorie ou tag */}
                  {service.tag && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      className="inline-flex items-center justify-center gap-2 mx-auto px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full"
                    >
                      <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                      <span className="text-yellow-400 text-sm font-medium">
                        {service.tag}
                      </span>
                    </motion.div>
                  )}
                </div>

                {/* Effet de brillance au hover */}
                <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Message si aucun service */}
        {services.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-lg">Services à venir bientôt...</p>
          </motion.div>
        )}

        {/* Bouton de contact */}
        <motion.div
          className="flex justify-center items-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <MotionLink
            to="/contact"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white font-bold rounded-full px-8 py-4 shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 overflow-hidden transition-all duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {/* Effet de fond animé */}
            <motion.div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Icône */}
            <motion.div
              className="relative z-10"
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <PiPhoneCall className="text-2xl" />
            </motion.div>

            {/* Texte */}
            <span className="relative z-10 text-lg">Me contacter</span>

            {/* Effet de brillance */}
            <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </MotionLink>
        </motion.div>

        {/* Call to action supplémentaire */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-8"
        >
          <p className="text-gray-400 text-sm">
            Disponible pour des projets freelance et collaborations
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Services;
