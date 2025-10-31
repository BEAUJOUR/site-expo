import "../style/home.css";
import { useNavigate } from "react-router-dom";
import useScrollAnimation from "../hooks/useScrollAnimation";
// import expo from "../assets/chantier/expo.png";
import Hero from "../components/Hero";

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
      <Hero/>

      <section className="intro fade-in-down">
        <div className="container">
          <h2 className="fade-in-left">Votre espace, notre passion</h2>
          <p className="fade-in-up">
            Spécialistes en agencement et menuiserie sur mesure depuis plus de
            25 ans, nous accompagnons nos clients avec un savoir-faire artisanal
            et des solutions innovantes adaptées à chaque projet..
          </p>
          <p className="fade-in-right">
            Que vous rêviez d’une cuisine chaleureuse, d’un bureau optimisé ou
            d’un mobilier unique, notre équipe met tout en œuvre pour
            concrétiser vos envies avec rigueur et créativité.
          </p>
          <p className="gallery-note fade-in-left">
            Veuillez nous{" "}
            <strong onClick={() => navigate("/contact")}>Contacter</strong>
          </p>
        </div>
      </section>

      <section className="services-preview fade-in-up">
        <div className="container">
          <h2 className="fade-in-up">Nos domaines d’expertise</h2>
          <p className="fade-in-left">
            Nous proposons une large gamme de prestations adaptées à vos besoins
            :
          </p>
          <ul>
            <li className="fade-in-right">
              Agencement d’intérieur personnalisé : optimisation et design de
              vos espaces de vie et de travail
            </li>
            <li className="fade-in-left">
              Menuiserie artisanale : création de mobilier, dressings,
              escaliers, menuiseries sur mesure
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
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  borderRadius: "8px",
                }}
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
      {/* TÉMOIGNAGES */}
        <section
          className="apropos-testimonials container section animate-on-scroll fade-in-up"
          aria-labelledby="temoignages"
        >
          <h2 id="temoignages" className="animate-on-scroll fadeLeft">
           Ils partagent leur expérience avec Europe Rapide Expo
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
      <section className="devis-section fade-in-up">
        <div className="container">
          <h2 className="fade-in-down">Demande de devis gratuit</h2>
          <p className="fade-in-left">
            Vous avez un projet en tête ? Cliquez ci-dessous pour nous envoyer
            votre demande de devis. Notre équipe vous répondra rapidement.
          </p>
          <p className="gallery-note fade-in-up">
            <strong onClick={() => navigate("/contact")}>
              {" "}
              Demande un devis
            </strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
