import React, { useEffect, useRef } from 'react';
import "../style/services.css";
import endoftext from "../assets/Atelier/endoftext.png";
import expo from "../assets/chantier/expo.png";
import conception from "../assets/Atelier/conception.png";
import menuiserie from "../assets/Atelier/menuiserie.png";

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
      image: conception,
    },
    {
      title: "Menuiserie sur mesure",
      description:
        "Création artisanale de meubles et éléments en bois massif ou stratifié adaptés à votre intérieur.",
      image: endoftext,
    },
    {
      title: "Mise en scène & Exposition",
      description:
        "Conception et réalisation d'espaces d'exposition sur-mesure : stands, vitrines, présentoirs, scénographies d’intérieur et aménagements événementiels.",
      image: expo,
    }
  ];

  return (
    <div className="services-page">
      {/* HERO - pas touché */}
      <header className="services-hero" data-aos="zoom-out" background-image={menuiserie}>
        <div className="overlay">
          <h1>Nos Services</h1>
        </div>
      </header>

      {/* Présentation */}
      <section className="presentation container hidden fade-in-up" ref={el => sectionsRef.current[0] = el}>
        <h2 className="hidden fade-in-left" ref={el => sectionsRef.current.push(el)}>Présentation</h2>
        <p className="hidden zoom-in" ref={el => sectionsRef.current.push(el)}>
          Implantés depuis 1997 dans le Sud Essonne, nous avons récemment déménagé à Mennecy, à 40 km de Paris, pour mieux vous accueillir.
        </p>
        <p className="hidden fade-in-left" ref={el => sectionsRef.current.push(el)}>
          Notre atelier dispose d’une grande surface de production, d’un espace de serrurerie et d’un lieu de stockage pour vos éléments éphémères.
        </p>
        <ul className="hidden zoom-in" ref={el => sectionsRef.current.push(el)}>
          <li className="hidden fade-in-up" ref={el => sectionsRef.current.push(el)}>Plans 3D personnalisés</li>
          <li className="hidden fade-in-up" ref={el => sectionsRef.current.push(el)}>Fabrication dans nos ateliers</li>
          <li className="hidden fade-in-up" ref={el => sectionsRef.current.push(el)}>Livraison & pose</li>
        </ul>
      </section>

      {/* Services list */}
      <section className="services-list container" ref={el => sectionsRef.current[1] = el}>
        {services.map((service, index) => (
          <div
            className={`service-card hidden ${index % 2 === 0 ? "fade-in-up" : "fade-in-right"}`}
            key={index}
            ref={el => sectionsRef.current.push(el)}
          >
            <img src={service.image} alt={service.title} />
            <div className="service-info">
              <h2 className="hidden fade-in-left" ref={el => sectionsRef.current.push(el)}>{service.title}</h2>
              <p className="hidden fade-in-up" ref={el => sectionsRef.current.push(el)}>{service.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Stand */}
      <section className="stand container hidden fade-in-right" ref={el => sectionsRef.current[2] = el}>
        <h2 className="hidden fade-in-left" ref={el => sectionsRef.current.push(el)}>Stands & Expositions</h2>
        <p className="hidden fade-in-up" ref={el => sectionsRef.current.push(el)}>
          Experts en fabrication et montage de stands depuis plus de 20 ans, nous vous accompagnons dans tous vos projets d’agencement éphémère : showroom, expositions, salons...
        </p>
        <p className="hidden fade-in-right" ref={el => sectionsRef.current.push(el)}>
          Du plan à la pose, votre conseiller gère la fabrication, la découpe, la logistique, le montage et le démontage. Nous proposons aussi un service de stockage longue durée dans nos locaux.
        </p>
      </section>

      {/* Agencement */}
      <section className="agencement container hidden fade-in-left" ref={el => sectionsRef.current[3] = el}>
        <h2 className="hidden zoom-in" ref={el => sectionsRef.current.push(el)}>Agencement</h2>
        <p className="hidden fade-in-up" ref={el => sectionsRef.current.push(el)}>
          Nous intervenons aussi bien chez les particuliers que dans les espaces professionnels : hôtels particuliers, boutiques, expositions, etc.
        </p>
        <p className="hidden fade-in-left" ref={el => sectionsRef.current.push(el)}>
          Nos services incluent la fabrication et la pose de mobilier sur mesure : cuisine, bureaux, dressing, bibliothèque et plus encore.
        </p>
        <p className="hidden fade-in-right" ref={el => sectionsRef.current.push(el)}>
          Nos menuisiers vous conseillent sur les matériaux, assurent la faisabilité technique et proposent des visuels 3D pour une meilleure projection.
        </p>
      </section>
    </div>
  );
};

export default Services;
