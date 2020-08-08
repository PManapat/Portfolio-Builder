import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
// import Form from './components/Form';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      {/* <Form /> */}
      <Footer />
    </div>
  );
}

export default App;
