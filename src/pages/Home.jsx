import React, { useState, useEffect } from "react";
import TypingText from "../components/TypingEffect";
import { BackgroundParticles } from "../components/Animation";
import Loader from "../components/Loader";
import { BiDownload } from "react-icons/bi";

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

  return (
    <div className="bi-relative bi-h-screen bi-w-full d-flex align-items-center justify-content-center bi-mt-52 ">
      {/* Fond animé */}
      <BackgroundParticles />

      {/* Grille Bootstrap container */}
      <div className="container bi-relative bi-z-10 ">
        <div className="row align-items-center">
          {/* Texte + typing effect */}
          <div className="col-md-7 text-center text-md-start text-white px-4 mb-5">
            <h1 className="display-4 fw-bold text-warning mb-3 text-center">
              Bonjour !
            </h1>
            <span className="display-5 fw-bold text-warning mb-3 d-block"> Bienvenue sur mon portfolio</span>
            <p
              className="lead text-light mb-2 max-w-lg mx-auto mx-md-0"
              style={{ maxWidth: "600px", textAlign: "justify" }}
            >
              Je m'appelle <strong>Billy Doumbouya</strong>. Passionné par le
              développement web et les technologies modernes, je conçois des
              interfaces interactives, dynamiques et efficaces.
              </p> 
              
              <p className="lead text-light mb-2 max-w-lg mx-auto mx-md-0"
              style={{ maxWidth: "600px" , textAlign: "justify"}}
              >
              Parcourez mes projets, découvrez mes compétences et n'hésitez pas à me contacter
              pour une collaboration.
            </p>
            <span className="bi-absolute bi-ml-60 mb-5 "> <TypingText /></span>

          
          </div>

          {/* Photo à droite */}
          <div className="col-md-5 text-center">
            <img
              src="/image.png"
              alt="ma photo"
              className="img-fluid rounded"
              style={{ maxHeight: "400px" }}
            />
          </div>
        </div>

        {/* Section Télécharger le CV */}
        <section
          className="bi-w-full  text-white py-5 mt-5 bi-mb-24 text-center rounded shadow-lg shadow-blue bi-backdrop-blur p-5  bi-bg-gradient-to-r bi-from-teal-500/50 bi-via-dark bi-to-purple-500/50 bi-mx-auto"
          id="cv"
          data-aos="fade-up"
        >
          <h2 className="h2 fw-bold mb-3" data-aos="fade-down">
            Téléchargez mon CV
          </h2>
          <p className="lead mb-4" data-aos="fade-right" data-aos-delay="200">
            Cliquez sur le bouton ci-dessous pour télécharger mon CV.
          </p>
          <a
            href="/cv.pdf"
            download="Billy_Doumbouya_CV.pdf"
            className="btn btn-primary btn-lg d-flex align-items-center justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="400" style={{width: "250px", margin:'auto'}}
          >
            <BiDownload className=" bi-text-white bi-text-3xl"  />
            Télécharger le CV
          </a>
        </section>
      </div>
    </div>
  );
}

export default Home;
