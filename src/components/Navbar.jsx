import { appleImg, bagImg, searchImg, barsImg } from "../utils";
import { navLists } from "../constants";
import React, { useState, useLayoutEffect, useRef } from "react";
import Burger from "./Burger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const windowWidth = window.innerWidth;
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility
  const menuRef = useRef(null); // Ref to target the menu element
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu visibility
  };

  useLayoutEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        // Animate the menu when it opens
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power1.out",
      });
    } else {
      gsap.to(menuRef.current, {
        // Animate the menu when it closes
        opacity: 0,
        x: "-100%",
        duration: 0.5,
        ease: "power1.in",
      });
    }
  }, [isOpen]);

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex flex-1 items-center justify-between w-full screen-max-width relative">
        <img src={appleImg} alt="Apple" width={14} height={18} />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm disabled cursor-not-allowed text-gray hover:text-white transition-all "
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} className="max-sm:hidden"/>
          <img src={bagImg} alt="bag" width={18} height={18} className="max-sm:hidden"/>
          <button onClick={toggleMenu} className="hidden max-sm:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {/* Fullscreen Menu */}

        {/* // this inset-0 class is used to make the menu fullscreen */}

        <div
          ref={menuRef}
          className={`fixed inset-0 bg-black flex flex-1 flex-col items-start justify-center z-50 translate-x-full opacity-0`}
        >
          <button onClick={toggleMenu} className="absolute top-20 left-100 right-20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          </button>
          <ul className="text-start w-full p-20">
            {navLists.map((nav, i) => (
              <li
                key={i}
                onClick={toggleMenu}
                className="px-5 text-4xl disabled cursor-not-allowed text-gray hover:text-white transition-all   my-8"
              >
                {nav}
              </li>
            ))}
          </ul>
          {/* Close button */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
