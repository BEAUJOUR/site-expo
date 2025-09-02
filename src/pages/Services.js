import React, { useEffect, useRef } from 'react';
import "../style/services.css"
import atelier8 from "../assets/Atelier/ATELIER8.jpg";
import expo from"../assets/chantier/expo.png"
const Services = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Agencement intérieur",
      description:
        "Conception et réalisation d’espaces sur mesure : bureaux, cuisines, dressings, bibliothèques, cloisons et rangements intégrés.",
      image:
        "https://www.signature-dinterieur.fr/scripts/files/669a1e7887fe19.07004753/agencement-interieur-finistere.jpg",
    },
    {
      title: "Menuiserie sur mesure",
      description:
        "Création artisanale de meubles et éléments en bois massif ou stratifié adaptés à votre intérieur.",
      image:
        "https://menuiserie-desnoyer.com/wp-content/uploads/2017/10/1501_06.jpg",
    },
    {
  title: "Mise en scène & Exposition",
  description:
    "Conception et réalisation d'espaces d'exposition sur-mesure : stands, vitrines, présentoirs, scénographies d’intérieur et aménagements événementiels.",
  image:
    expo, // Remplace par ton URL ou import local
}

   
  ];

  return (
    <div className="services-page">
      <header className="services-hero" data-aos="zoom-out">
        <div className="overlay">
          <h1>Nos Services</h1>
        </div>
      </header>

      {/* Présentation */}
      <section className="presentation container hidden" ref={el => sectionsRef.current[0] = el} data-aos="zoom-in-up">
        <h2>Présentation</h2>
        <p>
          Implantés depuis 1997 dans le Sud Essonne, nous avons récemment déménagé à Mennecy, à 40 km de Paris, pour mieux vous accueillir.
        </p>
        <p>
          Notre atelier dispose d’une grande surface de production, d’un espace de serrurerie et d’un lieu de stockage pour vos éléments éphémères.
        </p>
        <ul>
          <li>Plans 3D personnalisés</li>
          <li>Fabrication dans nos ateliers</li>
          <li>Livraison & pose</li>
        </ul>
      </section>

      {/* Liste des services */}
      <section className="services-list container hidden"ref={el => sectionsRef.current[1] = el} >
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} />
            <div className="service-info">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Stand */}
      <section className="stand container hidden"ref={el=> sectionsRef.current[2] = el}>
        <h2>Stands & Expositions</h2>
        <p>
          Experts en fabrication et montage de stands depuis plus de 20 ans, nous vous accompagnons dans tous vos projets d’agencement éphémère : showroom, expositions, salons...
        </p>
        <p>
          Du plan à la pose, votre conseiller gère la fabrication, la découpe, la logistique, le montage et le démontage. Nous proposons aussi un service de stockage longue durée dans nos locaux.
        </p>
      </section>

      {/* Agencement */}
      <section className="agencement container hidden"ref={el => sectionsRef.current[3] = el}>
        <h2>Agencement</h2>
        <p>
          Nous intervenons aussi bien chez les particuliers que dans les espaces professionnels : hôtels particuliers, boutiques, expositions, etc.
        </p>
        <p>
          Nos services incluent la fabrication et la pose de mobilier sur mesure : cuisine, bureaux, dressing, bibliothèque et plus encore.
        </p>
        <p>
          Nos menuisiers vous conseillent sur les matériaux, assurent la faisabilité technique et proposent des visuels 3D pour une meilleure projection.
        </p>
      </section>
    </div>
  );
};

export default Services;
