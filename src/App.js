import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./components/i18n";

import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Services from "./pages/Services";
import Projet from "./pages/Projet";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Footer from "./components/Footer"; // si présent
// 🔥 Import AOS
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,     // Durée de l'animation en ms
      once: true,         // Animation une seule fois lors du scroll
    });
  }, []);
  return (
    
    <I18nextProvider i18n={i18n}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projet" element={<Projet />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </I18nextProvider>
  );
}

export default App;
