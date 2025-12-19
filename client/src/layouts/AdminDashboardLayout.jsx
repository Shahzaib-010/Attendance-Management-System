import Sidebar from 'components/navigation/Sidebar'
import Topbar from 'components/navigation/Topbar'
import React from 'react'
import { Outlet } from 'react-router'

function DashboardLayout() {
  return (
    <div className="flex flex-col h-screen ">
       <Topbar/>
       
        <div className="flex  w-full flex-grow overflow-hidden">
          <Sidebar className=" bg-gray-800 text-white flex-shrink-0"/>
        
            
            <div className="flex-grow overflow-y-auto  "
            
            >
              <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout