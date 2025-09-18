import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <Link to="/">
              <img className="imlogo" src="/logo.png" alt="EUROPE RAPIDE EXPO" />
            </Link>
          </div>

          <button 
            className="menu-toggle" 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${menuOpen ? "open" : ""}`}></span>
          </button>

          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link></li>
            <li><Link to="/apropos" onClick={() => setMenuOpen(false)}>À propos</Link></li>
            <li><Link to="/services" onClick={() => setMenuOpen(false)}>Nos services</Link></li>
            <li><Link to="/projet" onClick={() => setMenuOpen(false)}>Nos projets</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
