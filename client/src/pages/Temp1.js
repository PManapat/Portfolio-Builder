import React from 'react';
import "./Temp1.css";
import Navbar from '../tOneComp/Nav';
import About from '../tOneComp/About';
import Projects from '../tOneComp/Projects';
import Footer from '../tOneComp/Footer';
import Nav from '../components/UserNav';

export default function () {
  return (
    <div>
      <Nav />
      <div id="tempBorder">
        <Navbar />
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};