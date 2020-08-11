import React, { useEffect, useState } from 'react';
import "./MainProfile.css";
import { home } from "../utils/api.js";
import Dashboard from '../components/Dashboard';
// import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap';
// import Nav from '../components/UserNav';


export default () => {
    // let history = useHistory();
    const[firstName, setFirstName]=useState("");
    const[lastName, setLastName]=useState("");
    // const[portfolio, setPortfolio]=useState("/template");

    useEffect(() => {
        home()
        .then(res => {
            console.log(res);
            const{firstName, lastName}=res;
            console.log({firstName});
            setFirstName({firstName});
            setLastName({lastName});
            // setPortfolio(`/${firstName}`);
        }).catch(err => console.log(err));
    },[])

    // function handleClick(){
    //     console.log(`${firstName}${lastName}`)
    //     return (history.push(`${firstName}${lastName}`))
    // }

    return (
        <div>
            {/* <Nav /> */}
            <div className="container" id="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h2 className="text-center">Hello {firstName.firstName} {" "}{lastName.lastName}</h2>
                        <h5>This page is limited. We will be updating features.</h5>
                        {/* <Button onClick={handleClick} name="Check your Portfolio!">Check portfolio</Button> */}
                    </div>
                </div>
                <Dashboard />
            </div>
        </div>
    );
}