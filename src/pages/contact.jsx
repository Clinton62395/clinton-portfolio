import React from "react";
import { Carousel } from "react-bootstrap";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { BackgroundParticles } from "../components/Animation";
import { BsWhatsapp } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { FcContacts } from "react-icons/fc";

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

      {/* FAQ */}

      <section
        id="faq"
        className="bi-relative  text-white py-5 bi-bg-gradient-to-r bi-from-[#0a142f] bi-to-[#222240]"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <div className="container center mx-auto px-4 py-5">
          <h2 className="text-center mb-5 bi-text-3xl bi-font-bold bi-text-orange-400 bi-flex bi-items-center bi-justify-center gap-2">
            <BiHelpCircle className=" bi-text-3xl text-center" />
            Foire Aux Questions (FAQ)
          </h2>
          <Carousel indicators={false} interval={8000} className="mt-5">
            <Carousel.Item>
              <div className="text-center px-4">
                <h5 className=" text-center fs-3 fw-bold mb-4">
                  Quels services proposes-tu ?
                </h5>
                <p className="text-lg text-gray-300 mb-4">
                  Je propose la création de sites web modernes, du développement
                  front-end avec React, ainsi que du design d'interfaces
                  interactives.
                </p>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="text-center px-4 fs-3 fw-bold mb-4 ">
                <h5>Travailles-tu à distance ?</h5>
                <p className="bi-text-lg bi-text-gray-300 mb-4">
                  Oui, je travaille à distance avec des clients dans plusieurs
                  pays.
                </p>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="text-center px-4">
                <h5 className="bi-text-lg fs-3 fw-bold mb-4">
                  Quels langages et outils maîtrises-tu ?
                </h5>
                <p className="bi-text-lg bi-text-gray-300 mb-4">
                  Je maîtrise plusieurs technologies web modernes telles que
                  HTML, CSS, JavaScript, React, Tailwind CSS, Git, Bootstrap et
                  bien d’autres.
                </p>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="text-center px-4">
                <h5 className="bi-text-lg fs-3 fw-bold mb-4">
                  Peux-tu créer un site vitrine ou un portfolio personnalisé ?
                </h5>
                <p className="bi-text-lg bi-text-gray-300 mb-4">
                  Oui, je peux concevoir un site vitrine responsive, adapté à
                  ton identité ou ton activité.
                </p>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="text-center px-4">
                <h5 className="bi-text-lg fs-3 fw-bold mb-4">
                  Combien de temps prends un projet moyen ?
                </h5>
                <p className="bi-text-lg bi-text-gray-300 mb-4">
                  Cela dépend du projet, mais un site simple peut être prêt en 1
                  à 2 semaines.
                </p>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="text-center px-4">
                <h5 className="bi-text-lg fs-3 fw-bold mb-4">
                  Comment peut-on te contacter ?
                </h5>
                <p className="bi-text-lg bi-text-gray-300 mb-4">
                  Vous pouvez me contacter de plusieurs manières : Via le
                  formulaire de contact, par email ou sur les réseaux sociaux
                  (voir le bas de la page).
                </p>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Bouton de contact */}
        <div
          className="text-center mt-5"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <p>Vous avez d'autres questions ?</p>
          <a
            href="#contact"
            className=" border-warning border-2 d-flex bi-w-52 mx-auto mt-2 align-items-center justify-content-center  btn  bi-text-white bi-bg-transparent bi-rounded-full bi-px-6 bi-py-3 hover:bi-bg-teal-500 hover:bi-text-white bi-transition-all bi-duration-300"
          >
            <FcContacts /> Me contacter
          </a>
        </div>
      </section>

      {/* Bouton WhatsApp */}
      <div className="bi-fixed bi-right-5 bi-top-1/2 bi-transform  bi-z-50 bi-translate-y-[-50%] bi-flex bi-flex-col bi-gap-4 bi-mr-10 whatsat-anime">
        <a
          href="https://api.whatsapp.com/send?phone=224623952011&text=Bonjour%20Monsieur,%20j'aimerais%20avoir%20une%20discussion%20avec%20vous!."
          target="_blank"
          rel="noopener noreferrer"
          className="bi-bg-green-500 bi-text-white bi-p-3 bi-rounded-full hover:bi-bg-green-600 bi-transition-all bi-duration-300"
        >
          <BsWhatsapp className="bi-text-5xl" />
        </a>
      </div>
    </>
  );
};
export default Contact;
