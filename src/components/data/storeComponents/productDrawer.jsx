import { motion } from "framer-motion";
import { FaEdit, FaTrash, FaShoppingCart } from "react-icons/fa";

export default function ProductDrawer({ store }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="backdrop-blur-xl bg-gradient-to-br from-gray-900/70 via-gray-800/50 to-gray-900/70 rounded-2xl border border-white/10 overflow-hidden"
    >
      {/* Ligne de gradient en haut */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <FaShoppingCart className="text-purple-400" />
            Produits
          </h3>
          {store.products.length > 0 && (
            <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-semibold">
              {store.products.length}
            </span>
          )}
        </div>

        {/* Liste des produits */}
        {store.products.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <FaShoppingCart className="text-6xl text-gray-600 mx-auto mb-4 opacity-30" />
            <p className="text-gray-400 text-lg">Aucun produit ajouté</p>
            <p className="text-gray-500 text-sm mt-2">
              Cliquez sur "Ajouter un produit" pour commencer
            </p>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar"
          >
            {store.products.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                className="group relative flex gap-4 p-4 rounded-xl bg-gray-800/40 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                {/* Image du produit */}
                <div className="relative flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover border-2 border-gray-700 group-hover:border-purple-500/50 transition-colors"
                  />
                  {/* Badge de prix sur l'image */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-600 px-2 py-1 rounded-full text-xs font-bold text-white shadow-lg">
                    {product.price} €
                  </div>
                </div>

                {/* Informations du produit */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-semibold text-lg mb-1 truncate group-hover:text-purple-400 transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-sm text-gray-400 line-clamp-2 mb-2">
                    {product.description}
                  </p>
                </div>

                {/* Boutons d'action */}
                <div className="flex flex-col gap-2 items-end justify-center">
                  <motion.button
                    onClick={() => store.editProduct(product.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 transition-all"
                    aria-label="Modifier"
                  >
                    <FaEdit className="text-sm" />
                  </motion.button>

                  <motion.button
                    onClick={() => store.deleteProduct(product.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 transition-all"
                    aria-label="Supprimer"
                  >
                    <FaTrash className="text-sm" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Style pour la scrollbar personnalisée */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.7);
        }
      `}</style>
    </motion.div>
  );
}
