
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../components/styles-component/footer.css"

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Bloc 1 : Logo & description */}
        <div className="footer-section">
          <h2 className="footer-logo">EUROPE RAPIDE EXPO</h2>
          <p>{t("Votre partenaire d’excellence pour tous vos projets.") || "Votre partenaire d’excellence pour tous vos projets."}</p>
        </div>

        {/* Bloc 2 : Liens utiles */}
        <div className="footer-section">
          <h3>{t("Footer.links") || "Liens utiles"}</h3>
          <ul>
            <li><Link to="/">{t("accueil")}</Link></li>
            <li><Link to="/apropos">{t("Apropos")}</Link></li>
            <li><Link to="/services">{t("Services")}</Link></li>
            <li><Link to="/projet">{t("Projet")}</Link></li>
            <li><Link to="/contact">{t("Contact")}</Link></li>
          </ul>
        </div>

        {/* Bloc 3 : Contact */}
        <div className="footer-section">
          <h3>{t("Contact") || "Contact"}</h3>
          <p>📍 91540 MENNECY </p>
          <p> 📞Directe: 01.60.87.03.22</p>
          <p>📞Standard: 01.60.87.20.02</p>
          <p>✉️ contact@ere91.com</p>
        </div>

        {/* Bloc 4 : Réseaux sociaux */}
        <div className="footer-section">
          <h3>{t("Social") || "Suivez-nous"}</h3>
          <ul className="footer-socials">
            <li>
              <a
                href="https://www.facebook.com/EuropeRapideExpo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/EuropeRapideExpo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/EuropeRapideExpo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/europe-rapide-expo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} EUROPE RAPIDE EXPO. {t("Tous droits réservés.") || "Tous droits réservés."}
      </div>
    </footer>
  );
};

export default Footer;

