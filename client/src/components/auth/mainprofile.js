import React, { useEffect, useState } from 'react'
//  import jwt_decode from 'jwt-decode'
import {getProfile, mainProfile} from "../../utils/api.js";

function myprofile() {

    const[firstName, setFirstName]=useState("");
    const[lastName, setLastName]=useState("");
    const[email, setEmail]=useState("");
    
 
    useEffect(() => {
       
        mainProfile()
        .then(res => {
            console.log(res);
            const{firstName, lastName, email}=res;
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
                    <h1>Welcome {firstName.firstName}</h1>
                </div>
                {/* <table className="table col-md-6 mx-auto">
                    <tbody>
                        <tr>
                            <td>First Name</td>
    <td>{firstName.firstName}</td>


                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td>{lastName.last_name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{email.email}</td>
                        </tr>
                    </tbody>
                </table> */}
            </div>
        </div>
    )
}
export default myprofile;