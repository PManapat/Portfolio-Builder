import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login"
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
        <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
      </Switch>
    </div>
  </Router>
   );
}


export default App;
