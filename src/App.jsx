import React, { useEffect, Suspense } from "react";
import { Toaster } from "sonner";
import { Route, Routes } from "react-router-dom";
import NavbarLayout from "./Layout/outlet.jsx";
import BottomTabs from "./components/utils/BottomTabs";
// Styles
import "./App.css";
import "aos/dist/aos.css";
import "animate.css";

// Animation Library
import AOS from "aos";

// Pages
// lasy load
const Home = React.lazy(() => import("./pages/Home.jsx"));
const About = React.lazy(() => import("./pages/About.jsx"));
const Contact = React.lazy(() => import("./pages/contact.jsx"));
const Projects = React.lazy(() => import("./pages/Projects.jsx"));
const Services = React.lazy(() => import("./pages/service.jsx"));
const Store = React.lazy(() => import("./pages/Store.jsx"));
const NotFound = React.lazy(() => import("./pages/NotFound.jsx"));
const InstallPWAButton = React.lazy(
  () => import("@/components/pwa/InstallPWAButton"),
);

import ErrorBoundary from "./components/utils/Errorboundry.jsx";
import ConstellationParticles from "./components/animations/constellation.jsx";
import { Loader } from "lucide-react";
import GalaxyParticles from "./components/animations/galaxyParticles.jsx";
import Test from "./pages/Test.jsx";

// Layout

export default function App() {
  useEffect(() => {
    // ✅ On crée une VRAIE fonction que JS pourra appeler plus tard
    const initAOS = () => {
      AOS.init({
        duration: 1000,
        once: false,
        mirror: true,
      });
    };

    if (window.requestIdleCallback) {
      // ✅ On donne la fonction elle-même, sans les parenthèses ()
      window.requestIdleCallback(initAOS);
    } else {
      window.setTimeout(initAOS, 200);
    }
  }, []);

  return (
    <>
      {/* Tes animations de fond - DOIT être rendu EN PREMIER pour ne pas bloquer le contenu */}
      <ConstellationParticles />

      
      <BottomTabs />
    </>
  );
}
