import { motion } from "framer-motion";

export default function ProductDrawer({ store }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-bold text-white">Produits</h3>

      {store.products.length === 0 && (
        <p className="text-gray-400">Aucun produit ajouté pour le moment.</p>
      )}

      {store.products.map((product) => (
        <div
          key={product.id}
          className="flex gap-4 p-4 rounded-xl bg-gray-800/40 border border-gray-700 hover:border-gray-600 transition"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-20 h-20 rounded-lg object-cover"
          />

          <div className="flex-1">
            <h4 className="text-white font-semibold">{product.name}</h4>
            <p className="text-sm text-gray-400">{product.description}</p>
            <p className="text-sm text-purple-400 font-bold">
              {product.price} €
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => store.editProduct(product.id)}
              className="text-sm text-blue-400 hover:underline"
            >
              Modifier
            </button>
            <button
              onClick={() => store.deleteProduct(product.id)}
              className="text-sm text-red-400 hover:underline"
            >
              Supprimer
            </button>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
