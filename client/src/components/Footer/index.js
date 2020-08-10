  
import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="text-dark container-fluid text-center pt-1 pb-1 sticky-bottom" id="footdiv">
      <br />
      <br />
      <img className="footimg mr-4" src="https://i1.wp.com/www.buyholdlong.com/wp-content/uploads/2017/01/portfolio-logo1.jpg?ssl=1" alt="Logo" />
      <button className="link mr-2 btn btn-info" href="#">
        Social Media
        </button>
      <button className="link mr-2 btn btn-info" href="#">
        Privacy Policy
        </button>
      <button className="link mr-2 btn btn-info" href="#">
        Terms & Conditions
        </button>
      <h5 className="mt-2">
        Portfolio Builder © 2020
        </h5>
      <br />
      <p className="white-txt small pb-2">
        Brought to you by, Phillip, Deepali, Suraj, Rich & Shivani.
        </p>
    </footer>
  );
}

export default Footer;
