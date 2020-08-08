import React from "react";
import Jumbotron from "../components/Jumbotron";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import styles from "./Home.css";
import { red } from "@material-ui/core/colors";
import { rgbToHex } from "@material-ui/core";

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
        <div class="clearfix"></div>
      </div>

    </div>
  )
}

export default Home;