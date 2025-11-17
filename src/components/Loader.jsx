import React from "react";
import { motion } from "framer-motion";
// Spinner from react-bootstrap removed; using Tailwind + Framer Motion instead
function Loader() {
  return (
    <>
      <div className="bi-fixed  bi-inset-0 bi-flex bi-items-center bi-justify-center bi-bg-black bi-z-[100]">
        <motion.div
          className="bi-text-white bi-text-2xl bi-font-bold"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <h2 className="bi-text-2xl md:bi-text-6xl bi-text-center loader-text">
            Bienvenue sur Mon portfolio
          </h2>
          <div className="bi-flex bi-justify-center bi-text-center">
            <h2 className="bi-text-muted bi-text-3xl bi-font-bold bi-text-center bi-mt-5 bi-mb-5">
              Chargement en cours...{" "}
            </h2>
          </div>
          <span className="bi-text-center bi-flex bi-items-center">
            {" "}
            <div className="bi-mx-auto">
              <div className="bi-w-6 bi-h-6 bi-rounded-full bi-bg-yellow-400 bi-animate-pulse" />
            </div>
          </span>
        </motion.div>
      </div>
    </>
  );
}
export default Loader;
// a utiliser plus tard
// export default function Spinner() {
//   return (
//     <div className="bi-fixed bi-inset-0 bi-flex bi-items-center bi-justify-center bi-bg-black bi-z-[100]">
//       <motion.div
//         className="bi-w-16 bi-h-16 bi-border-4 bi-border-t-transparent bi-border-white bi-rounded-full"
//         animate={{ rotate: 360 }}
//         transition={{
//           repeat: Infinity,
//           ease: "linear",
//           duration: 1,
//         }}
//       />
//     </div>
//   );
// }
