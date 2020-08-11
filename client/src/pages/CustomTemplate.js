import React from "react";
import {generatepage} from "../../src/utils/api.js";
import Card from "../components/Card";
import styles from "./CustomTemplate.css";
import { red } from "@material-ui/core/colors";
import { rgbToHex } from "@material-ui/core";

function getPageTemplate(){

    var page =  "import React from \"react\"; " +
    "import Card from \"../components/Card\"; " +
    "import Navbar from \"../components/Navbar\"; " +
    "import Jumbotron from \"../components/Jumbotron\"; " +
    "import Footer from \"../components/Footer\"; " +
    // "import Nav from \"../components/Nav\"; " +
    "function CustomPage() {" +
        "return (" +
            "<div>" +
            "Insert_Custom_Page_Here" +
            "</div>" +
        ")" +
    "}" + 
    "export default CustomPage;";

    return page;
}
function generatePage(){

    var customPage = "";

    if(document.getElementById("navbar").checked){

        customPage = customPage + 
                        "<div>" +
                            "<Navbar />" +
                        "</div>";

    }

    if(document.getElementById("jumbotron").checked){

        customPage = customPage + 
        "<div>" +
            "<Jumbotron />" +
        "</div>";

    }

    if(document.getElementById("card").checked){

        customPage = customPage + 
        "<div className=\"MyCard50\">" +
            "<Card />" +
        "</div>" +
        "<div className=\"MyCard50\">" +
            "<Card />" +
        "</div>";
    }

    if(document.getElementById("footer").checked){
    
        customPage = customPage + 
        "<div>" +
            "<Footer />" +
        "</div>";

    }

    var completePage = getPageTemplate();
    completePage = completePage.replace("Insert_Custom_Page_Here", customPage);

    console.log("Generated page - ", completePage);

    generatepage( completePage );
        // generatepage contacts the backend and saves the page as 'CustomPage.js'
        // creation of this page triggers a recompile, which takes a second or two
        // but we've already asked to go to page 'custompage', which loads the older page immediately.

    window.location.href = "custompage";

    // to show the newly created custompage, we need to do a page refresh on the browser.

}

function CustomTemplate() {
  return (
    <div>
        <div className="PageTitle">
            <h1>Select components you want in your page? </h1>
        </div>
        <div className="MyContainer">
            <ul>
                <li>
                    <input type="checkbox" id="navbar" name="navbar" value="Navbar" />
                    <label for="navbar">Navbar</label>
                </li>
                <li>                
                    <input type="checkbox" id="jumbotron" name="jumbotron" value="Jumbotron" />
                    <label for="jumbotron">Jumbotron</label>
                </li>
                <li>                
                    <input type="checkbox" id="card" name="card" value="Card" />
                    <label for="card">Card</label>
                </li>
                <li>                
                    <input type="checkbox" id="footer" name="footer" value="Footer" />
                    <label for="footer">Footer</label>
                </li>
            </ul>
            <button onClick={generatePage}>Generate New Page</button>
        </div>
    </div>
  )
}

export default CustomTemplate;