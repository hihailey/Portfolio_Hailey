import React, { useState } from "react";
import "./Projects.css";
import Rooma from "./Rooma";
import Flirtigo from "./Flirtigo";
import Chubby from "./Chubby";

const Projects = () => {
  return (
    <div id="projects">
      <div className="content-title">
        <h1> Projects </h1>
      </div>
      <div>
        <div className="content-wrapper ">
          <div className="projects-container">
            <Rooma />
          </div>
          <div className="projects-container">
            <Flirtigo />
          </div>
          <div className="projects-container">
            <Chubby />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
