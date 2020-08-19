import React, { useState, useEffect, useCallback } from "react";
import { mainProfile } from "../../utils/api.js";
import Image from "react-bootstrap/Image";
import "./style.css";

const ProjectCard = () => {
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
    <div className="col-md-12" id="project-img">
      <div className="card shadow-lg p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <h5 className="card-title">{projectOneTitle.projectOneTitle}</h5>
          <Image src={projectOneImage.projectOneImage} fluid width={250}
              height={200}
              alt="250x200"/>
              <p className="card-text">{projectOneText.projectOneText}</p>
          <hr />
          <p className="card-text">
            <span className="text-dark card-link mr-4">
            <a
            className="btn btn-outline-secondary mr-3"
            href={projectOneUrl.projectOneUrl}
          >
            <i/> Project Demo
          </a>
          <a
            target=" _blank"
            className="btn btn-outline-secondary"
          >
            <i /> Repo
          </a>
            </span>
          </p>
        </div>
      </div>
      <div className="card shadow-lg p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <h5 className="card-title">{projectTwoTitle.projectTwoTitle}</h5>
          <Image src={projectTwoImage.projectTwoImage} fluid width={250}
              height={200}
              alt="250x200"/>
          <p className="card-text">{projectTwoText.projectTwoText}</p>
          <hr />
          <p className="card-text">
            <span className="text-dark card-link mr-4">
            <a
            className="btn btn-outline-secondary mr-3"
            href={projectTwoUrl.projectTwoUrl}
          >
            <i /> Project Demo
          </a>
          <a
            target=" _blank"
            className="btn btn-outline-secondary"
          >
            <i /> Repo
          </a>
            </span>
          </p>
        </div>
      </div>
      <div className="card shadow-lg p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <h5 className="card-title">{projectThreeTitle.projectThreeTitle}</h5>
          <Image src={projectThreeImage.projectThreeImage} fluid width={250}
              height={200}
              alt="250x200"/>
          <p className="card-text">{projectThreeText.projectThreeText}</p>
          <hr />
          <p className="card-text">
            <span className="text-dark card-link mr-4">
            <a
            className="btn btn-outline-secondary mr-3"
            href={projectThreeUrl.projectThreeUrl}
          >
            <i /> Project Demo
          </a>
          <a
            target=" _blank"
            className="btn btn-outline-secondary"
          >
            <i /> Repo
          </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;