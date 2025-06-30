


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import Projet from "./pages/Projet";
import Contact from "./pages/Contact";
import Topbar from "./components/Topbar";

function App() {
  return (
    <Router>
      {/* <Topbar/> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projet" element={<Projet />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;