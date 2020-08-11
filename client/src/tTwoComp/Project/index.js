import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import ProjectCard from "../ProjectCard";
import { mainProfile } from "../../utils/api.js";

const Project = () => {
  
  return (
    <div id="projects" className="jumbotron jumbotron-fluid bg-transparent m-0">
          <h1 className="display-4 pb-5">Projects</h1>
          <div className="row">
          </div>
        </div>
  );
};

export default Project;