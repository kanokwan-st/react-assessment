import React from 'react'
import { Link } from 'react-router'

export default function ButtonPack() {
  return (
    <div className="flex justify-between gap-10">
        <button className="w-[175px] h-[50px] font-bold bg-white rounded-lg shadow shadow-black hover:cursor-pointer hover:bg-gray-200">
          <Link to="/userhome">
            User Home Section
          </Link>
        </button>
        <button className="w-[175px] h-[50px] font-bold bg-white rounded-lg shadow shadow-black hover:cursor-pointer hover:bg-gray-200">
          <Link to="/adminhome">
            Admin Home Section
          </Link>
        </button>
      </div>
  )
}
