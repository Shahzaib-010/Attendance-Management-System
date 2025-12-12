import Sidebar from 'components/navigation/Sidebar'
import Topbar from 'components/navigation/Topbar'
import React from 'react'
import { Outlet } from 'react-router'

function DashboardLayout() {
  return (
    <div className="">
       <Topbar/>
       
        <div className="flex">
          <Sidebar/>
        
            
            <Outlet/>
        </div>
        


    </div>
  )
}

export default DashboardLayout