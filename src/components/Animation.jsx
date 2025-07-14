import { useEffect, useState } from "react";
import { BiBrightness } from "react-icons/bi";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const particlesInit = async (engine) => {
  await loadFull(engine);
};

function BackgroundParticles() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576); // max-width: 576px
    };

    handleResize(); // check on mount
    window.addEventListener("resize", handleResize); // update on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    // 🌙 fond simple pour mobile
    return (
      <div
        style={{
          position: "fixed",
          backgroundImage: 'URL("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvLkuswwgtI7H_3SMeQtXsO7bmCAEnz4CJZA&s")',
          backgroundRepeat:"no-repeat",
          backgroundSize:'cover',
          backgroundPosition: "center",
          filter: "brightness(30%)",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
        }}
      ></div>
    );
  }

  // 🌌 animation complète pour les écrans larges
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: { color: "#0f172a" },
        fpsLimit: 60,
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: "#00d4ff" },
          shape: { type: "circle" },
          opacity: {
            value: 0.5,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: { value: 3, random: true },
          links: {
            enable: true,
            distance: 150,
            color: "#00d4ff",
            opacity: 0.4,
            width: 1,
          },
          move: { enable: true, speed: 1.5, direction: "none", outMode: "out" },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            grab: { distance: 200, links: { opacity: 0.6 } },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default BackgroundParticles;
