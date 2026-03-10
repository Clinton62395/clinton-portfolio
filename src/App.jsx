import React, { useEffect, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import { Loader } from "lucide-react";

import NavbarLayout from "./Layout/outlet.jsx";
import BottomTabs from "./components/utils/BottomTabs";

import "./App.css";
import "aos/dist/aos.css";
import "animate.css";

import AOS from "aos";

// Animations
import ConstellationParticles from "./components/animations/constellation.jsx";
import GalaxyParticles from "./components/animations/galaxyParticles.jsx";

// Error boundary
import ErrorBoundary from "./components/utils/Errorboundry.jsx";

// Lazy pages
const Home = React.lazy(() => import("./pages/Home.jsx"));
const About = React.lazy(() => import("./pages/About.jsx"));
const Contact = React.lazy(() => import("./pages/contact.jsx"));
const Projects = React.lazy(() => import("./pages/Projects.jsx"));
const Services = React.lazy(() => import("./pages/service.jsx"));
const Store = React.lazy(() => import("./pages/Store.jsx"));
const NotFound = React.lazy(() => import("./pages/NotFound.jsx"));
const Test = React.lazy(() => import("./pages/Test.jsx"));

const InstallPWAButton = React.lazy(
  () => import("@/components/pwa/InstallPWAButton"),
);

export default function App() {
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        duration: 1000,
        once: false,
        mirror: true,
      });
    };

    if (window.requestIdleCallback) {
      window.requestIdleCallback(initAOS);
    } else {
      window.setTimeout(initAOS, 200);
    }
  }, []);

  return (
    <>
      {/* Background animations */}
      <ConstellationParticles />

      <ErrorBoundary>
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen">
              <Loader className="animate-spin" size={40} />
            </div>
          }
        >
          <Routes>
            {/* Layout principal */}
            <Route element={<NavbarLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/service" element={<Services />} />
              <Route path="/store" element={<Store />} />
              <Route path="/contact" element={<Contact />} />
            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>

      {/* Navigation mobile */}
      <BottomTabs />

      {/* Notifications */}
      <Toaster richColors position="top-right" />

      {/* PWA install */}
      <Suspense fallback={null}>
        <InstallPWAButton />
      </Suspense>
    </>
  );
}
