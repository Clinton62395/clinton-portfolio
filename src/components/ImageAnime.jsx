import React from "react";
import { motion } from "framer-motion";

import airbnb from "../assets/airbnb.png";
import asana from "../assets/asana.png";
import dropbox from "../assets/dropbox.png";
import khan_academy from "../assets/khan_academy.png";
import neipal from "../assets/neipal.png";
import netflix from "../assets/netflix.png";

const logos = [
  { src: airbnb, title: "AIRBNB" },
  { src: asana, title: "ASANA" },
  { src: dropbox, title: "DROPBOX" },
  { src: khan_academy, title: "KHAN ACADEMY" },
  { src: neipal, title: "NEIPAL" },
  { src: netflix, title: "NETFLIX" },
];

const AutoScrollLogos = () => {
  // Double les logos pour une boucle infinie fluide
  const duplicatedLogos = [...logos, ...logos];

  // Variants d'animation pour les logos individuels
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16 mt-20">
      {/* Titre section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Technologies & Partenaires
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Découvrez les technologies et plateformes que j'utilise pour créer des
          expériences exceptionnelles
        </p>
      </motion.div>

      {/* Premier groupe de logos */}
      <motion.div
        className="flex gap-16 w-max mb-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <motion.div
            key={`first-${index}`}
            className="flex flex-col items-center min-w-[180px]"
            variants={logoVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
          >
            <motion.div className="relative group" whileHover={{ rotateY: 10 }}>
              <img
                src={logo.src}
                alt={logo.title}
                className="h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:brightness-110"
              />
              {/* Effet de brillance au hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </motion.div>
            <motion.h4 className="text-white mt-4 font-medium text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {logo.title}
            </motion.h4>
          </motion.div>
        ))}
      </motion.div>

      {/* Deuxième groupe de logos (décalé) */}
      <motion.div
        className="flex gap-16 w-max"
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <motion.div
            key={`second-${index}`}
            className="flex flex-col items-center min-w-[160px]"
            variants={logoVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
          >
            <motion.div
              className="relative group"
              whileHover={{ rotateY: -10 }}
            >
              <img
                src={logo.src}
                alt={logo.title}
                className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
              />
              {/* Effet de brillance au hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </motion.div>
            <motion.h4 className="text-gray-400 mt-3 font-medium text-xs tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {logo.title}
            </motion.h4>
          </motion.div>
        ))}
      </motion.div>

      {/* Overlay gradients pour un effet de fondu */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-900 to-transparent z-10" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-900 to-transparent z-10" />

      {/* Effet de particules décoratif */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * 200,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoScrollLogos;
