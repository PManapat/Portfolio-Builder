import React, { useEffect, useState } from 'react';
import "./Temp1.css";
import Navbar from '../tOneComp/Nav';
import About from '../tOneComp/About';
import Projects from '../tOneComp/Projects';
import Footer from '../tOneComp/Footer';
import Nav from "../components/Navbar";
import UserNav from "../components/UserNav";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function () {
  const[navbar, SetNavbar]=useState(Nav);
  const userInfo = window.localStorage.user;
  let history = useHistory();

  useEffect(() => {
    // console.log(res);
    if(userInfo != undefined){
      SetNavbar(UserNav);
    }
    else return;
  },[]);

  function handleClick(){
    return (history.push("/quickdesign"))
  }

  return (
    <div>
      {navbar}
      <div id="tempBorder">
        <Navbar />
        <About />
        <Projects />
        <Footer />
      </div>
      <div id='tempBtn'>
        <Button className='btn btn-info btn-lg' onClick={handleClick}>Templates</Button>
      </div>
      
    </div>
  );
};