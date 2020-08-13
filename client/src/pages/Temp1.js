import React, { useEffect, useState } from 'react';
import "./Temp1.css";
import Navbar from '../tOneComp/Nav';
import About from '../tOneComp/About';
import Projects from '../tOneComp/Projects';
import Footer from '../tOneComp/Footer';
import Nav from "../components/Navbar";
import UserNav from "../components/UserNav";

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
        <Projects />
        <Footer />
      </div>
    </div>
  );
};