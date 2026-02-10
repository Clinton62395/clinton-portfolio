import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Code2, Mail, ShoppingBag } from "lucide-react";

export default function BottomTabs() {
  const location = useLocation();

  const tabs = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: User },
    { name: "Projects", path: "/projects", icon: Briefcase },
    { name: "Services", path: "/service", icon: Code2 },
    { name: "Store", path: "/store", icon: ShoppingBag },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed md:hidden bottom-0 left-0 right-0 z-50 px-4 pb-4">
      {/* Container Flottant style Bulle / Glassmorphism */}
      <div className="mx-auto max-w-md bg-gray-900/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50">
        <div className="flex justify-around items-center h-16 relative">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = isActive(tab.path);

            return (
              <Link
                key={tab.path}
                to={tab.path}
                className="relative flex flex-col items-center justify-center flex-1 h-full"
              >
                {/* L'ANIMATION DE LA BULLE (Le cercle bleu derrière) */}
                {active && (
                  <motion.div
                    layoutId="bubble"
                    className="absolute inset-0 z-0 flex items-center justify-center"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-xl shadow-lg shadow-blue-500/40" />
                  </motion.div>
                )}

                {/* Icône et Texte */}
                <div
                  className={`relative z-10 flex flex-col items-center transition-colors duration-300 ${
                    active ? "text-white" : "text-gray-500"
                  }`}
                >
                  <motion.div
                    animate={
                      active ? { scale: 1.2, y: -2 } : { scale: 1, y: 0 }
                    }
                  >
                    <Icon size={20} strokeWidth={active ? 2.5 : 2} />
                  </motion.div>

                  {/* Petit point sous l'icône si active */}
                  {active && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -bottom-4 w-1 h-1 bg-yellow-400 rounded-full"
                    />
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
