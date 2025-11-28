import React from "react";
import "./styles-component/testimonials.css";

export default function Testimonials() {
  const data = [
    {
      name: "Ingrid InTouch",
      header: "Chers Tous,",
      text: "Un grand merci pour votre professionnalisme et votre réactivité. C'est toujours un plaisir d'être entourée des meilleurs. Excellent week-end !",
    },
    {
      name: "Kejian",
      header: "Bonjour Monsieur GARGANTA,",
      text: "J’apprécie particulièrement la qualité de la pose et la propreté du chantier. Votre équipe a travaillé avec soin et précision. Le rendu final est impeccable.",
    },
    {
      name: "Client particulier",
      header: "Bonjour Monsieur GARGANTA,",
      text: "Les tiroirs sont très agréables, les façades sont belles, les mécanismes sont tops ! C'est vraiment superbe, merci beaucoup !",
    },
  ];

  return (
    <section className="testimonials-wrapper fade-in">
      <h2 className="title">Retours de nos clients</h2>

      <div className="carousel">
        <div className="track">
          {[...data, ...data].map((t, i) => (
            <div key={i} className="card">
              <p className="text">“{t.header}”</p>
              <p className="text">“{t.text}”</p>
              <p className="name">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
