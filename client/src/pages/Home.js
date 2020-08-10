import React from "react";
import "./Home.css";
import Jumbotron from "../components/Jumbotron";
import Carousel from "../components/Carousel";
import Card from "../components/Card";

function Home() {
  return (
    <div>
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
        <div class="clearfix"></div>
      </div>
    </div>
  )
}

export default Home;