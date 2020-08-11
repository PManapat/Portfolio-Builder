import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { mainProfile } from "../../utils/api.js";

export default () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [navColor, setNavColor] = useState("");
  const [bio, setBio] = useState("");
  const [navImage, setNavImage] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [introText, setIntroText] = useState("");
  const [introTitle, setIntroTitle] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [navText, setNavText] = useState("");

  useEffect(() => {
    mainProfile()
      .then((res) => {
        console.log(res);
        console.log(res.navColor);
        const {
          navText,
          navColor,
          bio,
          navImage,
          profileImage,
          introText,
          introTitle,
          resumeUrl,
          user: { firstName, lastName },
        } = res;
        console.log(firstName);
        console.log(res.navColor);
        setFirstName({ firstName });
        setLastName({ lastName });
        setNavColor({ navColor });
        setBio({ bio });
        setNavImage({ navImage });
        setProfileImage({ profileImage });
        setIntroText({ introText });
        setIntroTitle({ introTitle });
        setResumeUrl({resumeUrl});
        setNavText({navText});
        console.log(navImage);
      })
      .catch((err) => console.log(err));
  }, []);
    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">{navText.navText}</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="MENU" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">About</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Projects</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Contact</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href={resumeUrl.resumeUrl}>
        Resume
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
};
