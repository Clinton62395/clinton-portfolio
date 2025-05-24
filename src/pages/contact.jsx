import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { BackgroundParticles } from "../components/Animation";
import { BsWhatsapp } from "react-icons/bs";

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
        className="bi-relative bi-z-10 bi-min-h-screen bi-bg-[#0a192f] bi-text-white bi-flex bi-items-center bi-justify-center bi-p-10 bi-pt-24"
        id="contact"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div className="bi-bg-black-500/50 bi-backdrop-blur bi-rounded-xl bi-shadow-lg bi-shadow-yellow-500/50 bi-p-10 bi-w-full bi-max-w-5xl">
          <h2 className="bi-text-4xl bi-font-bold bi-text-orange-400 bi-text-center bi-mb-8">
            Contactez-moi
          </h2>

          <div className="bi-flex bi-flex-col md:bi-flex-row bi-justify-between bi-gap-10">
            {/* Infos de contact */}
            <div className="bi-flex bi-flex-col bi-space-y-4">
              <div className="bi-flex bi-items-center">
                <FaEnvelope className="bi-text-orange-400 bi-text-xl bi-mr-3" />
                <span>billy.doumbouya@example.com</span>
              </div>
              <div className="bi-flex bi-items-center">
                <FaPhoneAlt className="bi-text-orange-400 bi-text-xl bi-mr-3" />
                <span>+224 623 95 20 11</span>
              </div>
              <div className="bi-flex bi-items-center">
                <BsWhatsapp className="bi-text-orange-400 bi-text-xl bi-mr-3" />
                <span>+224 623 95 20 11</span>
              </div>
              <div className="bi-flex bi-items-center">
                <FaMapMarkerAlt className="bi-text-orange-400 bi-text-xl bi-mr-3" />
                <span>Kankan, Guinée</span>
              </div>
            </div>

            {/* Formulaire de contact */}
            <form
              className="bi-space-y-4 bi-w-full md:bi-w-1/2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                placeholder="Votre nom"
                {...register("nom", { required: "Nom requis" })}
                className="bi-w-full bi-p-3 bi-rounded bi-bg-white/10 bi-border bi-border-gray-500 bi-placeholder-gray-300 bi-text-white focus:bi-outline-none"
              />
              {errors.nom && (
                <p className="bi-text-red-400 bi-text-sm">
                  {errors.nom.message}
                </p>
              )}

              <input
                type="email"
                placeholder="Votre email"
                {...register("email", { required: "Email requis" })}
                className="bi-w-full bi-p-3 bi-rounded bi-bg-white/10 bi-border bi-border-gray-500 bi-placeholder-gray-300 bi-text-white focus:bi-outline-none"
              />
              {errors.email && (
                <p className="bi-text-red-400 bi-text-sm">
                  {errors.email.message}
                </p>
              )}

              <textarea
                rows="4"
                placeholder="Votre message"
                {...register("message", { required: "Message requis" })}
                className="bi-w-full bi-p-3 bi-rounded bi-bg-white/10 bi-border bi-border-gray-500 bi-placeholder-gray-300 bi-text-white focus:bi-outline-none"
              ></textarea>
              {errors.message && (
                <p className="bi-text-red-400 bi-text-sm">
                  {errors.message.message}
                </p>
              )}

              <button
                type="submit"
                className="bi-bg-orange-400 bi-text-black bi-py-2 bi-px-6 bi-rounded bi-font-semibold hover:bi-bg-orange-500 bi-transition-all bi-duration-300"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
