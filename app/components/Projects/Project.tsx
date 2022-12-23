import React from "react";
import Image from "next/image";

interface data {
  name: string;
  description: string;
  img: string;
}

function Project({ name, description, img }: data) {
  return (
    <div className="bg-black text-center rounded-3xl overflow-hidden h-[550px] p-10">
      <Image
        src={`/${img}.JPG`}
        alt="Project"
        width="300"
        height="300"
        className="mx-auto mb-8"
      />
      <h2 className="text-2xl font-bold mb-8 underline underline-offset-[12px]">
        {name}
      </h2>
      <p className="">{description}</p>
      <div className="flex justify-center items-center">
        <button className="bottom-[30px] absolute font-bold text-neutral-100 tracking-wide hover:bg-sky-700 hover:text-neutral-200 duration-200 bg-sky-500 py-2 w-40 rounded-md">
          Explore
        </button>
      </div>
    </div>
  );
}

export default Project;
