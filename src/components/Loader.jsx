import React from "react";
import { motion } from "framer-motion";
import { Spinner } from "react-bootstrap";
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
          <h1 className="bi-text-6xl text-warning loader-text">
            Bienvenue sur Mon portfolio
          </h1>
          <h2 className=" text-warning fs-1 fw-bold bi-text-center mt-5 mb-5">
            Chargement en cours...{" "}
          </h2>

         <span className="bi-text-center bi-flex bi-items-center"> <Spinner
            animation="grow"
            variant="warning"
            className="  bi-text-center bi-mx-auto"
          /> </span>
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
