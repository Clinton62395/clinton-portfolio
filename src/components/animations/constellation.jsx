import { useEffect, useState, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const particlesInit = async (engine) => {
  await loadFull(engine);
};

function ConstellationParticles() {
  const [isMobile, setIsMobile] = useState(false);

  // Détecte la largeur de l'écran
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Configuration optimisée pour desktop et mobile
  const particlesOptions = useMemo(() => {
    const commonOptions = {
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: {
          value: 0.8,
          random: true,
          animation: {
            enable: true,
            speed: 0.5,
            minimumValue: 0.3,
            sync: false,
          },
        },
        size: {
          value: 2,
          random: { enable: true, minimumValue: 1 },
          animation: { enable: true, speed: 1, minimumValue: 0.5, sync: false },
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none",
          random: false,
          straight: false,
          outModes: { default: "bounce" },
        },
        links: {
          enable: true,
          distance: 200,
          color: "#60a5fa",
          opacity: 0.3,
          width: 1,
          shadow: { enable: false }, // shadow désactivé pour éviter flou
        },
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          grab: { distance: 250, links: { opacity: 0.6, color: "#60a5fa" } },
          push: { quantity: 2 },
        },
      },
    };

    if (isMobile) {
      // Mobile : optimisation pour fluidité
      return {
        ...commonOptions,
        particles: {
          ...commonOptions.particles,
          number: { value: 25, density: { enable: true, area: 800 } },
          links: {
            ...commonOptions.particles.links,
            distance: 120,
            opacity: 0.2,
          },
        },
      };
    }

    // Desktop : expérience complète
    return {
      ...commonOptions,
      particles: {
        ...commonOptions.particles,
        number: { value: 60, density: { enable: true, area: 1000 } },
      },
    };
  }, [isMobile]);

  return (
    <>
      {/* Fond radial via div pour éviter problème canvas */}
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background:
            "radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)",
        }}
      />
      <Particles
        id="tsparticles-constellation"
        init={particlesInit}
        options={particlesOptions}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -5,
        }}
      />
    </>
  );
}

export default ConstellationParticles;
