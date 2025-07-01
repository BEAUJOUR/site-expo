import React, { useState } from "react";
import '../style/contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 👉 Intégration possible avec EmailJS, Formspree, etc.
    console.log("Formulaire soumis :", formData);
    setSent(true);
  };

  return (
    <div className="contact-page">
      <header className="contact-hero">
        <div className="overlay">
          <h1>Contactez Europe Rapide Expo</h1>
        </div>
      </header>

      <section className="contact-form-section container">
        <h2>Un projet en tête ? Parlons-en.</h2>
        <p>Remplissez ce formulaire et nous vous répondrons rapidement.</p>

        {sent ? (
          <p className="success-message">✅ Merci pour votre message ! Nous reviendrons vers vous rapidement.</p>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="nom">Nom</label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Adresse e-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Envoyer
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
