import React, { useState } from 'react'
import ButtonPack from '../components/ButtonPack'

export default function AdminHome() {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  function saveData() {
    localStorage.setItem("name","value")
  }

  function changeLastName(e) {
    setLastName(e.target.value)
  }

  return (
    <div className='flex flex-col items-center gap-12 h-screen'>
      <h1 className='font-bold text-2xl'>Generation Thailand React - Admin Section</h1>

      <ButtonPack />

      <form action="">
        <div>
            <label className='font-bold'>Create User Here</label>
        </div>
        <div className='flex gap-6'>
            <input type="text" placeholder='Name' value={name} onChange={e => setName(e.target.value)} className='bg-white rounded p-1' />
            <input type="text" placeholder='Last Name' onChange={changeLastName} className='bg-white rounded p-1' />
            <input type="text" placeholder='Position' className='bg-white rounded p-1' />
            <button onClick={saveData} className='p-2 bg-blue-800 text-white font-semibold rounded hover:bg-blue-900 hover:cursor-pointer'>Save</button>
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
        <tbody>
          <tr className='h-6'>
            <td className='border'>{name}</td>
            <td className='border'>{lastName}</td>
            <td className='border'></td>
            <td className='border text-center'>
              <button className='bg-gray-200 text-red-400 font-semibold hover:bg-gray-300 hover:cursor-pointer'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}
