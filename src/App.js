import React from "react";
import Switcher from "./components/Switcher";
import Header from "./components/Header";
import Background from "./components/Background";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import OtherProjects from "./components/projects/OtherProjects";
import SchoolProjects from "./components/projects/SchoolProjects";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const goTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <div className="ButtonContainer" onClick={() => goTop()}>
        <button className="MoveTopButton">
          <span className="MoveTop">☝</span>
        </button>
      </div>
      <Switcher />
      <Header />
      <Background />
      <Skills />
      <Experiences />
      <OtherProjects />
      <SchoolProjects />
      <Footer />
    </div>
  );
}

export default App;
