import React, { useState } from 'react'
import ButtonPack from '../components/ButtonPack'
import { useOutletContext } from 'react-router';

export default function AdminHome() {

  // function saveData() {
  //   localStorage.setItem("name","value")
  // }

  const {users, setUsers} = useOutletContext(); // recieve props from Outlet
  console.log(users)

  return (
    <div className='flex flex-col items-center gap-12 h-screen'>
      <h1 className='font-bold text-2xl'>Generation Thailand React - Admin Section</h1>
      <ButtonPack />

      <form action="">
        <div>
            <label className='font-bold'>Create User Here</label>
        </div>
        <div className='flex gap-6'>
            <input type="text" placeholder='Name' className='bg-white rounded p-1' />
            <input type="text" placeholder='Last Name' className='bg-white rounded p-1' />
            <input type="text" placeholder='Position' className='bg-white rounded p-1' />
            <button className='p-2 bg-blue-800 text-white font-semibold rounded hover:bg-blue-900 hover:cursor-pointer'>Save</button>
        </div>
      </form>

      <table>
        <thead>
            <tr className='h-6'>
                <th className='border w-40'>Name</th>
                <th className='border w-40'>Last Name</th>
                <th className='border w-40'>Position</th>
                <th className='border w-40'>Action</th>
            </tr>
        </thead>

        {/* Map Detail of each User */}
        {users.map((user) => 
          (<tbody>
            <tr className='h-6'>
              <td className='border'>{user.name}</td>
              <td className='border'>{user.lastname}</td>
              <td className='border'>{user.position}</td>
              <td className='border text-center'>
                <button className='bg-gray-200 text-red-400 font-semibold hover:bg-gray-300 hover:cursor-pointer'>Delete</button>
              </td>
            </tr>
          </tbody>))
        }


      </table>

    </div>
  )
}
