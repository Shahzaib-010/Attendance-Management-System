import Sidebar from 'components/navigation/Sidebar'
import Topbar from 'components/navigation/Topbar'
import React from 'react'
import { Outlet } from 'react-router'

function DashboardLayout() {
  return (
    <div className="">
        <Sidebar/>
        <div className="flex ">
            <Topbar/>
            <Outlet/>
        </div>


    </div>
  )
}

export default DashboardLayout