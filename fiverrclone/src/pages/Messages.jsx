import React from "react";
import { Link } from "react-router-dom";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
  maxime cum corporis esse aspernatur laborum dolorum? Animi
  molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat
  nobis praesentium placeat.`;

  return (
    <div className="flex justify-center">
      <div className="w-[1400px] py-12">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Messages</h1>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="h-24">
              <th className="text-left">
                {currentUser.isSeller ? "Buyer" : "Seller"}
              </th>
              <th className="text-left">Last Message</th>
              <th className="text-left">Date</th>
              <th className="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-24 bg-green-100/20">
              <td className="font-medium p-2">Charley Sharp</td>
              <td className="p-2 text-gray-600">
                <Link to="/message/123" className="hover:underline">
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td className="p-2 text-gray-600">1 hour ago</td>
              <td className="p-2">
                <button className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer">
                  Mark as Read
                </button>
              </td>
            </tr>

            <tr className="h-24 bg-green-100/20">
              <td className="font-medium p-2">John Doe</td>
              <td className="p-2 text-gray-600">
                <Link to="/message/123" className="hover:underline">
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td className="p-2 text-gray-600">2 hours ago</td>
              <td className="p-2">
                <button className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer">
                  Mark as Read
                </button>
              </td>
            </tr>

            <tr className="h-24">
              <td className="font-medium p-2">Elinor Good</td>
              <td className="p-2 text-gray-600">
                <Link to="/message/123" className="hover:underline">
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td className="p-2 text-gray-600">1 day ago</td>
              <td className="p-2"></td>
            </tr>

            <tr className="h-24">
              <td className="font-medium p-2">Garner David</td>
              <td className="p-2 text-gray-600">
                <Link to="/message/123" className="hover:underline">
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td className="p-2 text-gray-600">2 days ago</td>
              <td className="p-2"></td>
            </tr>

            <tr className="h-24">
              <td className="font-medium p-2">Troy Oliver</td>
              <td className="p-2 text-gray-600">{message.substring(0, 100)}</td>
              <td className="p-2 text-gray-600">1 week ago</td>
              <td className="p-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Messages;
