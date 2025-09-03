import React, { useState, useRef, useEffect } from "react";
import "../style/projet.css";

// --- Importation dynamique des images (Webpack uniquement) ---
function importImages(context) {
  return context.keys().map(context);
}

const salle_de_bain= importImages(
  require.context("../assets/projets/salle_de_bain", false, /\.(jpg|jpeg|png|webp)$/)
);
const cuisinesImages = importImages(
  require.context("../assets/projets/cuisines", false, /\.(jpg|jpeg|png|webp)$/)
);
const salonsImages = importImages(
  require.context("../assets/projets/salons", false, /\.(jpg|jpeg|png|webp)$/)
);
const dressingsImages = importImages(
  require.context("../assets/projets/dressings", false, /\.(jpg|jpeg|png|webp)$/)
);
const meublesImages = importImages(
  require.context("../assets/projets/meubles", false, /\.(jpg|jpeg|png|webp)$/)
);

// --- Définition des catégories ---
const categories = [
  { id: "salle_de_bain", title: "Salle de bain", images: salle_de_bain},
  { id: "cuisines", title: "Cuisines", images: cuisinesImages },
  { id: "salons", title: "Salons Expo", images: salonsImages },
  { id: "dressings", title: "Dressings", images: dressingsImages },
  { id: "meubles", title: "Meubles", images: meublesImages },
];

export default function Projet() {
  // --- States & Refs ---
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const cardRefs = useRef([]);
  const rafRefs = useRef({});
  const rectsRef = useRef({});
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);
  const lastFocusedElement = useRef(null);

  const activeCategory = categories[activeCategoryIndex];

  // --- Effet de tilt sur les cartes ---
  const isTiltAllowed = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: fine)").matches &&
    window.innerWidth >= 768;

  function handleMouseMove(e, idx) {
    if (!isTiltAllowed()) return;
    const card = cardRefs.current[idx];
    if (!card) return;
    if (!rectsRef.current[idx]) rectsRef.current[idx] = card.getBoundingClientRect();
    const rect = rectsRef.current[idx];
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -8;
    const rotateY = ((x - cx) / cx) * 8;
    if (rafRefs.current[idx]) cancelAnimationFrame(rafRefs.current[idx]);
    rafRefs.current[idx] = requestAnimationFrame(() => {
      card.style.willChange = "transform";
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
  }

  function resetCardTransform(idx) {
    const card = cardRefs.current[idx];
    if (rafRefs.current[idx]) cancelAnimationFrame(rafRefs.current[idx]);
    if (card) {
      card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
      card.style.willChange = "auto";
    }
    rectsRef.current[idx] = null;
  }

  // --- Gestion modale et accessibilité ---
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setSelectedImage(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      lastFocusedElement.current = document.activeElement;
      document.body.classList.add("modal-open");
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    } else {
      document.body.classList.remove("modal-open");
      try {
        lastFocusedElement.current?.focus?.();
      } catch {}
    }
  }, [selectedImage]);

  useEffect(() => {
    if (!selectedImage) return;
    function handleTab(e) {
      if (e.key !== "Tab") return;
      const modal = modalRef.current;
      if (!modal) return;
      const focusable = modal.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    window.addEventListener("keydown", handleTab);
    return () => window.removeEventListener("keydown", handleTab);
  }, [selectedImage]);

  // --- Fonctions modale ---
  const openImage = (src, title) => setSelectedImage({ src, title });
  const closeImage = () => setSelectedImage(null);

  // --- Rendu ---
  return (
   
    <div className="projet-container" >
      <h2>Découvrez Nos œuvres en Menuiserie</h2>

      {/* Slider de catégories */}
      <div className="category-slider" role="tablist" aria-label="Catégories">
        {categories.map((cat, idx) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={idx === activeCategoryIndex}
            aria-controls={`gallery-${cat.id}`}
            id={`tab-${cat.id}`}
            className={`category-btn ${idx === activeCategoryIndex ? "active" : ""}`}
            onClick={() => setActiveCategoryIndex(idx)}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Galerie d'images */}
      <div
        className="gallery"
        id={`gallery-${activeCategory.id}`}
        role="region"
        aria-labelledby={`tab-${activeCategory.id}`}
        data-aos="zoom-in"
      >
        {activeCategory.images.map((img, idx) => (
          <div
            key={idx}
            className="card"
            ref={(el) => (cardRefs.current[idx] = el)}
            onMouseMove={(e) => handleMouseMove(e, idx)}
            onMouseLeave={() => resetCardTransform(idx)}
            onTouchStart={() => resetCardTransform(idx)}
            onClick={() => openImage(img, activeCategory.title)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") openImage(img, activeCategory.title);
            }}
            aria-label={`${activeCategory.title} image ${idx + 1}`}
          >
            <img
              src={img}
              alt={`${activeCategory.title} ${idx + 1}`}
              loading="lazy"
              decoding="async"
            />
            <div className="card-info">{activeCategory.title}</div>
          </div>
        ))}
      </div>

      {/* Modale d'aperçu */}
      {selectedImage && (
        <div className="modal" onClick={closeImage} role="presentation" aria-hidden="false">
          <div
            className="modal-box"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedImage.title} — aperçu`}
            onClick={(e) => e.stopPropagation()}
            ref={modalRef}
          >
            <button
              className="close-btn"
              aria-label="Fermer"
              onClick={closeImage}
              ref={closeBtnRef}
            >
              &times;
            </button>
            <img
              className="modal-content"
              src={selectedImage.src}
              alt={selectedImage.title}
              loading="eager"
              decoding="async"
            />
            <div className="modal-title">{selectedImage.title}</div>
          </div>
          
        </div>
      )}
    </div>
   
  );
}