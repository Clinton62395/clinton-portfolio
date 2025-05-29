import React from "react";
import { motion } from "framer-motion";

import airbnb from "../assets/airbnb.png";
import asana from "../assets/asana.png";
import dropbox from "../assets/dropbox.png";
import khan_academy from "../assets/khan_academy.png";
import neipal from "../assets/neipal.png";
import netflix from "../assets/netflix.png";

// Double les images pour faire une boucle fluide
const logos = [
  { src: airbnb, title: "AIRBNB" },
  { src: asana, title: "ASANA" },
  { src: dropbox, title: "DROPBOX" },
  { src: khan_academy, title: "KHAN" },
  { src: neipal, title: "NEIPAL" },
  { src: netflix, title: "NETFLIX" },
];

const AutoScrollLogos = () => {
  return (
    <div className="bi-overflow-hidden bi-bg-black bi-py-8 bi-mt-20">
      <motion.div
        className="bi-flex bi-gap-10 bi-w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="bi-flex bi-flex-col bi-items-center bi-min-w-[150px]">
            <h4 className="bi-text-white bi-mb-2 bi-font-semibold bi-text-sm">{logo.title}</h4>
            <img src={logo.src} alt={logo.title} className="bi-h-32 bi-object-contain" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AutoScrollLogos;
