import React from "react"; 
import Card from "../components/Card"; 
import Lovecard from "../components/Lovecard";
import Mediacard from "../components/Mediacard";
import Navbar from "../components/Navbar"; 
import Colorpicker from "../components/Colorpicker"; 
import Carousel from "../components/Carousel"; 
import CarouselP from "../components/CarouselP"; 
import CarouselR from "../components/CarouselR"; 
import Jumbotron from "../components/Jumbotron"; 
import JumbotronP from "../components/JumbotronP"; 
import JumbotronR from "../components/JumbotronR"; 
import Accordion from "../components/Accordion"; 
import Stepper from "../components/Stepper"; 
import TransferList from "../components/TransferList"; 
import Table from "../components/Table"; 
import Button from "../components/Button"; 
import Footer from "../components/Footer"; 
function CustomPage() 
{return ( 
       <div>
<div>
<Navbar />
</div>
<div className="img11">
<Jumbotron />
</div>
<div className="img11">
<JumbotronP />
</div>
<div className="MyCard50">
<Card />
</div>
<div className="MyCard50">
<Card />
</div>
<div className="MyCom90">
<Colorpicker />
</div>
<div className="MyCom90 mx-y">
<Accordion />
</div>
<div className="MyCom90">
<Stepper />
</div>
<div className="MyCom90">
<Carousel />
</div>
<div className="MyCom90 mx-y">
<CarouselP />
</div>
<div className="MyCom90 mx-y">
<Table />
</div>
<div className="MyCom90">
<TransferList />
</div>
<div className="MyCom90">
<Button />
</div>
<div>
<Footer />
</div>

       </div>
)
}
export default CustomPage;