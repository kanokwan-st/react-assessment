import React from 'react'

export default function Owner() {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-[60%] flex flex-col items-center gap-8 bg-white p-10 -m-10 rounded-2xl shadow-xl'>
        <h1 className='text-3xl font-bold text-[#47267C]'>Ling - Group A - 10</h1>
        <img src="/owner.JPG" alt="owner-pic" className='w-60 h-60 object-cover'/>
        <h2 className='text-xl font-bold text-[#47267C]'>Short Biography</h2>
        <p className='text-[#47267C] font-semibold w-[60%]'>I am a Generation's Junior Software Developer Bootcamp's student. I am doing a very challenged react-assessment.</p>
      </div>
    </div>
  )
}
