import React from 'react' ;
import './style.css';
import { Nav } from 'react-bootstrap';

export default function (){
    return(
      <Nav className="justify-content-center navbar" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Resume</Nav.Link>
        </Nav.Item>
      </Nav>
    )
}