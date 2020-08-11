import React from "react";
import "./QuickDesign.css";
import { Card } from "react-bootstrap";
import Nav from "../components/UserNav";

const QuickDesign = () => {
  const cardInfo = [
    {
      image: "https://images.creativemarket.com/0.1.0/ps/4005388/580/387/m1/fpnw/wm0/01_frontcover-.jpg?1518611018&s=a2954e5d75bb23ad2ac167bd03284b72",
      title: "Lebron James",
      text: "Soft Theme",
    },
    {
      image: "https://stockindesign.com/wp-content/uploads/edd/2017/04/138_header.jpg",
      title: "Alex Caruso",
      text: "Soft Theme",
    },
    {
      image: "https://colorlib.com/wp/wp-content/uploads/sites/2/joomla-portfolio-templates.jpg",
      title: "Steph Curry",
      text: "Photography Theme",
    },
    {
      image: "https://s3.envato.com/files/238075824/Ben.__large_preview.png",
      title: "Michael Jordan",
      text: "Motion Theme",
    },
    {
      image: 
      "https://d85wutc1n854v.cloudfront.net/live/products/600x375/WB0674NL1.png?v=1.0.2",
      title: "Lebron James",
      text: "Scattered Theme",
    },
    {
      image:
        "https://moozthemes.com/media/largeimage/1/adobe-muse-busines-templates.jpg",
      title: "Alex Caruso",
      text: "THE TRUE GOAT",
    },
    {
      image:
        "https://i.pinimg.com/originals/19/98/4d/19984df645f0c5a56eeb5eb1ee3ca10e.png",
      title: "Steph Curry",
      text: "he good",
    },
    {
      image:
        "",
      title: "Michael Jordan",
      text: "he is very close to goat",
    },
    {
      image: "https://themeforest.img.customer.envatousercontent.com/files/246627138/01_preview.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=839abc1bb7fd46f367361596ee5f6c68",
      title: "Lebron James",
      text: "THE GOAT",
    },
    {
      image: "https://www.addictionary.org/g/003-stirring-free-html-portfolio-templates-concept-868_685.jpg",
      title: "Lebron James",
      text: "THE GOAT",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div>
        <Nav />
      <div className="grid">
        {cardInfo.map(renderCard)}
      </div>
    </div>
  );
};

export default QuickDesign;
