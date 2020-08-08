import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../tOneComp/Nav';
import About from '../tOneComp/About';
import Projects from '../tOneComp/Projects';
import Footer from '../tOneComp/Footer';
import "./Temp1.css"

function App() {
  return (
    <div id="tempBorder">
      <Navbar />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
