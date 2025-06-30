import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

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

  // Pour éviter l'erreur quand i18n.language est undefined
  const currentLang = i18n.language || "fr";

  // Fonction pour passer à la langue suivante dans LANGS
  const handleLangToggle = () => {
    const currentIndex = LANGS.indexOf(currentLang);
    const nextIndex = (currentIndex + 1) % LANGS.length;
    i18n.changeLanguage(LANGS[nextIndex]);
  };

  // Force scroll en haut et potentiellement autre effet au changement langue ou page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [i18n.language, location.pathname]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <img className="imlogo" src="/logo.png" alt="EUROPE RAPIDE EXPO" />
          </Link>
        </div>

        <div className="nav-controls">
          {/* Bouton toggle langue */}
          <button
            onClick={handleLangToggle}
            className="nav-btn"
            aria-label="Changer la langue"
          >
            {currentLang.toUpperCase()}
          </button>

          {/* Bouton Dark Mode */}
          <button
            onClick={toggleDarkMode}
            className="nav-btn"
            aria-label="Toggle mode sombre"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Bouton menu burger */}
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${menuOpen ? "open" : ""}`}></span>
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
              {t("apropos")}
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setMenuOpen(false)}>
              {t("services")}
            </Link>
          </li>
          <li>
            <Link to="/projet" onClick={() => setMenuOpen(false)}>
              {t("projet")}
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              {t("contact")}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
