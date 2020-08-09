import React from "react";
import Card from "../Card";
// import styles from "./Dashboard.css";
import { red } from "@material-ui/core/colors";
import { rgbToHex } from "@material-ui/core";
// Import useHistory
import { useHistory } from "react-router-dom";
import ReactCardFlip from "react-card-flip";

function Dashboard() {
	let history = useHistory();

	function handleClickOne () {
		// setIsFlipped(!isFlipped);
		return (history.push("/quickdesign"))
	  };
	  
	  function handleClickTwo () {
		// setIsFlipped(!isFlipped);
		return (history.push("/userForm"))
	  };

  return (
    <div>
        <div style={{textAlign:"center"}}>
            <h1>Tell us what you want to do? </h1>
        </div>
        <div className="MyCard50 img12">
          <Card onClick={handleClickOne}/>

        </div>
        <div className="MyCard50 img11">
          <Card onClick={handleClickTwo}/>

        </div>
		{/* Added clearfix */}
		<div class="clearfix"></div>
    </div>
  )
}

export default Dashboard;