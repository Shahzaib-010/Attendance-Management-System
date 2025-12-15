import UserSidebar from 'components/navigation/UserSidebar'
import UserTopbar from 'components/navigation/UserTopbar'
import React from 'react'
import { Outlet } from 'react-router'

function UserDashboardLayout() {
  return (
    <div className="flex flex-col">
       <UserTopbar/>
       
        <div className="flex  w-full">
          <UserSidebar className=" bg-gray-800 text-white flex-shrink-0"/>
        
            
            <Outlet className="flex-1  p-6 overflow-y-auto"/>
        </div>
        


    </div>
  )
}

export default UserDashboardLayout