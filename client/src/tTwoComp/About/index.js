import React, { useState, useEffect } from "react";
import { mainProfile } from "../../utils/api.js";
import "./style.css"

const AboutMe = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [navColor, setNavColor] = useState("");
  const [bio, setBio] = useState("");
  const [navImage, setNavImage] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [introText, setIntroText] = useState("");
  const [introTitle, setIntroTitle] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");

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
          resumeUrl,
          user: { firstName, lastName },
        } = res;
        console.log(firstName);
        console.log(res.navColor);
        setFirstName({ firstName });
        setLastName({ lastName });
        setResumeUrl({resumeUrl});
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
  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0" >
      <div className="container container-fluid p-5">
        <div className="row">
          {(
            <div className="col-5 d-none d-lg-block align-self-center">
              <img
                className="border border-secondary rounded-circle" id="profilePic"
                src={profileImage.profileImage}
                alt="profile-pic"
              />
            </div>
          )}
            <h1 className="display-4 mb-5 text-center">{introTitle.introTitle}</h1>
          <p className="lead text-center">{introText.introText}</p>
            {(
              <p className="lead text-center">
                <a
                  className="btn btn-outline-dark btn-lg"
                  href={resumeUrl.resumeUrl} id="resume"
                >
                  Resume
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
  );
};

export default AboutMe;