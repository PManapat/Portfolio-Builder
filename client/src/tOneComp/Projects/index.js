import React, { useState } from "react";
import { Nav, Tabs, Tab, Image } from "react-bootstrap";
import "./style.css";

export default function () {
  // pass link
  const [linkOne, setLinkOne] = useState("https://www.google.com/");
  const [linkTwo, setLinkTwo] = useState("https://www.google.com/");
  const [linkThree, setLinkThree] = useState("https://www.google.com/");

  // pass function on event change
  // const [greeting, setGreeting] = useState("green");

  const handleChange = (event) => {
    setLinkOne(event.target.value);
    setLinkTwo(event.target.value);
    setLinkThree(event.target.value);
    // console.log(greeting);
  };

  return (
    <div className="container">
      <Tabs
        defaultActiveKey="project1"
        className="justify-content-center"
        transition={false}
        id="noanim-tab-example"
      >
        <Tab eventKey="project1" title="Project 1" href={linkOne}>
          <div id="tabdiv"></div>
          <Nav className="justify-content-center">
            <Image
              src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png"
              fluid
              width={250}
              height={200}
              alt="250x200"
            />
          </Nav>
          <Nav.Link id="projects" href={linkOne}>Project Demo Link 1</Nav.Link>
        </Tab>
        <Tab eventKey="project2" title="Project 2" href={linkTwo}>
          <div id="tabdiv"></div>
          <Nav className="justify-content-center">
            <Image
              src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png"
              fluid
              width={250}
              height={200}
              alt="250x200"
            />
          </Nav>
          <Nav.Link id="projects" href={linkTwo}>Project Demo Link 2</Nav.Link>
        </Tab>
        <Tab eventKey="project3" title="Project 3" href={linkThree}>
          <div id="tabdiv"></div>
          <Nav className="justify-content-center">
            <Image
              src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png"
              fluid
              width={250}
              height={200}
              alt="250x200"
            />
          </Nav>
          <Nav.Link id="projects" href={linkThree}>Project Demo Link 3</Nav.Link>
        </Tab>
      </Tabs>
    </div>
  );
}
