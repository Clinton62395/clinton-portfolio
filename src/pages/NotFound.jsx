// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="bi-h-screen bi-flex bi-flex-col bi-items-center bi-justify-center bi-text-center bi-bg-gray-100">
      <h1 className="bi-text-6xl bi-font-bold bi-text-red-600">404</h1>
      <p className="bi-text-xl bi-mt-4 bi-text-gray-700">
        Oups ! La page que vous cherchez n'existe pas.
      </p>
      <Link
        to="/home"
        className="bi-mt-6 bi-inline-block bi-bg-blue-600 bi-text-white bi-px-6 bi-py-3 bi-rounded bi-shadow hover:bi-bg-blue-700 bi-transition"
      >
        Retour à l’accueil
      </Link>
    </div>
  );
}

export default NotFound;
