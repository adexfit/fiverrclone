import React from "react";
import Slider from "infinite-react-carousel";

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="flex justify-center py-24">
      <div className="w-[1400px] relative">
        <Slider
          slidesToShow={slidesToShow}
          arrowsScroll={arrowsScroll}
          prevArrow={
            <button className="w-[50px] h-[50px] bg-[#f3f3f3] rounded-full absolute left-[-25px] top-0 bottom-0 m-auto flex items-center justify-center">
              ‹
            </button>
          }
          nextArrow={
            <button className="w-[50px] h-[50px] bg-[#f3f3f3] rounded-full absolute right-[-25px] top-0 bottom-0 m-auto flex items-center justify-center">
              ›
            </button>
          }
        >
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
