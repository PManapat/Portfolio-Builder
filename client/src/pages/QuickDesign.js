import React from "react";
import "./QuickDesign.css";
import { Card } from "react-bootstrap";

const QuickDesign = () => {
  const cardInfo = [
    {
      image: "https://images.creativemarket.com/0.1.0/ps/4005388/580/387/m1/fpnw/wm0/01_frontcover-.jpg?1518611018&s=a2954e5d75bb23ad2ac167bd03284b72",
      title: "Template 1",
      text: "Soft Theme",
    },
    {
      image: "https://stockindesign.com/wp-content/uploads/edd/2017/04/138_header.jpg",
      title: "Template 2",
      text: "Soft Theme",
    },
    {
      image: "https://colorlib.com/wp/wp-content/uploads/sites/2/joomla-portfolio-templates.jpg",
      title: "Template 3",
      text: "Photography Theme",
    },
    {
      image: "https://s3.envato.com/files/238075824/Ben.__large_preview.png",
      title: "Template 4",
      text: "Motion Theme",
    },
    {
      image: 
      "https://d85wutc1n854v.cloudfront.net/live/products/600x375/WB0674NL1.png?v=1.0.2",
      title: "Template 5",
      text: "Scattered Theme",
    },
    {
      image:
        "https://moozthemes.com/media/largeimage/1/adobe-muse-busines-templates.jpg",
      title: "Template 6",
      text: "Sleek Theme",
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
    <div className="grid">
      {cardInfo.map(renderCard)}
    </div>
  );
};

export default QuickDesign;
