import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLaptopCode,
  FaGlobe,
  FaTools,
  FaRegLightbulb,
  FaClock,
  FaEnvelope,
} from "react-icons/fa";
import { FcContacts } from "react-icons/fc";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FAQCarousel = () => {
  const [active, setActive] = useState(0);

  const faqItems = [
    {
      icon: <FaLaptopCode className="text-4xl text-green-500" />,
      question: "Quels services proposes-tu ?",
      answer:
        "Je propose la création de sites web modernes, du développement front-end avec React, ainsi que du design d'interfaces interactives.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaGlobe className="text-4xl text-blue-500" />,
      question: "Travailles-tu à distance ?",
      answer:
        "Oui, je travaille à distance avec des clients dans plusieurs pays.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaTools className="text-4xl text-purple-500" />,
      question: "Quels langages et outils maîtrises-tu ?",
      answer:
        "Je maîtrise HTML, CSS, JavaScript, React, Tailwind CSS, Git, Bootstrap et bien d'autres.",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: <FaRegLightbulb className="text-4xl text-yellow-500" />,
      question: "Peux-tu créer un site vitrine personnalisé ?",
      answer:
        "Oui, je conçois des sites vitrines responsives adaptés à ton image ou activité.",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: <FaClock className="text-4xl text-pink-500" />,
      question: "Combien de temps prend un projet moyen ?",
      answer: "En moyenne, un site simple peut être prêt en 1 à 2 semaines.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <FaEnvelope className="text-4xl text-red-500" />,
      question: "Comment peut-on te contacter ?",
      answer:
        "Via le formulaire de contact, par email ou sur les réseaux sociaux (voir bas de page).",
      color: "from-red-500 to-orange-500",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % faqItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [faqItems.length]);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % faqItems.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + faqItems.length) % faqItems.length);
  };

  const goToSlide = (index) => {
    setActive(index);
  };

  // Variants d'animation
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    }),
  };

  return (
    <section className="relative mt-[200px] text-white py-20 bg-gradient-to-r from-[#0a142f] to-[#222240] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Titre */}
        <motion.h1
          className="font-bold text-center text-5xl md:text-6xl bg-gradient-to-r from-purple-500 via-lime-500 to-fuchsia-500 mb-12 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          A vos services
        </motion.h1>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Boutons de navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slide active */}
          <div className="relative h-80">
            <AnimatePresence mode="wait" custom={1}>
              <motion.div
                key={active}
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50 w-full max-w-2xl mx-auto">
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, ease: "backOut" }}
                    >
                      {faqItems[active].icon}
                    </motion.div>

                    <motion.h5
                      className="text-2xl md:text-3xl font-bold mb-4 mt-4 text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      {faqItems[active].question}
                    </motion.h5>

                    <motion.p
                      className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      {faqItems[active].answer}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicateurs de slide */}
          <div className="flex justify-center mt-8 space-x-3">
            {faqItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === active
                    ? "bg-yellow-400 scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Aller à la question ${index + 1}`}
              />
            ))}
          </div>

          {/* Compteur */}
          <div className="text-center mt-4">
            <span className="text-gray-400 text-sm">
              {active + 1} / {faqItems.length}
            </span>
          </div>
        </div>

        {/* Section contact */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-gray-300 text-lg mb-4">
            Vous avez d'autres questions ?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-yellow-500 text-white bg-transparent rounded-full px-8 py-4 hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 font-semibold group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FcContacts />
            </motion.span>
            Me contacter
          </motion.a>
        </motion.div>
      </div>

      {/* Effet de particules décoratives */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * 400,
            }}
            animate={{
              y: [0, -20, 0],
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
    </section>
  );
};

export default FAQCarousel;
