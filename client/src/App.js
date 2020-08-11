import React, { useState, useEffect }from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import QuickDesign from "./pages/QuickDesign";
import Nav from "./components/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import MainProfile from "./pages/MainProfile";
import Footer from "./components/Footer";
import UserForm from "./components/UserForm";
import TempOne from "./pages/Temp1";
import TempTwo from "./pages/Temp2";
import { home } from "./utils/api";

function App() {
  const[portfolio, setPortfolio]=useState("/template");
  const[portfolioTwo, setPortfolioTwo]=useState("/template");
  useEffect(() => {
    home()
    .then(res => {
        // console.log(res);
        const { firstName, lastName } = res;
        // console.log({firstName});
        // console.log(`"/${firstName}"`);
        setPortfolio(`/${firstName}${lastName}`);
        setPortfolioTwo(`/${firstName}${lastName}2`);
        // console.log(firstName);
    })
    .catch(err => console.log(err));
    console.log({portfolio})
},[]);
  return (
    <div>
      <Nav />
        <Router>
          <Switch>
            <Route exact path={["/", "/home"]} activeClassName="active" eventKey="/" component={Home}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/userForm" component={UserForm}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/quickdesign" component={QuickDesign}/>
            <Route path="/mainprofile" component={MainProfile} />
            <Route path={portfolio} component={TempOne} />
            <Route path={portfolioTwo} component={TempTwo} /> 
          </Switch>
        </Router>
      <Footer />
  </div>
  );
};
export default App;