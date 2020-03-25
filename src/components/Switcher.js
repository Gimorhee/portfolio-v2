import React from "react";

import "../css/switcher/switcher.css";

function Switcher() {
  return (
    <div className="Switcher-Container">
      <i className="far fa-moon"></i>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
      <i className="far fa-sun"></i>
    </div>
  );
}

export default Switcher;
{
  /* <div className="Light"></div>
      <input type="checkbox" />
      <div className="Dark"></div> */
}
