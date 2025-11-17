import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiHome } from "react-icons/hi";
import { FaAddressCard } from "react-icons/fa";
import { MdOutlineWork, MdHomeRepairService } from "react-icons/md";
import { BiSolidContact, BiStore } from "react-icons/bi";

function PagesNavbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path
      ? "text-yellow-400 font-bold"
      : "text-white";
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
    hover: {
      scale: 1.1,
      color: "#fbbf24",
      transition: { duration: 0.2 },
    },
  };

  // Variants pour le bouton hamburger
  const hamburgerVariants = {
    closed: { rotate: 0 },
    open: { rotate: 90 },
  };

  const menuItems = [
    { path: "/about", icon: FaAddressCard, label: "About Me" },
    { path: "/projects", icon: MdOutlineWork, label: "Projects" },
    { path: "/service", icon: MdHomeRepairService, label: "Services" },
    { path: "/contact", icon: BiSolidContact, label: "Contact" },
    { path: "/store", icon: BiStore, label: "Store" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 w-full bg-[#0b1220] shadow-lg z-50"
    >
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        {/* Logo */}
        <Link
          className={`flex items-center justify-center gap-2 ${
            location.pathname === "/" ? "text-warning" : ""
          }`}
          to="/"
        >
          <motion.img
            src="mylogo.png"
            alt="Logo"
            width="40"
            height="40"
            className="mr-2"
            variants={logoVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          />
          <motion.div
            className="flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <HiHome className="mr-1" />
            <span className="text-lg font-bold text-white">Home</span>
          </motion.div>
        </Link>

        {/* Toggle button for mobile */}
        <motion.button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="text-white md:hidden z-50"
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
            className="w-6 h-6"
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
          <ul className="flex gap-6 items-center">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.path}
                  custom={index}
                  variants={linkVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="nav-item"
                >
                  <Link
                    className={`${isActive(
                      item.path
                    )} flex items-center gap-1 transition-colors duration-200`}
                    to={item.path}
                  >
                    <Icon className="text-lg" />
                    {item.label}
                  </Link>
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="underline"
                      className="h-0.5 bg-yellow-400 mt-1"
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

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute top-full left-0 w-full bg-[#0b1220] md:hidden shadow-lg"
            >
              <ul className="flex flex-col gap-4 p-6">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.li
                      key={item.path}
                      variants={itemVariants}
                      className="nav-item"
                    >
                      <Link
                        className={`${isActive(
                          item.path
                        )} flex items-center gap-2 text-lg py-2`}
                        to={item.path}
                        onClick={() => setOpen(false)}
                      >
                        <Icon className="text-xl" />
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default PagesNavbar;
