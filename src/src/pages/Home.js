import React from 'react';

import { useNavigate } from "react-router-dom";
const Home = () => {
   const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("/contact");
  // }
    return (
        <div className="home">
      <header className="hero">
  <div className="overlay">
    <div className="container">
      <h1>EUROPE RAPIDE EXPO</h1>
      <p>Des créations sur mesure qui donnent vie à vos espaces</p>
      {/* <button className="cta-button"onClick={() => navigate("/contact")}>Contactez-nous</button> */}
    </div>
  </div>
</header>

      <section className="intro">
        <div className="container">
          <h2>Votre espace, notre passion</h2>
          <p>
            Depuis plus de 20 ans, notre entreprise accompagne particuliers et professionnels dans la réalisation de leurs projets d’agencement intérieur et de menuiserie sur mesure. Alliant savoir-faire artisanal et innovation, nous créons des espaces fonctionnels, esthétiques et durables.
          </p>
          <p>
            Que vous rêviez d’une cuisine chaleureuse, d’un bureau optimisé ou d’un mobilier unique, notre équipe met tout en œuvre pour concrétiser vos envies avec rigueur et créativité.
          </p>
          <p className="gallery-note">
            Veuillez nous <strong onClick={() => navigate("/contact")}>Contacter</strong>.
          </p>
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <h2>Nos domaines d’expertise</h2>
          <p>
            Nous proposons une large gamme de prestations adaptées à vos besoins :
          </p>
          <ul>
            <li>Agencement d’intérieur personnalisé : optimisation et design de vos espaces de vie et de travail</li>
            <li>Menuiserie artisanale : création de mobilier, dressings, escaliers, menuiseries sur mesure</li>
            <li>Conseil & accompagnement : de l’étude à la réalisation, un suivi complet et personnalisé</li>
          </ul>
          <p>
            Découvrez en détail toutes nos prestations sur la page <strong onClick={() => navigate("/services")}>Nos Services</strong>.
          </p>
        </div>
      </section>

      <section className="suggestions">
        <div className="container">
          <h2>Galerie inspiration</h2>
          <p>
            Parcourez une sélection de nos réalisations et laissez-vous inspirer par la diversité de nos créations.
          </p>
          <div className="gallery">
            <img src="https://slow-furniture.com/wp-content/uploads/2020/05/cuisine-moderne-haut-de-gamme-sur-mesure.jpg" alt="Cuisine moderne en bois" />
            <img src="https://boisetblanc.fr/wp-content/uploads/36.-Bobillot-8.webp" alt="Salon sur mesure" />
            <img src="https://cocre-art.com/wp-content/uploads/2022/09/martine-et-alain-amenagement-salon-sur-mesure_salon_meuble_tv_sur_mesure_angencement_interieur_paris_montreuil_vincennes_cocre-art-min.jpg" alt="Rangements intégrés" />
            <img src="https://www.gerriet.com/escaliers/Escaliers-Bois-Metal/files/lg-1664.jpg" alt="Escalier design bois et métal" />
          </div>
          <p className="gallery-note">
            Retrouvez l’ensemble de nos projets sur la page <strong onClick={() => navigate("/projet")}>Réalisations</strong>.
          </p>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2>Pourquoi choisir notre entreprise ?</h2>
          <div className="values-list">
            <article>
              <h3>Qualité artisanale</h3>
              <p>Chaque projet est une création unique, réalisée avec soin et précision par nos artisans qualifiés.</p>
            </article>
            <article>
              <h3>Design personnalisé</h3>
              <p>Nous adaptons nos solutions à vos goûts et contraintes pour un résultat à la fois esthétique et fonctionnel.</p>
            </article>
            <article>
              <h3>Respect des délais</h3>
              <p>Une gestion rigoureuse garantit la livraison dans les temps convenus, sans compromis sur la qualité.</p>
            </article>
            <article>
              <h3>Engagement durable</h3>
              <p>Nous privilégions des matériaux écologiques et des techniques responsables pour des aménagements durables.</p>
            </article>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Agencement & Menuiserie. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
    );
};

export default Home;