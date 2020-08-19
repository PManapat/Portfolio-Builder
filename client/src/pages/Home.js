import React, { useState, useEffect } from "react";
import "./Home.css";
import Jumbotron from "../components/Jumbotron";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Nav from "../components/Navbar";
import UserNav from "../components/UserNav";

function Home() {
  const[navbar, SetNavbar]=useState(Nav);
  const userInfo = window.localStorage.user;

  useEffect(() => {
        // console.log(res);
        if(userInfo !== undefined){
          SetNavbar(UserNav);
        }
        else return;
      },[]);

  return (
    <div>
      {navbar}
      <div style={{textAlign:"center"}}>
        <Jumbotron />
      </div>
      <div className="MyCarouselBackground">
        <Carousel />
      </div>
      <div style={{marginBottom:"50px"}}>&nbsp;</div>
      <div className="MyCardContainer">
        <div className="MyCard img13">
          <Card />
        </div>
        <div className="MyCard img12">
          <Card />
        </div>
        <div className="MyCard img11">
          <Card />
        </div>
        {/* Clearfix to fix float issue */}
        <div className="clearfix"></div>
      </div>
    </div>
  )
}

export default Home;