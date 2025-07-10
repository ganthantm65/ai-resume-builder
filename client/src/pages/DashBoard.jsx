import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import { faFile, faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DashBoard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const userName = localStorage.getItem("User Name")

  return (
    <div className='w-screen h-screen flex font-monts bg-gray-100 overflow-hidden'>
      <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className='flex-1 h-full flex flex-col'>
        <div className='flex items-center justify-between px-6 py-4 bg-white shadow-md'>
          <div className='flex items-center gap-4'>
            <FontAwesomeIcon
              icon={faBars}
              className='block md:hidden text-2xl cursor-pointer text-gray-700'
              onClick={() => setSidebarOpen(true)}
            />
            <h1 className='font-extrabold text-2xl text-gray-800'>
              <FontAwesomeIcon icon={faFile} className='mr-2 text-blue-600' />
              CraftCV
            </h1>
          </div>
          <div className='flex items-center gap-2 px-4 py-2 bg-black rounded-full'>
            <FontAwesomeIcon icon={faUser} className='text-white text-lg' />
            <h2 className='text-white text-base font-semibold'>{userName}</h2>
          </div>
        </div>
        <div className='p-6'></div>
      </div>
    </div>
  )
}

export default DashBoard
