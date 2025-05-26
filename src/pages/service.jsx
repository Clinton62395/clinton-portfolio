import React from "react";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaShieldAlt,
  FaBitcoin,
  FaMobileAlt,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { BackgroundParticles } from "../components/Animation";
import { PiPhoneCall } from "react-icons/pi";

function Services() {
  const services = [
    {
      icon: (
        <FaLaptopCode className="bi-text-blue-500 bi-text-5xl mb-4 mx-auto" />
      ),
      title: "Développement Web",
      description:
        "Création de sites web modernes, réactifs et adaptés à tous les supports.",
    },
    {
      icon: <FaPaintBrush className="text-pink-500 bi-text-5xl mb-4 mx-auto" />,
      title: "Infographie",
      description:
        "Conception de visuels professionnels pour vos réseaux, affiches, flyers...",
    },
    {
      icon: (
        <FaShieldAlt className="bi-text-green-500 bi-text-5xl mb-4 mx-auto" />
      ),
      title: "Cybersécurité (niveau débutant)",
      description:
        "Sensibilisation à la sécurité numérique et installation de bonnes pratiques.",
    },
    {
      icon: (
        <FaBitcoin className="bi-text-yellow-500 bi-text-5xl mb-4 mx-auto" />
      ),
      title: "Crypto Trading",
      description:
        "Accompagnement à l'initiation et à la gestion des investissements crypto.",
    },
    {
      icon: (
        <FaMobileAlt className="bi-text-red-500 bi-text-5xl mb-4 mx-auto" />
      ),
      title: "Accessoires Téléphoniques",
      description:
        "Vente de coques, écouteurs, chargeurs et gadgets pour smartphone.",
    },
    {
      icon: (
        <FaChalkboardTeacher className="bi-text-purple-500 bi-text-5xl mb-4 mx-auto" />
      ),
      title: "Formation & Coaching",
      description:
        "Initiation à l’informatique, accompagnement pour lancer une activité numérique.",
    },
  ];

  return (
    <>
      <BackgroundParticles />

      <section className="bi-relative bi-bg-[#111827] bi-text-white bi-py-20 bi-px-4 bi-min-h-screen">
        <div className="bi-text-center bi-mb-12"
          data-aos="fade-up"
          data-aos-duration="1000">
          <h2
            className="bi-text-3xl md:bi-text-4xl bi-font-bold bi-text-yellow-400"
            data-aos="fade-right"
          >
            Mes Services
          </h2>
          <p className="bi-text-gray-400 bi-mt-2 bi-text-xl">
            Voici ce que je propose pour accompagner vos projets avec
            professionnalisme et passion.
          </p>
        </div>

        <div className="bi-grid bi-gap-8 md:bi-grid-cols-3 bi-container bi-mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bi-bg-gray-800 bi-rounded-xl bi-p-6 bi-shadow-lg hover:bi-shadow-yellow-400/40 bi-transition-transform bi-duration-300 bi-text-center hover:bi-scale-105"
            >
              {service.icon}
              <h4 className="bi-text-xl bi-font-semibold bi-text-yellow-400 bi-mb-2"
              
              >
                {service.title}
              </h4>
              <p className="bi-text-lg bi-text-gray-300 bi-leading-relaxed bi-z-10"
                >
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bi-text-center bi-mt-10">
          <a
            href="/contact"
            className="bi-bg-yellow-400 bi-text-black bi-font-semibold bi-px-6 bi-py-2 bi-rounded-lg  hover:bi-bg-yellow-300 bi-transition "
          >
          <PiPhoneCall className="bi-text-xl"/>
            Me contacter 
          </a>
        </div>
      </section>
    </>
  );
}

export default Services;
