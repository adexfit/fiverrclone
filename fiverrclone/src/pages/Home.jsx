import React from "react";
import Featured from "../components/Featured";
import TrustedBy from "../components/TrustedBy";
import Slide from "../components/Slide";
import CatCard from "../components/CatCard";
import ProjectCard from "../components/ProjectCard";
import { cards, projects } from "../data";

function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />

      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>

      <div className="bg-[#f1fdf7] flex justify-center py-24">
        <div className="w-[1400px] flex items-center gap-[200px]">
          <div className="flex flex-col gap-4 flex-[2]">
            <h1 className="font-medium mb-2">
              A whole world of freelance talent at your fingertips
            </h1>

            <div className="flex items-center gap-2 font-medium text-lg text-[#666]">
              <img src="./img/check.png" alt="" className="w-6 h-6" />
              The best for every budget
            </div>
            <p className="text-gray-500 text-lg font-light leading-7 tracking-wide">
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>

            <div className="flex items-center gap-2 font-medium text-lg text-[#666]">
              <img src="./img/check.png" alt="" className="w-6 h-6" />
              Quality work done quickly
            </div>
            <p className="text-gray-500 text-lg font-light leading-7 tracking-wide">
              Find the right freelancer to begin working on your project within
              minutes.
            </p>

            <div className="flex items-center gap-2 font-medium text-lg text-[#666]">
              <img src="./img/check.png" alt="" className="w-6 h-6" />
              Protected payments, every time
            </div>
            <p className="text-gray-500 text-lg font-light leading-7 tracking-wide">
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>

            <div className="flex items-center gap-2 font-medium text-lg text-[#666]">
              <img src="./img/check.png" alt="" className="w-6 h-6" />
              24/7 support
            </div>
            <p className="text-gray-500 text-lg font-light leading-7 tracking-wide">
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>

          <div className="flex-[3]">
            <video src="./img/video.mp4" controls className="w-[720px]" />
          </div>
        </div>
      </div>

      <div className="flex justify-center py-24">
        <div className="w-[1400px]">
          <h1 className="text-[#555] text-2xl font-semibold mb-8">
            Explore the marketplace
          </h1>
          <div className="w-full flex justify-between flex-wrap gap-6">
            {[
              "Graphics & Design",
              "Digital Marketing",
              "Writing & Translation",
              "Video & Animation",
              "Music & Audio",
              "Programming & Tech",
              "Business",
              "Lifestyle",
              "Data",
              "Photography",
            ].map((label, i) => (
              <div
                key={i}
                className="w-[250px] h-[150px] flex flex-col gap-2 items-center justify-center text-center cursor-pointer group"
              >
                <img
                  src={`https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/${label
                    .toLowerCase()
                    .replace(/ & | /g, "-")}.svg`}
                  alt={label}
                  className="w-12 h-12"
                />
                <div className="w-[50px] h-[2px] bg-gray-300 transition-all duration-300 ease group-hover:w-[80px] group-hover:bg-[#1dbf73]"></div>
                <span className="font-light">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#0d084d] flex justify-center py-24 text-white">
        <div className="w-[1400px] flex items-center gap-[200px]">
          <div className="flex flex-col gap-4 flex-[2]">
            <h1 className="text-white font-normal">
              liverr <i className="font-light">business</i>
            </h1>
            <h1 className="text-white font-normal">
              A business solution designed for{" "}
              <i className="font-light">teams</i>
            </h1>
            <p className="text-white font-light mb-5">
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>

            <div className="flex items-center gap-2 text-white font-light text-sm">
              <img src="./img/check.png" alt="" className="w-6 h-6" />
              Connect to freelancers with proven business experience
            </div>
            <div className="flex items-center gap-2 text-white font-light text-sm">
              <img src="./img/check.png" alt="" className="w-6 h-6" />
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className="flex items-center gap-2 text-white font-light text-sm">
              <img src="./img/check.png" alt="" className="w-6 h-6" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>

            <button className="bg-[#1dbf73] border-none text-white px-5 py-2 rounded-md text-base cursor-pointer mt-5 w-max">
              Explore Liverr Business
            </button>
          </div>

          <div className="flex-[3]">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </div>

      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;
