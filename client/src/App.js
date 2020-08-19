import React, { useState, useEffect }from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import QuickDesign from "./pages/QuickDesign";
import CustomTemplate from "./pages/CustomTemplate";
import CustomPage from "./pages/CustomPage";
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
          const { firstName, lastName } = res;
          setPortfolio(`/${firstName}${lastName}`);
          setPortfolioTwo(`/${firstName}${lastName}2`);
    })
    .catch(err => console.log(err));
},[]);

  return (
    <div>
        <Router>
          {/* {navbar} */}
          <Switch>
            <Route exact path={["/", "/home"]} activeClassName="active" eventKey="/" component={Home}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/userForm" component={UserForm}/>
            <Route path="/quickdesign" component={QuickDesign}/>
            <Route path="/mainprofile" component={MainProfile} />
            <Route path="/customtemplate" component={CustomTemplate} />
            <Route path="/custompage" component={CustomPage} />
            <Route path={portfolio} component={TempOne} />
            <Route path={portfolioTwo} component={TempTwo} />
          </Switch>
          <Footer />
        </Router>
  </div>
  );
};
export default App;