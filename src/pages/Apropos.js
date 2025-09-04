import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../style/apropos.css';


// Fonction d'import dynamique (uniquement possible avec Webpack)
function importAll(r) {
  return r.keys().map((key) => ({
    src: r(key),
    alt: key.split("/").pop().replace(/\.[^/.]+$/, "").replace(/_/g, " ")
  }));
}

// Importation des images du dossier savoirfaire/
const images = importAll(
  require.context("../assets/savoir_faire", false, /\.(png|jpe?g|webp)$/)
);

const Apropos = () => {
  useScrollAnimation('.animate-on-scroll', 'visible');
   return (
    <main className="apropos">
      {/* HERO */}
      <header className="apropos-hero animate-on-scroll" data-aos="fade-up">
        <div className="overlay">
          <h1>Notre passion au service de vos espaces</h1>
        </div>
      </header>

      {/* PRÉSENTATION */}
      <section className="container section animate-on-scroll"data-aos="fade-right">
        <h2 data-aos="flip-up">Notre histoire</h2>
        <p>
          Implantés depuis 1997 dans le Sud Essonne, nous avons récemment déménagé à Mennecy (91) à seulement 4 km de l’A6 et 40 km de Paris.
          Nos nouveaux locaux incluent un vaste atelier, une serrurerie et une zone de stockage dédiée.
        </p>
        <ul>
          <li> Plans 3D à partir de vos idées</li>
          <li> Fabrication sur mesure</li>
          <li> Livraison</li>
          <li> Pose professionnelle</li>
        </ul>
      </section>

      {/* STANDS */}
      <section className="container section animate-on-scroll">
        <h2 >Stand et Événementiel</h2>
        <p>
          Experts du stand depuis plus de 20 ans, nous vous accompagnons dans vos projets d’aménagements éphémères, showrooms ou expositions.
          Votre conseiller dédié gère : plans, fabrication, logistique, montage et démontage.
        </p>
        <p>
          Un service de stockage sur site est aussi disponible pour les projets récurrents.
        </p>
      </section>

      {/* AGENCEMENT */}
      <section className="container section animate-on-scroll">
        <h2 >Agencement sur mesure</h2>
        <p>
          Nous intervenons aussi bien en résidentiel (cuisine, dressing, bibliothèque…) que dans les hôtels particuliers, boutiques ou bureaux.
          De l’idée au plan 3D, nos artisans vous accompagnent avec conseil et savoir-faire.
        </p>
      </section>

      {/* VALEURS */}
      <section className="container section animate-on-scroll">
        <h2 >Nos valeurs</h2>
        <ul>
          <li><strong> Qualité :</strong> Des finitions soignées et des matériaux haut de gamme</li>
          <li><strong> Innovation :</strong> L’alliance du savoir-faire traditionnel et des outils numériques</li>
          <li><strong> Écoute :</strong> Un accompagnement personnalisé</li>
          <li><strong> Écoresponsabilité :</strong> Circuits courts et matériaux certifiés</li>
        </ul>
      </section>

    

      {/* GALERIE */}
     <section className="apropos-gallery container section animate-on-scroll">
      <h2>Notre savoir-faire en images</h2>
      <div className="gallery">
        {images.map((img, index) => (
          <img key={index} src={img.src} alt={img.alt} loading="lazy" />
        ))}
      </div>
    </section>

      {/* TÉMOIGNAGES */}
      <section className="apropos-testimonials container section animate-on-scroll">
        <h2 >Ils nous font confiance</h2>
        <div className="testimonial">
          <p>"Travail exceptionnel, respect des délais, résultat magnifique. Merci à toute l’équipe !"</p>
          <span>— Mme Legrand</span>
        </div>
        <div className="testimonial">
          <p>"Un partenaire fiable et passionné, je recommande sans hésiter."</p>
          <span>— BTP Concept SARL</span>
        </div>
      </section>
      {/* POURQUOI NOUS CHOISIR */}
<section className="container section animate-on-scroll">
  <h2 >Pourquoi nous choisir ?</h2>
  <ul>
    <li><strong>Expertise reconnue :</strong> Plus de 20 ans dans le secteur du stand et de l’agencement.</li>
    <li><strong>Projets personnalisés :</strong> De l’idée au plan 3D, vous êtes accompagné à chaque étape.</li>
    <li><strong>Logistique intégrée :</strong> Fabrication, livraison, montage et démontage inclus.</li>
    <li><strong>Éco-conception :</strong> Utilisation de matériaux responsables et circuits courts.</li>
  </ul>
</section>
{/* FAQ */}
<section className="container section animate-on-scroll">
  <h2 >Besoin d’aide ? Consultez notre FAQ</h2>
  <div className="faq">
    <div className="faq-item">
      <h4> Proposez-vous la livraison et le montage ?</h4>
      <p>Oui, nous nous occupons de la livraison, du montage et du démontage de vos projets sur toute la France.</p>
    </div>
    <div className="faq-item">
      <h4> Puis-je voir des plans avant la fabrication ?</h4>
      <p>Bien sûr. Nous réalisons des plans 2D et 3D pour valider votre projet avant la fabrication.</p>
    </div>
    <div className="faq-item">
      <h4> Quels sont vos délais moyens ?</h4>
      <p>Les délais varient selon la complexité, mais nous nous engageons à vous fournir un calendrier précis dès validation.</p>
    </div>
    <div className="faq-item">
      <h4> Intervenez-vous à l’international ?</h4>
      <p>Principalement en France, mais nous pouvons étudier toute demande spécifique à l’étranger.</p>
    </div>
  </div>
</section>


      {/* LOCALISATION */}
      <section className="apropos-location container section animate-on-scroll">
        <h2>Nous trouver</h2>
        <div className="map-container">
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
      
    </main>
  );
};

export default Apropos;

