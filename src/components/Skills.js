import React from "react";

import "../css/skills/skills.css";

function Skills() {
  return (
    <div className="Skills">
      <h1 className="Skills-Header">SKILLS</h1>
      <div className="Skills-Container">
        <div className="Skill-Container">
          <h4>LANGUAGES</h4>
          <ul>
            <li>JavaScript (ES6)</li>
            <li>HTML5</li>
            <li>(S)CSS</li>
            <li>OOP</li>
            <li>PHP</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="Skill-Container">
          <h4>FRAMEWORKS</h4>
          <ul>
            <li>React</li>
            <li>Vue</li>
            <li>Vuesax</li>
            <li>Bootstrap</li>
            <li>Wordpress</li>
            <li>UIKIT</li>
          </ul>
        </div>
        <div className="Skill-Container">
          <h4>LIBRARIES</h4>
          <ul>
            <li>Redux</li>
            <li>Vuex</li>
            <li>Node</li>
            <li>jQuery</li>
            <li>Socket.io</li>
            <li>Mongoose</li>
          </ul>
        </div>
        <div className="Skill-Container">
          <h4>TOOLS</h4>
          <ul>
            <li>Postman</li>
            <li>MongoDB</li>
            <li>Git & GitHub</li>
            <li>Chrome DevTools</li>
            <li>React/Vue DevTools</li>
            <li>Command Line</li>
          </ul>
        </div>
        <div className="Skill-Container">
          <h4>DESIGNS</h4>
          <ul>
            <li>Typography</li>
            <li>User Testing</li>
            <li>User Research</li>
            <li>Wireframing</li>
            <li>inVision</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
