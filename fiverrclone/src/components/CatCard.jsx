import React from "react";
import { Link } from "react-router-dom";

const CatCard = ({ card }) => {
  return (
    <Link to="/gigs?cat=design">
      <div className="w-[252px] h-[344px] text-white rounded relative cursor-pointer">
        <img
          src={card.img}
          alt=""
          className="w-full h-full object-cover rounded"
        />
        <span className="font-light absolute top-[15px] left-[15px]">
          {card.desc}
        </span>
        <span className="absolute top-[40px] left-[15px] text-2xl font-medium">
          {card.title}
        </span>
      </div>
    </Link>
  );
};

export default CatCard;
