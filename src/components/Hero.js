import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import expo from "../assets/projets/salons/expo.png";
import image1 from "../assets/projets/salons/Reception_moderne_de_Expo_Europe_Rapide.png";
import image2 from "../assets/projets/cuisines/Cuisine_moderne_lumineuse.png";
import image3 from "../assets/projets/salons/moderne_avec_bureau_accueil.png";
import "./styles-component/hero.css";

export default function Hero() {
  const navigate = useNavigate();

  const [bgImage, setBgImage] = useState(expo);
  const [nextImage, setNextImage] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [showArrow, setShowArrow] = useState(true);

  // 🎯 Parallaxe inertielle
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // 🌀 Écoute souris
  useEffect(() => {
    const handleMouseMove = (e) => {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 4;
      target.current.y = (e.clientY / window.innerHeight - 0.5) * 4;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // ⚡ Interpolation fluide (inertie)
  useEffect(() => {
    let frame;
    const smoothFollow = () => {
      current.current.x += (target.current.x - current.current.x) * 0.05;
      current.current.y += (target.current.y - current.current.y) * 0.05;
      setParallax({ x: current.current.x, y: current.current.y });
      frame = requestAnimationFrame(smoothFollow);
    };
    smoothFollow();
    return () => cancelAnimationFrame(frame);
  }, []);

  // 🔻 Flèche disparaît quand on scrolle
  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY < 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <header className={`hero-fixed ${isReady ? "ready" : "loading"}`}>
      {/* Fond principal avec effet inertiel */}
      <div
        className={`hero-bg ${isReady ? "active" : "idle"}`}
        style={{
          backgroundImage: `url(${bgImage})`,
          transform: `scale(1.1) translate(${parallax.x}%, ${parallax.y}%)`,
        }}
      ></div>

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

        {/* ⬇️ Flèche scroll dorée animée */}
        {showArrow && (
          <div className="scroll-down" onClick={scrollDown}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 8 12 14 18 8" />
      <polyline points="6 13 12 19 18 13" />

            </svg>
          </div>
        )}
      </div>
    </header>
  );
}
