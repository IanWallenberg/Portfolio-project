import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
  return (
    <div className="all-projects-container">
      {INFO.projects.map((project, index) => (
        <div className="all-projects-project" key={index}>
          <Project
            logo={project.logo}
            logoHTML={project.logoHTML}
            logoCSS={project.logoCSS}
            logoReact={project.logoReact}
            logoNode={project.logoNode}
            logoMongo={project.logoMongo}
            title={project.title}
            description={project.description}
            linkText={project.linkText}
            link={project.link}
          />
        </div>
      ))}
    </div>
  );
};

export default AllProjects;
