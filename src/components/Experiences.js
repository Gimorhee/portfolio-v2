import React from "react";
import Experience from "./Experience";

import "../css/experiences/experiences.css";

function Experiences() {
  return (
    <div className="Experiences">
      <h1>EXPERIENCE</h1>
      <div className="Experiences-Container">
        <Experience
          name="Onikon Creative Inc."
          title="Jr. Frontend Developer"
          period="Jan 2020 - Current"
          link="https://onikon.com/"
        />
        <Experience
          name="Kater"
          title="Web Developer Intern"
          period="Jul 2019 - Nov 2019"
          link="https://www.kater.com/"
        />
        <Experience
          name="Euroline Windows"
          title="Product Engineer"
          period="Aug 2018 - Mar 2019"
          link="https://euroline-windows.com/"
        />
        <Experience
          name="INI Solutions"
          title="Customer Service Representative / IT Technician"
          period="Sept 2016 - Aug 2018"
          link="http://www.inipos.com/"
        />
        <a
          className="Resume-Link"
          href="https://resume.creddle.io/resume/2x8ao7cjdbn"
          target="_blank"
        >
          View My Resume{" "}
          <span className="Resume" role="img">
            📄
          </span>
        </a>
      </div>
    </div>
  );
}

export default Experiences;
