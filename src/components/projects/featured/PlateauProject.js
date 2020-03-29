import React from "react";

import "../../../css/projects/projects.css";

function PlateauProject() {
  return (
    <div className="PlateauProject-Container">
      <h1 className="Project-Header">Plateau</h1>
      <div className="Project-Image-Container">
        <a
          className="Project-Image Plateau"
          href="https://plateau.herokuapp.com/"
          target="_blank"
        >
          <div className="Project-Inner-Background"></div>
          <span className="Project-Name">
            <i class="fas fa-external-link-alt"></i>
          </span>
        </a>
      </div>
      <p className="Project-Info">
        Plateau is a Fullstack eCommerce application built with MERN stacks. The
        main purpose of this project was to learn how to manage React states
        efficiently using Redux and to write/use effcient Backend APIs and
        retrieve/access API data from the UI. User login is required to complete
        orders and a confirmation email will be sent to user's provided email
        upon the order completion.
      </p>
      <div className="Project-Note">
        <p>
          By working on this fullstack application, I have learned a lot on MERN
          stacks. Plus, writing my own backend APIs (authentication, order,
          payment, etc) and using 3rd party library definitely provided me good
          experience. Please note that my current React and CSS skills are
          significantly improved 😎.
        </p>
      </div>
      <div className="Project-Stacks">
        <span className="Project-Stack">React</span>
        <span className="Project-Stack">Redux</span>
        <span className="Project-Stack">MongoDB</span>
        <span className="Project-Stack">Mongoose</span>
        <span className="Project-Stack">Express</span>
        <span className="Project-Stack">Node</span>
        <span className="Project-Stack">SendGrid</span>
      </div>
    </div>
  );
}

export default PlateauProject;
