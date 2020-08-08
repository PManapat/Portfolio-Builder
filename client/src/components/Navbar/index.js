import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

export default () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/home" eventKey="/">Portfolio-Builder</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/userForm" activeClassName="active">Get Started</Nav.Link>
          <Nav.Link href="/profile" activeClassName="active">Profile</Nav.Link>
          
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Nav>
          <Nav.Link href="/login" activeClassName="active">Log In</Nav.Link>
          <Nav.Link href="/register" activeClassName="active" style={{backgroundColor: '#fff', color: 'black'}}>Sign Up</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <ul className="navbar-nav mr-auto">
    //     <li className="navbar-item">
    //       <Link to="/home" className="nav-link">Home</Link>
    //     </li>
    //     <li className="navbar-item">
    //       <Link to="/register" className="nav-link">Register</Link>
    //     </li>
    //     <li className="navbar-item">
    //       <Link to="/login" className="nav-link">Login</Link>
    //     </li>
    //     <li className="navbar-item">
    //       <Link to="/userForm" className="nav-link">UserForm</Link>
    //     </li>
    //     <li className="navbar-item">
    //       <Link to="/profile" className="nav-link">Profile</Link>
    //     </li>
    //   </ul>
    // </nav>
  );
};