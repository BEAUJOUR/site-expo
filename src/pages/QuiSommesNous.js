import "../style/qui.css";
import headerImg from "../assets/Atelier/ATELIER8.jpg";
import atelier1 from "../assets/Atelier/IMG_1092.JPG";
import atelier2 from "../assets/Atelier/IMG-20251203-WA0003.jpg";
import atelier3 from "../assets/Atelier/Camion.JPG";
// import atelier4 from "../assets//Atelier/1.jpg";
import atelier5 from "../assets/Atelier/image002.jpg";
import atelier6 from "../assets/Atelier/IMG-20251203-WA0004.jpg";
import atelier7 from "../assets/Atelier/IMG_1264.JPG";
import Testimonials from "../components/Testimonials";
import Geolocalisation from "../components/Geolocalisation";

export default function QuiSommesNous() {
  return (
    <div className="about-page">
      {/* =======================
          HEADER / HERO
      ======================== */}
      <header
        className="about-header"
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <div className="overlay">
        
          <h1 className="about-title">Votre projet mérite l’excellence.</h1>

         
        </div>
      </header>

      {/* =======================
          SECTION — NOTRE STRUCTURE
      ======================== */}
      <section className="about-section fade-in">
        {/* <h2>Notre structure</h2> */}
         <p>
            Forts de plus de <strong>25 ans d’expérience</strong>, nous mettons
            en œuvre un <strong>savoir-faire reconnu</strong> et une véritable
            <strong> culture du travail bien fait</strong> pour accompagner nos
            clients et partenaires dans la réussite de leurs projets, qu’ils
            soient <strong>professionnels ou privés</strong>.
          </p>

        {/* <p>
          Notre atelier de <strong>800 m²</strong>, équipé d’un parc de machines
          complet, nous permet de fabriquer avec précision tous types d’éléments
          sur mesure.
        </p>

        <p>
          Un espace de stockage de <strong>1 300 m²</strong> et notre service
          interne de <strong>transport et logistique </strong> garantissent une
          gestion optimale et continue de chaque projet, du lancement jusqu’à la
          livraison finale.
        </p>

        <p>
          Nous mettons un point d’honneur à offrir à nos clients une
          organisation fiable, réactive et adaptée aux contraintes techniques et
          aux délais serrés.
        </p> */}
      </section>

      <section className="atelier-wrapper">
        {/* <h2>?????????????</h2> */}
        {/* <h2>Notre atelier et capacités</h2> */}

        {/* Ligne 1 : Texte gauche / Image droite */}
        <div className="atelier-row atelier">
          <div className="atelier-text">
            <p>
              Notre atelier de <strong>800 m²</strong> équipé pour la
              fabrication sur mesure de toutes vos structures.
            </p>
          </div>
          <img src={atelier1} className="atelier-img" alt="Atelier 800 m²" />
        </div>

        {/* Ligne 2 : Image gauche / Texte droite */}
        <div className="atelier-row reverse atelier">
          <div className="atelier-text">
            <p>
              Notre parc de machines professionnel permettant précision et
              rapidité d’exécution.
            </p>
          </div>
          <img src={atelier2} className="atelier-img " alt="Parc machines" />
        </div>

        {/* Ligne 3 : Texte gauche / Image droite */}
        <div className="atelier-row atelier">
          <div className="atelier-text">
            <p>
              Montage à blanc en atelier pour garantir des assemblages
              précis et des alignements parfaits avant la pose sur site.
            </p>
          </div>
          <img src={atelier7} className="atelier-img" alt="Stockage 1300 m²" />
        </div>
        {/* Ligne 3 : Texte gauche / Image droite */}
        <div className="atelier-row reverse atelier">
          <div className="atelier-text">
            <p>
              Un espace de stockage de <strong>1300 m²</strong> garantissant une
              gestion fluide.
            </p>
          </div>
          <img src={atelier6} className="atelier-img" alt="Stockage 1300 m²" />
        </div>

        <div className="atelier-row  atelier">
          <div className="atelier-text">
            <p>
              Service de <strong>transport et de logistique</strong> nous permettant d'offrir à
              nos clients une gestion optimale et longitudinale de chaque
              projet.
            </p>
          </div>
          <img src={atelier3} className="atelier-img" alt="Atelier 800 m²" />
        </div>
        <div className="atelier-row reverse atelier">
          <div className="atelier-text">
            <p>
             Là où la machine s’arrête, nos menuisiers apportent précision et savoir-faire.
            </p>
          </div>
          <img src={atelier5} className="atelier-img" alt="Atelier 800 m²" />
        </div>
      </section>

      <Testimonials />

      {/* =======================
          IMAGES ATELIER
      ======================== */}
      {/* <section className="about-image-section fade-in">
        <img
          src={atelier5}
          alt="Atelier Europe Rapide Expo"
          className="about-big-image"
        />
        <img
          src={atelier4}
          alt="Atelier Europe Rapide Expo"
          className="about-big-image"
        />
      </section> */}
      {/* CTA */}
      <section className="apropos-cta container section animate-on-scroll ">
        <h2>Prêts à donner vie à vos idées ?</h2>
        <p>Notre équipe vous accompagne de la conception à la réalisation.</p>
        <button onClick={() => (window.location.href = "/contact")}>
          Contactez-nous
        </button>
      </section>
      <Geolocalisation />
    </div>
  );
}
