// Fichier : src/pages/Apropos.jsx

import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import "../style/apropos.css";

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
  require.context("../assets/savoir_faire", false, /\.(png|jpe?g|webp)$/)
);

const Apropos = () => {
  useScrollAnimation(".animate-on-scroll", "visible");

  return (
    <main className="apropos" role="main" aria-label="Page À propos Europe Rapide Expo">
      <a href="#apropos-content" className="skip-link" tabIndex="0">
        Aller au contenu principal
      </a>

      {/* HERO */}
      <header className="apropos-hero animate-on-scroll fade-in-up">
        <div className="overlay">
          <h1 className="animate-on-scroll fade-in-down">
            Notre passion au service de vos espaces
          </h1>
        </div>
      </header>

      <div id="apropos-content">
        {/* Chaque section a un aria-labelledby */}

        <section className="container section animate-on-scroll fade-in-left" aria-labelledby="histoire">
          <h2 id="histoire" className="animate-on-scroll flipIn">Notre histoire</h2>
          <p className="animate-on-scroll fade-in-up">
            Implantés depuis 1997 dans le Sud Essonne, nous avons récemment
            déménagé à Mennecy (91) à seulement 4 km de l’A6 et 40 km de Paris.
            Nos nouveaux locaux incluent un vaste atelier, une serrurerie et une
            zone de stockage dédiée.
          </p>
          <ul className="animate-on-scroll fade-in-right">
            <li>Plans 3D à partir de vos idées</li>
            <li>Fabrication sur mesure</li>
            <li>Livraison</li>
            <li>Pose professionnelle</li>
          </ul>
        </section>

        <section className="container section animate-on-scroll fade-in-right" aria-labelledby="stand">
          <h2 id="stand" className="animate-on-scroll growIn">Stand et Événementiel</h2>
          <p className="animate-on-scroll fade-in-up">
            Experts du stand depuis plus de 20 ans, nous vous accompagnons dans
            vos projets d’aménagements éphémères, showrooms ou expositions.
            Votre conseiller dédié gère : plans, fabrication, logistique,
            montage et démontage.
          </p>
          <p className="animate-on-scroll fade-in-up">
            Un service de stockage sur site est aussi disponible pour les projets
            récurrents.
          </p>
        </section>

        <section className="container section animate-on-scroll fade-in-left" aria-labelledby="agencement">
          <h2 id="agencement" className="animate-on-scroll flipIn">Agencement sur mesure</h2>
          <p className="animate-on-scroll fade-in-up">
            Nous intervenons aussi bien en résidentiel (cuisine, dressing,
            bibliothèque…) que dans les hôtels particuliers, boutiques ou
            bureaux. De l’idée au plan 3D, nos artisans vous accompagnent avec
            conseil et savoir-faire.
          </p>
        </section>

        <section className="container section animate-on-scroll fade-in-up" aria-labelledby="valeurs">
          <h2 id="valeurs" className="animate-on-scroll growIn">Nos valeurs</h2>
          <ul className="animate-on-scroll fade-in-right">
            <li><strong>Qualité :</strong> Des finitions soignées et des matériaux haut de gamme</li>
            <li><strong>Innovation :</strong> L’alliance du savoir-faire traditionnel et des outils numériques</li>
            <li><strong>Écoute :</strong> Un accompagnement personnalisé</li>
            <li><strong>Écoresponsabilité :</strong> Circuits courts et matériaux certifiés</li>
          </ul>
        </section>

        <section className="apropos-gallery container section animate-on-scroll fade-in-up" aria-labelledby="galerie">
          <h2 id="galerie" className="animate-on-scroll flipIn">Notre savoir-faire en images</h2>
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

        <section className="apropos-testimonials container section animate-on-scroll fade-in-up" aria-labelledby="temoignages">
          <h2 id="temoignages" className="animate-on-scroll fadeLeft">Ils nous font confiance</h2>

          <article className="testimonial animate-on-scroll fadeRight">
            <blockquote>
              <p>
                "Un grand merci à Touts pour votre investissement et votre réactivité
                sur ce projet AFI ESCA. Le démontage s'est bien passé... On a fait la même
                pour PATRIMONIA, un joli stand bien fini. Mille mercis."
              </p>
              <footer>— Ingrid GUERIN WALLE</footer>
            </blockquote>
          </article>

          <article className="testimonial animate-on-scroll fadeRight">
            <blockquote>
              <p>
                "Les travaux d'agencement chez moi sont désormais terminés. Je suis
                entièrement satisfait du résultat final : la finition est impeccable et la
                pose exemplaire, parfaitement conforme aux attentes d'un architecte.
                En tant que professionnel du BTP, je tiens à vous remercier pour le
                professionnalisme de votre équipe de poseurs. Ils ont fait preuve de
                minutie et d'attention ; les détails sont soignés et le chantier est resté
                très propre tout au long des travaux."
              </p>
              <footer>— Kjian</footer>
            </blockquote>
          </article>

          <article className="testimonial animate-on-scroll fadeRight">
            <blockquote>
              <p>
                "Une écoute attentive de nos besoins, des propositions créatives et un rendu
                final au-delà de nos attentes."
              </p>
              <footer>— M. NOSTER, Architecte d’intérieur</footer>
            </blockquote>
          </article>

          <article className="testimonial animate-on-scroll fadeRight">
            <blockquote>
              <p>
                "Un vrai savoir-faire artisanal allié à des solutions modernes. Nous sommes
                ravis de cette collaboration."
              </p>
              <footer>— Famille MARTIN</footer>
            </blockquote>
          </article>
        </section>

        <section className="container section animate-on-scroll fade-in-left" aria-labelledby="pourquoi">
          <h2 id="pourquoi" className="animate-on-scroll flipIn">Pourquoi nous choisir ?</h2>
          <ul className="animate-on-scroll fade-in-up">
            <li><strong>Expertise reconnue :</strong> Plus de 20 ans dans le secteur du stand et de l’agencement.</li>
            <li><strong>Projets personnalisés :</strong> De l’idée au plan 3D, vous êtes accompagné à chaque étape.</li>
            <li><strong>Logistique intégrée :</strong> Fabrication, livraison, montage et démontage inclus.</li>
            <li><strong>Éco-conception :</strong> Utilisation de matériaux responsables et circuits courts.</li>
          </ul>
        </section>

        <section className="container section animate-on-scroll fade-in-right" aria-labelledby="faq">
          <h2 id="faq" className="animate-on-scroll growIn">Besoin d’aide ? Consultez notre FAQ</h2>
          <div className="faq">
            <div className="faq-item animate-on-scroll wipeIn">
              <h3>Proposez-vous la livraison et le montage ?</h3>
              <p>Oui, nous nous occupons de la livraison, du montage et du démontage de vos projets sur toute la France.</p>
            </div>
            <div className="faq-item animate-on-scroll wipeIn">
              <h3>Puis-je voir des plans avant la fabrication ?</h3>
              <p>Bien sûr. Nous réalisons des plans 2D et 3D pour valider votre projet avant la fabrication.</p>
            </div>
            <div className="faq-item animate-on-scroll wipeIn">
              <h3>Quels sont vos délais moyens ?</h3>
              <p>Les délais varient selon la complexité, mais nous nous engageons à vous fournir un calendrier précis dès validation.</p>
            </div>
            <div className="faq-item animate-on-scroll wipeIn">
              <h3>Intervenez-vous à l’international ?</h3>
              <p>Principalement en France, mais nous pouvons étudier toute demande spécifique à l’étranger.</p>
            </div>
          </div>
        </section>

        {/* LOCALISATION */}
      <section className="apropos-location container section animate-on-scroll fade-in-up">
        <h2 className="animate-on-scroll fade-in-down">Nous trouver</h2>
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
  );
};

export default Apropos;
