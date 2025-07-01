import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../style/apropos.css';
const Apropos = () => {
  useScrollAnimation('.animate-on-scroll', 'visible');

  const equipe = [
    { nom: 'Jean Dupont', poste: 'Menuisier expert', img: 'https://randomuser.me/api/portraits/men/11.jpg' },
    { nom: 'Marie Dubois', poste: 'Architecte d’intérieur', img: 'https://randomuser.me/api/portraits/women/12.jpg' },
    { nom: 'Ahmed Karim', poste: 'Chef de projet', img: 'https://randomuser.me/api/portraits/men/13.jpg' },
    { nom: 'Sophie Leroy', poste: 'Designer bois', img: 'https://randomuser.me/api/portraits/women/14.jpg' },
    { nom: 'Luc Moreau', poste: 'Charpentier', img: 'https://randomuser.me/api/portraits/men/15.jpg' },
    { nom: 'Emma Martin', poste: 'Responsable client', img: 'https://randomuser.me/api/portraits/women/16.jpg' },
    { nom: 'Thomas Bernard', poste: 'Technicien pose', img: 'https://randomuser.me/api/portraits/men/17.jpg' },
    { nom: 'Camille Lefevre', poste: 'Ingénieure bois', img: 'https://randomuser.me/api/portraits/women/18.jpg' },
    { nom: 'Julien Petit', poste: 'Menuisier junior', img: 'https://randomuser.me/api/portraits/men/19.jpg' },
    { nom: 'Nina Rousseau', poste: 'Assistante projet', img: 'https://randomuser.me/api/portraits/women/20.jpg' },
    { nom: 'Ali Benali', poste: 'Poseur', img: 'https://randomuser.me/api/portraits/men/21.jpg' },
    { nom: 'Claire Girard', poste: 'Technicienne SAV', img: 'https://randomuser.me/api/portraits/women/22.jpg' }
  ];

  return (
    <main className="apropos">
      {/* HERO */}
      <header className="apropos-hero animate-on-scroll">
        <div className="overlay">
          <h1>À propos de Europe Rapide Expo</h1>
        </div>
      </header>

      {/* PRÉSENTATION */}
      <section className="container section animate-on-scroll">
        <h2>Présentation</h2>
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
        <h2>Stand et Événementiel</h2>
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
        <h2>Agencement sur mesure</h2>
        <p>
          Nous intervenons aussi bien en résidentiel (cuisine, dressing, bibliothèque…) que dans les hôtels particuliers, boutiques ou bureaux.
          De l’idée au plan 3D, nos artisans vous accompagnent avec conseil et savoir-faire.
        </p>
      </section>

      {/* VALEURS */}
      <section className="container section animate-on-scroll">
        <h2>Nos valeurs</h2>
        <ul>
          <li><strong> Qualité :</strong> Des finitions soignées et des matériaux haut de gamme</li>
          <li><strong> Innovation :</strong> L’alliance du savoir-faire traditionnel et des outils numériques</li>
          <li><strong> Écoute :</strong> Un accompagnement personnalisé</li>
          <li><strong> Écoresponsabilité :</strong> Circuits courts et matériaux certifiés</li>
        </ul>
      </section>

      {/* ÉQUIPE */}
      <section className="apropos-team container section animate-on-scroll">
        <h2>Notre équipe</h2>
        <div className="team-grid">
          {equipe.map((membre) => (
            <div key={membre.nom} className="team-card">
              <img src={membre.img} alt={membre.nom} />
              <h4>{membre.nom}</h4>
              <p>{membre.poste}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALERIE */}
      <section className="apropos-gallery container section animate-on-scroll">
        <h2>Notre savoir-faire en images</h2>
        <div className="gallery">
          <img src="https://www.s-b-a.fr/public/img/big/IMG5926jpg_62a3081f91257.jpg" alt="Atelier de menuiserie" />
          <img src="https://cdn.shopify.com/s/files/1/0770/4697/2750/files/workshops_houtbewerking_organiseren_1024x1024.png?v=1728033464" alt="Équipe de travail" />
          <img src="https://i.ytimg.com/vi/jpDmIyhGfYo/sddefault.jpg" alt="Outils d'artisan" />
          <img src="https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/20933/NouveauDossier/IMG_1041.JPG" alt="Menuiserie moderne" />
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="apropos-testimonials container section animate-on-scroll">
        <h2>Ils nous font confiance</h2>
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
  <h2>Pourquoi nous choisir ?</h2>
  <ul>
    <li><strong>Expertise reconnue :</strong> Plus de 20 ans dans le secteur du stand et de l’agencement.</li>
    <li><strong>Projets personnalisés :</strong> De l’idée au plan 3D, vous êtes accompagné à chaque étape.</li>
    <li><strong>Logistique intégrée :</strong> Fabrication, livraison, montage et démontage inclus.</li>
    <li><strong>Éco-conception :</strong> Utilisation de matériaux responsables et circuits courts.</li>
  </ul>
</section>
{/* FAQ */}
<section className="container section animate-on-scroll">
  <h2>FAQ - Questions fréquentes</h2>
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
            title="Carte Europe Rapide Expo"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.3372659931827!2d2.2922926156741987!3d48.85884407928779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc7fa7691c1%3A0xe7986f2694c68c8d!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1718298767890!5m2!1sfr!2sfr"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      
    </main>
  );
};

export default Apropos;

