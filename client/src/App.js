import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Navbar";
import Card from "./components/Card";
// import your component here

function App() {
  return (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path={["/", "/home"]}>
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
  </Router>
   );
}


export default App;
