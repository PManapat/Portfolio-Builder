import React, { useEffect, useState } from 'react';
import "./style.css";
import {getProfile, mainProfile} from "../../utils/api.js";
import Dashboard from '../Dashboard';

function myprofile() {
    const[firstName, setFirstName]=useState("");
    const[lastName, setLastName]=useState("");
    const[email, setEmail]=useState("");
    
    useEffect(() => {
        mainProfile()
        .then(res => {
            console.log(res);
            const{ user:{firstName, lastName, email}}=res;
            console.log(firstName);
            setFirstName({firstName});
            setLastName({lastName});
            setEmail({email});
        })
        .catch(err => console.log(err));
    },[])
    
    return (
        <div className="container" id="container">
            <div className="jumbotron mt-5">
                <div className="col-sm-8 mx-auto">
                <h2 className="text-center">Hello {firstName.firstName} {" "} {lastName.lastName} </h2>
                    <h5>This page is limited. We will be updating features.</h5>
                </div>
            </div>
            <Dashboard />
        </div>
    );
}

export default myprofile;