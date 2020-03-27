import React from "react";

function OtherProject({ name, info, stacks }) {
  return (
    <div className="OtherProject-Container">
      <div className="ProjectName-Container">
        <p className="Project-Name">{name}</p>
      </div>
      <p className="Project-Info">{info}</p>
      <div className="Project-Stacks">
        {stacks.map(stack => (
          <span className="Project-Stack">{stack}</span>
        ))}
      </div>
    </div>
  );
}

export default OtherProject;
