import React from "react";
import Company from "./Company";
import { data } from "./experienceInfo.js";

function Experience() {
  return (
    <div className="section-styles overflow-hidden flex-col h-[48rem] m-auto">
      <h1 className="text-center pt-10 text-3xl font-bold">Experience</h1>
      {data.map((item, index) => (
        <div key={index}>
          <Company
            company={item.company}
            date={item.date}
            position={item.position}
            description={item.description}
            image_url={item.image_url}
            link={item.link}
          />
        </div>
      ))}
    </div>
  );
}

export default Experience;
