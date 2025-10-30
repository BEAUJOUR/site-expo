import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../style/projet.css";

// === UTILS ===
const byName = (a, b) => a.localeCompare(b);
const basename = (p) => p.split("/").pop().replace("_thumb.webp", "");

/** mappe { name, thumb, full } */
function mapThumbsAndFull(thumbCtx, fullCtx) {
  const thumbs = thumbCtx.keys().sort(byName);
  const fulls = fullCtx.keys().sort(byName);
  const result = [];

  for (const thumbKey of thumbs) {
    const base = basename(thumbKey);
    const fullMatch = fulls.find((f) => f.includes(base));
    if (fullMatch) {
      result.push({
        name: base,
        thumb: thumbCtx(thumbKey),
        full: fullCtx(fullMatch),
      });
    }
  }
  return result;
}

// === IMPORTS IMAGES ===
const cuisinesImages = mapThumbsAndFull(
  require.context("../assets/projets/cuisines/thumbs", false, /\.(webp)$/i),
  require.context("../assets/projets/cuisines/fixed", false, /\.(jpg|jpeg|png|webp)$/i)
);

const salonsImages = mapThumbsAndFull(
  require.context("../assets/projets/salons/thumbs", false, /\.(webp)$/i),
  require.context("../assets/projets/salons", false, /\.(jpg|jpeg|png|webp)$/i)
);
const meublesImages = mapThumbsAndFull(
  require.context("../assets/projets/meubles/thumbs", false, /\.(webp)$/i),
  require.context("../assets/projets/meubles/fixed", false, /\.(jpg|jpeg|png|webp)$/i)
);
const dressingsImages = mapThumbsAndFull(
  require.context("../assets/projets/dressings/thumbs", false, /\.(webp)$/i),
  require.context("../assets/projets/dressings/fixed", false, /\.(jpg|jpeg|png|webp)$/i)
);
const salle_de_bain = mapThumbsAndFull(
  require.context("../assets/projets/salle_de_bain/thumbs", false, /\.(webp)$/i),
  require.context("../assets/projets/salle_de_bain/fixed", false, /\.(jpg|jpeg|png|webp)$/i)
);

const categories = [
  { id: "meubles", title: "Galeries", images: meublesImages },
  { id: "salle_de_bain", title: "Salle de bain", images: salle_de_bain },
  { id: "cuisines", title: "Cuisines", images: cuisinesImages },
  { id: "salons", title: "Salons Expo", images: salonsImages },
  { id: "dressings", title: "Dressings", images: dressingsImages },
];

// === COMPONENT ===
export default function Projet() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryKey, setGalleryKey] = useState(0);
  const [imageTransition, setImageTransition] = useState("");
  const closeBtnRef = useRef(null);
  const navigate = useNavigate();

  const activeCategory = categories[activeCategoryIndex];

  // ✅ Définir les fonctions avant le useEffect
  const nextImage = useCallback(() => {
    if (!selectedImage) return;
    const nextIndex = (selectedImage.index + 1) % activeCategory.images.length;
    setImageTransition("left");
    setSelectedImage({
      full: activeCategory.images[nextIndex].full,
      index: nextIndex,
    });
  }, [selectedImage, activeCategory]);

  const prevImage = useCallback(() => {
    if (!selectedImage) return;
    const prevIndex =
      (selectedImage.index - 1 + activeCategory.images.length) %
      activeCategory.images.length;
    setImageTransition("right");
    setSelectedImage({
      full: activeCategory.images[prevIndex].full,
      index: prevIndex,
    });
  }, [selectedImage, activeCategory]);

  // ✅ useEffect après les fonctions
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
      if (!selectedImage) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedImage, activeCategoryIndex, nextImage, prevImage]);

  useEffect(() => {
    if (selectedImage) {
      document.body.classList.add("modal-open");
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [selectedImage]);

  const openImage = (full, index) => {
    setSelectedImage({ full, index });
    setImageTransition("");
  };

  const closeImage = useCallback(() => setSelectedImage(null), []);

  return (
    <div className="projet-container">
      <h2>Découvrez Nos œuvres en Menuiserie</h2>

      <div className="category-slider" role="tablist" aria-label="Catégories">
        {categories.map((cat, idx) => {
          const isActive = idx === activeCategoryIndex;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              className={`category-btn ${isActive ? "active" : ""}`}
              onClick={() => {
                setActiveCategoryIndex(idx);
                setGalleryKey((prev) => prev + 1);
              }}
            >
              {cat.title}
            </button>
          );
        })}
      </div>

      {/* Galerie avec miniatures */}
      <div key={galleryKey} className="gallery">
        {activeCategory.images.map((img, idx) => (
          <div
            key={img.name + idx}
            className="card"
            onClick={() => openImage(img.full, idx)}
            tabIndex={0}
            role="button"
            aria-label={`${activeCategory.title} ${idx + 1}`}
          >
            <img
              src={img.thumb}
              srcSet={`${img.thumb} 1x, ${img.full} 2x`}
              alt={`${activeCategory.title} ${idx + 1}`}
              loading="lazy"
              decoding="async"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
                imageRendering: "auto",
              }}
            />
            <div className="card-info">{activeCategory.title}</div>
          </div>
        ))}
      </div>

      {/* Modale plein écran */}
      {selectedImage && (
        <div
          className="modal"
          onClick={closeImage}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={closeImage}
              ref={closeBtnRef}
              aria-label="Fermer l’image"
            >
              &times;
            </button>

            <button
              className="modal-arrow left"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              &#10094;
            </button>

            <img
              className={`modal-content ${
                imageTransition === "left"
                  ? "slide-left"
                  : imageTransition === "right"
                  ? "slide-right"
                  : ""
              }`}
              src={selectedImage.full}
              alt={`${activeCategory.title} ${selectedImage.index + 1}`}
              onAnimationEnd={() => setImageTransition("")}
              style={{
                maxWidth: "min(90vw, 1600px)",
                maxHeight: "85vh",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                imageRendering: "auto",
                transform: "none",
                backfaceVisibility: "hidden",
                filter: "contrast(104%) saturate(105%) brightness(103%)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
              }}
            />

            <button
              className="modal-arrow right"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              &#10095;
            </button>

            <div id="modal-title" className="modal-title">
              {activeCategory.title}
            </div>
          </div>
        </div>
      )}

      <section className="cta-projet">
        <h2>Passez de l’idée à l’action</h2>
        <p>Des idées ? Nous les transformons en réalisations sur mesure.</p>
        <button onClick={() => navigate("/contact")}>Contactez-nous</button>
      </section>
    </div>
  );
}
