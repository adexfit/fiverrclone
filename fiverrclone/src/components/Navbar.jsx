import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    <div
      className={`flex flex-col items-center sticky top-0 z-[999] transition-all duration-500 ${
        active || pathname !== "/"
          ? "bg-white text-black"
          : "bg-[#013914] text-white"
      }`}
    >
      <div className="w-[1400px] flex items-center justify-between py-5">
        {/* Logo */}
        <div className="text-[34px] font-bold flex items-center">
          <Link className="link" to="/">
            <span className="text">liverr</span>
          </Link>
          <span className="font-bold text-[#1dbf73]">.</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 font-montserrat font-medium">
          <span className="whitespace-nowrap">Liverr Business</span>
          <span className="whitespace-nowrap">Explore</span>
          <span className="whitespace-nowrap">English</span>
          {!currentUser?.isSeller && (
            <span className="whitespace-nowrap">Become a Seller</span>
          )}
          {currentUser ? (
            <div
              className="flex items-center gap-2 cursor-pointer relative"
              onClick={() => setOpen(!open)}
            >
              <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-8 h-8 rounded-full object-cover"
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="absolute top-12 right-0 p-5 bg-white rounded-lg z-[999] border border-gray-300 flex flex-col gap-2 w-[200px] font-light text-gray-500">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" to="/">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <span>Sign in</span>
              <Link className="link" to="/register">
                <button className="text-white py-2 px-5 rounded border border-white bg-transparent cursor-pointer hover:bg-[#1dbf73] hover:border-[#1dbf73]">
                  Join
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      {(active || pathname !== "/") && (
        <>
          <hr className="w-[calc(100%-2px)] border-t border-b border-[#ebe9e9]" />
          <div className="w-[1400px] py-2 flex justify-between text-gray-500 font-light font-montserrat">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
          </div>
          <hr className="w-[calc(100%-2px)] border-t border-b border-[#ebe9e9]" />
        </>
      )}
    </div>
  );
};

export default Navbar;
