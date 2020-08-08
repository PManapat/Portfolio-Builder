import React from "react";
import Card from "../components/Card";
// import styles from "./Dashboard.css";
import { red } from "@material-ui/core/colors";
import { rgbToHex } from "@material-ui/core";

function Dashboard() {
  return (
    <div>
        <div style={{textAlign:"center"}}>
            <h1>Tell us what you want to do? </h1>
        </div>
        <div className="MyCard50 img12">
          <Card />

        </div>
        <div className="MyCard50 img11">
          <Card />

        </div>
    </div>
  )
}

export default Dashboard;