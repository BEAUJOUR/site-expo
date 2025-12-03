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
          <h1 className="hero-simple-text">
            Des stands aux intérieurs sur mesure : <br />Un savoir faire, deux univers
          </h1>
        </div>
      </div>
    </header>
  );
}
