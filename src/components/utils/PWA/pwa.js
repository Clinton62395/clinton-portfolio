// Enregistrement du Service Worker pour la PWA
// À placer dans src/utils/pwa.js

export function registerServiceWorker() {
  // Vérifie si les Service Workers sont supportés
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log(
            "✅ Service Worker enregistré avec succès:",
            registration.scope,
          );

          // Vérifie les mises à jour toutes les heures
          setInterval(
            () => {
              registration.update();
            },
            60 * 60 * 1000,
          );

          // Gère les mises à jour du Service Worker
          registration.addEventListener("updatefound", () => {
            const newWorker = registration.installing;

            newWorker.addEventListener("statechange", () => {
              if (
                newWorker.state === "installed" &&
                navigator.serviceWorker.controller
              ) {
                // Nouveau SW disponible
                console.log("🔄 Nouvelle version disponible !");

                // Optionnel : Affiche une notification à l'utilisateur
                if (
                  confirm(
                    "Une nouvelle version est disponible. Voulez-vous actualiser ?",
                  )
                ) {
                  newWorker.postMessage({ type: "SKIP_WAITING" });
                  window.location.reload();
                }
              }
            });
          });
        })
        .catch((error) => {
          console.error(
            "❌ Erreur lors de l'enregistrement du Service Worker:",
            error,
          );
        });

      // Recharge la page quand un nouveau SW prend le contrôle
      let refreshing = false;
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (!refreshing) {
          refreshing = true;
          window.location.reload();
        }
      });
    });
  } else {
    console.warn(
      "⚠️ Les Service Workers ne sont pas supportés par ce navigateur",
    );
  }
}

// Fonction pour désinstaller le Service Worker (utile pour le développement)
export function unregisterServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
        console.log("Service Worker désinstallé");
      })
      .catch((error) => {
        console.error("Erreur lors de la désinstallation:", error);
      });
  }
}

// Fonction pour vérifier si l'app est installée
export function isAppInstalled() {
  // Vérifie si l'app tourne en mode standalone
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}

// Fonction pour demander l'installation (A2HS - Add to Home Screen)
let deferredPrompt;

export function setupInstallPrompt() {
  window.addEventListener("beforeinstallprompt", (e) => {
    // Empêche la mini-infobar par défaut
    e.preventDefault();

    // Stocke l'événement pour l'utiliser plus tard
    deferredPrompt = e;

    console.log("💾 L'application peut être installée");

    // Optionnel : Affiche ton propre bouton d'installation
    const installButton = document.getElementById("install-button");
    if (installButton) {
      installButton.style.display = "block";
    }
  });

  // Détecte si l'app a été installée
  window.addEventListener("appinstalled", () => {
    console.log("✅ PWA installée avec succès !");
    deferredPrompt = null;
  });
}

// Fonction pour déclencher l'installation
export async function promptInstall() {
  if (!deferredPrompt) {
    console.log("⚠️ L'installation n'est pas disponible");
    return false;
  }

  // Affiche le prompt d'installation
  deferredPrompt.prompt();

  // Attend le choix de l'utilisateur
  const { outcome } = await deferredPrompt.userChoice;

  console.log(
    `L'utilisateur a ${outcome === "accepted" ? "accepté" : "refusé"} l'installation`,
  );

  deferredPrompt = null;
  return outcome === "accepted";
}
