import React from "react";
import Image from "next/image";
import portrait from "../images/portrait.jpg";
import { SocialIcon } from "react-social-icons";

const iconStyle = {
  height: 35,
  width: 35,
};

function Introduction() {
  return (
    <div className="flex bg-neutral-900 rounded-3xl px-10 h-[40rem] items-center w-full">
      <section className="h-full flex flex-col space-y-5 ml-12 mr-7 pt-[310px]">
        <SocialIcon
          url="https://github.com/JonathanJT109"
          bgColor="white"
          target="_blank"
          style={iconStyle}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/jonathan-gonzalez-424697174/"
          bgColor="white"
          target="_blank"
          style={iconStyle}
        />
        <SocialIcon
          url="https://www.instagram.com/jonathanjt109/"
          bgColor="white"
          target="_blank"
          style={iconStyle}
        />
      </section>
      <div className="h-full w-2/5 pt-32 mr-[120px]">
        <h2 className="tracking-wide text-6xl md:mb-.5 font-bold">
          Hello! My name is Jonathan
        </h2>
        <h5 className="tracking-wide text-md md:text-xl my-2 font-semibold">
          and I am a Web Developer
        </h5>
        <hr className="mb-3 w-5/6 h-[2px] border-none bg-white" />
        <p>
          I am currently studying at the University of Indianapolis, doing a
          double major in Computer Science and Data Science. This website was
          made with the purpose of communicating my skills and show some of my
          projects. This website was also created to encourage other students
          that designing and creating is not as difficult as some might think.
          You can find the repository of this project and more in my Github
          page.{" "}
          <span className="mt-2 flex font-bold tracking-[1.3px] underline underline-offset-4 uppercase">
            Thanks for visting my website. Enjoy!
          </span>
        </p>
      </div>
      <Image
        src={portrait}
        className="w-[400px] h-[400px] rounded-full object-cover"
        alt="Portrait"
      />
    </div>
  );
}

export default Introduction;
