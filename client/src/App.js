import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Navbar";
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
  </Router>
   );
}


export default App;
