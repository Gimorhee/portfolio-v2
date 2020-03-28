import React from "react";
import OnikonCarousel from "./OnikonCarousel";

function FeaturedProjects() {
  return (
    <div>
      <div className="FeaturedProjects">
        <h1 className="Project-Header">FEATURED PROJECTS</h1>
        <div className="FeaturedProjects-Container">
          <div className="OnikonProject-Container">
            <h1 className="OnikonProject-Header">
              Real Estate Agent's Website
            </h1>
            <OnikonCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjects;
