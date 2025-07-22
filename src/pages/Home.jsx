import React, { useState, useEffect } from "react";
import TypingText from "../components/TypingEffect";
import  BackgroundParticles  from "../components/Animation";
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
    <>
      <div className="bi-overflow-x-hidden bi-mt-24">
        <BackgroundParticles />

        <div className="bi-relative bi-pt-5 bi-mt-5 bi-w-full bi-flex bi-mt-24 bi-mx-auto bi-bg-gradient-to-r  bi-from-gray-500/10 bi-via-gray-900/50 bi-to-blue-500/10 bi-backdrop-blur bi-py-10 bi-rounded-lg bi-shadow-lg bi-shadow-blue-500/50 bi-py-24  md:pt-24">
          <div className="bi-flex bi-flex-col-reverse lg:bi-flex-row bi-items-center bi-justify-center bi-gap-24 ">
            {/* Texte */}
            <div className="bi-text-lg md:bi-text-xl bi-w-full bi-text-center lg:bi-text-left bi-text-white bi-mx-auto bi-px-10">
              <h1 className="bi-text-5xl md:bi-text-6xl bi-font-bold bi-mb-5 bi-text-center bi-bg-gradient-to-r bi-from-yellow-500 bi-via-purple-500 bi-to-green-500 bi-text-transparent bi-bg-clip-text">
                Bonjour !
              </h1>
              <span className="bi-text-2xl md:bi-text-5xl bi-font-semibold md:bi-text-yellow-500 bi-block bi-mb-4 md:bi-text-center bi-max-w-xl mb-5">
                Bienvenue sur mon portfolio
              </span>
              <p className=" bi-text-center sm:bi-text-lg md:bi-text-xl bi-text-light bi-mb-4 bi-max-w-xl bi-mx-auto lg:bi-mx-5 bi-text-center bi-leading-relaxed">
                Je m'appelle <span> <strong >Billy Doumbouya</strong></span>. Passionné par le
                développement web et les technologies modernes, je conçois des
                interfaces interactives, dynamiques et efficaces.
              </p>
              <p className="sm:bi-text-lg  md:bi-text-xl bi-text-light bi-mb-4 bi-max-w-xl bi-mx-auto lg:bi-mx-5 bi-text-center bi-leading-relaxed">
                Parcourez mes projets, découvrez mes compétences et n'hésitez
                pas à me contacter pour une collaboration.
              </p>

              <div className="bi-absolute bi-mt-4  bi-left-0 bi-px-2 md:bi-mx-auto  md:bi-left-24 ">
                <TypingText />
              </div>
            </div>

            {/* Image */}
            <div className="bi-w-full sm:bi-w-72 md:bi-w-1/2 bi-mx-auto bi-h-auto]  ">
              <img
                src="/image.png"
                alt="ma photo"
                className="bi-w-full bi-rounded"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Section Télécharger le CV */}
      <section
        className="bi-relative bi-w-full sm:bi-mx-auto bi-text-white bi-py-10 bi-px-4 bi-text-center bi-rounded bi-shadow-lg bi-shadow-blue bi-backdrop-blur bi-bg-gradient-to-r bi-from-teal-500/50 bi-via-dark bi-to-purple-500/50 bi-pt-24 bi-mb-24 bi-mt-24"
        id="cv"
       
      >
        <h2 className="bi-text-2xl sm:bi-text-3xl bi-font-bold bi-mb-4">
          Téléchargez mon CV
        </h2>
        <p className="bi-text-base sm:bi-text-lg bi-mb-6">
          Cliquez sur le bouton ci-dessous pour télécharger mon CV.
        </p>
        <a
          href="/cv.pdf"
          download="Billy_Doumbouya_CV.pdf"
          className="bi-inline-flex bi-items-center bi-justify-center bi-bg-blue-600 border border-3 border-warning hover:bi-bg-gray-500/50 hover:bi-border-dotted bi-text-white bi-font-semibold bi-px-6 bi-py-3 bi-rounded-full bi-gap-2 bi-transition bi-duration-300 animate bi-transform hover:bi-scale-105 hover:bi-animate-pulse animate__animated animate__infinite animate__pulse"
          style={{ width: "250px", margin: "auto" }}
        >
          <BiDownload className="bi-text-xl" />
          Télécharger le CV
        </a>
      </section>
    </>
  );
}

export default Home;
