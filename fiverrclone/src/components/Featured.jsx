import React from "react";

const Featured = () => {
  return (
    <div className="h-[600px] flex justify-center bg-[#013914] text-white">
      <div className="w-full px-5 lg:px-10 flex items-center">
        {/* Left Section */}
        <div className="flex flex-col gap-[30px]">
          <h1 className="text-[50px]">
            Find the perfect{" "}
            <span className="italic font-light">freelance</span> services for
            your business
          </h1>

          {/* Search Bar */}
          <div className="bg-white rounded flex items-center justify-between overflow-hidden">
            <div className="flex items-center gap-[10px]">
              <img src="./img/search.png" alt="" className="w-5 h-5 m-[10px]" />
              <input
                type="text"
                placeholder='Try "building mobil app"'
                className="border-none outline-none placeholder-gray-500 text-black"
              />
            </div>
            <button className="w-[120px] h-[50px] bg-[#1dbf73] text-white cursor-pointer">
              Search
            </button>
          </div>

          {/* Popular Tags */}
          <div className="flex items-center gap-[10px]">
            <span className="w-max">Popular:</span>
            <button className="w-max text-white border border-white px-[10px] py-[5px] rounded-[20px] bg-transparent text-sm">
              Web Design
            </button>
            <button className="w-max text-white border border-white px-[10px] py-[5px] rounded-[20px] bg-transparent text-sm">
              WordPress
            </button>
            <button className="w-max text-white border border-white px-[10px] py-[5px] rounded-[20px] bg-transparent text-sm">
              Logo Design
            </button>
            <button className="w-max text-white border border-white px-[10px] py-[5px] rounded-[20px] bg-transparent text-sm">
              AI Services
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="h-full">
          <img src="./img/man.png" alt="" className="h-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
