import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import ProjectSlider from "./pages/ProjectSlider";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  //conditional rendering of the CTA component
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <div className="body__wrapper">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:projectId" element={<ProjectSlider />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div>
        {!isContactPage && <CTA />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
