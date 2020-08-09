import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Button from '@material-ui/core/Button';
import {logout} from "../../utils/api";
import "./style.css";

export default () => {
  return (
    <Navbar collapseOnSelect expand="lg" id="navDiv">
      <Navbar.Brand href="/home">Portfolio-Builder</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/mainprofile" activeclassname="active">Profile</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/login" activeClassName="active">Log In</Nav.Link>
          <Nav.Link href="/" activeClassName="active"  onClick={logout}> Log Out</Nav.Link>
          <Nav.Link href="/register" activeClassName="active" style={{backgroundColor: '#fff', color: 'black'}}>Sign Up</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};