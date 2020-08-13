import React, { useEffect, useState } from 'react';
import "./MainProfile.css";
import { home } from "../utils/api.js";
import Dashboard from '../components/Dashboard';
// import { useHistory } from "react-router-dom";
import Button from '../components/Button';
import Nav from "../components/Navbar";
import UserNav from "../components/UserNav";


export default () => {
    // let history = useHistory();
    const[firstName, setFirstName]=useState("");
    const[lastName, setLastName]=useState("");
    // const[portfolio, setPortfolio]=useState("/template");
    const[navbar, SetNavbar]=useState(Nav);
    const userInfo = window.localStorage.user;

    useEffect(() => {
        home()
        .then(res => {
            // console.log(res);
            const{firstName, lastName}=res;
            // console.log({firstName});
            setFirstName({firstName});
            setLastName({lastName});
            // setPortfolio(`/${firstName}`);
        }).catch(err => console.log(err));
    },[])

    useEffect(() => {
        // console.log(res);
        if(userInfo != undefined){
          SetNavbar(UserNav);
        }
        else return;
      },[]);

    // function handleClick(){
    //     console.log(`${firstName}${lastName}`)
    //     return (history.push(`${firstName}${lastName}`))
    // }

    return (
        <div>
            {navbar}
            <div className="container" id="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h2 className="text-center">Hello {firstName.firstName} {" "}{lastName.lastName}</h2>
                        <h5>This page is limited. We will be updating features.</h5>
                    </div>
                </div>
                <Dashboard />
            </div>
        </div>
    );
}