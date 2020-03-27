import React from "react";
import OtherProject from "./OtherProject";

import "../../css/projects/projects.css";

function OtherProjects() {
  return (
    <div className="OtherProjects">
      <h1 className="Project-Header">OTHER PROJECTS</h1>
      <div className="OtherProjects-Container">
        <OtherProject
          name="LetsChat"
          link="https://react-lets-chat.netlify.com/"
          info="A real-time caht application built with React, Node, Socket.io where users may create rooms and chat with others online"
          stacks={["React", "Node", "Socket.io", "Netlify", "Heroku"]}
        />
        <OtherProject
          name="Plenty of Dogs"
          link="https://gimorhee.github.io/PlentyofDogs/"
          info="Plenty of Dogs is a online dating service application for dogs, mimicking Plenty of Fish, a real-life online dating application."
          stacks={["HTML", "CSS", "JavaScript", "Bootstrap"]}
        />
        <OtherProject
          name="Personal Website v1"
          link="https://gimorhee.github.io/portfolio-v1/"
          info="My first real portfolio website built in 2019. By working on this portfolio, I learned about HTML, CSS and JavaScript. Since then, my developing skills have improved continuously."
          stacks={["HTML", "SCSS", "JavaScript", "jQuery"]}
        />
        <OtherProject
          name="Tweeter"
          link="https://whispering-ravine-57540.herokuapp.com/"
          info="Tweeter is a single-page Full-stack Twitter clone application where users can compose their tweets under randomized name."
          stacks={["JavaScript", "jQuery", "AJAX", "Node", "MongoDB", "Heroku"]}
        />
        <OtherProject
          name="Simon Game"
          link="https://gimorhee.github.io/SimonGame/"
          info="Built a Web version of Simon, an electronic game of memory skill. It creates a random series of tones and color-lights and requrie a user to repeat the sequence."
          stacks={["HTML", "CSS", "JavaScript", "jQuery"]}
        />
        <OtherProject
          name="Rock Paper Scissors"
          link="https://gimorhee.github.io/RockPaperScissors/"
          info="Simple mini Rock Paper Scissors being played against a Computer who randomly forms one of three shapes."
          stacks={["HTML", "CSS", "JavaScript", "jQuery"]}
        />
        <OtherProject
          name="Drum It"
          link="https://gimorhee.github.io/DrumIt/"
          info="Mini playable Drum set built when I started learning about Vanilla JavaScript. From this project, I learned quite a lot on Vanilla JS and led me to learn jQuery."
          stacks={["HTML", "CSS", "JavaScript", "Vanilla JS"]}
        />
        <OtherProject
          name="First Personal Page"
          link="https://gimorhee.github.io/FirstPersonalPage/"
          info="My first Personal Intro Web-page built when I just started studying on HTML and CSS."
          stacks={["HTML", "CSS"]}
        />
      </div>
    </div>
  );
}

export default OtherProjects;
