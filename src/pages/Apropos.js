// Fichier : src/pages/Apropos.jsx

import useScrollAnimation from "../hooks/useScrollAnimation";
// import useCountOnVisible from "../hooks/useCountOnVisible";
import "../style/apropos.css";
import ImageApropos from "../assets/Atelier/ATELIER10.jpg";


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
  require.context("../assets/Img-apropos", false, /\.(png|jpe?g|webp)$/)
);
const img= importAll(
  require.context("../assets/img", false, /\.(png|jpe?g|webp)$/)
);

const Apropos = () => {
  useScrollAnimation(".animate-on-scroll", "visible");
  return (
    <>
      {/* HERO */}
      <header className="apropos-hero animate-on-scroll fade-in-up" style={{ backgroundImage: `url(${ImageApropos})` }}>
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
            <h2 className="animate-on-scroll flipIn">
              ???????????????
            </h2>
            <p className="animate-on-scroll fade-in-up">
              Des ???????? 3D, au choix des matériaux.
              <br />
              Nous concevons et installons vos espaces de vie avec
              <br />
              Une attention particulière portée à l'esthétique
              <br /> à la fonctionnalité et à la qualité afin de sublimer
              <br /> vos intérieurs
            </p>
          </section>

          {/* CHIFFRES CLÉS */}
          {/* <section
        className="apropos-stats container section animate-on-scroll fade-in-up"
        aria-labelledby="chiffres"
      >
        <h2 id="chiffres" className="animate-on-scroll flipIn">
          Nos chiffres clés
        </h2>
        <div className="stats-grid">
          <StatItem value={25} label="Années d’expérience" suffix="+" speed={2500}/>
          <StatItem value={500} label="Projets réalisés" suffix="+" speed={2500}/>
          <StatItem value={300} label="Clients satisfaits" suffix="+" speed={2500}/>
        </div>
      </section> */}
   <section
            className="apropos-gallery container section animate-on-scroll fade-in-up"
            aria-labelledby="galerie"
          >
            <h2  className="animate-on-scroll flipIn">
              ?????????????????
            </h2>
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
          </section>
          {/* GALERIE */}
          <section
            className="apropos-gallery container section animate-on-scroll fade-in-up"
            aria-labelledby="galerie"
          >
            <h2  className="animate-on-scroll flipIn">
              ?????????????????
            </h2>
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

          {/* LOCALISATION */}
          <section className="apropos-location container section animate-on-scroll fade-in-up">
            <h2 className="animate-on-scroll fade-in-down">
              Vous nous trouver ici
            </h2>
            <div className="map-container animate-on-scroll growIn">
              <iframe
                title="Europe Rapide Expo"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1830.0893106115652!2d2.446855870950003!3d48.56184103677699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5dbb47bbdce1d%3A0x82c7bdcd66fe3bf0!2sEurope%20Rapide%20Expo!5e1!3m2!1sfr!2sfr!4v1751613272043!5m2!1sfr!2sfr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Apropos;
