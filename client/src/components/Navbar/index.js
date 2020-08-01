import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand">
        Logo
      </a>
      <a className="signIn">
      <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Sign In</button>
      </a>
      <a className="signUp">
      <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Sign Up</button>
      </a>
    </nav>
  );
}

export default Navbar;