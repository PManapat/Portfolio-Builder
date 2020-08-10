import React from 'react';
import "./Temp1.css";
import Navbar from '../tOneComp/Nav';
import About from '../tOneComp/About';
import Projects from '../tOneComp/Projects';
import Footer from '../tOneComp/Footer';

export default function () {
  return (
    <div id="tempBorder">
      <Navbar />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};