import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import "../components/styles-component/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Bloc 1 : Logo & description */}
        <div className="footer-section">
          <h2 className="footer-logo">EUROPE RAPIDE EXPO</h2>
          <p>
            {"Votre partenaire d’excellence pour tous vos projets." ||
              "Votre partenaire d’excellence pour tous vos projets."}
          </p>
        </div>

        {/* Bloc 2 : Liens utiles */}
        <div className="footer-section">
          <ul>
            {" "}
            <h3>{"Accès rapides" || "Liens utiles"}</h3>
            <li>
              <Link to="/">{"Accueil"}</Link>
            </li>
            <li>
              <Link to="/evenement">{"Événementiel"}</Link>
            </li>
            <li>
              <Link to="/agencement">{"Agencement"}</Link>
            </li>
            <li>
              <Link to="/quisommesnous">{"Qui sommes-nous ?"}</Link>
            </li>
            <li>
              <Link to="/contact">{"Contact"}</Link>
            </li>
          </ul>
        </div>
        {/* Bloc 3 : Contact */}
        <div className="footer-section">
          <ul>
            {" "}
            <h3>Nous contacter</h3>
            <p>
              <FaMapMarkerAlt className="footer-icon" />
              91540 MENNECY
            </p>
            <p>
              <FaPhoneAlt className="footer-icon" />
              01.60.87.20.02
            </p>
            <p>
              <FaEnvelope className="footer-icon" />
              <p>contact@ere91.com</p>
            </p>
          </ul>
        </div>

        {/* Bloc 4 : Réseaux sociaux */}
        <div className="footer-section">
          <h3>{"Nous suivres" || "Nous suivres"}</h3>
          <ul className="footer-socials">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100070063475044"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="facebook social-icon"
              >
                <FaFacebookF />
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/accounts/onetap/?next=%2Feuroperapideexpo%2F"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="instagram social-icon"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/74368705/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="linkedin social-icon"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} EUROPE RAPIDE EXPO.{" "}
        {"Tous droits réservés." || "Tous droits réservés."}
      </div>
    </footer>
  );
};
export default Footer;
