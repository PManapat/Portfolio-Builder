import React, { useEffect, useState } from "react";
import "./style.css";
import { Nav, Tabs, Tab, Image } from "react-bootstrap";
import { mainProfile } from "../../utils/api.js";

export default function () {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [projectOneText, SetProjectOneText] = useState("");
  const [projectOneTitle, SetProjectOneTitle] = useState("");
  const [projectOneUrl, SetProjectOneUrl] = useState("");
  const [projectTwoText, SetProjectTwoText] = useState("");
  const [projectTwoTitle, SetProjectTwoTitle] = useState("");
  const [projectTwoUrl, SetProjectTwoUrl] = useState("");
  const [projectThreeText, SetProjectThreeText] = useState("");
  const [projectThreeTitle, SetProjectThreeTitle] = useState("");
  const [projectThreeUrl, SetProjectThreeUrl] = useState("");
  const [projectOneImage, SetProjectOneImage] = useState("");
  const [projectTwoImage, SetProjectTwoImage] = useState("");
  const [projectThreeImage, SetProjectThreeImage] = useState("");
  
  useEffect(() => {
    mainProfile()
      .then((res) => {
        const {
          projectOneText,projectOneTitle,projectOneUrl,
          projectTwoText,projectTwoTitle,projectTwoUrl,
          projectThreeText,projectThreeTitle,projectThreeUrl,
          projectOneImage,projectTwoImage,projectThreeImage,
          user: { firstName, lastName },
        } = res;
        console.log(firstName);
        console.log(res.navColor);
        setFirstName({ firstName });
        setLastName({ lastName });
        SetProjectOneText({ projectOneText });
        SetProjectOneTitle({ projectOneTitle });
        SetProjectOneUrl({ projectOneUrl });
        SetProjectTwoText({ projectTwoText });
        SetProjectTwoTitle({ projectTwoTitle });
        SetProjectTwoUrl({ projectTwoUrl} );
        SetProjectThreeText({ projectThreeText });
        SetProjectThreeTitle({ projectThreeTitle });
        SetProjectThreeUrl({ projectThreeUrl });
        SetProjectOneImage({ projectOneImage });
        SetProjectTwoImage({ projectTwoImage });
        SetProjectThreeImage({ projectThreeImage });
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
        <Tab eventKey="project1" title={projectOneTitle.projectOneTitle} href={projectOneUrl.projectOneUrl}>
          <div id="tabdiv"></div>
          <Nav className="justify-content-center">
            <Image
             src={projectOneImage.projectOneImage}
              fluid
              width={250}
              height={200}
              alt="250x200"
            /> 
          </Nav>
          <p> {projectOneText.projectOneText} </p>
          <Nav.Link id="projects" href={projectOneUrl.projectOneUrl}>{projectOneTitle.projectOneTitle}</Nav.Link>
        </Tab>
        <Tab eventKey="project2" title={projectTwoTitle.projectTwoTitle} href={projectTwoUrl.projectTwoUrl}>
          <div id="tabdiv"></div>
          <Nav className="justify-content-center">
            <Image
             src={projectTwoImage.projectTwoImage}
              fluid
              width={250}
              height={200}
              alt="250x200"
            />
          </Nav>
          <p> {projectTwoText.projectTwoText} </p>
          <Nav.Link id="projects" href={projectTwoUrl.projectTwoUrl}>{projectTwoTitle.projectTwoTitle}</Nav.Link>
        </Tab>
        <Tab eventKey="project3" title={projectThreeTitle.projectThreeTitle} href={projectThreeUrl.projectThreeUrl}>
          <div id="tabdiv"></div>
          <Nav className="justify-content-center">
            <Image
              src={projectThreeImage.projectThreeImage}
              fluid
              width={250}
              height={200}
              alt="250x200"
            />
          </Nav>
          <p> {projectThreeText.projectThreeText} </p>
          <Nav.Link id="projects" href={projectThreeUrl.projectThreeUrl}>{projectThreeTitle.projectThreeTitle}</Nav.Link>
        </Tab>
      </Tabs>
    </div>
  );
}