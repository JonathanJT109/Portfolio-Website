import React from "react";
import Carousel from "./Carousel";
import { data } from "./skillInfo";

function Skills() {
  return (
    <div className="section-styles flex-col md:h-[51rem]">
      <h1 className="text-center pt-7 text-3xl font-bold">Skills</h1>
      <hr className="mt-7 mx-40 mb-14" />
      {data.map((element, index) => (
        <div key={index} className="md:ml-6">
          <Carousel field={element.field} data={element.skills} />
        </div>
      ))}
    </div>
  );
}

export default Skills;
