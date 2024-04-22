import React from "react";
import stol1 from "../images/produkty/stol1.jpg";
import stol2 from "../images/produkty/stol2.jpg";
import cart from "../images/icons/cart-orange.png";

function Products() {
  return (
    <div className="max-w-[1080px] pb-32  mx-auto px-10 ">
      {/* bg-[#e8e8e8] shadow-lg shadow-[#0000002a] rounded-b-xl */}
      <div className="flex flex-col justify-center items-center mx-auto pt-[90px]">
        <h1 className="text-5xl font-bold  ">Zobacz nasze gotowe produkty!</h1>
        <h1 className="text-xl border-b-2 font-[roboto] tracking-tight text-gray-500 border-myOrange py-2 px-12">
          uniwersalny wygląd pasujący do każdego stylu
        </h1>
        <div className="w-full grid grid-cols-1 gap-6 pt-20 max-w-full mx-auto  justify-center items-center">
          {/* ITEM1 */}
          <div className="w-[100%] h-[220px] bg-[#dcdcdc] hover:bg-[#d3d3d2] && duration-150 cursor-pointer rounded-[20px] mx-auto flex flex-row items-center justify-start ">
            <img
              src="https://ireland.apollo.olxcdn.com/v1/files/d0ppduzx0fy32-PL/image;s=1000x700"
              className="rounded-[20px] w-[264px]  h-[90%]  mx-4 "
            ></img>
            <div className="mb-auto py-6 px-6  flex flex-col justify-between h-full ">
              <h1 className="text-2xl font-[Roboto]">
                Stół Jesionowy do salonu
              </h1>
              <div className="flex flex-col space-y-2">
                <h1 className="text-xl text-orange-400">Jesion</h1>
                <h1 className="text-xl text-[#7a7a7a]">160x90x80cm</h1>
              </div>
            </div>
            <div className="ml-auto py-6 px-6 flex flex-col justify-between items-center h-full">
              <h1 className="text-2xl font-bold">1800zł</h1>
              <div className="w-12 h-12 flex flex-col justify-center items-center bg-[#d4d2d2] rounded-full">
                <img src={cart} className="w-8"></img>
              </div>
            </div>
          </div>
          {/* ITEM2 */}
          <div className="w-[100%] h-[220px] bg-[#dcdcdc] hover:bg-[#d3d2d2] && duration-150 cursor-pointer rounded-[20px] mx-auto flex flex-row items-center justify-start">
            <img
              src="https://ireland.apollo.olxcdn.com/v1/files/ivux16d6ivk72-PL/image;s=1000x700"
              className="rounded-[20px] w-[264px]  h-[90%]  mx-4 "
            ></img>
            <div className="mb-auto py-6 px-6 flex flex-col justify-between h-full ">
              <h1 className="text-2xl font-[helvetica]">Stolik kawowy</h1>
              <div className="flex flex-col space-y-2">
                <h1 className="text-xl  text-orange-400">Dąb</h1>
                <h1 className="text-xl text-[#7a7a7a]">100x60x58cm</h1>
              </div>
            </div>
            <div className="ml-auto py-6 px-6 flex flex-col justify-between items-center h-full">
              <h1 className="text-2xl font-bold">900zł</h1>
              <div className="w-12 h-12 flex flex-col justify-center items-center bg-[#d4d2d2] rounded-full">
                <img src={cart} className="w-8"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
