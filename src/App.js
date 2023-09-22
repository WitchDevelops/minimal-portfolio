import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import ProjectSlider from "./pages/ProjectSlider";
import Contact from "./pages/Contact";

import "./App.css";


function App() {
  return (
    <div className="body__wrapper">
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:projectId" element={<ProjectSlider />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <CTA />
       <Footer />
    </Router>
    </div>
  );
}

export default App;