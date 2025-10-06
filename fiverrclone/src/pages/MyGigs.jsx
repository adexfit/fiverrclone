import React from "react";
import { Link } from "react-router-dom";

const MyGigs = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    <div className="flex justify-center text-[#555]">
      <div className="w-[1400px] py-12">
        <div className="flex justify-between mb-6">
          <h1>{currentUser.isSeller ? "Gigs" : "Orders"}</h1>
          {currentUser.isSeller && (
            <Link to="/add">
              <button className="bg-[#1dbf73] text-white font-medium px-4 py-2 cursor-pointer">
                Add New Gig
              </button>
            </Link>
          )}
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="h-[50px]">
              <th className="text-left">Image</th>
              <th className="text-left">Title</th>
              <th className="text-left">Price</th>
              <th className="text-left">Sales</th>
              <th className="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-[50px] even:bg-[#1dbf730f]">
              <td>
                <img
                  className="w-[50px] h-[25px] object-cover"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </td>
              <td>Stunning concept art</td>
              <td>
                59.<sup className="text-xs">99</sup>
              </td>
              <td>13</td>
              <td>
                <img
                  className="w-5 cursor-pointer"
                  src="./img/delete.png"
                  alt=""
                />
              </td>
            </tr>

            <tr className="h-[50px] even:bg-[#1dbf730f]">
              <td>
                <img
                  className="w-[50px] h-[25px] object-cover"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </td>
              <td>Ai generated concept art</td>
              <td>
                120.<sup className="text-xs">99</sup>
              </td>
              <td>41</td>
              <td>
                <img
                  className="w-5 cursor-pointer"
                  src="./img/delete.png"
                  alt=""
                />
              </td>
            </tr>

            <tr className="h-[50px] even:bg-[#1dbf730f]">
              <td>
                <img
                  className="w-[50px] h-[25px] object-cover"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </td>
              <td>High quality digital character</td>
              <td>
                79.<sup className="text-xs">99</sup>
              </td>
              <td>55</td>
              <td>
                <img
                  className="w-5 cursor-pointer"
                  src="./img/delete.png"
                  alt=""
                />
              </td>
            </tr>

            <tr className="h-[50px] even:bg-[#1dbf730f]">
              <td>
                <img
                  className="w-[50px] h-[25px] object-cover"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </td>
              <td>Illustration hyper realistic painting</td>
              <td>
                119.<sup className="text-xs">99</sup>
              </td>
              <td>29</td>
              <td>
                <img
                  className="w-5 cursor-pointer"
                  src="./img/delete.png"
                  alt=""
                />
              </td>
            </tr>

            <tr className="h-[50px] even:bg-[#1dbf730f]">
              <td>
                <img
                  className="w-[50px] h-[25px] object-cover"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </td>
              <td>Original ai generated digital art</td>
              <td>
                59.<sup className="text-xs">99</sup>
              </td>
              <td>34</td>
              <td>
                <img
                  className="w-5 cursor-pointer"
                  src="./img/delete.png"
                  alt=""
                />
              </td>
            </tr>

            <tr className="h-[50px] even:bg-[#1dbf730f]">
              <td>
                <img
                  className="w-[50px] h-[25px] object-cover"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </td>
              <td>Text based ai generated art</td>
              <td>
                110.<sup className="text-xs">99</sup>
              </td>
              <td>16</td>
              <td>
                <img
                  className="w-5 cursor-pointer"
                  src="./img/delete.png"
                  alt=""
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyGigs;
