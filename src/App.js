import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
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