
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const CardFlip = () => {
const [isFlipped, setIsFlipped] = useState(false);

const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        style={{
          backgroundColor: "green",
          height: 100,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        How do you like your portfolio to be?
        
        <button onClick={handleClick}>Click to flip</button>
      </div>

      <div
        style={{
          backgroundColor: "red",
          height: 100,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        Select to purchase this template
        <button onClick={handleClick}>Click to flip</button>
      </div>
    </ReactCardFlip>
  );
};

// ReactDOM.render(<CardFlip />, document.querySelector("#root"));

export default CardFlip;
