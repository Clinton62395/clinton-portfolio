import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function SuccessModal({ isOpen, message, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative max-w-md w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ligne de gradient en haut */}
            <div className="h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500" />

            <div className="p-8 text-center">
              {/* Icône de succès */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full border-2 border-green-500/30"
              >
                <FaCheckCircle className="text-5xl text-green-400" />
              </motion.div>

              {/* Message */}
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold text-white mb-3"
              >
                Succès !
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 text-lg"
              >
                {message || "Le produit a été enregistré avec succès."}
              </motion.p>

              {/* Barre de progression */}
              <motion.div
                className="mt-6 h-1 bg-gray-700 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "linear" }}
                />
              </motion.div>

              <p className="text-gray-500 text-xs mt-2">
                Fermeture automatique...
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
