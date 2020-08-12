import React from "react";
import "./style.css"

function CardFlip (props) {
  // console.log(props);
  return (
      <div
        style={{
          backgroundColor: "light Pink",
          // backgroundImage: url('/client/public/assets/img/img3.jpg'),
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