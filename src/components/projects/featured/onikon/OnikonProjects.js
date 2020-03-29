import React from "react";

import OnikonCarousel from "./OnikonCarousel.js";

import "../../../../css/projects/projects.css";

function OnikonProjects() {
  return (
    <div className="OnikonProject-Container">
      <h1 className="OnikonProject-Header">Real Estate Agents Website</h1>
      <OnikonCarousel />
      <p className="OnikonProject-Info">
        These projects are custom built upon our clients' design and
        functionality request from Onikon Creative Inc. I was responsible for
        developing all UI pages and functionalities and implementing our custom
        built IDX API Plugins.
      </p>
      <div className="OnikonProject-Stacks">
        <span className="OnikonProject-Stack">HTML</span>
        <span className="OnikonProject-Stack">SCSS</span>
        <span className="OnikonProject-Stack">JavaScript</span>
        <span className="OnikonProject-Stack">jQuery</span>
        <span className="OnikonProject-Stack">Wordpress</span>
        <span className="OnikonProject-Stack">PHP</span>
        <span className="OnikonProject-Stack">SQL</span>
      </div>
    </div>
  );
}

export default OnikonProjects;
