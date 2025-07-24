import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaYoutube,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Clinton62395",
      icon: FaGithub,
      color: "hover:bi-text-gray-300",
      ariaLabel: "Visitez mon profil GitHub",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/billy-doumbouya-17b330212?",
      icon: FaLinkedin,
      color: "hover:bi-text-blue-400",
      ariaLabel: "Connectez-vous avec moi sur LinkedIn",
    },
    {
      name: "Email",
      href: "mailto:billydoumbouya5210@gmail.com",
      icon: FaEnvelope,
      color: "hover:bi-text-red-400",
      ariaLabel: "Envoyez-moi un email",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/18ikXA3tPU/",
      icon: FaFacebook,
      color: "hover:bi-text-blue-500",
      ariaLabel: "Suivez-moi sur Facebook",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/ton_instagram",
      icon: FaInstagram,
      color: "hover:bi-text-pink-400",
      ariaLabel: "Suivez-moi sur Instagram",
    },
    {
      name: "Telegram",
      href: "https://t.me/BillyDoumbouya",
      icon: FaTelegram,
      color: "hover:bi-text-sky-400",
      ariaLabel: "Contactez-moi sur Telegram",
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@bill-clinton-développeur",
      icon: FaYoutube,
      color: "hover:bi-text-red-500",
      ariaLabel: "Visitez ma chaîne YouTube",
    },
  ];

  return (
    <footer className="bi-bg-gradient-to-r bi-from-gray-900 bi-via-gray-800 bi-to-gray-900 bi-text-white bi-mt-16 bi-border-t bi-border-gray-700 bi-relative">
      <div className="bi-max-w-6xl bi-mx-auto bi-px-4 bi-py-8">
        {/* Section principale */}
        <div className="bi-grid bi-grid-cols-1 md:bi-grid-cols-3 bi-gap-8 bi-mb-8">
          {/* Colonne 1: Info personnelle */}
          <div className="bi-text-center md:bi-text-left">
            <h3 className="bi-text-xl bi-font-bold bi-mb-3 bi-bg-gradient-to-r bi-from-blue-400 bi-to-purple-500 bi-bg-clip-text bi-text-transparent">
              Billy Doumbouya
            </h3>
            <p className="bi-text-gray-400 bi-text-sm bi-leading-relaxed">
              Développeur passionné créant des solutions web modernes et
              innovantes.
            </p>
          </div>

          {/* Colonne 2: Liens rapides */}
          <div className="bi-text-center">
            <h4 className="bi-text-lg bi-font-semibold bi-mb-3 bi-text-gray-200">
              Liens Rapides
            </h4>
            <div className="bi-flex bi-flex-col bi-space-y-2">
              <a
                href="#about"
                className="bi-text-gray-400 hover:bi-text-white bi-transition-colors bi-duration-300 bi-text-sm"
              >
                À Propos
              </a>
              <a
                href="#projects"
                className="bi-text-gray-400 hover:bi-text-white bi-transition-colors bi-duration-300 bi-text-sm"
              >
                Projets
              </a>
              <a
                href="#contact"
                className="bi-text-gray-400 hover:bi-text-white bi-transition-colors bi-duration-300 bi-text-sm"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Colonne 3: Contact */}
          <div className="bi-text-center md:bi-text-right">
            <h4 className="bi-text-lg bi-font-semibold bi-mb-3 bi-text-gray-200">
              Contact
            </h4>
            <a
              href="mailto:billydoumbouya5210@gmail.com"
              className="bi-text-gray-400 hover:bi-text-white bi-transition-colors bi-duration-300 bi-text-sm bi-block bi-mb-2"
            >
              billydoumbouya5210@gmail.com
            </a>
            <p className="bi-text-gray-400 bi-text-sm">
              Disponible pour freelance
            </p>
          </div>
        </div>

        {/* Séparateur */}
        <div className="bi-border-t bi-border-gray-700 bi-pt-6">
          {/* Réseaux sociaux */}
          <div className="bi-flex bi-flex-wrap bi-justify-center bi-gap-4 bi-mb-6">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target={
                    social.href.startsWith("mailto:") ? "_self" : "_blank"
                  }
                  rel={
                    social.href.startsWith("mailto:")
                      ? ""
                      : "noopener noreferrer"
                  }
                  className={`
                    bi-p-3 bi-rounded-full bi-bg-gray-800 bi-text-gray-400 bi-transition-all bi-duration-300 
                    bi-transform hover:bi-scale-110 hover:bi-bg-gray-700 ${social.color}
                    focus:bi-outline-none focus:bi-ring-2 focus:bi-ring-blue-500 focus:bi-ring-offset-2 focus:bi-ring-offset-gray-800
                  `}
                  aria-label={social.ariaLabel}
                  title={social.name}
                >
                  <IconComponent className="bi-w-5 bi-h-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright et mentions */}
          <div className="bi-flex bi-flex-col md:bi-flex-row bi-justify-between bi-items-center bi-text-sm bi-text-gray-400 bi-space-y-2 md:bi-space-y-0">
            <div className="bi-flex bi-items-center bi-space-x-1">
              <span>
                &copy; {currentYear} Billy Doumbouya. Tous droits réservés.
              </span>
            </div>

            <div className="bi-flex bi-items-center bi-space-x-1 bi-text-xs">
              <span>Fait avec</span>
              <FaHeart className="bi-w-3 bi-h-3 bi-text-red-500 bi-animate-pulse" />
              <span>et React</span>
            </div>
          </div>

          {/* Mentions légales */}
          <div className="bi-flex bi-flex-wrap bi-justify-center bi-gap-4 bi-mt-4 bi-text-xs bi-text-gray-500">
            <a
              href="#privacy"
              className="hover:bi-text-gray-300 bi-transition-colors bi-duration-300"
            >
              Politique de confidentialité
            </a>
            <span className="bi-hidden sm:bi-inline">•</span>
            <a
              href="#terms"
              className="hover:bi-text-gray-300 bi-transition-colors bi-duration-300"
            >
              Conditions d'utilisation
            </a>
            <span className="bi-hidden sm:bi-inline">•</span>
            <a
              href="#sitemap"
              className="hover:bi-text-gray-300 bi-transition-colors bi-duration-300"
            >
              Plan du site
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
