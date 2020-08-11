import React from "react"; 
import Card from "../components/Card"; 
import Lovecard from "../components/Lovecard";
import Mediacard from "../components/Mediacard";
import Carousel from "../components/Carousel"; 
import CarouselP from "../components/CarouselP"; 
import CarouselR from "../components/CarouselR"; 
import Jumbotron from "../components/Jumbotron"; 
function CustomPage() 
{return ( 
       <div>
<div className="MyCard50">
<Card />
</div>
<div className="MyCard50">
<Card />
</div>
<div className="MyCom90">
<CarouselR />
</div>
       </div>
)
}

export default CustomPage;
