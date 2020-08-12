import React from 'react';
import {generatepage} from "../../utils/api.js";
import { Button } from "react-bootstrap";


function getPageTemplate(){

    var page =  "import React from \"react\"; \n" +
    "import Card from \"../components/Card\"; \n" +
    "import Lovecard from \"../components/Lovecard\";\n" +
    "import Mediacard from \"../components/Mediacard\";\n" +
    "import Navbar from \"../components/Navbar\"; \n" +
    "import Colorpicker from \"../components/Colorpicker\"; \n" +
    "import Carousel from \"../components/Carousel\"; \n" +
    "import CarouselP from \"../components/CarouselP\"; \n" +
    "import CarouselR from \"../components/CarouselR\"; \n" +
    "import Jumbotron from \"../components/Jumbotron\"; \n" +
    "import JumbotronP from \"../components/JumbotronP\"; \n" +
    "import JumbotronR from \"../components/JumbotronR\"; \n" +
    "import Accordion from \"../components/Accordion\"; \n" +
    "import Stepper from \"../components/Stepper\"; \n" +
    "import TransferList from \"../components/TransferList\"; \n" +
    "import Table from \"../components/Table\"; \n" +
    "import Button from \"../components/Button\"; \n" +
	"import Footer from \"../components/Footer\"; \n" +
	"import BtnClear from \"../components/BtnClear\"; \n" +
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

function clearPage(){

    var customPage = "";

        //  -------    Code to generate page here  --------

    var completePage = getPageTemplate();
    completePage = completePage.replace("Insert_Custom_Page_Here", customPage);

    console.log("Generated page - ", completePage);

    generatepage( completePage );
        // generatepage contacts the backend and saves the page as 'CustomPage.js'
        // creation of this page triggers a recompile, which takes a second or two
        // but we've already asked to go to page 'custompage', which loads the older page immediately.

	window.location.href = "custompage";
	window.location.replace("/mainprofile");

    // to show the newly created custompage, we need to do a page refresh on the browser.
}

function BtnClear() {
	return (
		<div style={{marginTop: "3rem", marginBottom: "3rem"}}>
			<Button style={{padding: "1rem"}}variant="warning" size="lg" block onClick={clearPage}>Clear the design</Button>
		</div>
	)
}

export default BtnClear;
