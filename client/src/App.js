import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Carousel from "./components/Carousel"; 
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
        
        <Home />        
        </Route>
        <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
      </Switch>
    </div>
    <div>
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
    <Footer />
  </Router>
   );
}


export default App;

