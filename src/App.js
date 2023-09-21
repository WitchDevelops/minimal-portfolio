import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import  Footer from "./components/Footer";

function App() {
  return (
    <div className="body__wrapper">
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <CTA />
       <Footer />
    </Router>
    </div>
  );
}

export default App;