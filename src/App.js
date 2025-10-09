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
import ScrollToTop from "./components/ScrollToTop"; // ✅

import Aos from "aos";
import "aos/dist/aos.css";

function AOSController() {
  const location = useLocation();

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <AOSController />
      <ScrollToTop /> {/* ✅ remet le scroll en haut à chaque route */}

      <div className="site-wrapper">
        <Navbar />
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
