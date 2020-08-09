import React from 'react' ;
import './style.css';
import { Nav } from 'react-bootstrap';

export default function (){
    return(<div id="footer">
      <Nav className="justify-content-center navbar" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/template/home">Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Resume</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Github</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">LinkedIn</Nav.Link>
      </Nav.Item>
    </Nav>
    <div id="footertext">Copyright</div>
    </div>
    )
}