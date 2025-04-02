import React, { useState } from "react";
import { Outlet, Link } from "react-router";

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

export default function Home() {

  const [users, setUsers] = useState(mockEmployees) 

  return (
    <div className="flex flex-col gap-4 m-auto w-full bg-amber-100 h-screen">

      {/* NAV SECTION */}
      <nav>
        <ul className="flex gap-12 justify-end p-6 pr-30 font-bold text-lg border-b-2">
          <li className="hover:cursor-pointer">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:cursor-pointer">
            <Link to={"/owner"}>Owner</Link>
          </li>
        </ul>
      </nav>

      {/* OUTLET SECTION */}
      <div>
        <Outlet context={{users, setUsers}}/>
      </div>

    </div>
  );
}



