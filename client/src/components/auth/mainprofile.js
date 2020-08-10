import React, { useEffect, useState } from 'react';
import "./style.css";
import { home } from "../../utils/api.js";
import Dashboard from '../Dashboard';
// import { mainProfile } from "../utils/api.js";

function myprofile() {
    const[firstName, setFirstName]=useState("");
    // const[lastName, setLastName]=useState("");
    // const[email, setEmail]=useState("");
    
    useEffect(() => {
        home()
        .then(res => {
            console.log(res);
            // const{ user:{firstName, lastName, email}}=res;
            const{firstName}=res;
            console.log({firstName});
            setFirstName({firstName});
            // setLastName({lastName});
            // setEmail({email});
        })
        .catch(err => console.log(err));
    },[])

    return (
        <div className="container" id="container">
            <div className="jumbotron mt-5">
                <div className="col-sm-8 mx-auto">
                    <h1 className="text-center">PROFILE</h1>
                    <h1>Welcome {firstName.firstName}</h1>
                    <h5>inspect you see all the values from backend</h5>
                </div>
            </div>
            <Dashboard />
        </div>
    );
}

export default myprofile;