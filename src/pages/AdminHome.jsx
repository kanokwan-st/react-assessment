import React, { useState } from 'react'
import ButtonPack from '../components/ButtonPack'
import { useOutletContext } from 'react-router';
import axios from 'axios';

export default function AdminHome() {

  // Recieve props from Outlet.
  const {users, setUsers, newUser, setNewUser} = useOutletContext(); 
  // console.log(users)

  // Create State to keep data when input changes.
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");

  // Add new user to Array Users.
  function addUser(e) {
    e.preventDefault();
    if (!name || !lastName || !position) {
      alert("Please fill all detail.")
      return;
    }
    const newData = {id: Date.now(), name:name, lastname: lastName, position: position};

    setNewUser(newData); //add a new data to state newUser

    const updateUsers = [...users, newData];
    setUsers(updateUsers); //Update data to users
    setName("");
    setLastName("");
    setPosition("");
  }

  // Delete selected user from Array Users.
  async function deleteUser(e) {
    e.preventDefault();
    const selectedId = e.target.value;
    const updateUsers = users.filter((user) => user.id != selectedId);
    // console.log(updateUsers)
    setUsers(updateUsers);
    try {
      const res = await axios.delete(`https://jsd5-mock-backend.onrender.com/member/${selectedId}`)
    } catch(error) {
      console.log(error)
    }
  }


  return (
    <div className='flex flex-col items-center gap-12'>
      <h1 className='font-bold text-2xl'>Generation Thailand React - Admin Section</h1>
      <ButtonPack />

      <form action="">
        <div>
            <label className='font-bold'>Create User Here</label>
        </div>
        <div className='flex gap-6'>
            <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Name' className='bg-white rounded p-1' />
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder='Last Name' className='bg-white rounded p-1' />
            <input value={position} onChange={(e) => setPosition(e.target.value)} type="text" placeholder='Position' className='bg-white rounded p-1' />
            <button onClick={addUser} className='p-2 bg-blue-800 text-white font-semibold rounded hover:bg-blue-900 hover:cursor-pointer'>Save</button>
        </div>
      </form>

      <table>
        <thead>
            <tr className='h-8'>
                <th className='border w-40 p-2'>Name</th>
                <th className='border w-40 p-2'>Last Name</th>
                <th className='border w-40 p-2'>Position</th>
                <th className='border w-40 p-2'>Action</th>
            </tr>
        </thead>

        <tbody>
        {/* Map Detail of each User */}
        {users.map((user) => 
          (
            <tr key={user.id} className='h-8'>
              <td className='border p-1'>{user.name}</td>
              <td className='border p-1'>{user.lastname}</td>
              <td className='border p-1'>{user.position}</td>
              <td className='border p-1 text-center'>
                <button onClick={(e) => deleteUser(e)} value={user.id} className='bg-gray-200 text-red-400 font-semibold hover:bg-gray-300 hover:cursor-pointer'>Delete</button>
              </td>
            </tr>
          ))
        }
        </tbody>


      </table>

    </div>
  )
}
