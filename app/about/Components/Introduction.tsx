import React from "react";
import Image from "next/image";

function Introduction() {
  return (
    <div className="mb-[7rem] mt-[2rem] h-[34rem] w-full items-center flex flex-row border border-slate-100">
      <Image
        src="/1.JPG"
        width="200"
        height="600"
        alt="Picture of the author"
        className="object-scale-down m-auto"
      />
      <div className="relative right-[10%]">
        <h1 className="text-4xl font-bold tracking-wide">About Me...</h1>
        <p className="w-[470px]">
          A skilled computer scientist with a passion for neural networks, web
          development, and object-oriented programming. Strong foundation in
          multiple programming languages including Python, Java, and React JS,
          solidified through completed coursework and hands-on projects.
          Continuously seeks new learning opportunities to stay current with the
          latest technologies and best practices in the field. Demonstrates
          analytical thinking skills through hobbies such as chess and sports.
          Committed to giving back to the community through volunteer work and
          positive impact projects. A valuable asset to any team with a unique
          combination of skills and perspective.
        </p>
      </div>
    </div>
  );
}

export default Introduction;
