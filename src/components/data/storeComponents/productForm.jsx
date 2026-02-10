import { motion, AnimatePresence } from "framer-motion";
import { FaImage, FaTimes } from "react-icons/fa";

export default function ProductForm({ store, register, handleSubmit, errors }) {
  return (
    <AnimatePresence>
      {store.showForm && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="backdrop-blur-xl bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90 rounded-2xl border border-white/10 overflow-hidden"
        >
          {/* Ligne de gradient en haut */}
          <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />

          <div className="p-6 sm:p-8">
            {/* Header avec bouton fermer */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">
                {store.editingId ? "Modifier le produit" : "Ajouter un produit"}
              </h3>

              <motion.button
                type="button"
                onClick={store.resetStore}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors"
                aria-label="Fermer le formulaire"
              >
                <FaTimes className="text-xl" />
              </motion.button>
            </div>

            <form
              onSubmit={handleSubmit(store.submitProduct)}
              className="space-y-6"
            >
              {/* Nom du produit */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nom du produit <span className="text-red-400">*</span>
                </label>
                <input
                  {...register("name")}
                  placeholder="Ex: iPhone 15 Pro"
                  className={`w-full px-4 py-3 rounded-lg bg-gray-800/50 border-2 ${
                    errors.name ? "border-red-500" : "border-gray-700"
                  } focus:border-purple-500 focus:outline-none text-white placeholder-gray-500 transition-all`}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <span>⚠️</span> {errors.name.message}
                  </p>
                )}
              </div>

              {/* Prix */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Prix (€) <span className="text-red-400">*</span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  {...register("price")}
                  placeholder="Ex: 999.99"
                  className={`w-full px-4 py-3 rounded-lg bg-gray-800/50 border-2 ${
                    errors.price ? "border-red-500" : "border-gray-700"
                  } focus:border-purple-500 focus:outline-none text-white placeholder-gray-500 transition-all`}
                />
                {errors.price && (
                  <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <span>⚠️</span> {errors.price.message}
                  </p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Description <span className="text-red-400">*</span>
                </label>
                <textarea
                  rows="4"
                  {...register("description")}
                  placeholder="Décrivez votre produit en détail..."
                  className={`w-full px-4 py-3 rounded-lg bg-gray-800/50 border-2 ${
                    errors.description ? "border-red-500" : "border-gray-700"
                  } focus:border-purple-500 focus:outline-none text-white placeholder-gray-500 transition-all resize-none`}
                />
                {errors.description && (
                  <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <span>⚠️</span> {errors.description.message}
                  </p>
                )}
              </div>

              {/* Image du produit */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Image du produit <span className="text-red-400">*</span>
                </label>

                {/* Preview de l'image */}
                <div className="relative w-full h-64 bg-gray-800/50 border-2 border-dashed border-gray-700 rounded-lg overflow-hidden mb-3">
                  {store.imagePreviewUrl ? (
                    <img
                      src={store.imagePreviewUrl}
                      alt="Aperçu du produit"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-gray-500">
                      <FaImage className="text-6xl mb-3 opacity-30" />
                      <p className="text-sm">Aucune image sélectionnée</p>
                      <p className="text-xs mt-1">
                        Dimensions minimales: 400x400px
                      </p>
                    </div>
                  )}
                </div>

                {/* Input file */}
                <label className="block cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={store.handleImageChange}
                    className="hidden"
                  />
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-lg text-center transition-all flex items-center justify-center gap-2"
                  >
                    <FaImage />
                    <span>
                      {store.imagePreviewUrl
                        ? "Changer l'image"
                        : "Choisir une image"}
                    </span>
                  </motion.div>
                </label>
              </div>

              {/* Bouton de soumission */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={store.isSubmitting}
                className={`w-full py-4 rounded-lg font-semibold text-white
                  bg-gradient-to-r from-purple-600 to-pink-600
                  hover:from-purple-500 hover:to-pink-500
                  shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 
                  transition-all duration-300
                  flex items-center justify-center gap-2
                  ${store.isSubmitting ? "opacity-50 cursor-not-allowed" : ""}
                `}
              >
                {store.isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Enregistrement...</span>
                  </>
                ) : (
                  <span>
                    {store.editingId
                      ? "Mettre à jour le produit"
                      : "Ajouter le produit"}
                  </span>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
