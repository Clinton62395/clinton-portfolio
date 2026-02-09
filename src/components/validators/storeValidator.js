import * as yup from "yup";

export const productSchema = yup.object({
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
          value.type,
        )
      );
    })
    .test("fileSize", "L'image est trop lourde (max 5MB)", (value) => {
      if (!value) return false;
      if (typeof value === "string") return true; // Pour les images existantes en édition
      return value && value.size <= 5 * 1024 * 1024;
    }),
});

// contact schema

export const Contactschema = yup.object().shape({
  nom: yup.string().required("Le nom est requis"),
  email: yup
    .string()
    .email("L'adresse email est invalide")
    .required("L'email est requis"),
  message: yup.string().required("Le message est requis"),
});
