import React from 'react';
import Navbar from '../tTwoComp/Navbar';
import About from '../tTwoComp/About';
import Nav from '../components/UserNav';
import Footer from "../tOneComp/Footer"
import Project from"../tTwoComp/Project"
import ProjectCard from"../tTwoComp/ProjectCard"
import "./Temp1.css";

export default function () {
  return (
    <div>
      <Nav />
      <div id="tempBorder">
        <Navbar />
        <About />
        <Project />
        <ProjectCard />
        <Footer />
      </div>
    </div>
  )
}