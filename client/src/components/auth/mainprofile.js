import React, { useEffect, useState } from 'react'
import {getProfile, mainProfile} from "../../utils/api.js";

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
         
        }
          
        )
        .catch(err => console.log(err));
    
    },[])
    
    return (
        <div className="container">
            <div className="jumbotron mt-5">
                <div className="col-sm-8 mx-auto">
                    <h1 className="text-center">PROFILE</h1>
                    <h1>Welcome  {firstName.firstName}</h1>
                    <h5>inspect you see all the values from backend</h5>
                </div>
            </div>
        </div>
    )
}
export default myprofile;