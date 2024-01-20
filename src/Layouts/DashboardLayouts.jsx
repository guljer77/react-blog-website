import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Dashboard/Sidebar/Sidebar'
import { FiMenu } from "react-icons/fi";

function DashboardLayouts() {
  return (
    <div className='flex items-start justify-between'>
      <div className='lg:w-[20%] w-full'>
        <div className='fixed w-[20%] h-screen bg-[#5C80BC]'>
          <Sidebar />
        </div>
      </div>
      <div className='lg:w-[80%] w-full'>
        <div className='py-5 px-5 bg-white shadow-lg w-full'>
          <div>
            <div>
              <span><FiMenu size={24} /></span>
            </div>
            <div>
              
            </div>
            <div></div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayouts