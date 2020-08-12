import React from "react";
import { useHistory } from "react-router-dom";
import Card from "../Card";

function Dashboard() {
  let history = useHistory();

  function handleClickOne() {
    return (history.push("/userform"))
  };
  function handleClickTwo() {
    return (history.push("/customtemplate"))
  };
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1> Select the level of portfolio customization below </h1>
      </div>
      <div className="MyCard50 img12">
  <Card onClick={handleClickOne}>Template Design</Card>
      </div>
      <div className="MyCard50 img11">
        <Card onClick={handleClickTwo}>Custom Design</Card>
      </div>
      <div className="clearfix"></div>
    </div>
  );
}


export default Dashboard;