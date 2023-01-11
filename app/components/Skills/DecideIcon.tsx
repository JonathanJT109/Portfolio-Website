import React from "react";
import {
  DiReact,
  DiCss3,
  DiGithub,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiNpm,
  DiPython,
  DiRust,
  DiTerminal,
  DiJava,
} from "react-icons/di";
import { SiTypescript, SiCplusplus, SiC, SiMongodb } from "react-icons/si";
import { MdError } from "react-icons/md";

type PropType = {
  name: string;
  size: string;
  color: string;
};

const DecideIcon: React.FC<PropType> = (props) => {
  const { name, size, color } = props;
  if (name.includes("react"))
    return <DiReact className="m-auto" size={size} color={color} />;
  else if (name.includes("css"))
    return <DiCss3 className="m-auto" size={size} color={color} />;
  else if (name.includes("github"))
    return <DiGithub className="m-auto" size={size} color={color} />;
  else if (name.includes("html"))
    return <DiHtml5 className="m-auto" size={size} color={color} />;
  else if (name.includes("javascript"))
    return <DiJavascript1 className="m-auto" size={size} color={color} />;
  else if (name.includes("node"))
    return <DiNodejsSmall className="m-auto" size={size} color={color} />;
  else if (name.includes("npm"))
    return <DiNpm className="m-auto" size={size} color={color} />;
  else if (name.includes("python"))
    return <DiPython className="m-auto" size={size} color={color} />;
  else if (name.includes("rust"))
    return (
      <DiRust
        className="mt-[-5px] mx-auto"
        size={(Number(Array.from(size)[0]) + 0.7).toString() + "rem"}
        color={color}
      />
    );
  else if (name.includes("terminal"))
    return <DiTerminal className="m-auto" size={size} color={color} />;
  else if (name.includes("java"))
    return <DiJava className="m-auto" size={size} color={color} />;
  else if (name.includes("typscript"))
    return <SiTypescript className="m-auto" size={size} color={color} />;
  else if (name.includes("c++"))
    return (
      <SiCplusplus
        className="mt-[8px] mx-auto"
        size={(Number(Array.from(size)[0]) - 0.6).toString() + "rem"}
        color={color}
      />
    );
  else if (name.includes("c"))
    return (
      <SiC
        className="mt-[9px] mx-auto"
        size={(Number(Array.from(size)[0]) - 1).toString() + "rem"}
        color={color}
      />
    );
  else if (name.includes("mongo"))
    return <SiMongodb className="m-auto" size={size} color={color} />;
  return <MdError className="m-auto" size={size} color={color} />;
};

export default DecideIcon;
