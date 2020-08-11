import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";

function CustomPage() {
    return ( < div > < div > < Navbar / > < /div><div><Jumbotron / > < /div><div className="MyCard50"><Card / > < /div><div className="MyCard50"><Card / > < /div><div><Footer / > < /div></div > )
}
export default CustomPage;