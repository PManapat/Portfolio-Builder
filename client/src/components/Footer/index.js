import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="navbar navbar-light bg-dark text-light">
      <a className="navbar-brand" href="#"></a>
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-3 mt-md-0 mt-5"></div>
          <ul className="list-unstyled">
            <h5>Products</h5>
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 mb-md-0 mb-5"></div>
        <ul className="list-unstyled">
          <h5>Services</h5>
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
        </ul>
        <div className="col-md-3 mb-md-0 mb-5"></div>
        <ul className="list-unstyled">
          <h5>Follow</h5>
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
