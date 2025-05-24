import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaDiscord,
  FaInstagram,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="bi-absolute bi-right-5 bi-left-5 bi-bg-[#1f2937] bi-text-white bi-text-center bi-py-6 bi-mt-10"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-once="true"
    >
      <p className="bi-text-sm">
        &copy; {new Date().getFullYear()} Bill Clinton. Tous droits réservés.
      </p>

      <div className="bi-flex bi-justify-center bi-items-center bi-mt-4 bi-space-x-6">
        <a
          href="https://github.com/ton_github"
          target="_blank"
          rel="noopener noreferrer"
          className="bi-text-xl bi-text-gray-300 hover:bi-text-white transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/billy-doumbouya-17b330212?"
          target="_blank"
          rel="noopener noreferrer"
          className="bi-text-xl bi-text-blue-700 hover:bi-text-white transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:billydoumbouya5210@gmail.com"
          className="bi-text-xl bi-text-red-400 hover:bi-text-white transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.facebook.com/share/18ikXA3tPU/"
          target="_blank"
          rel="noopener noreferrer"
          className="bi-text-xl bi-text-blue-600 hover:bi-text-white transition"
        >
          <FaFacebook />
        </a>

        <a
          href="https://instagram.com/ton_instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="bi-text-xl bi-text-pink-500 hover:bi-text-white transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://t.me/BillyDoumbouya"
          target="_blank"
          rel="noopener noreferrer"
          className="bi-text-xl bi-text-sky-400 hover:bi-text-white transition"
        >
          <FaTelegram />
        </a>
        <a
          href="https://youtube.com/@bill-clinton-développeur
"
          target="_blank"
          rel="noopener noreferrer"
          className="bi-text-xl bi-text-red-600 hover:bi-text-white transition"
        >
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
