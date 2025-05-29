import React from "react";
import { useEffect } from "react";

import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
// import AOS for animations
import AOS from "aos";
import "aos/dist/aos.css";
// import animate.css for additional animations
import "animate.css";
// 
import './assets/ihover.css';
// components importation
import Home from "./pages/Home.jsx";
import Contact from "./pages/contact.jsx";
import Services from "./pages/service.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import RoutOutlet from "./Layout/outlet.jsx";
import Footer from "./components/footer.jsx";
import NotFound from "./pages/NotFound.jsx";

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
      <HashRouter>
        <Routes>
          <Route path="/" element={<RoutOutlet />}>
            <Route index element={<Home />} />
            <Route path="/service" element={<Services />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            {/* Redirection vers la page d'accueil pour les routes non définies */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}
