import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import DecideIcon from "./DecideIcon";

interface data {
  title: string;
  experience: number;
}

function Skill({ title, experience }: data) {
  return (
    <div className="px-6 py-4 overflow-hidden bg-black rounded-2xl h-[120px] ">
      <DecideIcon name={title.toLowerCase()} size="3rem" color="white" />
      <div className="flex p-0 absolute w-[75%] bottom-[14px]">
        <section className="p-0 my-auto w-[80%]">
          <ProgressBar
            completed={experience}
            height="2px"
            bgColor="#38bdf8"
            baseBgColor="white"
            isLabelVisible={false}
          />
        </section>
        <span className="ml-5 text-[11px]">{experience}%</span>
      </div>
    </div>
  );
}

export default Skill;
