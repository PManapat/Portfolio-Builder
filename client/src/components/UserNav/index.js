import React from "react";
import "./style.css";
import { Navbar, Nav } from 'react-bootstrap'
import { logout } from "../../utils/api";

export default () => {
  return (
    <Navbar collapseOnSelect expand="lg" id="navDiv">
      <Navbar.Brand href="/home">Portfolio-Builder</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          <Nav.Link href="/mainprofile" activeclassname="active">Profile</Nav.Link>
          <Nav.Link href="/" activeclassname="active" onClick={logout}> Log Out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};