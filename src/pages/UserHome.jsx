import React from 'react'
import ButtonPack from '../components/ButtonPack'
import { useOutletContext } from 'react-router';

export default function UserHome() {

  // Recieve props from Outlet.
  const {users, setUsers} = useOutletContext();
  // console.log(users);

  return (
    <div className='flex flex-col items-center gap-12'>
      <h1 className='font-bold text-2xl'>Generation Thailand React - User Section</h1>

      <ButtonPack />

      <table>
        <thead>
            <tr className='h-8'>
                <th className='border w-40 p-2'>Name</th>
                <th className='border w-40 p-2'>Last Name</th>
                <th className='border w-40 p-2'>Position</th>
            </tr>
        </thead>
        <tbody>

          {users.map(user => 
            (
              <tr key = {user.id} className='h-8'>
                <td className='border p-1'>{user.name}</td>
                <td className='border p-1'>{user.lastname}</td>
                <td className='border p-1'>{user.position}</td>
              </tr>
            ))
          }

        </tbody>
      </table>

    </div>
  )
}
