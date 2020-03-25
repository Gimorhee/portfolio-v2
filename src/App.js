import React from "react";
import Switcher from "./components/Switcher";
import Header from "./components/Header";
import Background from "./components/Background";
import Skills from "./components/Skills";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switcher />
      <Header />
      <Background />
      <Skills />
    </div>
  );
}

export default App;
