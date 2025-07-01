import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaGlobe, FaMoon, FaSun, FaBars } from "react-icons/fa";
import "../components/styles-component/navbar.css"

const LANGS = ["fr", "en", "es", "pt"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
  };

  const currentLang = i18n.language || "fr";

  const handleLangToggle = () => {
    const currentIndex = LANGS.indexOf(currentLang);
    const nextIndex = (currentIndex + 1) % LANGS.length;
    i18n.changeLanguage(LANGS[nextIndex]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [i18n.language, location.pathname]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <img
              className="logo"
              src={`${process.env.PUBLIC_URL}/logo.png`}
              alt="EUROPE RAPIDE EXPO"
            />
          </Link>
        </div>

        <div className="nav-controls">
          {/* Bouton toggle langue */}
          <button
            onClick={handleLangToggle}
            className="nav-btn"
            aria-label="Changer la langue"
            title={`Changer la langue (actuelle: ${currentLang.toUpperCase()})`}
          >
            <FaGlobe size={20} />
            <span style={{ marginLeft: "6px", fontWeight: "bold" }}>
              {currentLang.toUpperCase()}
            </span>
          </button>

          {/* Bouton Dark Mode */}
          <button
            onClick={toggleDarkMode}
            className="nav-btn"
            aria-label="Toggle mode sombre"
            title={darkMode ? "Mode clair" : "Mode sombre"}
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

          {/* Bouton menu burger */}
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            title="Menu"
          >
            <FaBars size={24} className={`${menuOpen ? "open" : ""}`} />
          </button>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              {t("accueil")}
            </Link>
          </li>
          <li>
            <Link to="/apropos" onClick={() => setMenuOpen(false)}>
              {t("Apropos")}
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setMenuOpen(false)}>
              {t("Services")}
            </Link>
          </li>
          <li>
            <Link to="/projet" onClick={() => setMenuOpen(false)}>
              {t("Projet")}
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              {t("Contact")}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
