import React from "react";
import "./styles-component/testimonials.css";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const data = [
    {
      name: "Ingrid InTouch",
      text: "Un grand merci pour votre professionnalisme et votre réactivité. C'est toujours un plaisir d'être entourée des meilleurs. Excellent week-end !",
      stars: 5,
    },
    {
      name: "Kejian",
      text: "J’apprécie particulièrement la qualité de la pose et la propreté du chantier. Votre équipe a travaillé avec soin et précision. Le rendu final est impeccable.",
      stars: 5,
    },
    {
      name: "Client particulier",
      text: "Les tiroirs sont très agréables, les façades sont belles, les mécanismes sont tops ! C'est vraiment superbe, merci beaucoup !",
      stars: 5,
    },
  ];

  // Fonction qui génère les étoiles
  const renderStars = (n) =>
    [...Array(n)].map((_, i) => <FaStar key={i} className="star" />);

  return (
    <section className="testimonials-wrapper fade-in">
      <h2 className="title">Retours de nos clients</h2>

      <div className="carousel">
        <div className="track">
          {[...data, ...data].map((item, index) => (
            <div key={index} className="card">
              <div className="stars">{renderStars(item.stars)}</div>

              <p className="text">{item.text}</p>
              <p className="name">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
