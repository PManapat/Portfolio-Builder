import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Profile from "./components/auth/Profile";
// import Carousel from "./components/Carousel"; 
import Footer from "./components/Footer";
import UserForm from "./components/UserForm";
// import Card from "./components/Card";
// import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        {/* <Switch> */}
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/userform" component={UserForm} />
        <Route exact path={["/", "/home"]} component={Home} />
        {/* </Switch> */}
      </div>
      <Footer />
    </Router>
  );
}
export default App;