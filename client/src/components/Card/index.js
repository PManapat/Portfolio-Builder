
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";


function CardFlip ({onClick}) {
const [isFlipped, setIsFlipped] = useState(false);

function handleClick () {
  setIsFlipped(!isFlipped);
};

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        style={{
          backgroundColor: "light Pink",
          // backgroundImage: url('/client/public/assets/img/img3.jpg'),
          height: 400,
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
          backgroundColor: "blue",
          height: 400,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        Soft Theme Template
        <button onClick={onClick}>Click to flip</button>
      </div>
    </ReactCardFlip>
  );
};

// ReactDOM.render(<CardFlip />, document.querySelector("#root"));

export default CardFlip;
