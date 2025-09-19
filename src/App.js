// src/App.js
import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Services from "./pages/Services";
import Projet from "./pages/Projet";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// 🔥 Import AOS
import Aos from "aos";
import "aos/dist/aos.css";

/**
 * AOSController
 * - Initialise AOS une seule fois au montage
 * - Rafraîchit AOS à chaque changement de route pour prendre en compte le DOM rendu
 */
function AOSController() {
  const location = useLocation();

  useEffect(() => {
    Aos.init({
      duration: 1000, // Durée de l'animation en ms
      once: false,    // false => permet de rejouer l'animation en cas de navigation. Mettre true si tu veux que ça joue une seule fois.
      // easing: 'ease-out-cubic',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Refresh AOS après chaque navigation pour que les nouveaux éléments soient détectés
    Aos.refresh();
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      {/* Contrôle AOS : init + refresh on navigation */}
      <AOSController />

      {/* site-wrapper = layout flex column (header / main / footer) */}
      <div className="site-wrapper">
        <Navbar />

        {/* main qui prend tout l'espace restant et pousse le footer en bas */}
        <main className="site-main" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projet" element={<Projet />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
