import React from "react";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1200px] m-12">
        <span className="font-light text-[13px] text-gray-600">
          <Link to="/messages">Messages</Link> &gt; John Doe &gt;
        </span>

        <div className="my-8 p-12 flex flex-col gap-5 h-[500px] overflow-y-scroll">
          <div className="flex gap-5 max-w-[600px] text-lg">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <p className="max-w-[500px] p-5 bg-gray-100 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl text-gray-500 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>

          <div className="flex gap-5 max-w-[600px] text-lg flex-row-reverse self-end">
            <img
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <p className="max-w-[500px] p-5 bg-blue-600 text-white rounded-tl-2xl rounded-tr-none rounded-br-2xl rounded-bl-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
        </div>

        <hr className="border border-gray-200 mb-5" />

        <div className="flex items-center justify-between">
          <textarea
            type="text"
            placeholder="write a message"
            className="w-4/5 h-[100px] p-3 border border-gray-300 rounded-lg resize-none"
          />
          <button className="bg-green-500 p-5 text-white font-medium rounded-lg cursor-pointer w-[100px]">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
