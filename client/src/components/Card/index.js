import React from "react";
import "./style.css"

function CardFlip (props) {
  return (
      <div
        style={{
          backgroundColor: "light Pink",
          height: 300,
          color: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <button onClick={props.onClick} className="link mr-4 btn btn-info">{props.children}</button>
      </div>
  );
};

export default CardFlip;