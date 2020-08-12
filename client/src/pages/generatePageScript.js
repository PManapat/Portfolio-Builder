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

        if(document.getElementById("jumbotronp").checked){

            customPage = customPage + 
            "<div>" +
                "<JumbotronP />" +
            "</div>";

        }

        if(document.getElementById("jumbotronr").checked){

            customPage = customPage + 
            "<div>" +
                "<JumbotronR />" +
            "</div>";

        }

        if(document.getElementById("accordion").checked){

            customPage = customPage + 
            "<div>" +
                "<Accordion />" +
            "</div>";

        }
        if(document.getElementById("table").checked){

            customPage = customPage + 
            "<div>" +
                "<Table />" +
            "</div>";

        }

        if(document.getElementById("carouselp").checked){

            customPage = customPage + 
            "<div>" +
                "<CarouselP />" +
            "</div>";

        }


        if(document.getElementById("carouselr").checked){

            customPage = customPage + 
            "<div>" +
                "<CarouselR />" +
            "</div>";

        }


        if(document.getElementById("carousel").checked){

            customPage = customPage + 
            "<div>" +
                "<carousel />" +
            "</div>";

        }

        
        if(document.getElementById("transferlist").checked){

            customPage = customPage + 
            "<div>" +
                "<TransferList />" +
            "</div>";

        }
        if(document.getElementById("stepper").checked){

            customPage = customPage + 
            "<div>" +
                "<Stepper />" +
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