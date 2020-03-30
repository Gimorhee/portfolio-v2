import React from "react";

import OnikonCarousel from "./OnikonCarousel.js";

import "../../../../css/projects/projects.css";

function OnikonProjects() {
  return (
    <div className="OnikonProject-Container">
      <h1 className="Project-Header">Real Estate Website</h1>
      <OnikonCarousel />
      <p className="Project-Info">
        These projects are custom built upon our clients' design and
        functionality request from Onikon Creative Inc. I was responsible for
        developing all UI pages and functionalities and implementing our custom
        built IDX API Plugins.
      </p>
      <div className="Project-Note">
        <p>
          By working on these projects, I learned a lot on PHP and one of the
          most famous CMS tools, Wordpress. Plus, my design and CSS skills have
          been significantly improved and I am currently working on implementing
          new designs and features on our custom built IDX API plugins using Vue
          and Vuesax 👍.
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
