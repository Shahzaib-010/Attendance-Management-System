
import React from 'react'
import { BiLogoGmail } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { BsCreditCard2FrontFill } from "react-icons/bs";


function UserCard({ employee }) {

  return (
    <section className="p-6 font-switzer bg-transparent backdrop-blur-4xl bg-white/4 
                    border border-white/20  w-[24vw] rounded-3xl text-white leading-none transition duration-300 transform hover:scale-[1.03]">
        <div className="w-[15vw] flex flex-col">
            {/* top */}
            <div className="flex flex-col border-b-2 border-b-neutral-700 pb-2">
                <h1 className="text-[1.8vw] font-wix2 text-orange-400 leading-none">{employee.name}</h1>
                <h3 className="text-[15px] text-gray-300">{employee.department || 'Employee'}</h3>
            </div>
        
            {/* bottom */}
            <div className="flex flex-col pt-6 space-y-2">
                <div className="flex items-center gap-2 ">
                    <FaUser className="text-[#00CFFB] "/>
                    <h2 className="text-[15px] leading-none">{employee.employeeId}</h2>
                </div>
                <div className="flex items-center gap-2 ">
                    <BiLogoGmail className="text-[#39FF14] "/>
                    <h2 className="text-[15px] leading-none">{employee.email}</h2>
                </div>
                <div className="flex items-center gap-2 ">
                    <BsCreditCard2FrontFill className="text-[#FFFF00] "/>
                    <h2 className="text-[15px] leading-none">{employee.salary}</h2>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default UserCard