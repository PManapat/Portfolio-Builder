import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Navbar";
import BootstrapCarousel from './components/Carousel' 
import Footer from "./components/Footer";
import Card from "./components/Card";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Jumbotron />
        <Route exact path={["/", "/home"]}>
         <BootstrapCarousel></BootstrapCarousel>
        <Home />        
        </Route>
      </Switch>
    </div>
    <div>
      <div class="MyCard">
        <Card />
        <Switch>
          <Route exact path={["/", "/home"]}>
          <Home />        
          </Route>
        </Switch>
      </div>
      <div class="MyCard">
        <Card />
        <Switch>
          <Route exact path={["/", "/home"]}>
          <Home />        
          </Route>
        </Switch>
      </div>
      <div class="MyCard">
        <Card />
        <Switch>
          <Route exact path={["/", "/home"]}>
          <Home />        
          </Route>
        </Switch>
      </div>
    </div>
    <Footer />
  </Router>
   );
}


export default App;

