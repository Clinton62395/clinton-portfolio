import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",

      devOptions: {
        enabled: true,
      },
      includeAssets: [
        "favicon.ico",
        "robots.txt",
        "icons/*.png",
        "screenshots/*.png",
      ],
      manifest: {
        name: "Billy Doumbouya - Portfolio",
        short_name: "Portfolio",
        description:
          "Portfolio professionnel de Billy Doumbouya - Développeur web & mobile React.js, nodejs, mongodb, express.js",
        start_url: "/",
        display: "standalone",
        background_color: "#0f172a",
        theme_color: "#667eea",
        orientation: "portrait-primary",
        icons: [
          {
            src: "icons/icon5.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "icons/icon6.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
        ],
        screenshots: [
          {
            src: "/screenshots/desktop-1.png",
            sizes: "1280x720",
            type: "image/png",
            form_factor: "wide",
            label: "Page d'accueil - Desktop",
          },
          {
            src: "/screenshots/mobile-1.png",
            sizes: "540x720",
            type: "image/png",
            form_factor: "narrow",
            label: "Page d'accueil - Mobile",
          },
          // Optionnel : Ajoute plus de screenshots
          {
            src: "/screenshots/Screenshot-1.png",
            sizes: "1280x720",
            type: "image/png",
            form_factor: "wide",
            label: "Projets - Desktop",
          },
          {
            src: "/screenshots/Screenshot-2.png",
            sizes: "540x720",
            type: "image/png",
            form_factor: "narrow",
            label: "Projets - Mobile",
          },
        ],
        shortcuts: [
          {
            name: "Projets",
            short_name: "Projets",
            url: "/projects",
            icons: [{ src: "/icons/icon5.png", sizes: "192x192" }],
          },
          {
            name: "Contact",
            short_name: "Contact",
            url: "/contact",
            icons: [{ src: "/icons/icon5.png", sizes: "192x192" }],
          },
        ],
        categories: ["portfolio", "business", "productivity"],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^.*\.(js|css|png|jpg|jpeg|svg|webp)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "assets-cache",
              expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 }, // 30 jours
            },
          },
          {
            urlPattern: /^.*$/,
            handler: "NetworkFirst",
            options: {
              cacheName: "pages-cache",
              networkTimeoutSeconds: 10,
              expiration: { maxEntries: 50 },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
