import React from 'react';
import './style.css';
import { Nav } from 'react-bootstrap';

export default function (){
  return(
    <Nav style={{borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}} className="justify-content-center navbar" activeKey="/home">
     <Nav.Item>
      <Nav.Link href="#about">About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#resume">Resume</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#projects">Projects</Nav.Link>
    </Nav.Item>
  </Nav>
  )
}