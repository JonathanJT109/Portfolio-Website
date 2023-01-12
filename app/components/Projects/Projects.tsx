import React from "react";
import Carousel from "./Carousel";

function Projects() {
  return (
    <div className="section-styles flex-col h-[48rem] m-auto">
      <h1 className="text-center pt-10 text-3xl font-bold">My Projects</h1>
      <hr className="my-7 mx-40" />
      <section className="relative">
        <Carousel />
      </section>
    </div>
  );
}
export default Projects;
