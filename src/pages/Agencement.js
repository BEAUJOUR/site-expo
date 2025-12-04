// Fichier : src/pages/Agencement.js

import useScrollAnimation from "../hooks/useScrollAnimation";
// import useCountOnVisible from "../hooks/useCountOnVisible";
import "../style/agencement.css";
import ImageApropos from "../assets/projets/cuisines/fixed/Cuisine_moderne_avec_île_en_marbre.webp";

function importAll(r) {
  return r.keys().map((key) => ({
    src: r(key),
    alt: key
      .split("/")
      .pop()
      .replace(/\.[^/.]+$/, "")
      .replace(/_/g, " "),
  }));
}

const images = importAll(
  require.context("../assets/Img-apropos/thumbs", false, /\.(png|jpe?g|webp)$/)
);
// const img = importAll(
//   require.context("../assets/img", false, /\.(png|jpe?g|webp)$/)
// );

const Agencement = () => {
  useScrollAnimation(".animate-on-scroll", "visible");
  return (
    <>
      {/* HERO */}
      <header
        className="apropos-hero animate-on-scroll fade-in-up"
        style={{ backgroundImage: `url(${ImageApropos})` }}
      >
        <div className="overlay">
          <h1 className="animate-on-scroll fade-in-down">
            De la conception à la réalisation : l'art de fabriquer l'espace.
          </h1>
        </div>
      </header>
      <main
        className="apropos"
        role="main"
        aria-label="Page À propos Europe Rapide Expo"
      >
        <div id="apropos-content">
          {/* HISTOIRE */}
          <section
            className="container section animate-on-scroll fade-in-left"
            aria-labelledby="histoire"
          >
            {/* <h2 className="animate-on-scroll flipIn">???????????????</h2> */}
            <p className="animate-on-scroll fade-in-up">
              Des vusiels 3D, au choix des matériaux,
             
              nous concevons et installons vos espaces de vie avec
              
              une attention particulière portée à l'esthétique,
              à la fonctionnalité et à la qualité afin de sublimer
               vos intérieurs
            </p>
          </section>

          {/* <section
            className="apropos-gallery container section animate-on-scroll fade-in-up"
            aria-labelledby="galerie"
          >
            <h2 className="animate-on-scroll flipIn">Nos projets :</h2>
            <br />
            <div className="gallery">
              {img.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={img.alt || `Photo de réalisation ${index + 1}`}
                  loading="lazy"
                  className="animate-on-scroll blurIn"
                  tabIndex="0"
                />
              ))}
            </div>
          </section> */}
          {/* GALERIE */}
          <section
            className="apropos-gallery container section animate-on-scroll fade-in-up"
            aria-labelledby="galerie"
          >
            <h2 className="animate-on-scroll flipIn">Galerie photos :</h2>
            <br />
            <div className="gallery">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={img.alt || `Photo de réalisation ${index + 1}`}
                  loading="lazy"
                  className="animate-on-scroll blurIn"
                  tabIndex="0"
                />
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="apropos-cta container section animate-on-scroll fade-in-up">
            <h2>Prêts à donner vie à vos idées ?</h2>
            <p>
              Notre équipe vous accompagne de la conception à la réalisation.
            </p>
            <button onClick={() => (window.location.href = "/contact")}>
              Contactez-nous
            </button>
          </section>
        </div>
      
      </main>
    </>
  );
};

export default Agencement;
