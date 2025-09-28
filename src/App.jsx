import React from "react";
import { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
// import AOS for animations
import AOS from "aos";
import "aos/dist/aos.css";
// import animate.css for additional animations
import "animate.css";
//
import "./assets/ihover.css";
// components importation
import Home from "./pages/Home.jsx";
import Contact from "./pages/contact.jsx";
import Services from "./pages/service.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import RoutOutlet from "./Layout/outlet.jsx";
import NotFound from "./pages/NotFound.jsx";
import Store from "./pages/Store.jsx";

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
