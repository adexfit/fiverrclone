import React, { useRef, useState } from "react";
import { gigs } from "../../data";
import GigCard from "../../components/gigCard/GigCard";

const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = () => {
    console.log(minRef.current.value);
    console.log(maxRef.current.value);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1400px] py-8 flex flex-col gap-4">
        <span className="font-light uppercase text-[13px] text-[#555]">
          Liverr &gt; Graphics &amp; Design &gt;
        </span>
        <h1 className="text-2xl font-semibold">AI Artists</h1>
        <p className="text-[#999] font-light">
          Explore the boundaries of art and technology with Liverr's AI artists
        </p>

        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2 text-[#555] font-light">
            <span>Budget</span>
            <input
              ref={minRef}
              type="number"
              placeholder="min"
              className="px-2 py-1 border border-gray-300 rounded-md outline-none placeholder:text-[#999]"
            />
            <input
              ref={maxRef}
              type="number"
              placeholder="max"
              className="px-2 py-1 border border-gray-300 rounded-md outline-none placeholder:text-[#999]"
            />
            <button
              onClick={apply}
              className="px-3 py-1 bg-[#1dbf73] text-white font-medium rounded-md cursor-pointer"
            >
              Apply
            </button>
          </div>

          <div className="relative flex items-center gap-2">
            <span className="text-[#555] font-light">Sort by</span>
            <span className="font-medium">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img
              src="./img/down.png"
              alt=""
              onClick={() => setOpen(!open)}
              className="w-4 cursor-pointer"
            />
            {open && (
              <div className="absolute top-8 right-0 z-10 flex flex-col gap-4 p-5 bg-white border border-gray-300 rounded-md text-[#555]">
                {sort === "sales" ? (
                  <span
                    onClick={() => reSort("createdAt")}
                    className="cursor-pointer"
                  >
                    Newest
                  </span>
                ) : (
                  <span
                    onClick={() => reSort("sales")}
                    className="cursor-pointer"
                  >
                    Best Selling
                  </span>
                )}
                <span
                  onClick={() => reSort("sales")}
                  className="cursor-pointer"
                >
                  Popular
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-between flex-wrap gap-4">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
