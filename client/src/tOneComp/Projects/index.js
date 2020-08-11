import React, { useEffect, useState } from "react";
import "./style.css";
import { Nav, Tabs, Tab, Image } from "react-bootstrap";
import { mainProfile } from "../../utils/api.js";

export default function () {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ProjectOneText, SetProjectOneText] = useState("");
  const [ProjectOneTitle, SetProjectOneTitle] = useState("");
  const [ProjectOneUrl, SetProjectOneUrl] = useState("");
  const [ProjectTwoText, SetProjectTwoText] = useState("");
  const [ProjectTwoTitle, SetProjectTwoTitle] = useState("");
  const [ProjectTwoUrl, SetProjectTwoUrl] = useState("");
  const [ProjectThreeText, SetProjectThreeText] = useState("");
  const [ProjectThreeTitle, SetProjectThreeTitle] = useState("");
  const [ProjectThreeUrl, SetProjectThreeUrl] = useState("");
  
  useEffect(() => {
    mainProfile()
      .then((res) => {
        const {
          ProjectOneText,ProjectOneTitle,ProjectOneUrl,
          ProjectTwoText,ProjectTwoTitle,ProjectTwoUrl,
          ProjectThreeText,ProjectThreeTitle,ProjectThreeUrl,
          user: { firstName, lastName },
        } = res;
        console.log(firstName);
        console.log(res.navColor);
        setFirstName({ firstName });
        setLastName({ lastName });
        SetProjectOneText({ ProjectOneText });
        SetProjectOneTitle({ ProjectOneTitle });
        SetProjectOneUrl({ ProjectOneUrl });
        SetProjectTwoText({ ProjectTwoText });
        SetProjectTwoTitle({ ProjectTwoTitle });
        SetProjectTwoUrl({ ProjectTwoUrl} );
        SetProjectThreeText({ ProjectThreeText });
        SetProjectThreeTitle({ ProjectThreeTitle });
        SetProjectThreeUrl({ ProjectThreeUrl });
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
      <Tabs
        defaultActiveKey="project1"
        className="justify-content-center"
        transition={false}
        id="projects"
      >
        <Tab eventKey="project1" title={ProjectOneTitle.ProjectOneTitle} href={ProjectOneUrl.ProjectOneUrl}>
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
          <p> {ProjectOneText.ProjectOneText} </p>
          <Nav.Link id="projects" href={ProjectOneUrl.ProjectOneUrl}>{ProjectOneTitle.ProjectOneTitle}</Nav.Link>
        </Tab>
        <Tab eventKey="project2" title={ProjectTwoTitle.ProjectTwoTitle} href={ProjectTwoUrl.ProjectTwoUrl}>
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
          <p> {ProjectTwoText.ProjectTwoText} </p>
          <Nav.Link id="projects" href={ProjectTwoUrl.ProjectTwoUrl}>{ProjectTwoTitle.ProjectTwoTitle}</Nav.Link>
        </Tab>
        <Tab eventKey="project3" title={ProjectThreeTitle.ProjectThreeTitle} href={ProjectThreeUrl.ProjectThreeUrl}>
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
          <p> {ProjectThreeText.ProjectThreeText} </p>
          <Nav.Link id="projects" href={ProjectThreeUrl.ProjectThreeUrl}>{ProjectThreeTitle.ProjectThreeTitle}</Nav.Link>
        </Tab>
      </Tabs>
    </div>
  );
}