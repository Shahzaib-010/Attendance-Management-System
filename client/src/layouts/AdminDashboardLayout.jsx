import Sidebar from 'components/navigation/Sidebar'
import Topbar from 'components/navigation/Topbar'
import React from 'react'
import { Outlet } from 'react-router'

function DashboardLayout() {
  return (
    <div className="flex flex-col">
       <Topbar/>
       
        <div className="flex  w-full">
          <Sidebar className=" bg-gray-800 text-white flex-shrink-0"/>
        
            
            <Outlet className="flex-1  p-6 overflow-y-auto"/>
        </div>
        


    </div>
  )
}

export default DashboardLayout