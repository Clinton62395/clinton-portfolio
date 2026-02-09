import React from "react";
import { FaHeart } from "react-icons/fa";
import { socialLinks } from "./data/socialLinks";
import { motion } from "framer-motion";

function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="relative mt-20 border-t border-white/10 backdrop-blur-xl bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900/80"
    >
      {/* Effet de glow en haut du footer */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section principale */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Colonne 1: Info personnelle */}
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent">
              Billy Doumbouya
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Développeur passionné créant des solutions web modernes et
              innovantes avec les dernières technologies.
            </p>
          </motion.div>

          {/* Colonne 2: Liens rapides */}
          <motion.div variants={itemVariants} className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-gray-200">
              Liens Rapides
            </h4>
            <div className="flex flex-col space-y-3">
              {[
                { href: "#about", label: "À Propos" },
                { href: "#projects", label: "Projets" },
                { href: "#skills", label: "Compétences" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Colonne 3: Contact */}
          <motion.div
            variants={itemVariants}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold mb-4 text-gray-200">
              Contact
            </h4>
            <a
              href="mailto:billydoumbouya5210@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm block mb-3 hover:underline"
            >
              billydoumbouya5210@gmail.com
            </a>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-xs font-medium">
                Disponible pour freelance
              </span>
            </div>
          </motion.div>
        </div>

        {/* Séparateur avec gradient */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-gray-900/50 backdrop-blur-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </span>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.href}
                target={social.href.startsWith("mailto:") ? "_self" : "_blank"}
                rel={
                  social.href.startsWith("mailto:") ? "" : "noopener noreferrer"
                }
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50
                  text-gray-400 transition-all duration-300 
                  hover:bg-gray-700/50 hover:border-gray-600 ${social.color}
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900
                `}
                aria-label={social.ariaLabel}
                title={social.name}
              >
                <IconComponent className="w-5 h-5" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Copyright et mentions */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-3 md:space-y-0"
        >
          <div className="flex items-center space-x-2">
            <span>&copy; {currentYear} Billy Doumbouya.</span>
            <span className="hidden sm:inline">Tous droits réservés.</span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span>Fait avec</span>
            <FaHeart className="w-3 h-3 text-red-500 animate-pulse" />
            <span>et</span>
            <span className="font-semibold text-blue-400">React</span>
            <span>+</span>
            <span className="font-semibold text-purple-400">Tailwind</span>
          </div>
        </motion.div>

        {/* Mentions légales */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mt-6 text-xs text-gray-500"
        >
          {[
            { href: "#privacy", label: "Politique de confidentialité" },
            { href: "#terms", label: "Conditions d'utilisation" },
            { href: "#sitemap", label: "Plan du site" },
          ].map((link, index) => (
            <React.Fragment key={link.href}>
              {index > 0 && (
                <span className="hidden sm:inline text-gray-700">•</span>
              )}
              <a
                href={link.href}
                className="hover:text-gray-300 transition-colors duration-300 hover:underline"
              >
                {link.label}
              </a>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* Gradient décoratif en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 opacity-30"></div>
    </motion.footer>
  );
}

export default Footer;
