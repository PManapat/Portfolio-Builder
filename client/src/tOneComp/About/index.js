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
  const [navImage, setNavImage] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [introText, setIntroText] = useState("");
  const [introTitle, setIntroTitle] = useState("");
  
  useEffect(() => {
    mainProfile()
      .then((res) => {
        console.log(res);
        console.log(res.navColor);
        const {
          aboutBgColor,
          bio,
          navImage,
          profileImage,
          introText,
          introTitle,
          user: { firstName, lastName },
        } = res;
        console.log(firstName);
        console.log(res.navColor);
        setFirstName({ firstName });
        setLastName({ lastName });
        setAboutBgColor({ aboutBgColor });
        setBio({ bio });
        setNavImage({ navImage });
        setProfileImage({ profileImage });
        setIntroText({ introText });
        setIntroTitle({ introTitle });
        console.log(navImage);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <Jumbotron className="Jumbo" style={{
        backgroundImage: `url(${navImage.navImage})` }}>
        <Container>
          <h1>{introTitle.introTitle}</h1>
          <p>
            {introText.introText}
          </p>
        </Container>
      </Jumbotron>
      <Container className="About" id="About" style={{ backgroundColor: aboutBgColor.aboutBgColor }}>
        <Figure>
          <Figure className="name">
            {firstName.firstName}{' '}
            {lastName.lastName}
          </Figure>
          <Figure.Image
            id="profilePic"
            src={profileImage.profileImage}
          />
          <p className="bio">Bio: {bio.bio}</p>
        </Figure>
      </Container>
    </div>
  );
}