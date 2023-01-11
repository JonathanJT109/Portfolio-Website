import { Main } from "next/document";
import React from "react";
import Maintenance from "../components/Maintenance";
import Experience from "./Components/Experience";
import Quotes from "./Components/Quotes";
import ResumeLinkedIn from "./Components/ResumeLinkedIn";
import Image from "next/image";

function AboutPage() {
  return (
    <div className="w-full">
      <div className="flex">
        <Image src="/1.JPG" width={500} height={500} />
        <div>
          <h2 className="text-4xl font-bold">About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
        </div>
      </div>
      <Experience />
      <Quotes />
      <ResumeLinkedIn />
    </div>
  );
}

export default AboutPage;
