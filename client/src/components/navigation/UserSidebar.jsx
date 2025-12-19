import React from "react";
import { Link } from "react-router-dom";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { IoDocument } from "react-icons/io5";

function UserSidebar() {

  const cardClasses = "flex justify-start items-center space-x-3   rounded-xl px-4 py-4 hover:backdrop-blur-4xl hover:bg-transparent hover:bg-white/4  hover:border hover:border-white/10"
  return (
    <section
      className="w-[18rem] 
      bg-[#0a0a0a]
       [background-image:radial-gradient(circle_at_25%_25%,#222_0.5px,transparent_1px),radial-gradient(circle_at_75%_75%,#111_0.5px,transparent_1px)]
       [background-size:10px_10px]
       [image-rendering:pixelated]"
    >
      <div className=" w-full px-2  h-[87vh] border border-r-zinc-800">
        {/*  */}
        
        {/*  */}
        <div className=" mt-[5vw] space-y-4 ">
          <Link
            to="/signup"
            className={cardClasses}
          >    
                    
            <div className="text-blue-700 text-2xl">
              <TbLayoutDashboardFilled />
            </div>
            <h1 className="text-white font-switzer text-[16px]">Dashboard</h1>
          </Link>
          <Link
            to="register-user"
            className={cardClasses}
          >
            <div className="text-green-500 text-xl">
              <FaUser />
            </div>
            <h1 className="text-white font-switzer text-[16px]">Register User</h1> 

          </Link>
          <Link
            to="/leave-dashboard"
            className={cardClasses}
          >
            <div className="text-yellow-500 text-xl">
             <BsCreditCard2FrontFill />
            </div>
            <h1 className="text-white font-switzer text-[16px]">Salaries</h1>
          </Link>
          
          <Link
            to="/signup"
            className={cardClasses}
          >
            <div className="text-purple-500 text-2xl">
              <IoDocument />
            </div>
            <h1 className="text-white font-switzer text-[16px]">Leaves</h1>
          </Link>
          <Link
            to="/signup"
            className={cardClasses}
          >
            <div className="text-gray-200 text-2xl">
              <IoSettingsSharp />
            </div>
            <h1 className="text-white font-switzer text-[16px]">Settings</h1>
          </Link>
        </div>
        <div className=""></div>
      </div>
    </section>
  );
}

export default UserSidebar;





