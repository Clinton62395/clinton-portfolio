import { ArrowBigLeft, Home, Search } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="bi-min-h-screen bi-bg-gradient-to-br bi-from-blue-50 bi-to-indigo-100 bi-flex bi-items-center bi-justify-center bi-px-4">
      <div className="bi-text-center bi-max-w-md bi-mx-auto">
        {/* Icône 404 animée */}
        <div className="bi-mb-8">
          <div className="bi-text-8xl bi-font-bold bi-text-indigo-600 bi-mb-4 bi-animate-bounce">
            404
          </div>
          <div className="bi-text-6xl bi-text-indigo-800 bi-animate-pulse">
            <Search size={52} />
          </div>
        </div>

        {/* Texte principal */}
        <h1 className="bi-text-3xl bi-font-bold bi-text-gray-800 bi-mb-4">
          Page not found
        </h1>

        <p className="bi-text-gray-600 bi-mb-8 bi-leading-relaxed">
          Oups ! the page that you are looking for might not exist anymore.
        </p>

        {/* Boutons d'action */}
        <div className="bi-space-y-4">
          <button
            onClick={() => window.history.back()}
            className="bi-flex bi-items-center bi-gap-10 bi-w-full bi-bg-indigo-600 hover:bi-bg-indigo-700 bi-text-white bi-font-semibold bi-py-3 bi-px-6 bi-rounded-lg bi-transition-all bi-duration-200 bi-transform hover:bi-scale-105"
          >
            <ArrowBigLeft size={24} /> Go back
          </button>

          <Link
            to="/"
            className="bi-w-full bi-border-2 bi-border-indigo-600 bi-text-indigo-600 hover:bi-bg-indigo-600 hover:bi-text-white bi-font-semibold bi-py-3 bi-px-6 bi-rounded-lg bi-transition-all bi-duration-200 bi-flex bi-items-center bi-gap-3"
          >
            <Home /> Home
          </Link>
        </div>

        {/* Animation décorative */}
        <div className="bi-mt-12 bi-flex bi-justify-center bi-space-x-2">
          <div className="bi-w-2 bi-h-2 bi-bg-indigo-400 bi-rounded-full bi-animate-ping"></div>
          <div
            className="bi-w-2 bi-h-2 bi-bg-indigo-400 bi-rounded-full bi-animate-ping"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="bi-w-2 bi-h-2 bi-bg-indigo-400 bi-rounded-full bi-animate-ping"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
