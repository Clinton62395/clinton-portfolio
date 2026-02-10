import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiHome } from "react-icons/hi";
import { menuItems } from "./data/navbarLinks";

function PagesNavbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Détection du scroll pour effet glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Variants pour le menu mobile
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  // Variants pour le logo
  const logoVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: { duration: 0.6 },
    },
  };

  // Variants pour les liens de navigation
  const linkVariants = {
    initial: { opacity: 0, y: -20 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Variants pour le bouton hamburger
  const hamburgerVariants = {
    closed: { rotate: 0 },
    open: { rotate: 90 },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed hidden md:flex top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-gray-900/80 shadow-xl shadow-blue-500/10 border-b border-white/10"
          : "bg-gray-900/50 backdrop-blur-sm"
      }`}
    >
      {/* Ligne de gradient en haut */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link className="flex items-center gap-3 group" to="/">
            <motion.img
              src="mylogo.png"
              alt="Logo Billy Doumbouya"
              width="40"
              height="40"
              className="rounded-full border-2 border-transparent group-hover:border-blue-400 transition-all duration-300"
              variants={logoVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            />
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <HiHome className="text-blue-400 text-xl" />
              <span
                className={`text-lg font-bold transition-colors duration-200 ${
                  location.pathname === "/"
                    ? "text-yellow-400"
                    : "text-white group-hover:text-blue-400"
                }`}
              >
                Home
              </span>
            </motion.div>
          </Link>

          {/* Toggle button for mobile */}
          <motion.button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="md:hidden z-50 p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
            variants={hamburgerVariants}
            animate={open ? "open" : "closed"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 6h18M3 12h18M3 18h18"
                />
              )}
            </svg>
          </motion.button>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <ul className="flex gap-2 items-center">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <motion.li
                    key={item.path}
                    custom={index}
                    variants={linkVariants}
                    initial="initial"
                    animate="animate"
                    className="relative"
                  >
                    <Link
                      className={`
                        flex items-center gap-2 px-4 py-2 rounded-lg
                        transition-all duration-300 group
                        ${
                          active
                            ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-yellow-400 font-semibold border border-blue-500/30"
                            : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                        }
                      `}
                      to={item.path}
                    >
                      <Icon
                        className={`text-lg transition-transform duration-200 ${
                          active
                            ? "text-yellow-400"
                            : "text-blue-400 group-hover:scale-110"
                        }`}
                      />
                      <span>{item.label}</span>

                      {/* Effet de brillance au survol */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-lg" />
                    </Link>

                    {/* Indicateur de page active */}
                    {active && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden backdrop-blur-xl bg-gray-900/95 border-t border-white/10"
          >
            <ul className="flex flex-col gap-2 p-4">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <motion.li key={item.path} variants={itemVariants}>
                    <Link
                      className={`
                        flex items-center gap-3 px-4 py-3 rounded-lg
                        transition-all duration-300
                        ${
                          active
                            ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-yellow-400 font-semibold border border-blue-500/30"
                            : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                        }
                      `}
                      to={item.path}
                      onClick={() => setOpen(false)}
                    >
                      <Icon
                        className={`text-xl ${
                          active ? "text-yellow-400" : "text-blue-400"
                        }`}
                      />
                      <span className="text-lg">{item.label}</span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default PagesNavbar;
