import React from "react";
import Switcher from "./components/Switcher";
import Header from "./components/Header";
import Background from "./components/Background";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import OtherProjects from "./components/projects/OtherProjects";
import SchoolProjects from "./components/projects/SchoolProjects";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switcher />
      <Header />
      <Background />
      <Skills />
      <Experiences />
      <OtherProjects />
      <SchoolProjects />
    </div>
  );
}

export default App;
