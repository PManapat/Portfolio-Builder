import "./style.css";
import Figure from "react-bootstrap/Figure";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import React, { useEffect, useState } from "react";
import UserForm from "../../components/UserForm";
import { getProfile, mainProfile } from "../../utils/api.js";

export default function () {
  const [navText, setNavText] = useState("");
  const [navColor, setNavColor] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    mainProfile()
      .then((res) => {
        console.log(res);
        console.log(res.navColor);
        const {
          navColor,
          navText,
          user: { firstName, lastName },
        } = res;
        console.log(firstName);
        console.log(res.navColor);
        setFirstName({ firstName });
        setLastName({ lastName });
        setNavColor({ navColor });
        setNavText({ navText });
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="Container">
      <Jumbotron className="Jumbo" fluid>
        <Container className="container">
          <h1>Hello World {navColor.navColor}</h1>
          <p className="here">
            I am an engineer, industrial designer, technology entrepreneur and
            philanthropist.
          </p>
        </Container>
      </Jumbotron>
      <Container
        className="About"
        id="About"
        style={{ backgroundColor: navColor.navColor }}
      >
        <Figure>
          <Figure.Caption>
            {firstName.firstName}{' '}
            {lastName.lastName}
          </Figure.Caption>
          <Figure.Image
            id="profilePic"
            src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
          />
          <Figure.Caption>{navText.navText}</Figure.Caption>
        </Figure>
      </Container>
    </div>
  );
}
