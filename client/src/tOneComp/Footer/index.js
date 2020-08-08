import React from 'react' ;
import './style.css';
import { Nav } from 'react-bootstrap';

export default function (){
    return(<div>
      <Nav className="justify-content-center navbar" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/template/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Social Links</Nav.Link>
      </Nav.Item>
    </Nav>
    <div id="footertext">Copyright</div>
    </div>
    )
}