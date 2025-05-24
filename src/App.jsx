import React from "react";
import { useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

// component importation
import Home from "./pages/Home.jsx";
import Contact from "./pages/contact.jsx";
import Services from "./pages/service.jsx";
import About from "./pages/About.jsx";
import FQA from "./pages/FQA.jsx";
import Projects from "./pages/Projects.jsx";
import RoutOutlet from "./Layout/outlet.jsx";
import Footer from "./components/footer.jsx";

export default function App() {
    useEffect(() => {
    AOS.init({
      duration: 1000, // Durée par défaut des animations
      once: false,     // L'animation se joue une seule fois
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RoutOutlet />}>
            <Route index element={<Home />} />
            <Route path="/Service" element={<Services />} />
            <Route path="/FQA" element={<FQA />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
