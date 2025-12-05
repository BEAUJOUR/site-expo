import "../style/home.css";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import useScrollAnimation from "../hooks/useScrollAnimation";
import useCountOnVisible from "../hooks/useCountOnVisible";
import expo from "../assets/Atelier/ATELIER8.jpg";
import Hero from "../components/Hero";

function importAll(r) {
  return r.keys().map(r);
}

const imageUrls = importAll(
  require.context("../assets/galerie", false, /\.(png|jpe?g|webp)$/)
);
function StatItem({ value, label, suffix, speed }) {
  const [ref, count] = useCountOnVisible(value, speed);
  return (
    <div className="stat-item" ref={ref}>
      <span>
        {count}
        {suffix}
      </span>
      <p>{label}</p>
    </div>
  );
}

const Home = () => {
  // const navigate = useNavigate();

  useScrollAnimation(".fade-in-up", "fade-in-up-animate");
  useScrollAnimation(".fade-in-down", "fade-in-down-animate");
  useScrollAnimation(".fade-in-left", "fade-in-left-animate");
  useScrollAnimation(".fade-in-right", "fade-in-right-animate");
  useScrollAnimation(".fade-in-zoom", "fade-in-zoom-animate");

  return (
    <div className="home fade-in-up">
      <Hero />
      <section className="intro fade-in-down">
        <div className="container">
          {/* <h2 className="fade-in-up">??????????</h2> */}
          {/* <h2 className="fade-in-up">Votre espace, notre passion</h2> */}
          <p className="fade-in-left">
            Spécialisée dans la{" "}
            <strong>fabrication et la pose de stands publicitaires</strong>{" "}
            réalisés pour des <strong>bureaux d’études</strong> et destinés aux
            <strong> salons professionnels</strong>, en <strong>France</strong>{" "}
            et <strong>à l'international</strong>.
            <br />
            Nous intervenons également dans l’
            <strong>agencement d’espaces événementiels</strong>, de{" "}
            <strong> showrooms</strong> et de <strong>bureaux</strong>, en
            garantissant qualité, rigueur et respect des délais.
          </p>
          <p className="fade-in-right">
            En parallèle, notre activité d'
            <strong>agencement pour les particuliers</strong> comprend la{" "}
            <strong>conception et la réalisation sur mesure</strong> de{" "}
            <strong>cuisines, salles de bains, dressings et chambres</strong>,
            alliant <strong>design, fonctionnalité </strong>et{" "}
            <strong>savoir-faire artisanal</strong>.
          </p>
          {/* <p className="gallery-note fade-in-left">
            Veuillez nous{" "}
            <strong onClick={() => navigate("/contact")}>Contacter</strong>
          </p> */}
        </div>
      </section>
      {/* CHIFFRES CLÉS */}
      <section
        className="apropos-stats container section animate-on-scroll "
        aria-labelledby="chiffres"
      >
        <h2 id="chiffres" className="animate-on-scroll flipIn">
          Nos chiffres clés
        </h2>
        <div className="stats-grid">
          <StatItem
            value={25}
            label="Années d’expérience"
            suffix="+"
            speed={2500}
          />
          <StatItem
            value={500}
            label="Projets réalisés"
            suffix="+"
            speed={2500}
          />
          <StatItem
            value={300}
            label="Clients satisfaits"
            suffix="+"
            speed={2500}
          />
        </div>
      </section>

      <section className="suggestions fade-in-left">
        <div >
          <h2 className="fade-in-up">Visitez nos pages :</h2>

          {/* GALERIE CLIQUABLE – CÔTE À CÔTE */}
          <div className="gallery-grid">
            <Link
              to="/evenement"
              className="gallery-item fade-in-zoom gallery-link"
            >
              <h3 className="gallery-caption">Événementiel</h3>

              <img
                src={imageUrls[0]}
                alt="Réalisation événementielle"
                className="gallery-image"
              />
            </Link>

            <Link
              to="/agencement"
              className="gallery-item fade-in-zoom gallery-link"
            >
              <h3 className="gallery-caption">Agencement</h3>

              <img
                src={imageUrls[1]}
                alt="Réalisation Agencement"
                className="gallery-image"
              />
            </Link>
            <Link
              to="/quisommesnous"
              className="gallery-item fade-in-zoom gallery-link"
            >
              <h3 className="gallery-caption">Qui sommes-nous ?</h3>

              <img
                src={expo}
                alt="Réalisation Agencement"
                className="gallery-image"
              />
            </Link>
          </div>
          {/* <div className="">
          {" "}
          <Link
            to="/quisommesnous"
            className="extra-block fade-in-up extra-link extra-text "
          >
            <h3 className="gallery-item">Qui sommes-nous ?</h3>

            <img
              src={expo}
              alt="Présentation"
              className="extra-image gallery-item"
            />
          </Link>
        </div> */}
        </div>

        
      </section>
    </div>
  );
};

export default Home;
