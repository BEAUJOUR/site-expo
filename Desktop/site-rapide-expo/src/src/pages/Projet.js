





import React, { useState, useRef } from "react";


const categories = [
  {
    id: "portes",
    title: "Portes",
    images: [
      "https://img.freepik.com/vecteurs-premium/porte-ouverte-bois-vecteur-cadre-isole_212889-726.jpg",
      "https://png.pngtree.com/png-clipart/20240508/original/pngtree-closed-and-open-door-set-png-image_15045876.png",
      "https://st3.depositphotos.com/3405399/37465/i/450/depositphotos_374653756-stock-photo-yellow-door-isolated-white-background.jpg",
    
    ],
    },
  {
    id: "cuisines",
    title: "Cuisine",
    images: [
      "https://img.freepik.com/photos-gratuite/comptoir-cuisine-moderne-rendu-3d-design-blanc-beige_105762-2228.jpg",
      "https://img.freepik.com/photos-premium/design-interieur-cuisine-minimaliste-rendu-3d_674881-1059.jpg",
      "https://mir-s3-cdn-cf.behance.net/projects/404/129430215329435.Y3JvcCwxMDA3LDc4OCwxNDQsMA.jpg",
    ],
  },
   {
    id: "salons",
    title: "Salons",
    images: [
      "https://st3.depositphotos.com/15869754/18120/i/450/depositphotos_181206652-stock-photo-modern-bright-interiors-rendering-illustration.jpg",
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://st3.depositphotos.com/5028327/13547/i/450/depositphotos_135473662-stock-photo-modern-living-room-in-a.jpg",
    ],
  },
   {
    id: "dressings",
    title: "Dressins",
    images: [
      "https://media.istockphoto.com/id/482502897/fr/photo/int%C3%A9rieur-de-la-maison-moderne.jpg?s=612x612&w=0&k=20&c=RZTcrcZoLAt_1Fy0r0dp4qeopQU98WVWVtpB1KyP-So=",
      "https://images.pexels.com/photos/6782465/pexels-photo-6782465.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://cdn.pixabay.com/photo/2023/07/06/20/23/ai-generated-8111336_640.jpg",
    ],
  },
  {
    id: "meubles",
    title: "Meubles",
    images: [
      "https://media.istockphoto.com/id/1308740147/fr/photo/maquette-int%C3%A9rieure-de-mur-darmoire-de-tv-en-bois-dans-la-salle-vide-moderne-conception.jpg?s=612x612&w=0&k=20&c=Eok20kG4MmiG4fyu0ZqLnV45kEVlTYH30TbIMEmfmII=",
      "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://img.freepik.com/photos-premium/olive-moderne-simple-cuisine-verte-plancher-bois-rendu-3d_476612-3000.jpg?semt=ais_hybrid&w=740",
    ],
  },
];

export default function Projet() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const cardRefs = useRef([]);

  const activeCategory = categories[activeCategoryIndex];

  const handleMouseMove = (e, idx) => {
    const card = cardRefs.current[idx];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 3;
    const centerY = rect.height / 3;

    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.10)`;
  };

  const resetCardTransform = (idx) => {
    const card = cardRefs.current[idx];
    if (card) {
      card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    }
  };

  return (
    <div className="projet-container">
      <h2>Galerie Menuiserie</h2>

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
            onMouseMove={(e) => handleMouseMove(e, idx)}
            onMouseLeave={() => resetCardTransform(idx)}
            onClick={() => setSelectedImage({ src: img, title: activeCategory.title })}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") setSelectedImage({ src: img, title: activeCategory.title });
            }}
          >
            <img src={img} alt={`${activeCategory.title} ${idx + 1}`} />
            <div className="card-info">{activeCategory.title}</div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <span className="close-btn" onClick={() => setSelectedImage(null)}>&times;</span>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <img
              className="modal-content"
              src={selectedImage.src}
              alt="Affichage agrandi"
            />
            <div className="modal-title">{selectedImage.title}</div>
          </div>
        </div>
      )}
    </div>
  );
}
