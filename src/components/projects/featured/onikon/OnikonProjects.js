import React from "react";

import OnikonCarousel from "./OnikonCarousel.js";

import "../../../../css/projects/projects.css";

function OnikonProjects() {
  return (
    <div className="OnikonProject-Container">
      <h1 className="Project-Header">Real Estate Website</h1>
      <OnikonCarousel />
      <p className="Project-Info">
        These projects are built upon our clients' design and functionality
        requirements at Onikon Creative Inc. I was responsible for developing
        all UI pages and implementing functionalities, such as, our custom built
        IDX API Plugins that allows users to retrieve the Real Estate
        information. Currently, I am working on implementing new designs and
        features on API Plugnis using Vue and Vuesax 👍.
      </p>
      <div className="Project-Note">
        <p>
          Building these projects provided me a strong experience on one of the
          most famous CMS tools, Wordpress and PHP. Plus, my design and CSS
          skills have been significantly improved.
        </p>
      </div>
      <div className="Project-Stacks">
        <span className="Project-Stack">HTML</span>
        <span className="Project-Stack">SCSS</span>
        <span className="Project-Stack">JavaScript</span>
        <span className="Project-Stack">jQuery</span>
        <span className="Project-Stack">Wordpress</span>
        <span className="Project-Stack">PHP</span>
        <span className="Project-Stack">SQL</span>
      </div>
    </div>
  );
}

export default OnikonProjects;
