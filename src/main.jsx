import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Bootstrap removed; using TailwindCSS utilities instead

import "./App.css";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import {
  registerServiceWorker,
  setupInstallPrompt,
} from "./components/utils/PWA/pwa.js";

// Enregistre le Service Worker
registerServiceWorker();

// Configure le prompt d'installation
setupInstallPrompt();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
