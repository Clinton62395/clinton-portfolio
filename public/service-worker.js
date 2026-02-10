// Service Worker pour Portfolio PWA
const CACHE_NAME = "portfolio-v1.0.0";
const RUNTIME_CACHE = "runtime-cache";

// Fichiers à mettre en cache lors de l'installation
const STATIC_CACHE_URLS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/mylogo.png",
  "/image.png",
  // Ajoute ici les chemins vers tes fichiers JS/CSS principaux
];

// Installation du Service Worker
self.addEventListener("install", (event) => {
  console.log("[Service Worker] Installation...");

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[Service Worker] Cache ouvert");
      return cache.addAll(STATIC_CACHE_URLS);
    }),
  );

  // Force le nouveau SW à devenir actif immédiatement
  self.skipWaiting();
});

// Activation du Service Worker
self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Activation...");

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Supprime les anciens caches
          if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
            console.log(
              "[Service Worker] Suppression ancien cache:",
              cacheName,
            );
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );

  // Prend le contrôle de toutes les pages immédiatement
  return self.clients.claim();
});

// Stratégie de cache : Network First, puis Cache
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignore les requêtes non-HTTP
  if (!request.url.startsWith("http")) {
    return;
  }

  // Stratégie pour les pages HTML : Network First
  if (request.headers.get("accept")?.includes("text/html")) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Clone la réponse et la met en cache
          const responseClone = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // Si offline, retourne depuis le cache
          return caches.match(request);
        }),
    );
    return;
  }

  // Stratégie pour les assets statiques : Cache First
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request).then((response) => {
        // Ne cache que les réponses valides
        if (!response || response.status !== 200 || response.type === "error") {
          return response;
        }

        // Clone et cache la réponse
        const responseClone = response.clone();
        caches.open(RUNTIME_CACHE).then((cache) => {
          cache.put(request, responseClone);
        });

        return response;
      });
    }),
  );
});

// Gestion des messages (pour les mises à jour)
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Background Sync (optionnel - pour les formulaires offline)
self.addEventListener("sync", (event) => {
  console.log("[Service Worker] Background Sync:", event.tag);

  if (event.tag === "sync-contacts") {
    event.waitUntil(syncContacts());
  }
});

// Fonction pour synchroniser les contacts (exemple)
async function syncContacts() {
  // Implémente ta logique de sync ici
  console.log("[Service Worker] Synchronisation des contacts...");
}
