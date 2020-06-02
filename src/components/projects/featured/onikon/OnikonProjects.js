import React from "react";

import OnikonCarousel from "./OnikonCarousel.js";

import "../../../../css/projects/projects.css";

function OnikonProjects() {
  return (
    <div className="OnikonProject-Container">
      <h1 className="Project-Header">Websites for the clients</h1>
      <OnikonCarousel />
      <p className="Project-Info">
        Projects built upon our clients' design and functionality requirements
        at ONIKON Creative Inc. Through these websites and custom built API
        Plugins, our clients and their customers will be able to efficiently
        communicate, access and retrieve the Real Estate information.
      </p>
      <div className="Project-Note">
        <p>
          I was responsible for developing all UI pages and implementing
          functionalities, such as our custom built IDX API Plugins. Plus I
          learned a lot on PHP and wordpress from these projects. Currently, I
          am working on implementing new designs and features on our API Plugins
          using Vue and Vuesax 👍.
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
