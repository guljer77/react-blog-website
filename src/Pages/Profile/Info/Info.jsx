import React, { useContext } from 'react'
import { AuthContext } from '../../../Provider/AuthProvider';

function Info() {
  const {user} = useContext(AuthContext);
  return (
    <div className='px-5 py-20 shadow-lg rounded-md bg-white'>
      <div className='flex items-center justify-between gap-10'>
        <div className='w-1/4'>
          <img src={user?.photoURL} alt="" className='w-full' />
        </div>
        <div className='w-3/4'>
          <h4>Name: {user?.displayName}</h4>
          <h4>Email: {user?.email}</h4>
        </div>
      </div>
    </div>
  )
}

export default Info