// import React from 'react'
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";

const Routess = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routess;
