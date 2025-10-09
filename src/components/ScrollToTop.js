import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Remet le scroll en haut à chaque changement de route.
 * - Désactive la restauration automatique de l'historique
 * - Gère les ancres (#id) si présentes
 * - Fonctionne avec HashRouter / BrowserRouter
 */
export default function ScrollToTop() {
  const location = useLocation();
  const { pathname, hash, key } = location;

  // 1) Empêche le navigateur de restaurer la position
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      const prev = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";
      return () => {
        window.history.scrollRestoration = prev;
      };
    }
  }, []);

  // 2) Remet le scroll en haut (ou vers l'ancre), le plus tôt possible
  useLayoutEffect(() => {
    // Si on vise une ancre (#section), on y va
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "auto", block: "start" });
        return;
      }
    }

    // Sinon on remonte en haut (toutes variantes pour cross-browser)
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Si jamais ton conteneur principal scroll, on le remet aussi à 0
    const main = document.querySelector(".site-main");
    if (main) main.scrollTop = 0;
  }, [pathname, hash, key]);

  return null;
}
