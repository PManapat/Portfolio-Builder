import React from 'react' ;
import './style.css';
import { Nav } from 'react-bootstrap';

export default function (){
    return(
      <Nav defaultActiveKey="/home" className="flex-column footer">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link eventKey="link-1">About</Nav.Link>
        <Nav.Link eventKey="link-2">Projects</Nav.Link>
      </Nav>
    )
}