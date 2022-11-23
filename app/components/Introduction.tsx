import React from "react";
import Image from "next/image";
import portrait from "../images/portrait.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Introduction() {
  return (
    <div className="flex bg-neutral-900 rounded-3xl px-20 md:h-[51rem] items-center md:mb-15">
      <section className="w-8 text-xs md:mr-6 md:pt-20 md:space-y-6">
        <a href="https://github.com/JonathanJT109" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="" />
        </a>
        <FontAwesomeIcon icon={faLinkedin} className="" />
        <FontAwesomeIcon icon={faInstagram} className="" />
      </section>
      <div className="w-[500px] md:ml-6">
        <h2 className="text-2xl md:text-4xl md:mb-.5 font-bold">
          Hello, I'm Jonathan
        </h2>
        <h5 className="text-md md:text-xl md:mb-2 font-medium">
          Web Developer
        </h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          unde error temporibus rerum qui placeat dolor adipisci esse
          consequatur tenetur. Beatae maxime doloremque omnis amet reiciendis
          id, error sed alias! Deleniti recusandae ipsam veniam iste voluptate
          quos laboriosam, laudantium nam accusantium mollitia, alias error non
          iure ipsum repellat
        </p>
      </div>
      <Image src={portrait} className="w-[600px] h-[400px]" alt="Portrait" />
    </div>
  );
}

export default Introduction;
