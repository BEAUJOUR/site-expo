// src/components/Hero.jsx
import "./styles-component/hero.css";

const bgImage = `${process.env.PUBLIC_URL}/image_acceuil.jpg`; // 👈 vient de public

export default function Hero() {
  return (
    <header className="hero-fixed hero-simple">
      {/* 🖼️ Image de fond depuis /public */}
      <div
        className="hero-bg hero-simple-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="hero-overlay hero-simple-overlay">
        <div className="hero-content hero-simple-content">
          <p className="hero-simple-text">
            Des stang aux intérieus sur mesure : Un savoir faire, deux univers
          </p>
        </div>
      </div>
    </header>
  );
}
