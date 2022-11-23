import React from "react";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function HomePage() {
  return (
    <div>
      <Introduction />
      <Projects />
      <Skills />
    </div>
  );
}

export default HomePage;
