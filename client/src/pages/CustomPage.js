import React from "react"; 
import Card from "../components/Card"; 
import Lovecard from "../components/Lovecard";import Mediacard from "../components/Mediacard";import Navbar from "../components/Navbar"; 
import Colorpicker from "../components/Colorpicker"; 
import Jumbotron from "../components/Jumbotron"; 
import Footer from "../components/Footer"; 
function CustomPage() 
{return ( 
<div>
<div>
<Jumbotron />
</div>
<div className="MyCard50">
<Card />
</div>
<div className="MyCard50">
<Card />
</div>
<div className="MyCard50">
<Mediacard />
</div>

</div>
)
}
export default CustomPage;