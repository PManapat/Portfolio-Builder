import React from "react";
import Jumbotron from "../components/Jumbotron";
import Carousel from "../components/Carousel";
import Card from "../components/Card";

function Home() {
  return (
    <div>
      <div>
        <Jumbotron />
        <Carousel />
      </div>
      <div>
        <div className="MyCard">
          <Card />

        </div>
        <div className="MyCard">
          <Card />

        </div>
        <div className="MyCard">
          <Card />

        </div>
      </div>
    </div>
  )
}

export default Home;