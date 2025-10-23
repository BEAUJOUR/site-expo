import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import expo from "../assets/projets/salons/expo.png";
import image1 from "../assets/projets/salons/Reception_moderne_de_Expo_Europe_Rapide.png";
import image2 from "../assets/projets/cuisines/Cuisine_moderne_lumineuse.png";
import image3 from "../assets/projets/salons/moderne_avec_bureau_accueil.png";
import { ChevronDown } from "lucide-react"; // ✅ icône flèche moderne
import "./styles-component/hero.css";

export default function Hero() {
  const navigate = useNavigate();
  const [bgImage, setBgImage] = useState(expo);
  const [nextImage, setNextImage] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const miniCards = [
    { id: 1, src: image1, label: "Stand", alt: "Stand design" },
    { id: 2, src: image2, label: "Cuisine", alt: "Cuisine expo" },
    { id: 3, src: image3, label: "Showroom", alt: "Showroom intérieur" },
  ];

  const handleChangeBackground = (src) => {
    if (src !== bgImage && isReady) {
      setNextImage(src);
      setTimeout(() => {
        setBgImage(src);
        setNextImage(null);
      }, 800);
    }
  };

  // ✅ Fonction scroll fluide
  const scrollToNext = () => {
    const nextSection = document.querySelector("#realisations");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`hero-fixed ${isReady ? "ready" : "loading"}`}>
      {/* Fond principal */}
      <div
        className={`hero-bg ${isReady ? "active" : "idle"}`}
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Transition + flash doré */}
      {isReady && nextImage && (
        <div
          className="hero-bg fade-layer"
          style={{ backgroundImage: `url(${nextImage})` }}
        ></div>
      )}

      <div className="hero-overlay">
        <div className="hero-content">
          <h1>EUROPE RAPIDE EXPO</h1>
          <p>Des créations sur mesure qui donnent vie à vos espaces.</p>
          <p>Explorez nos expositions uniques et laissez-vous inspirer.</p>

          <div className="cta-button">
            <button onClick={() => navigate("/contact")}>Contactez-nous</button>
          </div>
        </div>

        {/* Mini cartes interactives */}
        <div className="hero-thumbnails">
          {miniCards.map((img) => (
            <div
              key={img.id}
              className="thumb-card"
              onClick={() => handleChangeBackground(img.src)}
            >
              <div className="flip-inner">
                <div className="flip-front">
                  <img src={img.src} alt={img.alt} />
                  <span>{img.label}</span>
                </div>
                <div
                  className="flip-back"
                  style={{ backgroundImage: `url(${img.src})` }}
                >
                  <span>Voir fond</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Bouton scroll vers la section suivante */}
      <div className="scroll-down" onClick={scrollToNext}>
        <ChevronDown size={36} strokeWidth={2.5} />
      </div>
    </header>
  );
}
