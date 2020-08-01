import React from "react";
import Jumbotron from "../components/Jumbotron";
import Carousel from "../components/Carousel"; 

import Card from "../components/Card";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function Home (){
return(
    <div>
        <div>
        <Jumbotron />
    <Carousel />
    </div>
    <div>
      <div className="MyCard">
        <Card />
        <Switch>
          <Route exact path={["/", "/home"]}>
          <Home />        
          </Route>
        </Switch>
      </div>
      <div className="MyCard">
        <Card />
        <Switch>
          <Route exact path={["/", "/home"]}>
          <Home />        
          </Route>
        </Switch>
      </div>
      <div className="MyCard">
        <Card />
        <Switch>
          <Route exact path={["/", "/home"]}>
          <Home />        
          </Route>
        </Switch>
      </div>
    </div>
    </div>
)
}

export default Home;