import React, { useState, useEffect } from "react";
import Logo from "../images/nav/logo.png";

function Navbar() {
  const [navClass, setNavClass] = useState("");
  const [scrollerClass, setScrollerClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setNavClass(window.scrollY > 550 ? "bg-[#3E3E3E]" : "");
      if (window.scrollY > 250 && window.scrollY < 1059) {
        setScrollerClass("block");
      } else if (window.scrollY < 251 && window.scrollY < 1059) {
        setScrollerClass("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <div
      className={`w-full py-4 px-16 flex flex-row justify-center items-center fixed ${navClass} duration-150 top-0 z-[100]`}
    >
      <img src={Logo} className="w-52"></img>
      <ul className="ml-auto flex flex-row space-x-24 items-center justify-center">
        <li className="text-white text-4xl">
          <a href="#">Główna</a>
        </li>
        <li className="text-white text-4xl">
          <a href="#">Kontakt</a>
        </li>
        <li className="text-white text-4xl">
          <a href="#">O nas</a>
        </li>

        <button
          className={`px-12 py-2 mx-auto text-white text-4xl bg-gradient-to-r from-[#fddc05] to-[#fd8905] rounded-[12px] hover:shadow-[#fdb305] && shadow-lg ${scrollerClass}`}
        >
          Produkty
        </button>
      </ul>
    </div>
  );
}

export default Navbar;
