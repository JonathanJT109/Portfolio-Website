import React from "react";

const linkStyle = "hover:text-sky-300 hover:underline duration-500";

function Footer() {
  return (
    <div className="h-[30rem] flex items-center justify-between text-center md:px-[20%] md:mt-15">
      <h2 className="text-3xl font-bold mr-10">Have a Project in Mind?</h2>
      <div className="">
        <p>Contact me through:</p>
        <p>
          Email:{" "}
          <a className={linkStyle} href="mailto: jonathangon.2014@gmail.com">
            jonathangon.2014@gmail.com
          </a>
        </p>
        <p>
          Phone Number:{" "}
          <a className={linkStyle} href="sms://+17656313209">
            (765) 631-3209
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
