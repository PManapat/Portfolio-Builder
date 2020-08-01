import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <a className="navbar-brand" href="/">
        Navbar
      </a>
      <ul>
     
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
    </nav>
  );
}

export default Navbar;