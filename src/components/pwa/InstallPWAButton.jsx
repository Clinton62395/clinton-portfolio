import React, { useState, useEffect } from "react";
import { Download, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const InstallPWAButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      // Empêche Chrome d'afficher sa propre bannière moche
      e.preventDefault();
      console.log("✅ Événement beforeinstallprompt capturé !");
      setDeferredPrompt(e);
      setIsVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    // Vérifie si l'app est déjà installée
    window.addEventListener("appinstalled", () => {
      console.log("🚀 PWA installée avec succès");
      setIsVisible(false);
      setDeferredPrompt(null);
    });

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Affiche l'invite système
    deferredPrompt.prompt();

    // Attend la réponse de l'utilisateur
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`Résultat de l'installation : ${outcome}`);

    setDeferredPrompt(null);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-24 left-4 right-4 z-[100] md:left-auto md:right-8 md:w-80"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-[1px] rounded-2xl shadow-2xl">
            <div className="bg-gray-900 rounded-[15px] p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <Download className="text-blue-400" size={20} />
                </div>
                <div>
                  <p className="text-white text-sm font-bold">
                    Installer l'application
                  </p>
                  <p className="text-gray-400 text-xs">
                    Pour une meilleure expérience
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleInstallClick}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors"
                >
                  Installer
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InstallPWAButton;
