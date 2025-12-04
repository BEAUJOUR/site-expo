import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {FaBars } from "react-icons/fa";
import "../components/styles-component/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 

  useEffect(() => {
    // fermer le menu quand on change de route ou de langue
    setMenuOpen(false);
    // scroll to top when language or route changes
    window.scrollTo(0, 0);
  }, []);

  const toggleMenu = () => setMenuOpen((v) => !v);
  // const toggleDarkMode = () => setDarkMode((v) => !v);
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
  className={`nav-links cascade-nav ${menuOpen ? "active" : ""}`}
  role="menubar"
>

          <li className="dark" role="none">
            <Link role="menuitem" to="/" onClick={() => setMenuOpen(false)}>
              {"Accueil"}
            </Link>
          </li>
          <li className="dark" role="none">
            <Link role="menuitem" to="/evenement" onClick={() => setMenuOpen(false)}>
              {"Événementiel"}
            </Link>
          </li>
          <li role="none">
            <Link
              role="menuitem"
              to="/agencement"
              onClick={() => setMenuOpen(false)}
            >
              {"Agencement"}
            </Link>
          </li>
          <li role="none">
            <Link
              role="menuitem"
              to="/quisommesnous"
              onClick={() => setMenuOpen(false)}
            >
              {"Qui sommes-nous ?"}
            </Link>
          </li>
        
          <li role="none">
            <Link
              role="menuitem"
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              {"Contact"}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
