import {
  AlertCircle,
  Award,
  CheckCircle2,
  CloudDownload,
  EyeOff,
  FolderPen,
  GitBranchPlus,
  Link,
  PaintBucket,
  Pencil,
  Plus,
  Podcast,
  ShoppingBag,
  ShoppingCart,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  input,
} from "@material-tailwind/react";
import { motion, AnimatePresence } from "framer-motion";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BackgroundParticles from "../components/Animation";

// Schema de validation Yup
const productSchema = yup.object({
  name: yup
    .string()
    .required("Le nom du produit est requis")
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom ne peut pas dépasser 50 caractères"),
  description: yup
    .string()
    .required("La description est requise")
    .min(10, "La description doit contenir au moins 10 caractères")
    .max(500, "La description ne peut pas dépasser 500 caractères"),
  price: yup
    .number()
    .typeError("Le prix doit être un nombre")
    .required("Le prix est requis")
    .positive("Le prix doit être positif")
    .min(0.01, "Le prix doit être supérieur à 0"),
  image: yup
    .mixed()
    .required("Une image est requise")
    .test("fileType", "Format d'image non supporté", (value) => {
      if (!value) return false;
      if (typeof value === "string") return true; // Pour les images existantes en édition
      return (
        value &&
        ["image/jpeg", "image/png", "image/webp", "image/jpg"].includes(
          value.type
        )
      );
    })
    .test("fileSize", "L'image est trop lourde (max 5MB)", (value) => {
      if (!value) return false;
      if (typeof value === "string") return true; // Pour les images existantes en édition
      return value && value.size <= 5 * 1024 * 1024;
    }),
});

export default function Store() {
  const [showForm, setShowForm] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [arrayProducts, setarrayProducts] = useState([]);
  const [inputEditing, setInputEditing] = useState(null);
  const [showImage, setShowimage] = useState(null);
  const [open, setOpen] = useState(false);

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
    trigger,
  } = useForm({
    resolver: yupResolver(productSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      image: null,
    },
  });

  const watchImage = watch("image");

  // Gestion du changement d'image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue("image", file);
      const url = URL.createObjectURL(file);
      setImagePreviewUrl(url);
    }
  };

  // Soumission du formulaire
  const onSubmit = (data) => {
    const productData = {
      ...data,
      image: imagePreviewUrl || data.image,
      id: inputEditing || Date.now(),
    };

    if (inputEditing) {
      // Mode édition
      setarrayProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === inputEditing ? productData : product
        )
      );
      setInputEditing(null);
    } else {
      // Mode ajout
      setarrayProducts([...arrayProducts, productData]);
    }

    resetForm();
    setShowForm(false);
  };

  // Réinitialisation du formulaire
  const resetForm = () => {
    reset();
    setImagePreviewUrl(null);
    setInputEditing(null);
    setShowForm(false);
  };

  // Suppression d'un produit
  const deleteProduct = (productId) => {
    setarrayProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  // Édition d'un produit
  const editForm = (productId) => {
    const productToEdit = arrayProducts.find((item) => item.id === productId);
    if (productToEdit) {
      setValue("name", productToEdit.name);
      setValue("description", productToEdit.description);
      setValue("price", productToEdit.price);
      setValue("image", productToEdit.image);
      setImagePreviewUrl(productToEdit.image);
      setInputEditing(productId);
      setShowForm(true);
    }
  };

  // Ouverture de l'image
  const openImage = (imageFound) => {
    const findImage = arrayProducts.find((img) => img.id === imageFound);
    if (findImage) {
      setShowimage(findImage);
      setOpen(false);
    }
  };

  // Animation variants
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const drawerVariants = {
    closed: { x: "-100%", opacity: 0 },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <>
      <BackgroundParticles />
      <div className="relative">
        {/* Bouton principal */}
        {!showForm && (
          <motion.div
            className="flex flex-col justify-center items-center pt-20 h-screen"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.button
              className="sm:z-[1000] p-3 rounded-lg bg-cyan-900 text-white flex items-center gap-2 hover:bg-cyan-800 transition-colors duration-300"
              onClick={() => setShowForm(true)}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingBag className="w-5 h-5" />
              Add New Product
            </motion.button>

            <motion.div
              className="text-center py-12 sm:col-span-2 md:col-span-3 lg:col-span-4"
              variants={itemVariants}
            >
              <CheckCircle2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />

              {arrayProducts.length === 0 ? (
                <div>
                  <h3 className="text-lg font-medium text-gray-300 mb-2">
                    No Products yet
                  </h3>
                  <p className="text-gray-500">Add your first Products</p>
                </div>
              ) : (
                <div>
                  <motion.div
                    className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold mx-auto"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    {arrayProducts.length}
                  </motion.div>
                  <p className="text-gray-500 flex items-center justify-center mt-2">
                    <GitBranchPlus className="mr-2 w-4 h-4" />
                    You can still add more!
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}

        {/* Formulaire */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              className="w-full flex justify-center items-center text-cyan-800 mt-24 mb-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
            >
              <motion.div
                className="flex shadow-xl bg-teal-700/50 shadow-cyan-500/50 rounded-xl mt-4 w-full max-w-lg p-10 space-y-2 flex-col mb-5"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h1
                  className="text-4xl text-white/50 mx-auto text-center flex mb-5 items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <PaintBucket className="text-4xl" />
                  {inputEditing ? "Edit Product" : "Add New Product"}
                </motion.h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Nom du produit */}
                  <div className="grid gap-2">
                    <label
                      htmlFor="name"
                      className="text-white flex items-center gap-2"
                    >
                      <FolderPen className="w-4 h-4" />
                      Product Name
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="Product name"
                      className={`bg-white border rounded-lg w-full px-4 py-3 ${
                        errors.name ? "border-red-500" : "border-cyan-600"
                      }`}
                    />
                    {errors.name && (
                      <motion.p
                        className="text-red-600 text-sm flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <AlertCircle size={16} />
                        {errors.name.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Description */}
                  <div className="grid gap-2">
                    <label
                      htmlFor="description"
                      className="text-white flex items-center gap-2"
                    >
                      <Podcast className="w-4 h-4" />
                      Product Description
                    </label>
                    <textarea
                      {...register("description")}
                      placeholder="Product description"
                      rows={4}
                      className={`bg-white border rounded-lg w-full px-4 py-3 resize-none ${
                        errors.description
                          ? "border-red-500"
                          : "border-cyan-600"
                      }`}
                    />
                    {errors.description && (
                      <motion.p
                        className="text-red-600 text-sm flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <AlertCircle size={16} />
                        {errors.description.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Prix */}
                  <div className="grid gap-2">
                    <label
                      htmlFor="price"
                      className="text-white flex items-center gap-2"
                    >
                      <Award className="w-4 h-4" />
                      Product Price
                    </label>
                    <input
                      {...register("price")}
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                      className={`bg-white border rounded-lg w-full px-4 py-3 ${
                        errors.price ? "border-red-500" : "border-cyan-600"
                      }`}
                    />
                    {errors.price && (
                      <motion.p
                        className="text-red-600 text-sm flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <AlertCircle size={16} />
                        {errors.price.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Image */}
                  <div className="grid gap-2 mb-3">
                    <motion.img
                      src={imagePreviewUrl || "/avatar.jpg"}
                      alt="Preview"
                      className={`mx-auto rounded-lg ${
                        imagePreviewUrl ? "w-48 h-48 object-cover" : "w-24 h-24"
                      }`}
                      whileHover={{ scale: 1.05 }}
                    />
                    <label
                      htmlFor="product-image"
                      className="flex justify-center items-center gap-2 text-sm cursor-pointer border text-white py-3 border-cyan-600 rounded-lg hover:bg-cyan-600 transition-colors duration-300"
                    >
                      <Upload size={16} />
                      Upload product image
                      <input
                        type="file"
                        id="product-image"
                        accept="image/*"
                        hidden
                        onChange={handleImageChange}
                      />
                    </label>
                    {errors.image && (
                      <motion.p
                        className="text-red-600 text-sm flex items-center gap-2 justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <AlertCircle size={16} />
                        {errors.image.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Boutons */}
                  <div className="flex gap-3">
                    <motion.button
                      type="submit"
                      className="bg-cyan-600 flex justify-center items-center gap-2 py-3 rounded cursor-pointer text-white text-lg flex-1 hover:bg-cyan-700 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Plus />
                      {inputEditing ? "Update Product" : "Add Product"}
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={resetForm}
                      className="bg-gray-600 flex justify-center items-center gap-2 py-3 rounded cursor-pointer text-white text-lg px-4 hover:bg-gray-700 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <X size={20} />
                      Cancel
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Drawer des produits */}
        <div className="fixed top-14 left-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              onClick={() => setOpen(true)}
              className="my-4 bg-cyan-900 text-white ml-4 font-bold px-6 py-3 flex items-center gap-2 rounded-lg hover:bg-cyan-800 transition-colors duration-300"
            >
              <ShoppingCart className="w-5 h-5" />
              See all products ({arrayProducts.length})
            </Button>
          </motion.div>

          <AnimatePresence>
            {open && (
              <>
                {/* Overlay */}
                <motion.div
                  className="fixed inset-0 bg-black bg-opacity-50 z-40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setOpen(false)}
                />

                {/* Drawer */}
                <motion.div
                  className="fixed top-0 left-0 h-full w-80 bg-cyan-900 shadow-xl z-50 overflow-y-auto"
                  variants={drawerVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-6">
                      <Typography variant="h5" className="text-white">
                        Products{" "}
                        <span className="bg-red-500 rounded-full px-2 py-1 text-sm">
                          {arrayProducts.length}
                        </span>
                      </Typography>
                      <IconButton
                        variant="text"
                        className="text-white hover:bg-cyan-800"
                        onClick={() => setOpen(false)}
                      >
                        <X className="w-5 h-5" />
                      </IconButton>
                    </div>

                    {arrayProducts.length === 0 ? (
                      <motion.p
                        className="text-sm text-white/50 text-center py-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        No products added yet.
                      </motion.p>
                    ) : (
                      <motion.div
                        className="space-y-4 max-h-[70vh] overflow-y-auto"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {arrayProducts.map((product, index) => (
                          <motion.div
                            key={product.id}
                            variants={itemVariants}
                            className="flex items-center gap-4 p-3 bg-gray-100 rounded-lg w-full hover:bg-gray-200 transition-colors duration-300"
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div className="flex-1 min-w-0">
                              <Typography
                                variant="h6"
                                className="text-base truncate"
                              >
                                {product.name}
                              </Typography>
                              <p className="text-sm text-gray-600 truncate">
                                {product.description}
                              </p>
                              <p className="text-sm text-green-700 font-semibold">
                                ${parseFloat(product.price).toFixed(2)}
                              </p>
                              <div className="flex gap-2 mt-2">
                                <motion.button
                                  onClick={() => deleteProduct(product.id)}
                                  className="group w-7 h-7 rounded-full bg-red-500 p-1 flex justify-center items-center hover:bg-red-600 transition-all duration-300"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  title="Delete product"
                                >
                                  <Trash2 size={14} className="text-white" />
                                </motion.button>

                                <motion.button
                                  onClick={() => editForm(product.id)}
                                  className="group w-7 h-7 rounded-full bg-yellow-600 p-1 flex justify-center items-center hover:bg-yellow-700 transition-all duration-300"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  title="Edit product"
                                >
                                  <Pencil size={14} className="text-white" />
                                </motion.button>

                                <motion.button
                                  onClick={() => openImage(product.id)}
                                  className="group w-7 h-7 rounded-full bg-blue-600 p-1 flex justify-center items-center hover:bg-blue-700 transition-all duration-300"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  title="View image"
                                >
                                  <EyeOff size={14} className="text-white" />
                                </motion.button>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Modal d'aperçu d'image */}
        <AnimatePresence>
          {showImage && (
            <motion.div
              className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative m-4 w-11/12 max-w-2xl rounded-lg bg-white shadow-xl"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <button
                  onClick={() => setShowimage(null)}
                  className="absolute -top-4 -right-4 flex justify-center items-center rounded-full h-10 w-10 bg-red-500 hover:bg-red-600 transition-all duration-300 shadow-lg"
                >
                  <X size={24} className="text-white" />
                </button>

                <div className="p-6">
                  <div className="mb-4">
                    <h5 className="text-2xl font-bold text-slate-800">
                      {showImage.name}
                    </h5>
                    <p className="text-slate-600 text-lg font-semibold">
                      Price: ${parseFloat(showImage.price).toFixed(2)}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <motion.img
                      src={showImage.image}
                      alt={showImage.name}
                      className="w-full h-80 object-cover rounded-md shadow-md"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div>
                      <p className="text-sm uppercase text-slate-500 mb-2 font-semibold">
                        Description
                      </p>
                      <p className="text-slate-700 leading-relaxed">
                        {showImage.description}
                      </p>
                    </div>

                    <div className="flex justify-center">
                      <motion.a
                        href={showImage.image}
                        download={`${showImage.name}.jpg`}
                        className="flex items-center gap-2 text-green-600 rounded-md bg-black px-6 py-3 hover:bg-gray-900 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <CloudDownload size={20} />
                        Download Image
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
