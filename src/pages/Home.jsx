import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TypingText from "../components/TypingEffect.jsx";
import BackgroundParticles from "../components/Animation.jsx";
import Loader from "../components/Loader.jsx";
import { BiDownload } from "react-icons/bi";
import { FaBookOpenReader } from "react-icons/fa6";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  // Variants d'animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <>
      <div className="overflow-x-hidden mt-24">
        <BackgroundParticles />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative pt-5 mt-5 w-full flex mt-24 mx-auto bg-gradient-to-r from-gray-500/10 via-gray-900/50 to-blue-500/10 backdrop-blur py-10 rounded-lg shadow-lg shadow-blue-500/50 py-24 md:pt-24"
        >
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-24">
            {/* Texte */}
            <motion.div
              variants={itemVariants}
              className="text-lg md:text-xl w-full text-center lg:text-left text-white mx-auto px-10"
            >
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold mb-5 text-center bg-gradient-to-r from-yellow-500 via-purple-500 to-green-500 text-transparent bg-clip-text"
              >
                Bonjour !
              </motion.h1>

              <motion.span
                variants={itemVariants}
                className="text-2xl md:text-5xl font-semibold md:text-yellow-500 block mb-4 md:text-center max-w-xl mb-5"
              >
                Bienvenue sur mon portfolio
              </motion.span>

              <motion.p
                variants={itemVariants}
                className="text-center sm:text-lg md:text-xl text-light mb-4 max-w-xl mx-auto lg:mx-5 text-center leading-relaxed"
              >
                Je m'appelle{" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <strong>Billy Doumbouya</strong>
                </motion.span>
                . Passionné par le développement web et les technologies
                modernes, je conçois des interfaces interactives, dynamiques et
                efficaces.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="sm:text-lg md:text-xl text-light mb-4 max-w-xl mx-auto lg:mx-5 text-center leading-relaxed"
              >
                Parcourez mes projets, découvrez mes compétences et n'hésitez
                pas à me contacter pour une collaboration.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="absolute mt-4 left-0 px-2 md:mx-auto md:left-24"
              >
                <TypingText />
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={imageVariants}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="w-full sm:w-72 md:w-1/2 mx-auto h-auto"
            >
              <img
                src="/image.png"
                alt="ma photo"
                className="w-full rounded"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Section Télécharger le CV */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative w-full sm:mx-auto text-white py-10 px-4 text-center rounded shadow-lg shadow-blue backdrop-blur bg-gradient-to-r from-teal-500/50 via-dark to-purple-500/50 pt-24 mb-24 mt-24"
        id="cv"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl font-bold mb-4"
        >
          Téléchargez mon CV
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg mb-6"
        >
          Cliquez sur le bouton ci-dessous pour télécharger mon CV.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-4 flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center justify-center"
        >
          <motion.a
            href="/Billy-Doumbouya-FlowCV-Resume-20250526.pdf"
            download="b"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="inline-flex items-center justify-center bg-blue-600 border border-3 border-warning hover:bg-gray-500/50 hover:border-dotted text-white font-semibold px-6 py-3 rounded-full gap-2 transition duration-300"
            style={{ width: "250px", margin: "auto" }}
          >
            <BiDownload size={20} />
            Télécharger le CV
          </motion.a>

          <motion.button
            onClick={() =>
              window.open(
                "/Billy-Doumbouya-FlowCV-Resume-20250526.pdf",
                "_blank"
              )
            }
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="flex items-center justify-center bg-blue-600 border-3 border-warning hover:bg-gray-500/50 hover:border-dotted text-white font-semibold px-6 py-3 rounded-full gap-2 transition duration-300"
            style={{ width: "250px", margin: "auto" }}
          >
            <FaBookOpenReader size={20} />
            Ouvrir le CV ici
          </motion.button>
        </motion.div>
      </motion.section>
    </>
  );
}

export default Home;