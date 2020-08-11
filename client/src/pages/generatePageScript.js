<script>

    function getPageTemplate(){

        var page =  "import React from \"react\"; " +
        "import Card from \"../components/Card\"; " +
        "import { red } from \"@material-ui/core/colors\"; " + 
        "import { rgbToHex } from \"@material-ui/core\"; " +
        "function CustomPage() {" +
            "return (" +
                "Insert_Custom_Page_Here" +
            ")" +
        "}";

        'export default CustomPage;';
    }

    function generatePage(){

        var customPage = "";

        if(document.getElementById("navbar").checked){

            customPage = customPage + 
                            "<div>" +
                                "<Nav />" +
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
    }


</script>