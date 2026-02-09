import { useState } from "react";

export function useStore({ reset, setValue }) {
  const [showForm, setShowForm] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

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
  const submitProduct = (data) => {
    const product = {
      ...data,
      image: imagePreviewUrl || data.image,
      id: editingId || Date.now(),
    };

    setProducts((prev) =>
      editingId
        ? prev.map((p) => (p.id === editingId ? product : p))
        : [...prev, product],
    );

    resetStore();
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
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  // =============================
  // Image preview modal
  // =============================
  const openImagePreview = (id) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      setPreviewImage(product);
      setDrawerOpen(false);
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
    previewImage,
    drawerOpen,
    editingId,

    // setters
    setShowForm,
    setDrawerOpen,
    setPreviewImage,

    // actions
    handleImageChange,
    submitProduct,
    editProduct,
    deleteProduct,
    openImagePreview,
    resetStore,
  };
}
