import React from "react";
import wood from "../images/parametry/wood2.png";
import size from "../images/parametry/size.png";
import shield from "../images/parametry/shield2.png";

function Parameters() {
  return (
    <div className="max-w-[1080px]  mx-auto h-[100vh]">
      <h1 className="text-[2.7rem] text-myOrange font-bold text-center">
        Sam wybierz parametry <span className="text-myOrange">twojego</span>{" "}
        produkty
      </h1>
      <h1 className="text-[1.7rem]  text-center">
        wybierz takie parametry jak{" "}
      </h1>
      <div className="w-full mx-auto flex flex-row flex-wrap mt-16 space-x-10 items-center">
        <div className="bg-[#e0e0e0] w-[48%]  rounded-xl flex flex-row items-center justify-center space-x-10 px-8 py-4">
          <img src={wood} className="h-[150px]"></img>
          <div className="flex flex-col pl-14">
            <h1 className="text-3xl py-6">Rodzaj drewna</h1>
            <h1 className="text-xl py-6 font-[Inter]">
              Jesion, dąb, sosna i wiele innych!
            </h1>
          </div>
        </div>
        <div className="bg-[#e0e0e0] w-[48%]  rounded-xl flex flex-row items-center justify-center space-x-10 px-8 py-4">
          <img src={size} className="h-[150px]"></img>
          <div className="flex flex-col w-full pl-14 ">
            <h1 className="text-3xl py-6 ">Wymiary produktu</h1>
            <h1 className="text-xl py-6 font-[Inter]">
              Jesion, dąb, sosna i wiele innych!
            </h1>
          </div>
        </div>
        {/* <div className="bg-[#e0e0e0]  rounded-xl flex flex-row items-center justify-center  space-x-10 px-8 py-4 ">
          <img src={size} className="h-[150px]"></img>
          <div className="flex flex-col pl-14">
            <h1 className="text-4xl py-6">Wymiary produktu</h1>
            <h1 className="text-xl py-6 font-[Inter]">
              Jesion, dąb, sosna i wiele innych!
            </h1>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Parameters;
