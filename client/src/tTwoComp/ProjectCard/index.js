import React, { useState, useEffect, useCallback } from "react";
import { mainProfile } from "../../utils/api.js";

const ProjectCard = () => {
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
    <div className="col-md-12">
      <div className="card shadow-lg p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <h5 className="card-title">{ProjectOneTitle.ProjectOneTitle}</h5>
          <p className="card-text">{ProjectOneText.ProjectOneText}</p>
          <a
            className="btn btn-outline-secondary mr-3"
            href={ProjectOneUrl.ProjectOneUrl}
          >
            <i/> Project Demo
          </a>
          <a
            target=" _blank"
            className="btn btn-outline-secondary"
          >
            <i /> Repo
          </a>
          <hr />
          <p className="card-text">
            <span className="text-dark card-link mr-4">
                Card Footer Text
            </span>
          </p>
        </div>
      </div>
      <div className="card shadow-lg p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <h5 className="card-title">{ProjectTwoTitle.ProjectTwoTitle}</h5>
          <p className="card-text">{ProjectTwoText.ProjectTwoText}</p>
          <a
            className="btn btn-outline-secondary mr-3"
            href={ProjectTwoUrl.ProjectTwoUrl}
          >
            <i /> Project Demo
          </a>
          <a
            target=" _blank"
            className="btn btn-outline-secondary"
          >
            <i /> Repo
          </a>
          <hr />
          <p className="card-text">
            <span className="text-dark card-link mr-4">
                Card Footer Text
            </span>
          </p>
        </div>
      </div>
      <div className="card shadow-lg p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <h5 className="card-title">{ProjectThreeTitle.ProjectThreeTitle}</h5>
          <p className="card-text">{ProjectThreeText.ProjectThreeText}</p>
          <a
            className="btn btn-outline-secondary mr-3"
            href={ProjectThreeUrl.ProjectThreeUrl}
          >
            <i /> Project Demo
          </a>
          <a
            target=" _blank"
            className="btn btn-outline-secondary"
          >
            <i /> Repo
          </a>
          <hr />
          <p className="card-text">
            <span className="text-dark card-link mr-4">
                Card Footer Text
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;