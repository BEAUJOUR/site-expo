import React, { useState, useRef, useEffect } from "react";
import "../style/projet.css";

function importImages(context) {
  return context.keys().map(context);
}

const salle_de_bain = importImages(require.context("../assets/projets/salle_de_bain", false, /\.(jpg|jpeg|png|webp)$/));
const cuisinesImages = importImages(require.context("../assets/projets/cuisines", false, /\.(jpg|jpeg|png|webp)$/));
const salonsImages = importImages(require.context("../assets/projets/salons", false, /\.(jpg|jpeg|png|webp)$/));
const dressingsImages = importImages(require.context("../assets/projets/dressings", false, /\.(jpg|jpeg|png|webp)$/));
const meublesImages = importImages(require.context("../assets/projets/meubles", false, /\.(jpg|jpeg|png|webp)$/));

const categories = [
  { id: "meubles", title: "Galeries", images: meublesImages },
  { id: "salle_de_bain", title: "Salle de bain", images: salle_de_bain },
  { id: "cuisines", title: "Cuisines", images: cuisinesImages },
  { id: "salons", title: "Salons Expo", images: salonsImages },
  { id: "dressings", title: "Dressings", images: dressingsImages },
  
];

export default function Projet() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const cardRefs = useRef([]);
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);

  const activeCategory = categories[activeCategoryIndex];

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setSelectedImage(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.classList.add("modal-open");
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [selectedImage]);

  const openImage = (src, index) => setSelectedImage({ src, index });

  const closeImage = () => setSelectedImage(null);

  const nextImage = () => {
    const nextIndex = (selectedImage.index + 1) % activeCategory.images.length;
    setSelectedImage({ src: activeCategory.images[nextIndex], index: nextIndex });
  };

  const prevImage = () => {
    const prevIndex = (selectedImage.index - 1 + activeCategory.images.length) % activeCategory.images.length;
    setSelectedImage({ src: activeCategory.images[prevIndex], index: prevIndex });
  };

  return (
    <div className="projet-container">
      <h2>Découvrez Nos œuvres en Menuiserie</h2>

      <div className="category-slider">
        {categories.map((cat, idx) => (
          <button
            key={cat.id}
            className={`category-btn ${idx === activeCategoryIndex ? "active" : ""}`}
            onClick={() => setActiveCategoryIndex(idx)}
          >
            {cat.title}
          </button>
        ))}
      </div>

      <div className="gallery">
        {activeCategory.images.map((img, idx) => (
          <div
            key={idx}
            className="card"
            ref={(el) => (cardRefs.current[idx] = el)}
            onClick={() => openImage(img, idx)}
            tabIndex={0}
          >
            <img src={img} alt={`${activeCategory.title} ${idx + 1}`} loading="lazy" decoding="async" />
            <div className="card-info">{activeCategory.title}</div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeImage}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()} ref={modalRef}>
            <button className="close-btn" onClick={closeImage} ref={closeBtnRef}>
              &times;
            </button>
            <button className="modal-arrow left" onClick={prevImage}>&#10094;</button>
            <img className="modal-content" src={selectedImage.src} alt={activeCategory.title} />
            <button className="modal-arrow right" onClick={nextImage}>&#10095;</button>
            <div className="modal-title">{activeCategory.title}</div>
          </div>
        </div>
      )}
    </div>
  );
}