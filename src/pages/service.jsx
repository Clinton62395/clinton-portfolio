import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaShieldAlt,
  FaBitcoin,
  FaMobileAlt,
  FaChalkboardTeacher,
} from "react-icons/fa";
import BackgroundParticles from "../components/Animation";
import { PiPhoneCall } from "react-icons/pi";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode className="text-blue-500 text-5xl" />,
      title: "Développement Web",
      description:
        "Création de sites web modernes, réactifs et adaptés à tous les supports.",
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500",
    },
    {
      icon: <FaPaintBrush className="text-pink-500 text-5xl" />,
      title: "Infographie",
      description:
        "Conception de visuels professionnels pour vos réseaux, affiches, flyers...",
      color: "from-pink-500 to-rose-500",
      borderColor: "border-pink-500",
    },
    {
      icon: <FaShieldAlt className="text-green-500 text-5xl" />,
      title: "Cybersécurité (niveau débutant)",
      description:
        "Sensibilisation à la sécurité numérique et installation de bonnes pratiques.",
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-500",
    },
    {
      icon: <FaBitcoin className="text-yellow-500 text-5xl" />,
      title: "Crypto Trading",
      description:
        "Accompagnement à l'initiation et à la gestion des investissements crypto.",
      color: "from-yellow-500 to-amber-500",
      borderColor: "border-yellow-500",
    },
    {
      icon: <FaMobileAlt className="text-red-500 text-5xl" />,
      title: "Accessoires Téléphoniques",
      description:
        "Vente de coques, écouteurs, chargeurs et gadgets pour smartphone.",
      color: "from-red-500 to-orange-500",
      borderColor: "border-red-500",
    },
    {
      icon: <FaChalkboardTeacher className="text-purple-500 text-5xl" />,
      title: "Formation & Coaching",
      description:
        "Initiation à l'informatique, accompagnement pour lancer une activité numérique.",
      color: "from-purple-500 to-violet-500",
      borderColor: "border-purple-500",
    },
  ];

  // Variants d'animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.05,
      rotate: 0,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <BackgroundParticles />

      <section className="relative bg-gradient-to-br from-gray-900 via-[#111827] to-black text-white py-20 px-4 min-h-screen overflow-hidden">
        {/* Effet de particules décoratives */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-20"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div
          className="container mx-auto relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* En-tête */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Mes Services
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
                  className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 overflow-hidden"
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  {/* Effet de fond animé */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Bordure animée */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl border-2 ${service.borderColor} opacity-0 group-hover:opacity-100`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Icone */}
                  <motion.div
                    className="relative z-10 mb-6 flex justify-center"
                    variants={iconVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    {service.icon}
                  </motion.div>

                  {/* Contenu */}
                  <div className="relative z-10 text-center">
                    <motion.h4
                      className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {service.title}
                    </motion.h4>
                    <motion.p
                      className="text-gray-300 leading-relaxed"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {service.description}
                    </motion.p>
                  </div>

                  {/* Effet de brillance au hover */}
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bouton de contact */}
          <motion.div
            className="flex justify-center items-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.a
              href="/contact"
              className="group relative flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-2xl px-8 py-4 shadow-2xl overflow-hidden"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              animate="pulse"
            >
              {/* Effet de fond animé */}
              <motion.div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icône */}
              <motion.div
                className="relative z-10"
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.2 }}
              >
                <PiPhoneCall className="text-2xl" />
              </motion.div>

              {/* Texte */}
              <span className="relative z-10">Me contacter</span>

              {/* Effet de brillance */}
              <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default Services;
