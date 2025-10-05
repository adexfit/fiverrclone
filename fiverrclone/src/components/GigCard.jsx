import React from "react";
import { Link } from "react-router-dom";

const GigCard = ({ item }) => {
  return (
    <Link to="/gig/123" className="link">
      <div className="w-[324px] h-[400px] border border-[#e4e4e4] mb-10">
        <img src={item.img} alt="" className="w-full h-1/2 object-cover" />

        <div className="px-5 py-2.5 flex flex-col gap-5">
          <div className="flex items-center gap-2.5">
            <img
              src={item.pp}
              alt=""
              className="w-[26px] h-[26px] rounded-full object-cover"
            />
            <span>{item.username}</span>
          </div>

          <p className="text-[#111]">{item.desc}</p>

          <div className="flex items-center gap-1.5">
            <img src="./img/star.png" alt="" className="w-[14px] h-[14px]" />
            <span className="text-sm font-bold text-[#ffc108]">
              {item.star}
            </span>
          </div>
        </div>

        <hr className="border-t border-[#e4e4e4]" />

        <div className="px-5 py-2.5 flex items-center justify-between">
          <img
            src="./img/heart.png"
            alt=""
            className="w-4 h-4 cursor-pointer object-cover"
          />

          <div className="text-right">
            <span className="text-xs text-[#999]">STARTING AT</span>
            <h2 className="text-lg font-normal text-[#555]">
              $ {item.price}
              <sup className="text-xs font-light">99</sup>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
