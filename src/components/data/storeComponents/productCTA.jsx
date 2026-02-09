import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

export default function ProductCTA({ store }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-6"
    >
      <h2 className="text-4xl sm:text-5xl font-bold">
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
          Gestion de Produits
        </span>
      </h2>

      <p className="text-gray-400 max-w-xl mx-auto">
        Ajoutez, modifiez et présentez vos produits avec une interface moderne,
        pensée pour le web et le mobile.
      </p>

      <motion.button
        onClick={() => store.setShowForm(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="
          inline-flex items-center gap-2 px-8 py-4 rounded-xl
          bg-gradient-to-r from-cyan-600 to-blue-600
          text-white font-semibold
          shadow-lg shadow-cyan-500/30
          hover:shadow-cyan-500/50
          transition-all
        "
      >
        <ShoppingBag />
        Ajouter un produit
      </motion.button>
    </motion.div>
  );
}
