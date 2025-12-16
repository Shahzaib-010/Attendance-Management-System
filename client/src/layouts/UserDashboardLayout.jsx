
import UserSidebar from "components/navigation/UserSidebar";
import UserTopbar from "components/navigation/UserTopbar";
import React from "react";
import { Outlet } from "react-router";

function UserDashboardLayout() {
  return (
    <div className="flex flex-col h-screen">
      <UserTopbar />
      <div className="flex w-full flex-grow overflow-hidden">
        <UserSidebar className="bg-gray-800 text-white flex-shrink-0" />

        <div className="flex-grow overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default UserDashboardLayout;
