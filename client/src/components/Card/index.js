import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./style.css"

function CardFlip ({onClick}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [frontText, setFrontText] = useState("");

  function handleClick () {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" id="container">
      <div
        style={{
          backgroundColor: "light Pink",
          // backgroundImage: url('/client/public/assets/img/img3.jpg'),
<<<<<<< HEAD
          height: 550,
=======
          height: 300,
>>>>>>> 904297359aec6aa3a7928df8dad35947e4baf341
          color: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <button className="link mr-4 btn btn-info" onClick={handleClick}>Learn more</button>
      </div>

      <div id="backOfCard"
        style={{
          backgroundColor: "white",
          height: 300,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <h3>Sign Up to start creating</h3>
<<<<<<< HEAD
        <button className="link mr-4 btn btn-info" onClick={handleClick}>Close</button>
=======
        <button className="link mr-4 btn btn-info" onClick={onClick}>Create Portfolio!</button>
>>>>>>> 904297359aec6aa3a7928df8dad35947e4baf341
      </div>
    </ReactCardFlip>
  );
};

export default CardFlip;