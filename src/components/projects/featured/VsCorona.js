import React from "react";

export const VsCorona = () => {
  return (
    <div className="FeaturedProject-Container">
      <h1 className="Project-Header">vsCorona</h1>
      <div className="Project-Image-Container">
        <a
          className="Project-Image VsCorona"
          href="https://vscorona.netlify.app/"
          target="_blank"
        >
          <div className="Project-Inner-Background"></div>
          <span className="Project-Name">
            <i class="fas fa-external-link-alt"></i>
          </span>
        </a>
      </div>
      <p className="Project-Info">
        Due to ongoing serious world-wide pandemic situation, I found myself
        googling to check up current status by going through various websites. I
        built vsCorona for myself, friends and families to easily and
        conviniently check up-to-date COVID-19 information in Canada, S. Korea
        and the world.
      </p>

      <div className="Project-Stacks">
        <span className="Project-Stack">React</span>
        <span className="Project-Stack">React-chart</span>
        <span className="Project-Stack">REST APIs</span>
        <span className="Project-Stack">Postman</span>
        <span className="Project-Stack">SCSS</span>
        <span className="Project-Stack">Netlify</span>
      </div>
    </div>
  );
};
