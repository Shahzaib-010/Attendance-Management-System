import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";

export default function FinancePage() {
  const [open, setOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("All Roles");
  const roles = ["All Roles", "Developer", "Designer", "HR", "Manager"];

  const handleSelect = (role) => {
    setSelectedRole(role);
    setOpen(false);
    // You can add filter logic here
  };

  return (
    <div className="w-full h-full">
      <div className="container mx-auto ">
        <div className="parent_div flex flex-col gap-3  md:flex md:flex-row items-center md:gap-8 my-5 md:mx-4   rounded-2xl">
          <div className="search_div w-full px-4 relative md:flex-2 h-10">
            <IoSearchOutline className="absolute left-6 md:left-6 top-1/2 transform -translate-y-1/2" />

            <input
              type="text"
              placeholder="Search by Name or by Email"
              className=" px-10 py-2 border border-gray-200 rounded w-full h-full"
            />
          </div>
          <div className="dropdown_div w-full px-4 md:flex-1">
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex justify-between items-center md:w-36 px-3 py-2 border border-gray-300 rounded bg-white text-gray-700 text-sm hover:bg-gray-50 h-10 w-full"
            >
              {selectedRole}
              <IoChevronDown className="ml-2" />
            </button>

            {/* Dropdown list */}
            {open && (
              <div className="absolute mt-1 w-36 bg-white border border-gray-200 rounded shadow-lg z-10">
                {roles.map((role) => (
                  <div
                    key={role}
                    onClick={() => handleSelect(role)}
                    className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    {role}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="w-full overflow-x-auto mt-3">
          <table className="w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-2 sm:px-4 py-2 text-left">
                  <div className="mx-2">Profile</div>
                </th>
                <th className="px-2 sm:px-4 py-2 text-left">
                  <div className="mx-2">Role</div>
                </th>
                <th className="px-2 sm:px-4 py-2 text-left">
                  <div className="mx-2">Department</div>
                </th>
                <th className="px-2 sm:px-4 py-2 text-left">
                  <div className="mx-2">Status</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "John Doe",
                  email: "john123@gmail.com",
                  role: "Developer",
                  department: "IT Department",
                  status: "Active",
                  statusColor: "green",
                },
                {
                  name: "Jane Smith",
                  email: "jane.smith@gmail.com",
                  role: "Designer",
                  department: "Creative",
                  status: "Inactive",
                  statusColor: "red",
                },
                {
                  name: "Michael Brown",
                  email: "michael@gmail.com",
                  role: "HR",
                  department: "Human Resources",
                  status: "Active",
                  statusColor: "green",
                },
                {
                  name: "Emily White",
                  email: "emily@gmail.com",
                  role: "Manager",
                  department: "Operations",
                  status: "Inactive",
                  statusColor: "red",
                },
                {
                  name: "David Lee",
                  email: "david@gmail.com",
                  role: "Developer",
                  department: "IT Department",
                  status: "Active",
                  statusColor: "green",
                },
              ].map((user, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-2 sm:px-4 py-2">
                    <div className="flex items-center gap-2 sm:gap-3 mx-2">
                      <img
                        src="/images/human.jpg"
                        alt="Profile"
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                      />
                      <div className="text-xs sm:text-base">
                        <h3 className="font-semibold">{user.name}</h3>
                        <p className="text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 py-2">
                    <div className="mx-2 text-sm sm:text-base">{user.role}</div>
                  </td>
                  <td className="px-2 sm:px-4 py-2">
                    <div className="mx-2 text-sm sm:text-base">
                      {user.department}
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 py-2">
                    <div className="mx-2">
                      <span
                        className={`px-2 py-1 text-xs rounded-full bg-${user.statusColor}-100 text-${user.statusColor}-800`}
                      >
                        {user.status}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
