import {
  AlertCircle,
  CheckCircle2,
  Plus,
  ShoppingBasket,
  Trash2,
  Upload,
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
} from "@material-tailwind/react";
import { number } from "framer-motion";
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

    setarrayProducts([...arrayProducts, { ...productsInput, id: Date.now() }]);
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

  // drower open and close to the left side
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const toggloDrawer = () => setOpen(!open);

  return (
    <>
      {!showForm && (
        <div className="bi-flex bi-flex-col bi-justify-center bi-items-center bi-pt-20 bi-h-screen">
          <button
            className="bi-p-3 bi-rounded-lg bi-bg-cyan-900 bi-text-white"
            onClick={() => setShowForm(true)}
          >
            Add New Product
          </button>

          <div className="bi-text-center bi-py-12 sm:bi-col-span-2 md:bi-col-span-3 lg:bi-col-span-4">
            <CheckCircle2 className="bi-w-16 bi-h-16 bi-text-gray-300 bi-mx-auto bi-mb-4" />

            {arrayProducts.length === 0 ? (
              <>
                <h3 className="bi-text-lg bi-font-medium bi-text-gray-900 bi-mb-2">
                  No Products yet
                </h3>
                <p className="bi-text-gray-500">Add your first Products</p>
              </>
            ) : (
              <>
                <h3 className="bi-w-10 bi-h-10 bi-rounded-full bi-bg-green-500 bi-text-white bi-flex bi-items-center bi-justify-center bi-text-sm bi-font-bold bi-mx-auto">
                  {arrayProducts.length}
                </h3>
                <p className="bi-text-gray-500">You can still add more!</p>
              </>
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
        <div className="bi-w-full bi-flex bi-justify-center bi-items-center bi-text-black">
          <div className="bi-flex bi-shadow bi-rounded-xl bi-mt-4 bi-w-full bi-max-w-lg bi-p-10 bi-space-y-2 bi-flex-col bi-mb-5">
            <h1 className="bi-text-4xl bi-text-black bi-text-center">
              Add New Product
            </h1>
            <div className="bi-grid bi-gap-2">
              <label htmlFor="" className="bi-text-black">
                Product Name
              </label>
              <input
                name="name"
                onChange={handleChange}
                value={productsInput.name}
                type="text"
                placeholder="products name"
                className={`bi-bg-white bi-border bi-border-cyan-600 bi-rounded-lg bi-w-full bi-px-4 bi-py-3 ${
                  storeErrors.name ? "bi-border-red-500" : "bi-border-cyan-600"
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
              <label className="bi-text-black" htmlFor="">
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
              <label className="bi-text-black" htmlFor="">
                Product Price
              </label>
              <input
                name="price"
                onChange={handleChange}
                type="text"
                value={productsInput.price}
                placeholder="price"
                className={`bi-bg-white bi-border bi-border-cyan-600 bi-rounded-lg bi-w-full bi-px-4 bi-py-3 ${
                  storeErrors.price ? "bi-border-red-500" : "bi-border-cyan-600"
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
                className="bi-flex bi-justify-center bi-items-center bi-gap-5 bi-text-xs bi-cursor-pointer bi-border bi-text-cyan-600 bi-py-3 bi-border-cyan-600 bi-rounded-lg"
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
              className="bi-bg-cyan-600 bi-flex bi-justify-center bi-items-center bi-gap-4 bi-py-3 bi-rounded bi-cursor-pointer bi-text-black bi-text-xl"
            >
              <Plus />
              Add Product
            </button>
          </div>
        </div>
      )}

      <div className="bi-fixed bi-top-14 bi-left-0 ">
        <React.Fragment>
          <Button
            onClick={toggloDrawer}
            className="bi-my-4 bi-bg-cyan-900 bi-text-white bi-ml-4 bi-font-bold bi-px-10 rounded-3 "
          >
            See all added produits
          </Button>

          <Drawer
            open={open}
            onClose={() => setOpen(true)}
            className=" bi-bg-cyan-900 bi-shadow-md bi-justify-start bi-items-center bi-p-3 bi-max-w-100 bi-w-[700px]"
          >
            <div className="bi-px-4 bi-py-4">
              <Typography variant="h5" color="blue-gray" className="bi-mb-4">
                Produits added{" "}
                <span className="bg-red-500 rounded-circle ">
                  ({arrayProducts.length})
                </span>
              </Typography>

              {arrayProducts.length === 0 ? (
                <p className="bi-text-sm bi-text-gray-500">
                  No produit added yet.
                </p>
              ) : (
                <div className="bi-space-y-4 bi-max-h-[70vh] bi-overflow-y-auto">
                  {arrayProducts.map((product, index) => (
                    <div
                      key={product.id || index}
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

                        <button
                          onClick={() => deleteProduct(product.id)}
                          className="bi-group bi-rounded-full bi-bg-red-500 bi-p-2 bi-flex bi-justify-center bi-items-center hover:bi-bg-red-600 bi-transition-all bi-duration-300 bi-transform hover:bi-scale-110 focus:bi-outline-none focus:bi-ring-2 focus:bi-ring-red-400 focus:bi-ring-offset-1 bi-shadow-lg hover:bi-shadow-xl"
                          aria-label="delete  product"
                          title="Delete"
                        >
                          <Trash2
                            size={18}
                            className="bi-text-white group-hover:bi-animate-pulse"
                          />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
}
