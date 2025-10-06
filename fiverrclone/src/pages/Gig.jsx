import React from "react";
import { Slider } from "infinite-react-carousel/lib";

const Gig = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1400px] py-8 flex gap-12">
        <div className="flex-[2] flex flex-col gap-5">
          <span className="font-light uppercase text-xs text-gray-600">
            Liverr &gt; Graphics & Design &gt;
          </span>
          <h1 className="text-2xl font-semibold">
            I will create ai generated art for you
          </h1>

          <div className="flex items-center gap-2">
            <img
              className="w-8 h-8 rounded-full object-cover"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span className="text-sm font-medium">Anna Bell</span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src="/img/star.png"
                  alt=""
                  className="w-3.5 h-3.5"
                />
              ))}
              <span className="text-sm font-bold text-yellow-500">5</span>
            </div>
          </div>

          <Slider slidesToShow={1} arrowsScroll={1} className="bg-gray-100">
            <img
              className="max-h-[500px] object-contain"
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              className="max-h-[500px] object-contain"
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              className="max-h-[500px] object-contain"
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>

          <h2 className="font-normal text-xl">About This Gig</h2>
          <p className="font-light leading-6 text-gray-600">
            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images...
          </p>

          <div className="mt-12 flex flex-col gap-5">
            <h2 className="text-xl font-semibold">About The Seller</h2>
            <div className="flex items-center gap-5">
              <img
                className="w-24 h-24 rounded-full object-cover"
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="flex flex-col gap-2">
                <span className="font-medium">Anna Bell</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src="/img/star.png"
                      alt=""
                      className="w-3.5 h-3.5"
                    />
                  ))}
                  <span className="text-sm font-bold text-yellow-500">5</span>
                </div>
                <button className="bg-white border border-gray-400 rounded px-4 py-2">
                  Contact Me
                </button>
              </div>
            </div>

            <div className="border border-gray-300 rounded p-5 mt-5">
              <div className="flex justify-between flex-wrap">
                {[
                  { title: "From", desc: "USA" },
                  { title: "Member since", desc: "Aug 2022" },
                  { title: "Avg. response time", desc: "4 hours" },
                  { title: "Last delivery", desc: "1 day" },
                  { title: "Languages", desc: "English" },
                ].map((item, i) => (
                  <div key={i} className="w-[300px] flex flex-col gap-2 mb-5">
                    <span className="font-light">{item.title}</span>
                    <span className="font-medium">{item.desc}</span>
                  </div>
                ))}
              </div>
              <hr className="border border-gray-300 mb-5" />
              <p className="text-gray-600">
                My name is Anna, I enjoy creating AI generated art in my spare
                time. I have a lot of experience...
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-semibold">Reviews</h2>

            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex flex-col gap-5 my-5">
                <div className="flex items-center gap-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <div>
                    <span className="font-medium">Reviewer {i + 1}</span>
                    <div className="flex items-center gap-2 text-gray-500">
                      <img
                        src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                        alt=""
                        className="w-5"
                      />
                      <span>United States</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src="/img/star.png"
                      alt=""
                      className="w-3.5 h-3.5"
                    />
                  ))}
                  <span className="text-sm font-bold text-yellow-500">5</span>
                </div>

                <p className="font-light text-gray-600">
                  Great experience! The seller was communicative and delivered
                  quality work beyond expectations.
                </p>

                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <span>Helpful?</span>
                  <img src="/img/like.png" alt="" className="w-3.5" />
                  <span>Yes</span>
                  <img src="/img/dislike.png" alt="" className="w-3.5" />
                  <span>No</span>
                </div>

                <hr className="border border-gray-300 mt-5" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 border border-gray-300 p-5 rounded flex flex-col gap-5 h-max max-h-[500px] sticky top-[150px]">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">1 AI generated image</h3>
            <h2 className="font-light text-lg">$ 59.99</h2>
          </div>
          <p className="text-gray-600">
            I will create a unique high quality AI generated image based on a
            description that you give me
          </p>
          <div className="flex justify-between text-sm">
            <div className="flex items-center gap-2">
              <img src="/img/clock.png" alt="" className="w-5" />
              <span>2 Days Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/img/recycle.png" alt="" className="w-5" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {[
              "Prompt writing",
              "Artwork delivery",
              "Image upscaling",
              "Additional design",
            ].map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-gray-600 font-light"
              >
                <img src="/img/greencheck.png" alt="" className="w-3.5" />
                <span>{f}</span>
              </div>
            ))}
          </div>
          <button className="bg-[#1dbf73] text-white font-medium text-lg py-2 rounded">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
