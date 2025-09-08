import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "../style/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
    entreprise: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSent(false);

    // Vérification des champs obligatoires
    if (!formData.nom || !formData.email || !formData.message) {
      setError("Merci de remplir tous les champs.");
      return;
    }

    // Vérification email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Merci de saisir une adresse email valide.");
      return;
    }

    // Vérification checkbox RGPD
    const checkbox = document.querySelector('input[name="consent"]');
    if (!checkbox || !checkbox.checked) {
      setError("Merci de cocher la case de consentement RGPD.");
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
          entreprise: formData.entreprise,
        }),
      });

      if (response.ok) {
        setSent(true);
        setFormData({ nom: "", email: "", message: "", entreprise: "" });
        checkbox.checked = false; // reset la checkbox
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
      <section className="contact-left" data-aos="fade-down-right">
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

          <label htmlFor="entreprise">Société</label>
          <input
            id="entreprise"
            name="entreprise"
            type="text"
            value={formData.entreprise}
            onChange={handleChange}
            placeholder="Votre société (facultatif)"
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

          <div className="consent-wrapper">
            <label htmlFor="consent">
              
              <input type="checkbox" id="consent" name="consent" required />
              <p>
                En soumettant ce formulaire, j'accepte que les informations
                saisies soient exploitées dans le cadre strict de ma demande *
              </p>
            </label>
          </div>

          <button type="submit" className="btn-submit">
            Envoyer
          </button>
        </form>

        <p className="rgpd-note">
          Europe Rapide Expo respecte la loi RGPD. Vos données sont utilisées
          uniquement pour traiter votre demande.
        </p>
      </section>

      <section className="contact-right" data-aos="fade-down-left">
        <h2>Nos Informations</h2>
        <div className="location-info">
          <p>
            <strong>Adresse :</strong> ZAC de Montvrain II, 4-10 Rue de
            Vilmorin, 97540 Mennecy
          </p>
          <p>
            <strong>Téléphone :</strong> 01 60 87 20 02
          </p>
          <p>
            <strong>Email :</strong> contact@ere91.com
          </p>
        </div>

        <h3>Suivez-nous</h3>
        <ul className="social-icons">
          <li>
            <a
              href="https://facebook.com"
              className="facebook"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              className="twitter"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              className="instagram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
