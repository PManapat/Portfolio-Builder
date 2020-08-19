import React, { useEffect, useState } from 'react';
import Navbar from '../tTwoComp/Navbar';
import About from '../tTwoComp/About';
import Footer from "../tOneComp/Footer"
import Project from"../tTwoComp/Project"
import ProjectCard from"../tTwoComp/ProjectCard"
import Nav from "../components/Navbar";
import UserNav from "../components/UserNav";
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import "./Temp1.css";

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
        <Project />
        <ProjectCard />
        <Footer />
      </div>
      <div id='tempBtn2'>
        <Button className='btn btn-info btn-lg' onClick={handleClick}>Templates</Button>
      </div>
    </div>
  )
}

