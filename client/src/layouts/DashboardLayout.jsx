import Sidebar from 'components/navigation/Sidebar'
import Topbar from 'components/navigation/Topbar'
import React from 'react'
import { Outlet } from 'react-router'

function DashboardLayout() {
  return (
    <div className="flex flex-col">
       <Topbar/>
       
        <div className="flex flex-1">
          <Sidebar className=""/>
        
            
            <Outlet/>
        </div>
        


    </div>
  )
}

export default DashboardLayout