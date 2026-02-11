import React, { useEffect, Suspense } from "react";
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
      <ErrorBoundary>
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen ">
              <Loader className="animate-spin text-blue-500" size={32} />
            </div>
          }
        >
          <Routes>
            {/* Les différents onglets */}
            <Route path="/" element={<NavbarLayout />}>
              <Route index element={<Home />} />
              <Route path="service" element={<Services />} />
              <Route path="projects" element={<Projects />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="store" element={<Store />} />

              {/* 404 si on arrive à une route inexistante */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>

      {/* Le bouton d'installation : il "flotte" au-dessus du reste */}
      <InstallPWAButton />

      {/* Tes onglets mobiles */}
      <BottomTabs />

      {/* Tes animations de fond */}
      <ConstellationParticles />
    </>
  );
}
