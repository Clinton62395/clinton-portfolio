import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import FAQCarousel from "../components/FQA";
import { Contactschema } from "../components/validators/storeValidator";
import { contactInfo } from "../components/data/contactInfo";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(Contactschema),
  });

  const onSubmit = async (data) => {
    console.log("Données envoyées :", data);
    // Simuler un délai d'envoi
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 mt-16"
        id="contact"
      >
        {/* Gradient décoratif */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />

        <div className="relative max-w-6xl w-full">
          {/* En-tête de section */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text">
                Contactez-moi
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Une idée de projet ? Une question ? N'hésitez pas à me contacter.
              Je serai ravi d'échanger avec vous.
            </p>
          </motion.div>

          {/* Container principal */}
          <motion.div
            variants={itemVariants}
            className="backdrop-blur-xl bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 rounded-3xl shadow-2xl border border-white/10 overflow-hidden"
          >
            {/* Ligne de gradient en haut */}
            <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />

            <div className="p-6 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Informations de contact */}
                <motion.div variants={itemVariants} className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Mes coordonnées
                  </h3>

                  <div className="space-y-4">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="group"
                        >
                          {info.href ? (
                            <a
                              href={info.href}
                              target={
                                info.href.startsWith("http")
                                  ? "_blank"
                                  : "_self"
                              }
                              rel={
                                info.href.startsWith("http")
                                  ? "noopener noreferrer"
                                  : ""
                              }
                              className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-gray-600 hover:bg-gray-800/50 transition-all duration-300"
                            >
                              <div
                                className={`${info.color} bg-gray-800 p-3 rounded-lg group-hover:scale-110 transition-transform`}
                              >
                                <Icon className="text-xl" />
                              </div>
                              <div>
                                <p className="text-sm text-gray-400">
                                  {info.label}
                                </p>
                                <p className="text-white font-medium">
                                  {info.value}
                                </p>
                              </div>
                            </a>
                          ) : (
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/30 border border-gray-700/50">
                              <div
                                className={`${info.color} bg-gray-800 p-3 rounded-lg`}
                              >
                                <Icon className="text-xl" />
                              </div>
                              <div>
                                <p className="text-sm text-gray-400">
                                  {info.label}
                                </p>
                                <p className="text-white font-medium">
                                  {info.value}
                                </p>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Carte décorative */}
                  <div className="hidden lg:block mt-8 p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-orange-500/10 border border-purple-500/20">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      💡 <strong>Astuce :</strong> Pour une réponse rapide,
                      contactez-moi via WhatsApp ou par email. Je réponds
                      généralement sous 24h.
                    </p>
                  </div>
                </motion.div>

                {/* Formulaire de contact */}
                <motion.form
                  variants={itemVariants}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Envoyez-moi un message
                  </h3>

                  {/* Nom */}
                  <div>
                    <label
                      htmlFor="nom"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Votre nom <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="nom"
                      type="text"
                      placeholder="Ex: Jean Dupont"
                      {...register("nom")}
                      className={`w-full px-4 py-3 rounded-lg bg-gray-800/50 border-2 ${
                        errors.nom ? "border-red-500" : "border-gray-700"
                      } focus:border-purple-500 focus:outline-none text-white placeholder-gray-500 transition-all duration-300`}
                    />
                    {errors.nom && (
                      <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                        <span>⚠️</span> {errors.nom.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Votre email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="exemple@email.com"
                      {...register("email")}
                      className={`w-full px-4 py-3 rounded-lg bg-gray-800/50 border-2 ${
                        errors.email ? "border-red-500" : "border-gray-700"
                      } focus:border-purple-500 focus:outline-none text-white placeholder-gray-500 transition-all duration-300`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                        <span>⚠️</span> {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Votre message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      placeholder="Décrivez votre projet ou posez votre question..."
                      {...register("message")}
                      className={`w-full px-4 py-3 rounded-lg bg-gray-800/50 border-2 ${
                        errors.message ? "border-red-500" : "border-gray-700"
                      } focus:border-purple-500 focus:outline-none text-white placeholder-gray-500 transition-all duration-300 resize-none`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                        <span>⚠️</span> {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Bouton d'envoi */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                      w-full py-4 px-6 rounded-lg font-semibold text-white
                      bg-gradient-to-r from-purple-600 to-pink-600
                      hover:from-purple-500 hover:to-pink-500
                      shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50
                      transition-all duration-300
                      flex items-center justify-center gap-2
                      ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}
                    `}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-lg" />
                        <span>Envoyer le message</span>
                      </>
                    )}
                  </motion.button>
                </motion.form>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* FAQ */}
      <FAQCarousel />

      {/* Bouton WhatsApp flottant */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="fixed right-6 bottom-6 z-50"
      >
        <motion.a
          href="https://api.whatsapp.com/send?phone=224623952011&text=Bonjour%20Monsieur,%20j'aimerais%20avoir%20une%20discussion%20avec%20vous!."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="group relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow-lg shadow-green-500/50 hover:shadow-green-500/70 transition-all duration-300"
        >
          <BsWhatsapp className="text-white text-3xl" />

          {/* Badge de notification */}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-gray-900 animate-pulse" />

          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Contactez-moi sur WhatsApp
          </span>
        </motion.a>
      </motion.div>
    </>
  );
};

export default Contact;
