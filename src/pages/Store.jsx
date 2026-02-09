import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { productSchema } from "../components/validators/storeValidator";
import ProductDrawer from "../components/data/storeComponents/productDrawer";
import ProductForm from "../components/data/storeComponents/productForm";
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
      {/* décor gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl w-full">
        {/* titre */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text">
              Store Manager
            </span>
          </h1>
          <p className="text-gray-400 mt-3">
            Gérez vos produits, images et prix depuis une interface moderne
          </p>
        </motion.div>

        {/* carte principale */}
        <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 sm:p-10">
            {/* formulaire */}
            <ProductForm
              store={store}
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
            />

            {/* drawer produits */}
            <ProductDrawer store={store} />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
