import React, { useEffect, useState } from 'react';
import Navbar from '../tTwoComp/Navbar';
import About from '../tTwoComp/About';
import Footer from "../tOneComp/Footer"
import Project from"../tTwoComp/Project"
import ProjectCard from"../tTwoComp/ProjectCard"
import Nav from "../components/Navbar";
import UserNav from "../components/UserNav";
import "./Temp1.css";

export default function () {
  const[navbar, SetNavbar]=useState(Nav);
  const userInfo = window.localStorage.user;

  useEffect(() => {
    // console.log(res);
    if(userInfo != undefined){
      SetNavbar(UserNav);
    }
    else return;
  },[]);

  return (
    <div>
      {navbar}
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

