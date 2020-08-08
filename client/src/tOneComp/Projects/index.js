import React, { useState } from "react";
import { Nav, Tabs, Tab, Image } from "react-bootstrap";
import "./style.css"

export default function () {
  // pass link
  const [linkOne, setLinkOne] = useState("https://www.google.com/");
  const [linkTwo, setLinkTwo] = useState("https://www.google.com/");
  const [linkThree, setLinkThree] = useState("https://www.google.com/");

  // pass function on event change
  const [greeting, setGreeting] = useState("green");

  const handleChange = (event) => {
	setLinkOne(event.target.value);
	setLinkTwo(event.target.value);
	setLinkThree(event.target.value);
    console.log(greeting);
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
            src="https://lh3.googleusercontent.com/proxy/3oxCUeBa4A3EeWHH6T8QnBhOu92tIZJ0ogCLvURE14C5kN18AtnnBA_2aSVL6SQDnsdk9Pyh5rzoQcOaqrUTcHRcSPwltnUwHt7KxMBjalOp7zo8JlGhug"
          />
		  </Nav>
          <Nav.Link href={linkOne}>Project Demo 1</Nav.Link>
        </Tab>
        <Tab eventKey="project2" title="Project 2" href={linkTwo}>
		<div id="tabdiv"></div> 
          <Nav className="justify-content-center">
            <Image
              src="https://lh3.googleusercontent.com/proxy/3oxCUeBa4A3EeWHH6T8QnBhOu92tIZJ0ogCLvURE14C5kN18AtnnBA_2aSVL6SQDnsdk9Pyh5rzoQcOaqrUTcHRcSPwltnUwHt7KxMBjalOp7zo8JlGhug"
              fluid
            />
          </Nav>
            <Nav.Link href={linkTwo}>Project Demo 2</Nav.Link>
        </Tab>
        <Tab eventKey="project3" title="Project 3" href={linkThree}>
		<div id="tabdiv"></div> 
          <Nav className="justify-content-center">
            <Image
              src="https://lh3.googleusercontent.com/proxy/3oxCUeBa4A3EeWHH6T8QnBhOu92tIZJ0ogCLvURE14C5kN18AtnnBA_2aSVL6SQDnsdk9Pyh5rzoQcOaqrUTcHRcSPwltnUwHt7KxMBjalOp7zo8JlGhug"
              fluid
            />
          </Nav>
            <Nav.Link href={linkThree}>Project Demo 3</Nav.Link>
        </Tab>
      </Tabs>
    </div>
  );
}
