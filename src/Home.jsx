import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router";
import axios from "axios";

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

  const [users, setUsers] = useState(mockEmployees); 
  const [newUser, setNewUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Data ------------------------------------------
  async function getUserData() {
    try {
      const res = await axios.get("https://jsd5-mock-backend.onrender.com/members");
      // console.log(res.data);
      setUsers(res.data)
    } catch(err) {
      setError(err.message)
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  useEffect((() => {
    getUserData();
  }),[])

  // Send data to Database---------------------------------------
  async function sendData() {
    if (newUser.length === 0) return; // If no changed data.
    try {
      const res = await axios.post("https://jsd5-mock-backend.onrender.com/members", newUser)
    } catch(err) {
      setError(err.message)
      console.log(error)
    }
  }

  useEffect(() => {
    sendData();
  }, [newUser])

  // ------------------------------------------------------------


  return (
    <div className="flex flex-col gap-4 m-auto w-full bg-[#fceaff] min-h-screen">

      {loading && <p>loading...</p>}

      {/* NAV SECTION */}
      <nav className="mb-20 bg-[#47267c] text-white">
        <ul className="flex gap-12 justify-end p-6 pr-30 font-bold text-lg">
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
        <Outlet context={{users, setUsers, newUser, setNewUser}}/>
      </div>

    </div>
  );
}



