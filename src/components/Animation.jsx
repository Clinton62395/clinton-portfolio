// Animation.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// Fonction réutilisable
const particlesInit = async (engine) => {
  await loadFull(engine);
};

// Premier type d'animation
export function BackgroundParticles() {
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

// Deuxième type d'animation
export function BackgroundParticleModern() {
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        background: { color: "#0d47a1" },
        particles: {
          number: { value: 60 },
          links: { enable: true, color: "#ffffff", distance: 150 },
          move: { enable: true, speed: 2 },
          size: { value: 2 },
          color: { value: "#ffffff" },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
          modes: { repulse: { distance: 100 } },
        },
      }}
    />
  );
}
