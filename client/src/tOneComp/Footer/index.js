import React, { useEffect, useState }  from 'react';
import './style.css';
import { Nav } from 'react-bootstrap';
import { mainProfile } from "../../utils/api.js";

export default function () {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [linkdin, setLinkdin] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    mainProfile()
      .then((res) => {
        const {
          resumeUrl,
          githubLink,
          linkdin,
          user: { firstName, lastName, email },
        } = res;
        console.log(firstName);
        console.log(res.navColor);
        setFirstName({ firstName });
        setLastName({ lastName });
        setResumeUrl({resumeUrl});
        setGithubLink({githubLink});
        setLinkdin({linkdin});
        setEmail({email});
      })
      .catch((err) => console.log(err));
  }, []);
  return(
    <div id="footer">
      <Nav className="justify-content-center navbar" activeKey="/home">
        <Nav.Item>
          <Nav.Link  href={`mailto:${email.email}`}>{email.email}</Nav.Link>
        </Nav.Item>
        <Nav.Item id="resume">
          <Nav.Link href={resumeUrl.resumeUrl}>Resume</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href={githubLink.githubLink} eventKey="link-2">Github</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href={linkdin.linkdin} eventKey="link-2">LinkedIn</Nav.Link>
        </Nav.Item>
      </Nav>
      <div id="footertext">Copyright</div>
    </div>
  );
}