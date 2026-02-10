import { useState } from "react";

export function useStore({ reset, setValue }) {
  const [showForm, setShowForm] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // =============================
  // Image upload
  // =============================
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setValue("image", file);
    setImagePreviewUrl(URL.createObjectURL(file));
  };

  // =============================
  // Submit form
  // =============================
  const submitProduct = async (data) => {
    setIsSubmitting(true);
    
    // Simuler un délai d'envoi
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const product = {
      ...data,
      image: imagePreviewUrl || "/placeholder-product.png",
      id: editingId || Date.now(),
    };

    setProducts((prev) =>
      editingId
        ? prev.map((p) => (p.id === editingId ? product : p))
        : [...prev, product]
    );

    setIsSubmitting(false);
    setShowSuccessModal(true);
    
    // Fermer le modal après 2 secondes et réinitialiser
    setTimeout(() => {
      setShowSuccessModal(false);
      resetStore();
    }, 2000);
  };

  // =============================
  // Edit product
  // =============================
  const editProduct = (id) => {
    const product = products.find((p) => p.id === id);
    if (!product) return;
    
    setValue("name", product.name);
    setValue("description", product.description);
    setValue("price", product.price);
    setValue("image", product.image);
    setImagePreviewUrl(product.image);
    setEditingId(id);
    setShowForm(true);
  };

  // =============================
  // Delete product
  // =============================
  const deleteProduct = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce produit ?")) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  // =============================
  // Reset
  // =============================
  const resetStore = () => {
    reset();
    setImagePreviewUrl(null);
    setEditingId(null);
    setShowForm(false);
  };

  return {
    // state
    showForm,
    products,
    imagePreviewUrl,
    editingId,
    showSuccessModal,
    isSubmitting,
    
    // setters
    setShowForm,
    setShowSuccessModal,
    
    // actions
    handleImageChange,
    submitProduct,
    editProduct,
    deleteProduct,
    resetStore,
  };
}