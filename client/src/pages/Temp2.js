import React from 'react';
import "./Temp1.css";
import About from '../tTwoComp/components/about';
import Footer from '../tTwoComp/components/footer';
import Header from '../tTwoComp/components/header';
import Portfolio from '../tTwoComp/components/portfolio';
import Resume from '../tTwoComp/components/resume';

export default function () {
  return (
    <div id="tempBorder">
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Footer />
    </div>
  );
};