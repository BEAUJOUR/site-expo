import React from "react";
import "../style/qui.css";

import headerImg from "../assets/Atelier/IMG_1099.JPG";
import atelierImg from "../assets/Atelier/ATELIER13 - Copie.jpg";

export default function QuiSommesNous() {
  return (
    <div className="about-page">
      {/* ===== HEADER ===== */}
      <header
        className="about-header"
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <div className="overlay">
          <h1 className="about-title">??????????</h1>
          <p className="texte-header">
            Fort de plus de <strong>25 ans d'expérience</strong>, notre
            entreprise s'appuie sur un <strong>savoir-faire reconnu</strong> et
            une <strong>culture du travail bien fait</strong> pour accompagner
            ses partenaires et ses client dans la réussite de leurs projets,
            professionnels comme privés.{" "}
          </p>
        </div>
      </header>

      {/* ===== BLOC TEXTE ===== */}
      <section className="about-section">
        <div className="about-text-block fade-in">
          <h2>???????????</h2>

          <p>
            Europe Rapide Expo est spécialisée dans la fabrication, la pose et
            l’agencement sur-mesure pour les événements, stands d’exposition,
            showrooms et espaces professionnels.
          </p>

          <p>
            Grâce à une équipe expérimentée et un atelier équipé, nous assurons
            des réalisations premium alliant précision, esthétique et rapidité
            d’exécution.
          </p>

          <p>
            Notre objectif : créer des environnements à forte identité visuelle,
            adaptés à vos besoins et livrés dans les délais les plus courts.
          </p>
        </div>
      </section>

      {/* ===== BLOC IMAGE ===== */}
      <section className="about-image-section fade-in">
        <img src={atelierImg} alt="Notre atelier" className="about-big-image" />
        <img src={atelierImg} alt="Notre atelier" className="about-big-image" />
      </section>
    </div>
  );
}
