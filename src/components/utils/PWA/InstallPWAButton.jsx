import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaTimes } from 'react-icons/fa';
import { promptInstall, isAppInstalled } from '../utils/pwa';

export default function InstallPWAButton() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Vérifie si l'app est déjà installée
    setIsInstalled(isAppInstalled());

    // Écoute l'événement beforeinstallprompt
    const handleBeforeInstall = (e) => {
      e.preventDefault();
      setShowPrompt(true);
    };

    // Écoute l'installation
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowPrompt(false);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstall = async () => {
    const accepted = await promptInstall();
    if (accepted) {
      setShowPrompt(false);
    }
  };

  // N'affiche rien si l'app est déjà installée
  if (isInstalled) {
    return null;
  }

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: 'spring', damping: 20 }}
          className="fixed bottom-6 right-6 z-50 max-w-sm"
        >
          <div className="relative backdrop-blur-xl bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95 rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
            {/* Ligne de gradient en haut */}
            <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

            <div className="p-6">
              {/* Bouton fermer */}
              <button
                onClick={() => setShowPrompt(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white transition-colors"
                aria-label="Fermer"
              >
                <FaTimes />
              </button>

              {/* Contenu */}
              <div className="pr-8">
                <h3 className="text-lg font-bold text-white mb-2">
                  Installer l'application
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Installez ce portfolio sur votre appareil pour un accès rapide et une expérience optimale, même hors ligne.
                </p>

                {/* Avantages */}
                <ul className="space-y-2 mb-4 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    Accès rapide depuis votre écran d'accueil
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    Fonctionne hors ligne
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
                    Chargement ultra-rapide
                  </li>
                </ul>

                {/* Boutons */}
                <div className="flex gap-3">
                  <motion.button
                    onClick={handleInstall}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
                  >
                    <FaDownload />
                    <span>Installer</span>
                  </motion.button>

                  <motion.button
                    onClick={() => setShowPrompt(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-3 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 font-medium rounded-lg transition-colors"
                  >
                    Plus tard
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
