import { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const particlesInit = async (engine) => {
  await loadFull(engine);
};

/**
 * Configuration Constellation - Style minimaliste et élégant
 * Parfait pour portfolios professionnels
 */
function ConstellationParticles() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div
        style={{
          position: "fixed",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      />
    );
  }

  return (
    <Particles
      id="tsparticles-constellation"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: "#0f172a",
          image: "radial-gradient(circle, #1e293b 0%, #0f172a 100%)",
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              area: 1000,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
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
            random: {
              enable: true,
              minimumValue: 1,
            },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.5,
              sync: false,
            },
          },
          links: {
            enable: true,
            distance: 200,
            color: "#60a5fa",
            opacity: 0.3,
            width: 1,
            shadow: {
              enable: true,
              color: "#60a5fa",
              blur: 5,
            },
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "bounce",
            },
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 250,
              links: {
                opacity: 0.6,
                color: "#60a5fa",
              },
            },
            push: {
              quantity: 2,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default ConstellationParticles;
