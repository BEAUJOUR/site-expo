import React from "react";
import "../style/qui.css";

import headerImg from "../assets/Atelier/ATELIER8.jpg";
import atelier1 from "../assets/Atelier/IMG_1093.JPG";
import atelier2 from "../assets/Atelier/IMG_1098.JPG";
import atelier3 from "../assets/Atelier/IMG_7254.JPG";
import atelier4 from "../assets//Atelier/1.jpg";
import atelier5 from "../assets/Atelier/image002.jpg";
import Testimonials from "../components/Testimonials";

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
          <h1 className="about-title"> ??????????????</h1>
          {/* <h1 className="about-title">Qui sommes-nous ?</h1> */}

          <p className="texte-header">
            Forts de plus de <strong>25 ans d’expérience</strong>, nous mettons
            en œuvre un <strong>savoir-faire reconnu</strong> et une véritable
            <strong> culture du travail bien fait</strong> pour accompagner nos
            clients et partenaires dans la réussite de leurs projets, qu’ils
            soient <strong>professionnels ou privés</strong>.
          </p>
        </div>
      </header>

      {/* =======================
          SECTION — NOTRE STRUCTURE
      ======================== */}
      <section className="about-section fade-in">
        <h2>???????????????</h2>
        {/* <h2>Notre atelier & nos moyens</h2> */}

        <p>
          Notre atelier de <strong>800 m²</strong>, équipé d’un parc de machines
          complet, nous permet de fabriquer avec précision tous types d’éléments
          sur-mesure.
        </p>

        <p>
          Un espace de stockage de <strong>1 300 m²</strong> et notre service
          interne de <strong>logistique & transport</strong> garantissent une
          gestion optimale et continue de chaque projet, du lancement jusqu’à la
          livraison finale.
        </p>

        <p>
          Nous mettons un point d’honneur à offrir à nos clients une
          organisation fiable, réactive et adaptée aux contraintes techniques et
          aux délais serrés.
        </p>
      </section>

      <section className="atelier-wrapper">
        <h2>?????????????</h2>
        {/* <h2>Notre atelier et capacités</h2> */}

        {/* Ligne 1 : Texte gauche / Image droite */}
        <div className="atelier-row atelier" >
          <div className="atelier-text">
            <p>
              Notre atelier de <strong>800 m²</strong> équipé pour la
              fabrication sur-mesure de toutes vos structures.
            </p>
          </div>
          <img src={atelier1} className="atelier-img" alt="Atelier 800 m²" />
        </div>

        {/* Ligne 2 : Image gauche / Texte droite */}
        <div className="atelier-row reverse atelier">
          <div className="atelier-text">
            <p>
              Un parc de machines professionnel permettant précision et
              rapidité.
            </p>
          </div>
          <img src={atelier2} className="atelier-img " alt="Parc machines" />
        </div>

        {/* Ligne 3 : Texte gauche / Image droite */}
        <div className="atelier-row atelier" >
          <div className="atelier-text">
            <p>
              Un espace de stockage de <strong>1300 m²</strong> garantissant une
              gestion fluide.
            </p>
          </div>
          <img src={atelier1} className="atelier-img" alt="Stockage 1200 m²" />
        </div>
      </section>

      <section className="atelier-services fade-in">
        <div className="item-camion">
          <h2>??????????</h2>
          {/* <h2>Logistique et transport</h2> */}
          <img
            src={atelier3}
            alt="Logistique & transport"
            className="camion-atelier"
          />
          <p>
            Services de logistique et de transport nous permettant d'offrir à
            nos clients une gestion optimale et longitudinale de chaque projet.
          </p>
        </div>
      </section>
      <Testimonials />

      {/* =======================
          IMAGES ATELIER
      ======================== */}
      <section className="about-image-section fade-in">
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
      </section>
    </div>
  );
}
