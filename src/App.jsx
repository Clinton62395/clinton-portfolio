import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

// Styles
import "./App.css";
import "aos/dist/aos.css";
import "animate.css";

// Animation Library
import AOS from "aos";

// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/contact.jsx";
import Projects from "./pages/Projects.jsx";
import Services from "./pages/service.jsx";
import Store from "./pages/Store.jsx";
import NotFound from "./pages/NotFound.jsx";

// Layout
import RoutOutlet from "./Layout/outlet.jsx";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée par défaut des animations
      once: false,
      mirror: true, // L'animation se joue une seule fois
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<RoutOutlet />}>
          <Route index element={<Home />} />
          <Route path="service" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="store" element={<Store />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
