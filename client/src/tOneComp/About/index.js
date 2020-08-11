import React, { useEffect, useState } from "react";
import "./style.css";
import { mainProfile } from "../../utils/api.js";
import Figure from "react-bootstrap/Figure";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export default function () {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [navColor, setNavColor] = useState("");
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
          navColor,
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
        setNavColor({ navColor });
        setBio({ bio });
        setNavImage({ navImage });
        setProfileImage({ profileImage });
        setIntroText({ introText });
        setIntroTitle({ introTitle });
        console.log(navImage);
      })
      .catch((err) => console.log(err));
  }, []);
  // `url(${navImage.navImage})`
  return (
    <div className="Container mb-5">
      {/* <Jumbotron className="Jumbo" style={{
        backgroundImage: `url("https://www.nicesnippets.com/image/imgpsh_fullsize.png")` }}>
        <Container> */}
        <Jumbotron className="Jumbo" style={{
        backgroundImage: `url(${navImage.navImage})` }}>
        <Container>
          <h1>{introTitle.introTitle}</h1>
          <p>
            {introText.introText}
          </p>
        </Container>
      </Jumbotron>
      <Container className="About" id="about" style={{ backgroundColor: navColor.navColor}}>
        <Figure>
          <Figure className="name">
            <h1>{firstName.firstName}{' '}{lastName.lastName}</h1>
          </Figure>
          <Figure.Image
            id="profilePic"
            src={profileImage.profileImage}
          />
          <h4 className="bio">{bio.bio}</h4>
        </Figure>
      </Container>
    </div>
  );
}