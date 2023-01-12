import React from "react";
import Link from "next/link";

function ResumeLinkedIn() {
  return (
    <div className="section-styles flex flex-row w-full h-[14rem] mt-[7rem]">
      <h1 className="m-auto text-3xl font-medium">
        Am I what You're Looking For?
      </h1>
      <div className="flex flex-col m-auto space-y-4">
        <button className="button-styles px-3">Download Resume</button>
        <Link href="/contact" className="button-styles px-3 text-center">
          Contact Me
        </Link>
      </div>
    </div>
  );
}

export default ResumeLinkedIn;
