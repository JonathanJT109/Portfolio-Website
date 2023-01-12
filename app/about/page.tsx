import { Main } from "next/document";
import React from "react";
import Maintenance from "../components/Maintenance";
import Experience from "./Components/Experience";
import Quotes from "./Components/Quotes";
import ResumeLinkedIn from "./Components/ResumeLinkedIn";
import Introduction from "./Components/Introduction";
import Image from "next/image";

function AboutPage() {
  return (
    <div className="w-full">
      <Introduction />
      <Experience />
      <Quotes />
      <ResumeLinkedIn />
    </div>
  );
}

export default AboutPage;
