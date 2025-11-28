// src/App.js
import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Agencement from "./pages/Agencement";


import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // ✅
// import "./index.css";

import Aos from "aos";
import "aos/dist/aos.css";
import Evenement from "./pages/Evenement";
import QuiSommesNous from "./pages/QuiSommesNous";

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

      
        <Navbar />
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/evenement" element={<Evenement />} />
            <Route path="/agencement" element={<Agencement/>} />
         
            <Route path="/quisommesnous" element={<QuiSommesNous />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<Home />} />
          </Routes>
       
        <Footer />
      
    </Router>
  );
}

export default App;
