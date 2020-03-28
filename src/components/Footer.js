import React from "react";

import "../css/footer/footer.css";

function Footer() {
  return (
    <div className="Footer">
      <h1>Created & Developed by Danny Rhee 👍 2020</h1>
      <div className="FooterLinks">
        <a href="malto:dongyunrhee@gmail.com" target="_blank">
          <span className="FooterLink">EMAIL</span>
          <i className="far fa-envelope FooterLinkLogo"></i>
        </a>
        <a href="https://github.com/Gimorhee" target="_blank">
          <span className="FooterLink">GITHUB</span>
          <i className="fab fa-github FooterLinkLogo"></i>
        </a>
        <a href="https://www.linkedin.com/in/drhee-dev/" target="_blank">
          <span className="FooterLink">LINKEDIN</span>
          <i className="fab fa-linkedin FooterLinkLogo"></i>
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <span className="FooterLink">FACEBOOK</span>
          <i className="fab fa-facebook-square FooterLinkLogo"></i>
        </a>
        <a href="https://resume.creddle.io/resume/2x8ao7cjdbn" target="_blank">
          <span className="FooterLink">RESUME</span>
          <i className="far fa-file FooterLinkLogo"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
