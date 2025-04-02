import React from 'react'
import ButtonPack from '../components/ButtonPack'
import { useOutletContext } from 'react-router';

export default function UserHome() {

  // Recieve props from Outlet.
  const {users, setUsers} = useOutletContext();
  // console.log(users);

  return (
    <div className='flex flex-col items-center gap-12 h-screen'>
      <h1 className='font-bold text-2xl'>Generation Thailand React - User Section</h1>

      <ButtonPack />

      <table>
        <thead>
            <tr className='h-6'>
                <th className='border w-40'>Name</th>
                <th className='border w-40'>Last Name</th>
                <th className='border w-40'>Position</th>
            </tr>
        </thead>
        <tbody>

          {users.map(user => 
            (
              <tr key = {user.id} className='h-6'>
                <td className='border'>{user.name}</td>
                <td className='border'>{user.lastname}</td>
                <td className='border'>{user.position}</td>
              </tr>
            ))
          }

        </tbody>
      </table>

    </div>
  )
}
