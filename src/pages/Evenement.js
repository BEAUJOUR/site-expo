// src/pages/Evenement.js

import "../style/evenement.css";
import headerImg from "../assets/projets/salons/expo.png";

// 🟦 Fonction Webpack pour charger un dossier complet
function importAll(r) {
  return r.keys().map(r);
}

// 🟦 Charge toutes les images du dossier /assets/evenements
const gallery = importAll(
  require.context("../assets/evenement", false, /\.(png|jpe?g|webp)$/)
);

export default function Evenement() {
  return (
    <div className="event-page">
      {/* ===== HEADER ===== */}
      <header
        className="event-header"
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <div className="overlay">
          <h1 className="event-title">
            Rigueur, qualité, expérience : Notre engagement depuis 25 ans.{" "}
          </h1>
        </div>
      </header>

      {/* ===== SECTION TEXTE ===== */}
      <section className="event-section">
        <div className="event-text-block">
          {/* <h2>??????????????????????????????</h2> */}
          <p>
            Nous vous proposons des projets clés en main réalisés par une équipe
            investie et dynamique, qui mettra son professionnalisme à votre
            service, dans le respect des exigences de qualité, de délais et de
            finition.{" "}
          </p>

          {/* <p>
            Europe Rapide Expo crée des installations professionnelles élégantes
            et sur-mesure pour vos expositions, stands et présentations.
          </p>
          <p>
            Chaque réalisation reflète votre identité, votre image et votre
            excellence.
          </p> */}
        </div>
      </section>

      {/* ===== GALERIE ===== */}
      <section className="event-gallery-section">
        <h2 className="gallery-title">Galerie photos :</h2>

        <div className="masonry">
          {gallery.map((src, idx) => (
            <div className="masonry-item" key={idx}>
              <img src={src} alt={"event " + idx} loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
