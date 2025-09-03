import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "../style/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ nom: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSent(false);

    // Validation des champs
    if (!formData.nom || !formData.email || !formData.message) {
      setError("Merci de remplir tous les champs.");
      return;
    }

    // Validation simple de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Merci de saisir une adresse email valide.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mldnqoeb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nom: formData.nom,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSent(true);
        setFormData({ nom: "", email: "", message: "" });
      } else {
        const data = await response.json();
        setError(data.error || "Une erreur est survenue, veuillez réessayer.");
      }
    } catch {
      setError("Erreur réseau, veuillez réessayer.");
    }
  };

  return (
    <div className="contact-container">
      <section className="contact-left"data-aos="fade-down-right">
        <h2>Contactez-nous</h2>
        {sent && <p className="success-msg">Merci pour votre message !</p>}
        {error && <p className="error-msg">{error}</p>}

        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <label htmlFor="nom">Nom</label>
          <input
            id="nom"
            name="nom"
            type="text"
            value={formData.nom}
            onChange={handleChange}
            required
            placeholder="Votre nom"
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="exemple@mail.com"
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Votre message..."
          />

          <button type="submit" className="btn-submit">
            Envoyer
          </button>
        </form>
      </section>

      <section className="contact-right"data-aos="fade-down-left">
        <h2 className="dark">Nos Informations</h2>
        <div className="location-info">
          <p>
            <strong>Adresse :</strong> ZAC de Montvrain II 4-10 Rue de Vilmorin
            97540-MENECY
          </p>
          <p>
            <strong>Téléphone :</strong> 01 60 87 20 02
          </p>
          <p>
            <strong>Email :</strong> contact@ere91.com
          </p>
        </div>

        <h3 className="dark">Suivez-nous</h3>
        <ul className="social-icons">
          <li>
            <a
              href="https://facebook.com"
              className="facebook"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              className="twitter"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              className="instagram"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              className="linkedin"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
