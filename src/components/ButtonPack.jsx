import React from "react";
import { Link } from "react-router";

export default function ButtonPack() {
  return (
    <div className="flex justify-between gap-10">
      <Link to="/userhome">
        <button className="w-[175px] h-[50px] font-bold bg-white rounded-lg shadow shadow-black hover:cursor-pointer hover:bg-gray-200">
          User Home Section
        </button>
      </Link>
      <Link to="/adminhome">
        <button className="w-[175px] h-[50px] font-bold bg-white rounded-lg shadow shadow-black hover:cursor-pointer hover:bg-gray-200">
          Admin Home Section
        </button>
      </Link>
    </div>
  );
}
