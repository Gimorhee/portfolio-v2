import React from "react";

import OnikonProjects from "./onikon/OnikonProjects";
import PlateauProject from "./PlateauProject";

import "../../../css/projects/projects.css";

function FeaturedProjects() {
  return (
    <div>
      <div className="FeaturedProjects">
        <h1 className="Project-Header">FEATURED PROJECTS</h1>
        <div className="FeaturedProjects-Container">
          <OnikonProjects />
          <PlateauProject />
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjects;
