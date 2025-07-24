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
import { number } from "framer-motion";
import BackgroundParticles from "../components/Animation";
export default function Store() {
  const [productsInput, setproductsInput] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
  });
  const [showForm, setShowForm] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [arrayProducts, setarrayProducts] = useState([]);
  const [storeErrors, setstoreErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setproductsInput({ ...productsInput, [name]: value });

    // cleane error

    if (storeErrors[name]) {
      setstoreErrors({ ...storeErrors, [name]: "" });
    }
  };

  const handleImageChange = (e) => {
    const { files } = e.target;
    const [imagedata] = files;

    if (storeErrors["image"]) {
      setstoreErrors({ ...storeErrors, image: "" });
    }
    const url = URL.createObjectURL(imagedata);
    setImagePreviewUrl(url);
    setproductsInput({ ...productsInput, image: url });
  };

  //   function to validate product inputs
  const validateProduct = () => {
    let error = {};
    if (!productsInput.name.trim()) {
      error.name = "product name is required";
    }

    if (!productsInput.description.trim()) {
      error.description =
        "product description cannot be empty, let us know about the wanted product";
    }
    if (!productsInput.price.trim()) {
      error.price = "product price is required, the fied cannot be empty";
    } else if (isNaN(productsInput.price) || Number(productsInput.price) <= 0) {
      error.price = "product price cannot be less than 0";
    }

    if (!productsInput.image) {
      error.image = "please uplode an image";
    }
    return error;
  };

  function addProduct() {
    const error = validateProduct();

    if (Object.keys(error).length > 0) {
      setstoreErrors(error);
      return;
    }

    if (inputEditing) {
      setarrayProducts((prevProduct) =>
        prevProduct.map((product) =>
          product.id === inputEditing
            ? { ...productsInput, id: inputEditing }
            : product
        )
      );
      setInputEditing(null);
    } else {
      setarrayProducts([
        ...arrayProducts,
        { ...productsInput, id: Date.now() },
      ]);
    }

    setproductsInput({
      name: "",
      description: "",
      price: "",
      image: null,
    });
    setImagePreviewUrl(null);
    setShowForm(false);
    setstoreErrors({});
  }

  //   button to delete product

  const deleteProduct = (productId) => {
    const newProducts = arrayProducts.filter(
      (product) => product.id !== productId
    );
    setarrayProducts(newProducts);
  };

  const [inputEditing, setInputEditing] = useState(null);
  const editForm = (formeEdit) => {
    const productToEdit = arrayProducts.find((item) => item.id === formeEdit);

    if (productToEdit) {
      setproductsInput({
        price: productToEdit.price,
        name: productToEdit.name,
        image: productToEdit.image,
        description: productToEdit.description,
      });
      setImagePreviewUrl(productToEdit.image);
      setShowForm(true);
      setstoreErrors({});
      setInputEditing(formeEdit);
    }
  };

  // show imag by cliking eyes
  const [showImage, setShowimage] = useState(null);

  const openImage = (imageFound) => {
    const findImage = arrayProducts.find((img) => img.id === imageFound);

    if (findImage) {
      setShowimage(findImage);
      setOpen(false);
    }
  };
  // drower open and close to the left side
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const toggloDrawer = () => setOpen(!open);

  return (
    <>
      <BackgroundParticles />
      <div className="bi-relative">
        {!showForm && (
          <div className="bi-flex bi-flex-col bi-justify-center bi-items-center bi-pt-20 bi-h-screen">
            <button
              className=" sm:bi-z-[1000] bi-p-3 bi-rounded-lg bi-bg-cyan-900 bi-text-white bi-flex "
              onClick={() => setShowForm(true)}
            >
              <ShoppingBag className="bi-me-3" />
              Add New Product
            </button>

            <div className="bi-text-center bi-py-12 sm:bi-col-span-2 md:bi-col-span-3 lg:bi-col-span-4">
              <CheckCircle2 className="bi-w-16 bi-h-16 bi-text-gray-300 bi-mx-auto bi-mb-4" />

              {arrayProducts.length === 0 ? (
                <div>
                  <h3 className="bi-text-lg bi-font-medium bi-text-gray-300 bi-mb-2">
                    No Products yet
                  </h3>
                  <p className="bi-text-gray-500">Add your first Products</p>
                </div>
              ) : (
                <div>
                  <h3 className="bi-w-10 bi-h-10 bi-rounded-full bi-bg-green-500 bi-text-white bi-flex bi-items-center bi-justify-center bi-text-sm bi-font-bold bi-mx-auto">
                    {arrayProducts.length}
                  </h3>
                  <p className="bi-text-gray-500 bi-flex">
                    <GitBranchPlus className="bi-me-2" />
                    You can still add more!
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* <div className="bi-grid bi-mt-6 bi-p-3 bi-gap-6 bi-grid-cols-1 sm:bi-grid-cols-2 md:bi-grid-cols-3 lg:bi-grid-cols-4">
        {arrayProducts.length ? (
          arrayProducts.map((prod, index) => (
            <div
              key={index}
              className="bi-max-w-sm bi-w-full bi-shadow bi-border bi-border-gray-200 bi-rounded-xl bi-shadow-lg bi-overflow-hidden"
            >
              <img
                src={prod.image}
                alt="Product"
                className="bi-w-full bi-h-48 bi-object-cover bi-object-center"
              />

              <div className="bi-p-6">
                <h3 className="bi-text-lg bi-font-semibold bi-text-black bi-mb-1">
                  {prod.name}
                </h3>

                <p className="bi-text-sm bi-text-black bi-mb-4">
                  {prod.description.substring(0, 70)}
                </p>

                <div className="bi-flex bi-justify-between bi-items-center">
                  <span className="bi-text-black bi-font-bold bi-text-lg">
                    ${prod.price}
                  </span>
                  <button className="bi-px-4 bi-space-x-3 bi-flex bi-items-center bi-py-2 bi-bg-[#0081A3] bi-text-black bi-text-sm bi-rounded bi-hover:bg-indigo-700 bi-transition">
                    <p className="bi-text-xs">Add To Cart</p> <ShoppingBasket />
                  </button>

                  <button
                    onClick={() => deleteProduct(prod.id)}
                    className="bi-px-4 bi-space-x-3 bi-flex bi-items-center bi-py-2 bi-bg-red-500 bi-text-black bi-text-sm bi-rounded bi-hover:bg-indigo-700 bi-transition"
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bi-text-center bi-py-12 sm:bi-col-span-2 md:bi-col-span-3 lg:bi-col-span-4">
            <CheckCircle2 className="bi-w-16 bi-h-16 bi-text-gray-300 bi-mx-auto bi-mb-4" />
            <h3 className="bi-text-lg bi-font-medium bi-text-gray-900 bi-mb-2">
              No Products yet
            </h3>
            <p className="bi-text-gray-500">Add your first Products</p>
          </div>
        )}
      </div> */}

        {showForm && (
          <div className="bi-w-full bi-flex bi-justify-center bi-items-center bi-text-cyan-800 bi-mt-24 bi-mb-2">
            <div className="bi-flex bi-shadow-xl bi-bg-teal-700/50 bi-shadow-cyan-500/50 bi-rounded-xl bi-mt-4 bi-w-full bi-max-w-lg bi-p-10 bi-space-y-2 bi-flex-col bi-mb-5">
              <h1 className="bi-text-4xl bi-text-white/50 bi-mx-auto bi-text-center bi-flex bi-mb-5">
                <PaintBucket className="bi-me-2 bi-text-4xl bi-mt-2 " />
                Add New Product
              </h1>
              <div className="bi-grid bi-gap-2">
                <label htmlFor="" className="bi-text-white bi-flex">
                  <FolderPen className="bi-me-2" />
                  Product Name
                </label>
                <input
                  name="name"
                  onChange={handleChange}
                  value={productsInput.name}
                  type="text"
                  placeholder="products name"
                  className={`bi-bg-white bi-border bi-border-cyan-600 bi-rounded-lg bi-w-full bi-px-4 bi-py-3 ${
                    storeErrors.name
                      ? "bi-border-red-500"
                      : "bi-border-cyan-600"
                  }`}
                />
                <p>
                  {storeErrors.name && (
                    <p className="bi-text-red-600 bi-text-sm">
                      <AlertCircle size={16} className="mr-2" />
                      {storeErrors.name}
                    </p>
                  )}
                </p>
              </div>

              <div className="bi-grid bi-gap-2">
                <label className="bi-text-white bi-flex" htmlFor="">
                  <Podcast className="bi-me-2" />
                  Product Description
                </label>
                <textarea
                  name="description"
                  onChange={handleChange}
                  type="text-area"
                  value={productsInput.description}
                  placeholder="products description"
                  className={`bi-bg-white bi-border bi-border-cyan-600 bi-rounded-lg bi-w-full bi-px-4 bi-py-3 ${
                    storeErrors.description
                      ? "bi-border-red-500"
                      : "bi-border-cyan-600"
                  }`}
                ></textarea>

                <p>
                  {storeErrors.description && (
                    <p className="bi-text-red-600 bi-text-sm">
                      <AlertCircle size={16} className="mr-2" />

                      {storeErrors.description}
                    </p>
                  )}
                </p>
              </div>

              <div className="bi-grid bi-gap-2">
                <label className="bi-text-white bi-flex" htmlFor="">
                  <Award className="bi-me-2" />
                  Product Price
                </label>
                <input
                  name="price"
                  onChange={handleChange}
                  type="text"
                  value={productsInput.price}
                  placeholder="price"
                  className={`bi-bg-white bi-border bi-border-cyan-600 bi-rounded-lg bi-w-full bi-px-4 bi-py-3 ${
                    storeErrors.price
                      ? "bi-border-red-500"
                      : "bi-border-cyan-600"
                  }`}
                />

                <p>
                  {storeErrors.price && (
                    <p className="bi-text-red-600 bi-text-sm">
                      <AlertCircle size={16} className="mr-2" />
                      {storeErrors.price}
                    </p>
                  )}
                </p>
              </div>

              <div className="bi-grid bi-gap-2 bi-mb-3">
                <img
                  src={imagePreviewUrl || "/avatar.jpg"}
                  alt=""
                  className={`${imagePreviewUrl ? "bi-w-6/12" : "bi-w-14"}`}
                />
                <label
                  htmlFor="product-image"
                  className="bi-flex bi-justify-center bi-items-center bi-gap-5 bi-text-xs bi-cursor-pointer bi-border bi-text-white bi-py-3 bi-border-cyan-600 bi-rounded-lg"
                >
                  <Upload size={15} /> Upload product image
                  <input
                    type="file"
                    onChange={handleImageChange}
                    id="product-image"
                    accept="image/*"
                    hidden
                    className={`${
                      storeErrors.image ? "border-red-500" : "border-cyan-600"
                    }`}
                  />
                </label>

                <p>
                  {storeErrors.image && (
                    <p className="bi-text-red-600 bi-text-sm">
                      <AlertCircle size={16} className="mr-2" />
                      {storeErrors.image}
                    </p>
                  )}
                </p>
              </div>

              <button
                onClick={addProduct}
                className="bi-bg-cyan-600 bi-flex bi-justify-center bi-items-center bi-gap-4 bi-py-3 bi-rounded bi-cursor-pointer bi-text-white bi-text-xl"
              >
                <Plus />
                {inputEditing ? "Update product" : "add product"}
              </button>
            </div>
          </div>
        )}

        <div className="bi-fixed bi-top-14 bi-left-0 ">
          <React.Fragment>
            <Button
              onClick={toggloDrawer}
              className="bi-my-4 bi-bg-cyan-900 bi-text-white bi-ml-4 bi-font-bold bi-px-10 bi-flex rounded-3  "
            >
              <ShoppingCart className="bi-me-2" /> See all added produits
            </Button>

            <Drawer
              open={open}
              onClose={() => setOpen(true)}
              className="bi-w-full bi-overflow-x-auto sm:bi-max-w-[100px] bi-bg-cyan-900 bi-shadow-md bi-justify-start bi-items-center bi-p-3 "
            >
              <div className="bi-px-4 bi-py-4">
                <Typography variant="h5" color="blue-gray" className="bi-mb-4">
                  Produits added{" "}
                  <span className="bg-red-500 rounded-circle ">
                    ({arrayProducts.length})
                  </span>
                </Typography>

                {arrayProducts.length === 0 ? (
                  <p className="bi-text-sm  bi-text-white-500">
                    No produit added yet.
                  </p>
                ) : (
                  <div className="bi-space-y-4 bi-max-h-[70vh] bi-overflow-y-auto">
                    {arrayProducts.map((product, index) => (
                      <div
                        key={product.id || item.id || index}
                        className="bi-flex bi-items-center bi-gap-4 bi-p-2 bi-bg-gray-100 bi-rounded-lg bi-w-100"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="bi-w-16 bi-h-16 bi-object-cover bi-rounded"
                        />
                        <div>
                          <Typography variant="h6" className="bi-text-base">
                            {product.name}
                          </Typography>
                          <p className="bi-text-sm">{product.description}</p>
                          <p className="bi-text-sm bi-text-green-700">
                            Prix : N{product.price}
                          </p>
                          <div className="bi-flex bi-gap-3 bi-mt-3">
                            <button
                              onClick={() => deleteProduct(product.id)}
                              className="bi-group bi-w-7 bi-h-7 bi-rounded-full bi-bg-red-500 bi-p-2 bi-flex bi-justify-center bi-items-center hover:bi-bg-red-600 bi-transition-all bi-duration-300 bi-transform hover:bi-scale-110 focus:bi-outline-none focus:bi-ring-2 focus:bi-ring-red-400 focus:bi-ring-offset-1 bi-shadow-lg hover:bi-shadow-xl"
                              aria-label="delete  product"
                              title="Delete"
                            >
                              <Trash2
                                size={18}
                                className="bi-text-white group-hover:bi-animate-pulse"
                              />
                            </button>

                            <button
                              onClick={() => editForm(product.id)}
                              title="Edit"
                              aria-label="edit product"
                              className="bi-group bi-w-7 bi-h-7 bi-rounded-full bi-bg-yellow-900/80 bi-p-2 bi-flex bi-justify-center bi-items-center hover:bi-bg-teal-600 bi-transition-all bi-duration-300 bi-transform hover:bi-scale-110 focus:bi-outline-none focus:bi-ring-2 focus:bi-ring-red-400 focus:bi-ring-offset-1 bi-shadow-lg hover:bi-shadow-xl"
                            >
                              <Pencil className="bi-text-white group-hover:bi-animate-pulse" />
                            </button>

                            <button
                              onClick={() => openImage(product.id)}
                              title="view image"
                              aria-label="display image"
                              className="bi-group bi-w-7 bi-h-7 bi-rounded-full bi-bg-blue-900/80 bi-p-2 bi-flex bi-justify-center bi-items-center hover:bi-bg-teal-200 bi-transition-all bi-duration-300 bi-transform hover:bi-scale-110 focus:bi-outline-none focus:bi-ring-2 focus:bi-ring-red-400 focus:bi-ring-offset-1 bi-shadow-lg hover:bi-shadow-xl"
                            >
                              <EyeOff className="bi-text-white group-hover:bi-animate-pulse" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Drawer>
          </React.Fragment>
        </div>
      </div>

      {/* modal to see information about product */}

      {showImage && (
        <div className="bi-pointer-events-auto bi-fixed bi-inset-0 bi-z-[999] bi-grid bi-h-screen bi-w-screen bi-place-items-center bi-bg-black bi-bg-opacity-60 bi-backdrop-blur-sm">
          <div className="bi-relative bi-m-4 bi-w-1/2 bi-rounded-lg bi-bg-white bi-shadow-sm">
            <button
              onClick={() => setShowimage(null)}
              className="bi-absolute bi-right-10 bi-flex bi-mt-3 bi-justify-center bi-items-center bi-rounded-full bi-h-10 bi-w-10 bi-bg-red-300/90 bi-select-none
               hover:bi-bg-red-700  bi-transition-all bi-duration-300 bi-transform hover:bi-scale-110 focus:bi-outline-none focus:bi-ring-2 focus:bi-ring-red-400 focus:bi-ring-offset-1 bi-shadow-lg hover:bi-shadow-xl"
            >
              <X
                size={24}
                className="bi-text-black hover:bi-text-white bi-transition-all bi-duration-300"
              />
            </button>{" "}
            {/* Plus large pour l'image */}
            {/* Header */}
            <div className="bi-flex bi-items-start bi-justify-between bi-p-4">
              <div>
                <h5 className="bi-text-xl bi-font-medium bi-text-slate-800">
                  {showImage.name} {/* Nom du produit */}
                </h5>
                <p className="bi-text-slate-500 bi-text-sm bi-font-light">
                  Prix: ${showImage.price}
                </p>
              </div>

              {/* Bouton fermer */}
            </div>
            {/* Corps du modal */}
            <div className="bi-relative bi-px-4 bi-pb-4">
              {/* Image grande taille */}
              <img
                src={showImage.image}
                alt={showImage.name}
                className="bi-w-full bi-h-64 bi-object-cover bi-rounded-md bi-mb-4"
              />

              {/* Description */}
              <div className="bi-mb-4">
                <p className="bi-text-xs bi-uppercase bi-text-slate-500 bi-mb-2">
                  Description
                </p>
                <p className="bi-text-sm bi-text-slate-600">
                  {showImage.description}
                </p>
              </div>

              {/* Actions */}
              <div className=" bi-group bi-flex bi-justify-center bi-text-center bi-gap-3">
                <a href={showImage.image} download={showImage.image}>
                  <button className="bi-gap-3 bi-text-[#0af526] bi-rounded-md  bi-bg-black bi-p-2 bi-flex bi-justify-center bi-items-center  bi-transition-all bi-duration-300 bi-transform hover:bi-scale-110 focus:bi-outline-none focus:bi-ring-2 focus:bi-ring-red-400 focus:bi-ring-offset-1 bi-shadow-lg hover:bi-shadow-xl hover:bi-animate-pulse">
                    <CloudDownload
                      size={20}
                      color="#0af526"
                      strokeWidth={3}
                      absoluteStrokeWidth
                    />{" "}
                    download
                  </button>
                </a>
                {/* <button
                  onClick={() => setShowImage(null)}
                  className="bi-rounded-md bi-border bi-border-slate-300 bi-py-2 bi-px-4 bi-text-center bi-text-sm bi-text-slate-600"
                >
                  Fermer
                </button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
