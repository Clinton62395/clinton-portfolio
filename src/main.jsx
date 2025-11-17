import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Bootstrap removed; using TailwindCSS utilities instead

import "./App.css";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
