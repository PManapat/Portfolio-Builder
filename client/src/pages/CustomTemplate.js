import React from "react";
import {generatepage} from "../../src/utils/api.js";
// import Card from "../components/Card";
import styles from "./CustomTemplate.css";
import { red } from "@material-ui/core/colors";
import { rgbToHex } from "@material-ui/core";

function getPageTemplate(){

    var page =  "import React from \"react\"; \n" +
    "import Card from \"../components/Card\"; \n" +
    "import Lovecard from \"../components/Lovecard\";\n" +
    "import Mediacard from \"../components/Mediacard\";\n" +
    // "import Navbar from \"../components/Navbar\"; \n" +
    // "import Colorpicker from \"../components/Colorpicker\"; \n" +
    "import Carousel from \"../components/Carousel\"; \n" +
    "import CarouselP from \"../components/CarouselP\"; \n" +
    "import CarouselR from \"../components/CarouselR\"; \n" +
    "import Jumbotron from \"../components/Jumbotron\"; \n" +
    // "import JumbotronP from \"../components/JumbotronP\"; \n" +
    // "import JumbotronR from \"../components/JumbotronR\"; \n" +
    // "import Footer from \"../components/Footer\"; \n" +
    "function CustomPage() \n{" +
        "return ( \n" +
            "       <div>\n" +
            "Insert_Custom_Page_Here\n" +
            "       </div>\n" +
        ")\n" +
    "}\n" + 
    "export default CustomPage;";

    return page;
}
function generatePage(){

    var customPage = "";

    if(document.getElementById("navbar").checked){

        customPage = customPage + 
                        "<div>\n" +
                            "<Navbar />\n" +
                        "</div>\n";

    }
    if(document.getElementById("jumbotron").checked){

        customPage = customPage + 
        "<div className=\"img11\">\n" +
            "<Jumbotron />\n" +
        "</div>\n";

    }
    // if(document.getElementById("jumbotronp").checked){

    //     customPage = customPage + 
    //     "<div className=\"img11\">\n" +
    //         "<JumbotronP />\n" +
    //     "</div>\n";
    // }
    // if(document.getElementById("jumbotronr").checked){

    //     customPage = customPage + 
    //     "<div className=\"img11\">\n" +
    //         "<JumbotronR />\n" +
    //     "</div>\n";
    // }
    if(document.getElementById("card").checked){

        customPage = customPage + 
        "<div className=\"MyCard50\">\n" +
            "<Card />\n" +
        "</div>\n" +
        "<div className=\"MyCard50\">\n" +
            "<Card />\n" +
        "</div>\n";
    }
    if(document.getElementById("Colorpicker").checked){

        customPage = customPage + 
        "<div className=\"MyCom90\">\n" +
        // "<div>\n" +
            "<Colorpicker />\n" +
        "</div>\n";
    }
    if(document.getElementById("lovecard").checked){

        customPage = customPage + 
        "<div className=\"Classes.root\">\n" +
            "<Lovecard />\n" +
        "</div>\n";
    }
    if(document.getElementById("mediacard").checked){

        customPage = customPage + 
        "<div className=\"MyCard50\">\n" +
            "<Mediacard />\n" +
        "</div>\n";
    }
    if(document.getElementById("carousel").checked){

        customPage = customPage + 
        "<div className=\"MyCom90\">\n" +
            "<Carousel />\n" +
        "</div>\n";
    }
    if(document.getElementById("carouselp").checked){

        customPage = customPage + 
        "<div className=\"MyCom90\">\n" +
            "<CarouselP />\n" +
        "</div>\n";
    }
    if(document.getElementById("carouselr").checked){

        customPage = customPage + 
        "<div className=\"MyCom90\">\n" +
            "<CarouselR />\n" +
        "</div>\n";
    }
    if(document.getElementById("footer").checked){
    
        customPage = customPage + 
        "<div>\n" +
            "<Footer />\n" +
        "</div>\n";

    }


        //  -------    Code to generate page here  --------

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
                {/* <li>                
                    <input type="checkbox" id="jumbotronp" name="jumbotronp" value="Jumbotronp" />
                    <label for="jumbotronp">Jumbotron (Photography)</label>
                </li>
                <li>                
                    <input type="checkbox" id="jumbotronr" name="jumbotronr" value="Jumbotronr" />
                    <label for="jumbotronr">Jumbotron (Restaurant)</label>
                </li> */}
                <li>
                    <input type="checkbox" id="accordion" name="accordion" value="accordion" />
                    <label for="accordion">Accordion</label>
                </li>
                <li>
                    <input type="checkbox" id="carousel" name="carousel" value="accordion" />
                    <label for="carousel"> Carousel</label>
                    <ul>
                        <li>
                            <input type="checkbox" id="carouselp" name="carousel" value="accordion" />
                            <label for="carousel"> Carousel (Photography)</label>
                        </li>
                        
                        <li>
                            <input type="checkbox" id="carouselr" name="carousel" value="accordion" />
                            <label for="carousel"> Carousel (Restaurant)</label>
                        </li>
                    </ul>
                </li>
                <li>
                    <input type="checkbox" id="appbar" name="appbar" value="appbar" />
                    <label for="appbar">Appbar</label>
                </li>
                <li>
                    <input type="checkbox" id="stepper" name="stepper" value="stepper" />
                    <label for="stepper">Navbar</label>
                </li>
                <li>
                    <input type="checkbox" id="table" name="table" value="table" />
                    <label for="table"> Table</label>
                </li>
                <li>
                    <input type="checkbox" id="transferlist" name="transferlist" value="transferlist" />
                    <label for="transferlist"> Table</label>
                </li>
                <li>
                    <input type="checkbox" id="Colorpicker" name="Color-Picker" value="Color Picker" />
                    <label for="Color-Picker"> Color Picker</label>
                </li>
                <li>                
                    {/* <input type="checkbox" id="card" name="card" value="Card" /> */}
                    <label for="card">Cards</label>
                    <ul>
                        <li>
                            <input type="checkbox" id="card" name="card" value="Cards" />
                            <label for="card">Cards</label> 
                        </li>
                        
                        <li>
                            <input type="checkbox" id="lovecard" name="lovecard" value="LoveCard" />
                            <label for="lovecard">Lovecard</label> 
                        </li>
                        
                        <li>
                            <input type="checkbox" id="mediacard" name="mediacard" value="Mediacard" />
                            <label for="mediacard">Mediacard</label> 
                        </li>
                    </ul>
                </li>
                <li>                
                    <input type="checkbox" id="footer" name="footer" value="Footer" />
                    <label for="footer">Footer</label>
                    <ul>
                        <li>
                            <input type="checkbox" id="footer" name="footer" value="Footer" />
                            <label for="footer">Footer</label> 
                        </li>
                    </ul>
                </li>
            </ul>
            <button onClick={generatePage}>Generate New Page</button>
        </div>
    </div>
    )
}

export default CustomTemplate;