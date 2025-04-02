import React from 'react'
import ButtonPack from '../components/ButtonPack'

export default function UserHome() {
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
          <tr className='h-6'>
            <td className='border'></td>
            <td className='border'></td>
            <td className='border'></td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}
