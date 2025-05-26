import React from "react";
import { Carousel } from "react-bootstrap";
import { BiHelpCircle } from "react-icons/bi";

function FAQ() {
  return (
    <section id="faq" className="bi-h-screen bi-relative bg-dark text-white py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center mb-4">
          <BiHelpCircle className="me-2 text-primary" />
          Foire Aux Questions (FAQ)
        </h2>
        <Carousel indicators={false} interval={8000}>
          <Carousel.Item>
            <div className="text-center px-4">
              <h5>Quels services proposes-tu ?</h5>
              <p>
                Je propose la création de sites web modernes, du développement
                front-end avec React, ainsi que du design d'interfaces
                interactives.
              </p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="text-center px-4">
              <h5>Travailles-tu à distance ?</h5>
              <p>
                Oui, je travaille à distance avec des clients dans plusieurs
                pays.
              </p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="text-center px-4">
              <h5>Quels langages et outils maîtrises-tu ?</h5>
              <p>
                HTML, CSS, JavaScript, React, Tailwind CSS, Git, Bootstrap et
                bien d’autres.
              </p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="text-center px-4">
              <h5>
                Peux-tu créer un site vitrine ou un portfolio personnalisé ?
              </h5>
              <p>
                Oui, je peux concevoir un site vitrine responsive, adapté à ton
                identité ou ton activité.
              </p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="text-center px-4">
              <h5>Combien de temps prends un projet moyen ?</h5>
              <p>
                Cela dépend du projet, mais un site simple peut être prêt en 1 à
                2 semaines.
              </p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="text-center px-4">
              <h5>Comment peut-on te contacter ?</h5>
              <p>
                Via le formulaire de contact, par email ou sur les réseaux
                sociaux (voir le bas de la page).
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="500">
        <p>Vous avez d'autres questions ?</p>
        <a href="#contact" className="btn btn-outline-light btn-lg">
          Me contacter
        </a>
      </div>
    </section>
  );
}

export default FAQ;
