import React from "react";
import "../style/home.css";
import { useNavigate } from "react-router-dom";
import expo from"../assets/chantier/expo.png"
function importAll(r) {
  return r.keys().map(r);
}

const imageUrls = importAll(
  require.context("../assets/galerie", false, /\.(png|jpe?g|webp)$/)
);


const Home = () => {
  const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("/contact");
  // }
  return (
    <div className="home">
      <header
        className="hero"
        data-aos="fade-left"
      >
        {/* <video className="background-video" autoPlay loop muted playsInline>
          <source
            src="https://www.shutterstock.com/shutterstock/videos/1093664035/preview/stock-footage-handsome-young-artisan-craftsman-in-checkered-shirt-using-hand-plane-to-shape-a-wood-bar-carpenter.webm"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video> */}
        <img
          className="background-video background-image"
          src={expo}
          alt="image_exposition"
        />

        <div class="overlay">
          <div
            class="hero-content mozart"
           
          >
            <h1 class="hero-title cafe-inner">EUROPE RAPIDE EXPO</h1>
            <p class="hero-subtitle mozart">
              Des créations sur mesure qui donnent vie à vos espaces
            </p>
            <p class="hero-description mozart">
              Explorez nos expositions uniques et laissez-vous inspirer par
              l’innovation.
            </p>
            <div class="cta-button mozart">
              <button onClick={() => navigate("/contact")}>
                Contactez-nous
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="intro">
        <div className="container">
          <h2
           
          >
            Votre espace, notre passion
          </h2>
          <p>
            Depuis plus de 20 ans, notre entreprise accompagne particuliers et
            professionnels dans la réalisation de leurs projets d’agencement
            intérieur et de menuiserie sur mesure. Alliant savoir-faire
            artisanal et innovation, nous créons des espaces fonctionnels,
            esthétiques et durables.
          </p>
          <p >
            Que vous rêviez d’une cuisine chaleureuse, d’un bureau optimisé ou
            d’un mobilier unique, notre équipe met tout en œuvre pour
            concrétiser vos envies avec rigueur et créativité.
          </p>
          <p className="gallery-note">
            Veuillez nous{" "}
            <strong onClick={() => navigate("/contact")}>Contacter</strong>
          </p>
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <h2>Nos domaines d’expertise</h2>
          <p >
            Nous proposons une large gamme de prestations adaptées à vos besoins
            :
          </p>
          <ul>
            <li>
              Agencement d’intérieur personnalisé : optimisation et design de
              vos espaces de vie et de travail
            </li>
            <li>
              Menuiserie artisanale : création de mobilier, dressings,
              escaliers, menuiseries sur mesure
            </li>
            <li>
              Conseil & accompagnement : de l’étude à la réalisation, un suivi
              complet et personnalisé
            </li>
          </ul>
          <p>
            Découvrez en détail toutes nos prestations sur la page{" "}
            <strong onClick={() => navigate("/services")}>Services</strong>
          </p>
        </div>
      </section>

      <section className="suggestions">
      <div className="container">
        <h2>Galerie inspiration</h2>
        <p>
          Parcourez une sélection de nos réalisations et laissez-vous inspirer
          par la diversité de nos créations.
        </p>

        <div className="gallery">
          {imageUrls.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Réalisation ${index + 1}`}
              loading="lazy"
              style={{ width: "100%", maxWidth: "400px", borderRadius: "8px" }}
            />
          ))}
        </div>

        <p className="gallery-note">
          Retrouvez l’ensemble de nos projets sur la page{" "}
          <strong onClick={() => navigate("/projet")}>Réalisations</strong>
        </p>
      </div>
    </section>

      <section className="values">
        <div className="container">
          <h2>Pourquoi choisir notre entreprise ?</h2>
          <div
            className="values-list">
            <article>
              <h3>Qualité artisanale</h3>
              <p>
                Chaque projet est une création unique, réalisée avec soin et
                précision par nos artisans qualifiés.
              </p>
            </article>
            <article>
              <h3>Design personnalisé</h3>
              <p>
                Nous adaptons nos solutions à vos goûts et contraintes pour un
                résultat à la fois esthétique et fonctionnel.
              </p>
            </article>
            <article>
              <h3>Respect des délais</h3>
              <p>
                Une gestion rigoureuse garantit la livraison dans les temps
                convenus, sans compromis sur la qualité.
              </p>
            </article>
            <article>
              <h3>Engagement durable</h3>
              <p>
                Nous privilégions des matériaux écologiques et des techniques
                responsables pour des aménagements durables.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
