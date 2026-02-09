import { motion } from "framer-motion";

export default function ProductForm({ store, register, handleSubmit, errors }) {
  return (
    <motion.form
      onSubmit={handleSubmit(store.submitProduct)}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-bold text-white">
        {store.editingId ? "Modifier le produit" : "Ajouter un produit"}
      </h3>

      {/* nom */}
      <div>
        <label className="text-sm text-gray-300">Nom du produit</label>
        <input
          {...register("name")}
          className={`w-full mt-2 px-4 py-3 rounded-lg bg-gray-800/50 border-2 ${
            errors.name ? "border-red-500" : "border-gray-700"
          } text-white`}
        />
      </div>

      {/* prix */}
      <div>
        <label className="text-sm text-gray-300">Prix</label>
        <input
          type="number"
          {...register("price")}
          className={`w-full mt-2 px-4 py-3 rounded-lg bg-gray-800/50 border-2 ${
            errors.price ? "border-red-500" : "border-gray-700"
          } text-white`}
        />
      </div>

      {/* description */}
      <div>
        <label className="text-sm text-gray-300">Description</label>
        <textarea
          rows="4"
          {...register("description")}
          className={`w-full mt-2 px-4 py-3 rounded-lg bg-gray-800/50 border-2 ${
            errors.description ? "border-red-500" : "border-gray-700"
          } text-white resize-none`}
        />
      </div>

      {/* image upload */}
      <div>
        <label className="text-sm text-gray-300">Image du produit</label>
        <input
          type="file"
          accept="image/*"
          onChange={store.handleImageChange}
          className="mt-2 text-gray-300"
        />

        {store.imagePreviewUrl && (
          <img
            src={store.imagePreviewUrl}
            alt="preview"
            className="mt-4 h-32 w-full object-cover rounded-lg border border-gray-700"
          />
        )}
      </div>

      {/* bouton */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        type="submit"
        className="w-full py-4 rounded-lg font-semibold text-white
        bg-gradient-to-r from-purple-600 to-pink-600
        shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition"
      >
        {store.editingId ? "Mettre à jour" : "Ajouter le produit"}
      </motion.button>
    </motion.form>
  );
}
