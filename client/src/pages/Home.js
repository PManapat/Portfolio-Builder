import React, { useEffect, useState }from "react";
import "./Home.css";
import Jumbotron from "../components/Jumbotron";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import {home} from "../utils/api.js";

function Home() {
  const[firstName, setFirstName]=useState("");
  useEffect(() => {
    home()
    .then(res => {
        console.log(res);
        console.log(res.firstName);
        const{firstName}=res;
        setFirstName({firstName});
        console.log(firstName);
       
    })
    .catch(err => console.log(err));
},[])
  return (
    <div>
      <div style={{textAlign:"center"}}>
      {/* <h1>Welcome  {firstName.firstName}</h1> */}
        <Jumbotron firstName={firstName.firstName} />
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
        <div class="clearfix"></div>
      </div>
    </div>
  )
}

export default Home;