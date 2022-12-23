import React from "react";

const linkStyle = "font-bold hover:text-sky-300 hover:underline duration-500";

function Maintenance() {
  return (
    <div className="mt-20 text-center">
      <h2 className="font-bold text-xl pb-5">
        This page is under maintenance...
      </h2>
      <p className="m-auto w-1/2">
        Feel free to visit the other pages. If you have a suggestion, please
        visit my repo at{" "}
        <a href="" className={linkStyle}>
          Github Repository
        </a>{" "}
        or send me an email at{" "}
        <a href="mailto: jonathangon.2014@gmail.com" className={linkStyle}>
          jonathangon@gmail.com
        </a>
      </p>
    </div>
  );
}

export default Maintenance;
