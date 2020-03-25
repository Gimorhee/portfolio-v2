import React from "react";

import "../App.css";

function Header() {
  return (
    <div className="Header">
      <h1>
        Hello! <span className="wave">👋</span>
      </h1>
      <h2>
        I'm <strong>Danny Rhee</strong>,
        <br />
        <div className="content">
          <div className="content__container">
            <ul className="content__container__list">
              <li className="content__container__list__item">Web Developer,</li>
              <li className="content__container__list__item">
                Frontend Developer,
              </li>
              <li className="content__container__list__item">
                Backend Developer,
              </li>
              <li className="content__container__list__item">
                Fullstack Developer,
              </li>
            </ul>
          </div>
        </div>
        <br />
        <h3>
          {" "}
          who is design-minded and focused on building user-friendly, responsive
          and beautiful interfaces & experiences
        </h3>
      </h2>
      <p>
        Get in touch 👉{" "}
        <a href="malto:dongyunrhee@gmail.com">dongyunrhee@gmail.com</a>
      </p>
    </div>
  );
}

export default Header;
