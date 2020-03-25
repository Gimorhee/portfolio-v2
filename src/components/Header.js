import React from "react";

import "../App.css";

function Header() {
  return (
    <div className="Header">
      <h1>
        Hello! <span>👋</span>
      </h1>
      <h2>
        I'm <strong>Danny Rhee</strong>, a designed-minded Front-end Web
        Developer focused on building beatufil interfaces & experiences
      </h2>
      <p>
        Get in touch 👉{" "}
        <a href="malto:dongyunrhee@gmail.com">dongyunrhee@gmail.com</a>
      </p>
    </div>
  );
}

export default Header;
