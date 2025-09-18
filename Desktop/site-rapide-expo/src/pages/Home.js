import "../style/home.css";
import { useNavigate } from "react-router-dom";
import useScrollAnimation from "../hooks/useScrollAnimation";
import expo from "../assets/chantier/expo.png";

function importAll(r) {
  return r.keys().map(r);
}

const imageUrls = importAll(
  require.context("../assets/galerie", false, /\.(png|jpe?g|webp)$/)
);

const Home = () => {
  const navigate = useNavigate();

  useScrollAnimation(".fade-in-up", "fade-in-up-animate");
  useScrollAnimation(".fade-in-down", "fade-in-down-animate");
  useScrollAnimation(".fade-in-left", "fade-in-left-animate");
  useScrollAnimation(".fade-in-right", "fade-in-right-animate");
  useScrollAnimation(".fade-in-zoom", "fade-in-zoom-animate");

  return (
    <div className="home fade-in-up">
      <header className="hero fade-in-left-animate">
  <div
    className="background-layer"
    style={{
      backgroundImage: `url(${expo})`,
    }}
  ></div>
  <div className="overlay fade-in-zoom-animate">
    <div className="hero-content fade-in-up-animate">
      <h1 className="fade-in-up-animate">EUROPE RAPIDE EXPO</h1>
      <p className="fade-in-left-animate">
        Des créations sur mesure qui donnent vie à vos espaces
      </p>
      <p className="fade-in-right-animate">
        Explorez nos expositions uniques et laissez-vous inspirer par
        l’innovation.
      </p>
      <div className="cta-button fade-in-zoom-animate">
        <button onClick={() => navigate("/contact")}>Contactez-nous</button>
      </div>
    </div>
  </div>
</header>

      <section className="intro fade-in-down">
        <div className="container">
          <h2 className="fade-in-left">Votre espace, notre passion</h2>
          <p className="fade-in-up">
            Depuis plus de 20 ans, notre entreprise accompagne particuliers et
            professionnels dans la réalisation de leurs projets d’agencement
            intérieur et de menuiserie sur mesure. Alliant savoir-faire
            artisanal et innovation, nous créons des espaces fonctionnels,
            esthétiques et durables.
          </p>
          <p className="fade-in-right">
            Que vous rêviez d’une cuisine chaleureuse, d’un bureau optimisé ou
            d’un mobilier unique, notre équipe met tout en œuvre pour
            concrétiser vos envies avec rigueur et créativité.
          </p>
          <p className="gallery-note fade-in-left">
            Veuillez nous <strong onClick={() => navigate("/contact")}>Contacter</strong>
          </p>
        </div>
      </section>

      <section className="services-preview fade-in-up">
        <div className="container">
          <h2 className="fade-in-up">Nos domaines d’expertise</h2>
          <p className="fade-in-left">
            Nous proposons une large gamme de prestations adaptées à vos besoins :
          </p>
          <ul>
            <li className="fade-in-right">
              Agencement d’intérieur personnalisé : optimisation et design de vos
              espaces de vie et de travail
            </li>
            <li className="fade-in-left">
              Menuiserie artisanale : création de mobilier, dressings, escaliers,
              menuiseries sur mesure
            </li>
            <li className="fade-in-right">
              Conseil & accompagnement : de l’étude à la réalisation, un suivi
              complet et personnalisé
            </li>
          </ul>
          <p className="fade-in-up">
            Découvrez en détail toutes nos prestations sur la page
            <strong onClick={() => navigate("/services")}> Services</strong>
          </p>
        </div>
      </section>

      <section className="suggestions fade-in-left">
        <div className="container">
          <h2 className="fade-in-up">Galerie inspiration</h2>
          <p className="fade-in-right">
            Parcourez une sélection de nos réalisations et laissez-vous inspirer
            par la diversité de nos créations.
          </p>

          <div className="gallery">
            {imageUrls.map((src, index) => (
              <img
                key={index}
                className="fade-in-zoom"
                src={src}
                alt={`Réalisation ${index + 1}`}
                loading="lazy"
                style={{ width: "100%", maxWidth: "400px", borderRadius: "8px" }}
              />
            ))}
          </div>

          <p className="gallery-note fade-in-up">
            Retrouvez l’ensemble de nos projets sur la page
            <strong onClick={() => navigate("/projet")}> Réalisations</strong>
          </p>
        </div>
      </section>

      <section className="values fade-in-right">
        <div className="container">
          <h2 className="fade-in-up">Pourquoi choisir notre entreprise ?</h2>
          <div className="values-list">
            <article className="fade-in-left">
              <h3>Qualité artisanale</h3>
              <p>
                Chaque projet est une création unique, réalisée avec soin et
                précision par nos artisans qualifiés.
              </p>
            </article>
            <article className="fade-in-up">
              <h3>Design personnalisé</h3>
              <p>
                Nous adaptons nos solutions à vos goûts et contraintes pour un
                résultat à la fois esthétique et fonctionnel.
              </p>
            </article>
            <article className="fade-in-down">
              <h3>Respect des délais</h3>
              <p>
                Une gestion rigoureuse garantit la livraison dans les temps
                convenus, sans compromis sur la qualité.
              </p>
            </article>
            <article className="fade-in-right">
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
