import { TypeAnimation } from "react-type-animation";

function TypingText() {
  return (
    <div className="relative">
      {/* Effet de glow derrière le texte */}
      <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-blue-500/20 via-teal-400/20 to-purple-500/20" />

      <TypeAnimation
        sequence={[
          "Billy Doumbouya 🤵", // Nom
          1500,
          "Développeur full-stack 💻 🎨", // Front-end
          2000,
          "Créateur d'expériences Web & Mobile 🌐📱", // Web & Mobile
          2000,
          "Toujours prêt pour de nouveaux défis 🚀", // Motivation
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="relative font-bold text-transparent bg-gradient-to-r from-blue-500 via-teal-400 to-purple-500 bg-clip-text
                   text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                   block text-center lg:text-left px-4 lg:px-0 py-2"
      />
    </div>
  );
}

export default TypingText;
