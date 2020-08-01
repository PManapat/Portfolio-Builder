import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";
// import your component here
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
      </Switch>
      <Footer />
    </div>
  </Router>
   );
}


export default App;
