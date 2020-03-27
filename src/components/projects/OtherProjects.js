import React from "react";
import OtherProject from "./OtherProject";

import "../../css/projects/projects.css";

function OtherProjects() {
  return (
    <div className="OtherProjects">
      <h1 className="Project-Header">OTHER PROJECTS</h1>
      <div className="OtherProjects-Container">
        <OtherProject
          name="Project Name"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis soluta accusantium omnis odit quaerat ipsum asperiores, officiis, nesciunt ducimus ad cum deleniti maiores placeat voluptates sunt! Ipsam natus corrupti ex."
          stacks={["Stack1", "Stack2", "Stack3", "Stack4", "Stack5"]}
        />
      </div>
    </div>
  );
}

export default OtherProjects;
