// Fichier : src/pages/Apropos.jsx
import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
// import useCountOnVisible from "../hooks/useCountOnVisible";
import "../style/apropos.css";

// function StatItem({ value, label, suffix, speed }) {
//   const [ref, count] = useCountOnVisible(value, speed);
//   return (
//     <div className="stat-item" ref={ref}>
//       <span>{count}{suffix}</span>
//       <p>{label}</p>
//     </div>
//   );
// }


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
    <main
      className="apropos"
      role="main"
      aria-label="Page À propos Europe Rapide Expo"
    >
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
        {/* HISTOIRE */}
        <section
          className="container section animate-on-scroll fade-in-left"
          aria-labelledby="histoire"
        >
          <h2 id="histoire" className="animate-on-scroll flipIn">
            Notre histoire
          </h2>
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

        {/* STAND */}
        <section
          className="container section animate-on-scroll fade-in-right"
          aria-labelledby="stand"
        >
          <h2 id="stand" className="animate-on-scroll growIn">
            Stand et Événementiel
          </h2>
          <p className="animate-on-scroll fade-in-up">
            Experts du stand depuis plus de 25 ans, nous vous accompagnons dans
            vos projets d’aménagements éphémères, showrooms ou expositions.
            Votre conseiller dédié gère : plans, fabrication, logistique,
            montage et démontage.
          </p>
          <p className="animate-on-scroll fade-in-up">
            Un service de stockage sur site est aussi disponible pour les
            projets récurrents.
          </p>
        </section>

        {/* AGENCEMENT */}
        <section
          className="container section animate-on-scroll fade-in-left"
          aria-labelledby="agencement"
        >
          <h2 id="agencement" className="animate-on-scroll flipIn">
            Agencement sur mesure
          </h2>
          <p className="animate-on-scroll fade-in-up">
            Nous intervenons aussi bien en résidentiel (cuisine, dressing,
            bibliothèque…) que dans les hôtels particuliers, boutiques ou
            bureaux. De l’idée au plan 3D, nos artisans vous accompagnent avec
            conseil et savoir-faire.
          </p>
        </section>

        {/* VALEURS */}
        <section
          className="container section animate-on-scroll fade-in-up"
          aria-labelledby="valeurs"
        >
          <h2 id="valeurs" className="animate-on-scroll growIn">
            Nos valeurs
          </h2>
          <ul className="animate-on-scroll fade-in-right valeurs-list">
            <li>
              <strong>Qualité :</strong> Des finitions soignées et des matériaux
              haut de gamme
            </li>
            <li>
              <strong>Innovation :</strong> L’alliance du savoir-faire
              traditionnel et des outils numériques
            </li>
            <li>
              <strong>Écoute :</strong> Un accompagnement personnalisé
            </li>
            <li>
              <strong>Écoresponsabilité :</strong> Circuits courts et matériaux
              certifiés
            </li>
          </ul>
        </section>

        {/* GALERIE */}
        <section
          className="apropos-gallery container section animate-on-scroll fade-in-up"
          aria-labelledby="galerie"
        >
          <h2 id="galerie" className="animate-on-scroll flipIn">
            Notre savoir-faire en images
          </h2>
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
        {/* TÉMOIGNAGES */}
        <section
          className="apropos-testimonials container section animate-on-scroll fade-in-up"
          aria-labelledby="temoignages"
        >
          <h2 id="temoignages" className="animate-on-scroll fadeLeft">
            Retours de nos clients
          </h2>

          <div className="testimonials-carousel">
            <div className="carousel-track">
              {[
                {
                  name: "Ingrid InTouch",
                  header: "Chers Tous",
                  text: " un grand merci pour votre professionnalisme et votre réactivité. c'est toujours un plaisir d'être entoutée des meilleurs. Excellent week-end Ingrid.",
                },
                {
                  name: "Kejian",
                  header: "Bonjour Monsieur GARGANTA,",
                  text: "En tant que professionnel du BTP, j’apprécie particulièrement la qualité de la pose et la propreté du chantier. Votre équipe a travaillé avec soin et précision, et le rendu final est vraiment impeccable. Merci à tous.",
                },

                {
                  name: "Client particulier",
                   header: "Bonjour Monsieur GARGANTA,",
                  text: "Ils sont top, les tiroirs sont très agréables les façades sont belles les mécanises sont tops! C'est vraiment beau merci beaucoup!!!",
                },
              
              ]
                // On double les cartes pour créer une boucle fluide
                .concat([
                 {
                  name: "Ingrid InTouch",
                  header: "Chers Tous",
                  text: " un grand merci pour votre professionnalisme et votre réactivité. c'est toujours un plaisir d'être entoutée des meilleurs. Excellent week-end Ingrid.",
                },
                {
                  name: "Kejian",
                  header: "Bonjour Monsieur GARGANTA,",
                  text: "En tant que professionnel du BTP, j’apprécie particulièrement la qualité de la pose et la propreté du chantier. Votre équipe a travaillé avec soin et précision, et le rendu final est vraiment impeccable. Merci à tous.",
                },

                {
                  name: "Client particulier",
                   header: "Bonjour Monsieur GARGANTA,",
                  text: "Ils sont top, les tiroirs sont très agréables les façades sont belles les mécanises sont tops! C'est vraiment beau merci beaucoup!!!",
                },
                ])
                .map((t, i) => (
                  <div key={i} className="testimonial-card">
                    {/* <img src={t.img} alt={t.name} loading="lazy" /> */}
                    <p className="testimonial-text">“{t.header}”</p>
                    <p className="testimonial-text">“{t.text}”</p>
                    <p className="testimonial-name">{t.name}</p>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* POURQUOI NOUS */}
        <section
          className="container section animate-on-scroll fade-in-left"
          aria-labelledby="pourquoi"
        >
          <h2 id="pourquoi" className="animate-on-scroll flipIn">
            Pourquoi nous choisir ?
          </h2>
          <ul className="animate-on-scroll fade-in-up">
            <li>
              <strong>Expertise reconnue :</strong> Plus de 25 ans dans le
              secteur du stand et de l’agencement.
            </li>
            <li>
              <strong>Projets personnalisés :</strong> De l’idée au plan 3D,
              vous êtes accompagné à chaque étape.
            </li>
            <li>
              <strong>Logistique intégrée :</strong> Fabrication, livraison,
              montage et démontage inclus.
            </li>
            <li>
              <strong>Éco-conception :</strong> Utilisation de matériaux
              responsables et circuits courts.
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="apropos-cta container section animate-on-scroll fade-in-up">
          <h2>Prêts à donner vie à vos idées ?</h2>
          <p>Notre équipe vous accompagne de la conception à la réalisation.</p>
          <button onClick={() => (window.location.href = "/contact")}>
            Contactez-nous
          </button>
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
