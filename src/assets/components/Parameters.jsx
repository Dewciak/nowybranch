import React from "react";
import wood from "../images/parametry/wood2.png";
import size from "../images/parametry/size.png";
import shield from "../images/parametry/shield2.png";
import polish from "../images/parametry/polisher.png";

function Parameters() {
  return (
    <div className="max-w-[1080px]  mx-auto h-[100vh]">
      <h1 className="text-[2.7rem]  font-bold text-center">
        Albo powiedz mi jaki produkt cie interesuje <br></br>
      </h1>
      <h1 className="text-[2rem] text-gray-500  text-center">
        a ja go dla ciebie wykonam
      </h1>
      <div className="w-full mx-auto flex flex-row  flex-wrap mt-12 justify-start gap-x-8 gap-y-8 items-center">
        <div className="bg-[#e6e6e6] w-[48%] max-h-[210px] shadow-md shadow-[#00000024]  rounded-xl flex flex-row items-center justify-center space-x-10 px-8 py-4">
          <img src={wood} className="h-[150px]"></img>
          <div className="flex flex-col w-full">
            <h1 className="text-2xl font-semibold text-[#4d4d4d] py-6 font-[Helvetica]">
              Rodzaj drewna
            </h1>
            <h1 className="text-lg font-semibold py-6 font-[Helvetica] text-gray-500 ">
              Jesion, dąb, sosna i wiele innych!
            </h1>
          </div>
        </div>
        <div className="bg-[#e6e6e6] w-[48%] max-h-[210px] text-[#4d4d4d] shadow-md shadow-[#00000024]  rounded-xl flex flex-row items-center justify-center space-x-10 px-8 py-4">
          <img src={size} className="h-[150px]"></img>
          <div className="flex flex-col w-full ">
            <h1 className="text-2xl py-6 font-[Helvetica] font-bold text-[#4d4d4d] ">
              Wymiary produktu
            </h1>
            <h1 className="text-lg font-semibold py-6 font-[Helvetica]  text-gray-500">
              Wymiary według twoich potrzeb
            </h1>
          </div>
        </div>
        {/* item 3 */}
        <div className="bg-[#e6e6e6] max-h-[210px] w-[48%] shadow-md shadow-[#00000024]  rounded-xl flex flex-row items-center justify-center space-x-10 px-8 py-4">
          <img src={shield} className="h-[150px]"></img>
          <div className="flex flex-col w-full ">
            <h1 className="text-2xl py-6 font-[Helvetica] font-semibold text-[#4d4d4d]">
              Sposób impregnacji
            </h1>
            <h1 className="text-lg font-semibold py-6 font-[Helvetica] text-gray-500">
              Olej? Lakier? Impregnat? A może wosk?
            </h1>
          </div>
        </div>
        {/* item 4 */}
        <div className="bg-[#e6e6e6] max-h-[210px] w-[48%] shadow-md shadow-[#00000024]  rounded-xl flex flex-row items-center justify-center space-x-10 px-8 py-4">
          <img src={polish} className="h-[150px]"></img>
          <div className="flex flex-col w-full ">
            <h1 className="text-2xl py-6 font-[Helvetica] font-semibold text-[#4d4d4d]">
              Faktura powierzchni
            </h1>
            <h1 className="text-lg font-semibold py-6 font-[Helvetica] text-gray-500">
              Zdecyduj jaką fakturę powinien mieć twój mebel
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parameters;
