import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import ProductForm from "../components/data/storeComponents/productForm";

import ProductDrawer from "../components/data/storeComponents/productDrawer";
import SuccessModal from "../components/data/storeComponents/successModal";
import { productSchema } from "../components/validators/storeValidator";
import { useStore } from "../components/hooks/useStore";
export default function Store() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      image: null,
    },
  });

  const store = useStore({ reset, setValue });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen px-4 py-24 flex justify-center items-start"
    >
      {/* Décor gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl w-full">
        {/* Titre */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text">
              Store Manager
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            Gérez vos produits, images et prix depuis une interface moderne
          </p>
        </motion.div>

        {/* Layout principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Colonne gauche - Bouton Add ou Formulaire */}
          <div>
            <AnimatePresence mode="wait">
              {!store.showForm ? (
                <motion.div
                  key="add-button"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="backdrop-blur-xl bg-gradient-to-br from-gray-900/70 via-gray-800/50 to-gray-900/70 rounded-2xl border border-white/10 overflow-hidden"
                >
                  {/* Ligne de gradient en haut */}
                  <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />

                  <div className="p-12 sm:p-16 text-center">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="inline-flex items-center justify-center w-24 h-24 mb-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full"
                    >
                      <FaPlus className="text-5xl text-purple-400" />
                    </motion.div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                      Ajouter un produit
                    </h2>

                    <p className="text-gray-400 mb-8 max-w-md mx-auto">
                      Créez un nouveau produit en remplissant le formulaire avec
                      les détails, le prix et une image
                    </p>

                    <motion.button
                      onClick={() => store.setShowForm(true)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-full shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-3 mx-auto"
                    >
                      <FaPlus className="text-xl" />
                      <span className="text-lg">Créer un produit</span>
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <ProductForm
                  key="form"
                  store={store}
                  register={register}
                  handleSubmit={handleSubmit}
                  errors={errors}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Colonne droite - Drawer produits */}
          <ProductDrawer store={store} />
        </div>
      </div>

      {/* Modal de succès */}
      <SuccessModal
        isOpen={store.showSuccessModal}
        message={
          store.editingId
            ? "Le produit a été mis à jour avec succès !"
            : "Le produit a été ajouté avec succès !"
        }
        onClose={() => store.setShowSuccessModal(false)}
      />
    </motion.section>
  );
}
