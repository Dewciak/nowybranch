import React from "react";
import vid from "../images/vid1.mp4";
import parapety from "../images/icons/parapety.png";
import stoly from "../images/icons/table2.png";
import komody from "../images/icons/komody.png";
import schody from "../images/icons/schody.png";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="w-[100%]  mt-0 mx-auto relative flex flex-col justify-center items-center">
      <Navbar /> {/* Add 'relative' positioning here */}
      <video
        autoPlay
        loop
        muted
        src={vid}
        className="mx-auto w-full max-h-[100vh] overflow-hidden absolute top-0 left-0 z-1 bg-[#1d1d1d]"
      ></video>
      <div className="md:w-[50%] w-full md:mt-[80px]  mr-auto z-10 text-white  h-full flex flex-col justify-center  items-center px-[300px] text-center ">
        {" "}
        {/* Adjust positioning and z-index */}
        <h1 className="text-[10vh] leading-[10vh] text-centertext-center line tracking-wider font-bold font-[agency]">
          SK
        </h1>
        <h1 className="text-[20vh] leading-[20vh] text-center  tracking-wider  font-bold font-[agency]">
          WYROBY
        </h1>
        <h1 className="text-[10vh]  leading-[12vh] text-center tracking-wider font-bold font-[agency]">
          DREWNIANE
        </h1>
        <button className="px-12 py-2  text-white text-4xl bg-gradient-to-r from-[#fddc05] to-[#fd8905] rounded-[50px] hover:shadow-[#fdb305] && shadow-lg">
          Zobacz
        </button>
      </div>
      <div className="w-[100%] mt-[8vh] mx-auto bg-[#161617] z-10">
        <div className="mx-auto flex flex-row space-x-6 w-[850px]">
          <div className="h-[34vh] max-h-[300px] w-[25%] relative top-[-5vh] bg-[#3E3E3E] flex flex-col hover:scale-105 duration-300">
            <img src={parapety} className="mt-10 "></img>
            <p className="text-white text-5xl z-10 text-center">Parapety</p>
          </div>
          <div className="h-[34vh] max-h-[300px] w-[25%] relative top-[-5vh] bg-[#3E3E3E] flex flex-col hover:scale-105 duration-300">
            <img src={stoly} className="mt-10 "></img>
            <p className="text-white text-5xl z-10 text-center">Stoły</p>
          </div>
          <div className="h-[34vh] max-h-[300px] w-[25%] relative top-[-5vh] bg-[#3E3E3E] flex flex-col hover:scale-105 duration-300">
            <img src={komody} className="mt-10 "></img>
            <p className="text-white text-5xl z-10 text-center">Komody</p>
          </div>
          <div className="h-[34vh] max-h-[300px] w-[25%] relative top-[-5vh] bg-[#3E3E3E] flex flex-col hover:scale-105 duration-300">
            t<img src={schody} className="mt-10 "></img>
            <p className="text-white text-5xl z-10 text-center">Schody</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
