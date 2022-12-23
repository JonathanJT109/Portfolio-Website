import React from "react";
import Link from "next/link";
import Image from "next/image";

const ButtonStyle =
  "relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 hover:text-white before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-700";

const TestButtonStyle = `
pr-1.5 relative before:content-[''] before:absolute before:block 
before:h-full before:w-[2px] before:right-0 before:top-0 before:bg-white before:hover:scale-y-100 
hover:text-white before:scale-y-0 before:origin-bottom-right before:transition before:ease-in-out 
before:duration-700
`;

function Header() {
  return (
    <header>
      <header className="flex items-center justify-between text-center md:px-[11.5%] md:my-11">
        <h1 className="cursor-pointer text-2xl font-bold tracking-[1.2px]">
          <Link href="/" className={TestButtonStyle}>
            MN PRODUCTIONS
          </Link>
        </h1>
        <div className="flex gap-x-32 items-center px-10 py-1.5 text-lg text-white">
          <Link href="/" className={ButtonStyle}>
            Home
          </Link>
          <Link href="/about" className={ButtonStyle}>
            About
          </Link>
          <Link href="/blog" className={ButtonStyle}>
            Blog
          </Link>
          <Link href="/contact" className={ButtonStyle}>
            Contact
          </Link>
        </div>
      </header>
    </header>
  );
}

export default Header;
