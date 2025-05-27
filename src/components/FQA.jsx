import React from "react";
import { Carousel } from "react-bootstrap";
import {
  FaLaptopCode,
  FaGlobe,
  FaTools,
  FaRegLightbulb,
  FaClock,
  FaEnvelope,
} from "react-icons/fa";
import { FcContacts } from "react-icons/fc";

const FAQCarousel = () => {
  return (
    <section
      id="faq"
      className="bi-relative bi-mt-[200px]  text-white py-5 bi-bg-gradient-to-r bi-from-[#0a142f] bi-to-[#222240]"
    >
      <Carousel
        indicators={true}
        controls={false}
        interval={8000}
        className="mt-10 pb-5 bi-relative bi-z-10"
      >
        <h1 className="bi-font-bold bi-text-center bi-text-5xl bi-bg-gradient-to-r bi-from-purple-500 bi-via-lime-500 bi-to-fuchsia-500 mb-5 bi-text-transparent bi-bg-clip-text">
          A vos services
        </h1>
        <Carousel.Item>
          <div className="text-center px-6">
            <FaLaptopCode className="text-4xl text-green-500 mb-3 mx-auto" />
            <h5 className="text-2xl font-bold mb-2">
              Quels services proposes-tu ?
            </h5>
            <p className="text-gray-600 dark:text-gray-300">
              Je propose la création de sites web modernes, du développement
              front-end avec React, ainsi que du design d'interfaces
              interactives.
            </p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="text-center px-6">
            <FaGlobe className="text-4xl text-blue-500 mb-3 mx-auto" />
            <h5 className="text-2xl font-bold mb-2">
              Travailles-tu à distance ?
            </h5>
            <p className="text-gray-600 dark:text-gray-300">
              Oui, je travaille à distance avec des clients dans plusieurs pays.
            </p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="text-center px-6">
            <FaTools className="text-4xl text-purple-500 mb-3 mx-auto" />
            <h5 className="text-2xl font-bold mb-2">
              Quels langages et outils maîtrises-tu ?
            </h5>
            <p className="text-gray-600 dark:text-gray-300">
              Je maîtrise HTML, CSS, JavaScript, React, Tailwind CSS, Git,
              Bootstrap et bien d’autres.
            </p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="text-center px-6">
            <FaRegLightbulb className="text-4xl text-yellow-500 mb-3 mx-auto" />
            <h5 className="text-2xl font-bold mb-2">
              Peux-tu créer un site vitrine personnalisé ?
            </h5>
            <p className="text-gray-600 dark:text-gray-300">
              Oui, je conçois des sites vitrines responsives adaptés à ton image
              ou activité.
            </p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="text-center px-6">
            <FaClock className="text-4xl text-pink-500 mb-3 mx-auto" />
            <h5 className="text-2xl font-bold mb-2">
              Combien de temps prend un projet moyen ?
            </h5>
            <p className="text-gray-600 dark:text-gray-300">
              En moyenne, un site simple peut être prêt en 1 à 2 semaines.
            </p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="text-center px-6">
            <FaEnvelope className="text-4xl text-red-500 mb-3 mx-auto" />
            <h5 className="text-2xl font-bold mb-2">
              Comment peut-on te contacter ?
            </h5>
            <p className="text-gray-600 dark:text-gray-300">
              Via le formulaire de contact, par email ou sur les réseaux sociaux
              (voir bas de page).
            </p>
          </div>
        </Carousel.Item>
      </Carousel>

      <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="500">
        <p>Vous avez d'autres questions ?</p>
        <a
          href="#contact"
          className=" border-warning border-2 d-flex bi-w-52 mx-auto mt-2 align-items-center justify-content-center  btn  bi-text-white bi-bg-transparent bi-rounded-full bi-px-6 bi-py-3 hover:bi-bg-teal-500 hover:bi-text-white bi-transition-all bi-duration-300"
        >
          <FcContacts /> Me contacter
        </a>
      </div>
    </section>
  );
};

export default FAQCarousel;
