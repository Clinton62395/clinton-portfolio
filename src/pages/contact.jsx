import React from "react";
// Carousel removed (replaced with custom Tailwind slider) - react-bootstrap removed

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import BackgroundParticles from "../components/Animation";
import { BsWhatsapp } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { FcContacts } from "react-icons/fc";
import FAQCarousel from "../components/FQA";

// Schéma de validation avec Yup
const schema = yup.object().shape({
  nom: yup.string().required("Le nom est requis"),
  email: yup
    .string()
    .email("L'adresse email est invalide")
    .required("L'email est requis"),
  message: yup.string().required("Le message est requis"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // relie yup à react-hook-form
  });

  const onSubmit = (data) => {
    console.log("Données envoyées :", data);
    reset(); // vide le formulaire après soumission
  };

  return (
    <>
      <BackgroundParticles />
      <div
        className="relative z-10 min-h-screen text-white flex items-center justify-center p-10 mt-24"
        id="contact"
      >
        <div className="bg-black/50 backdrop-blur rounded-xl shadow-lg shadow-yellow-500/50 p-10 w-full max-w-5xl border-t-2 border-t-orange-400/50">
          <h2 className="text-4xl font-bold text-orange-400 text-center mb-8 bg-gradient-to-r from-purple-500 via-lime-500 to-fuchsia-500 text-transparent bg-clip-text animate__animated animate__fadeInDown animate__repeat-2 animate__delay-1s animate__slow">
            Contactez-moi
          </h2>

          <div className="flex flex-col md:flex-row justify-between gap-10">
            {/* Infos de contact */}
            <div className="flex flex-col space-y-4 animate__animated animate__backInRight animate__repeat-2 animate__delay-2s animate__slow">
              <div className="flex items-center">
                <FaEnvelope className="text-orange-400 text-xl mr-3" />
                <span>billydoumbouya5210@.com</span>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="text-orange-400 text-xl mr-3" />
                <span>+224 623 95 20 11</span>
              </div>
              <div className="flex items-center">
                <BsWhatsapp className="text-orange-400 text-xl mr-3" />
                <span>+234 705 674 5571</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-orange-400 text-xl mr-3" />
                <span>Kankan, Guinée</span>
              </div>
            </div>

            {/* Formulaire de contact */}
            <form
              className="space-y-4 w-full md:w-1/2 animate__animated animate__backInLeft animate__repeat-2 animate__delay-2s animate__slow"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                placeholder="Votre nom"
                {...register("nom", { required: "Nom requis" })}
                className="w-full p-3 rounded bg-white/10 border-2 focus:border-dotted border-gray-500 placeholder-gray-300 text-white focus:outline-none"
              />
              {errors.nom && (
                <p className="text-red-400 text-sm">{errors.nom.message}</p>
              )}

              <input
                type="email"
                placeholder="Votre email"
                {...register("email", { required: "Email requis" })}
                className="w-full p-3 rounded bg-white/10 border-2 focus:border-dotted border-gray-500 placeholder-gray-300 text-white focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-400 text-sm">{errors.email.message}</p>
              )}

              <textarea
                rows="4"
                placeholder="Votre message"
                {...register("message", { required: "Message requis" })}
                className="w-full p-3 rounded bg-white/10 border-2 focus:border-dotted border-gray-500 placeholder-gray-300 text-white focus:outline-none"
              ></textarea>
              {errors.message && (
                <p className="text-red-400 text-sm">{errors.message.message}</p>
              )}

              <button
                type="submit"
                className="text-white py-2 px-6 rounded border-4 hover:border-dotted border-yellow-400 font-semibold bg-[#1f2257] transition-all duration-300 animate__animated animate__pulse animate__delay-2s animate__infinite"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ */}

      <FAQCarousel />
     

      {/* Bouton WhatsApp */}
      <div className="fixed right-5 top-1/2 transform z-50 -translate-y-1/2 flex flex-col gap-4 mr-10 whatsat-anime">
        <a
          href="https://api.whatsapp.com/send?phone=224623952011&text=Bonjour%20Monsieur,%20j'aimerais%20avoir%20une%20discussion%20avec%20vous!."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-all duration-300"
        >
          <BsWhatsapp title="Cliquez pour me contacter!" className="text-5xl" />
        </a>
      </div>
    </>
  );
};
export default Contact;
