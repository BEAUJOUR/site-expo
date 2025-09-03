import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";
import "../components/styles-component/navbar.css";

// const LANGS = ["fr", "en", "es", "pt"];

const Navbar = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const stored = localStorage.getItem("dark-mode");
      if (stored !== null) return stored === "1";
      return document.body.classList.contains("dark");
    } catch (e) {
      return document.body.classList.contains("dark");
    }
  });

  useEffect(() => {
    // Applique la classe sur le body et sauvegarde la préférence
    try {
      document.body.classList.toggle("dark", darkMode);
      localStorage.setItem("dark-mode", darkMode ? "1" : "0");
    } catch (e) {
      // ignore
    }
  }, [darkMode]);

  useEffect(() => {
    // fermer le menu quand on change de route ou de langue
    setMenuOpen(false);
    // scroll to top when language or route changes
    window.scrollTo(0, 0);
  }, [i18n.language, location.pathname]);

  const toggleMenu = () => setMenuOpen((v) => !v);
  const toggleDarkMode = () => setDarkMode((v) => !v);

  // const currentLang = i18n.language || "fr";
  // const handleLangToggle = () => {
  //   const currentIndex = LANGS.indexOf(currentLang);
  //   const nextIndex = (currentIndex + 1) % LANGS.length;
  //   i18n.changeLanguage(LANGS[nextIndex]);
  // };

  return (
    
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img
              className="logo"
              src={`${process.env.PUBLIC_URL}/logo.png`}
              alt="EUROPE RAPIDE EXPO"
            />
          </Link>
        </div>

        <div className="nav-controls">
          {/* Lang toggle (décommenter si besoin)
          <button
            onClick={handleLangToggle}
            className="nav-btn"
            aria-label="Changer la langue"
            title={`Changer la langue (actuelle: ${currentLang.toUpperCase()})`}
          >
            <FaGlobe size={20} />
            <span style={{ marginLeft: 6, fontWeight: "bold" }}>
              {currentLang.toUpperCase()}
            </span>
          </button>
          */}

          {/* Dark Mode */}
          <button
            onClick={toggleDarkMode}
            className="nav-btn"
            aria-label="Toggle mode sombre"
            title={darkMode ? "Mode clair" : "Mode sombre"}
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

          {/* Burger */}
          <button
            className={`menu-toggle nav-btn ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            title="Menu"
          >
            <FaBars size={24} />
          </button>
        </div>

        {/* Ajout de la classe 'dark' sur le <ul> quand darkMode est true */}
        <ul
          className={`nav-links ${menuOpen ? "active" : ""} ${darkMode ? "dark" : ""}`}
          role="menubar"
        >
          <li className="dark" role="none">
            <Link role="menuitem" to="/" onClick={() => setMenuOpen(false)}>
              {t("Accueil")}
            </Link>
          </li>
          <li role="none">
            <Link role="menuitem" to="/apropos" onClick={() => setMenuOpen(false)}>
              {t("Apropos")}
            </Link>
          </li>
          <li role="none">
            <Link role="menuitem" to="/services" onClick={() => setMenuOpen(false)}>
              {t("Services")}
            </Link>
          </li>
          <li role="none">
            <Link role="menuitem" to="/projet" onClick={() => setMenuOpen(false)}>
              {t("Projet")}
            </Link>
          </li>
          <li role="none">
            <Link role="menuitem" to="/contact" onClick={() => setMenuOpen(false)}>
              {t("Contact")}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
