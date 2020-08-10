import React, { useEffect, useState } from "react";
import "./style.css";
import { mainProfile } from "../../utils/api.js";
import Figure from "react-bootstrap/Figure";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export default function () {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [aboutBgColor, setAboutBgColor] = useState("");
  const [bio, setBio] = useState("");
  const [backgroundImg, setBackgroundImg] = useState("");
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    mainProfile()
      .then((res) => {
        console.log(res);
        console.log(res.navColor);
        const {
          aboutBgColor,
          bio,
          backgroundImg,
          profileImage,
          user: { firstName, lastName },
        } = res;
        console.log(firstName);
        console.log(res.navColor);
        setFirstName({ firstName });
        setLastName({ lastName });
        setAboutBgColor({ aboutBgColor });
        setBio({ bio });
        setBackgroundImg({ backgroundImg });
        setProfileImage({ profileImage });
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="Container">
      <Jumbotron className="Jumbo" fluid>
        <Container>
          <h1>Intro Title:</h1>
          <p>
            Intro Text:
          </p>
        </Container>
      </Jumbotron>
      <Container className="About" id="About" style={{ backgroundColor: aboutBgColor.aboutBgColor }}>
        <Figure>
          <Figure.Caption>
            {firstName.firstName}{' '}
            {lastName.lastName}
          </Figure.Caption>
          <Figure.Image
            id="profilePic"
            src={profileImage.profileImage}
          />
          <Figure.Caption>Bio: {bio.bio}</Figure.Caption>
        </Figure>
      </Container>
    </div>
  );
}
