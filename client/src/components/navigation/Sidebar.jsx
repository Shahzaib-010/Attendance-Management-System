import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <section
      className="w-[17rem] 
      bg-[#0a0a0a]
       [background-image:radial-gradient(circle_at_25%_25%,#222_0.5px,transparent_1px),radial-gradient(circle_at_75%_75%,#111_0.5px,transparent_1px)]
       [background-size:10px_10px]
       [image-rendering:pixelated]"
    >
      <div className=" w-full border-2 border-amber-50 p-4">
        {/*  */}
        
        {/*  */}
        <div className=" mt-[5vw] space-y-4 ">
          <Link
            to="/signup"
            className="flex justify-start items-center space-x-3   rounded-xl px-4 py-4 hover:bg-gray-800"
          >
            <div className="">
              <img src="./images/dashboardicon.png" alt="" className="w-5" />
            </div>
            <h1 className="text-white font-switzer text-[16px]">Admin Dashboard</h1>
          </Link>
          <Link
            to="/signup"
            className="flex justify-start items-center space-x-3   rounded-xl px-4 py-4 hover:bg-gray-800"
          >
            <div className="">
              <img src="./images/dashboardicon.png" alt="" className="w-5" />
            </div>
            <h1 className="text-white font-switzer text-[16px]">User Dashboard</h1>
          </Link>
          <Link
            to="/signup"
            className="flex justify-start items-center space-x-3   rounded-xl px-4 py-4 hover:bg-gray-800"
          >
            <div className="">
              <img src="./images/homeicon.png" alt="" className="w-5" />
            </div>
            <h1 className="text-white font-switzer text-[16px]">Home</h1>
          </Link>
          
          <Link
            to="/signup"
            className="flex justify-start items-center space-x-3  rounded-xl px-4 py-4 hover:bg-gray-800"
          >
            <div className="">
              <img src="./images/dashboardicon.png" alt="" className="w-5" />
            </div>
            <h1 className="text-white font-switzer text-[16px]">Dashboard</h1>
          </Link>
          <Link
            to="/signup"
            className="flex justify-start items-center space-x-3   rounded-xl px-4 py-4 hover:bg-gray-800"
          >
            <div className="">
              <img src="./images/dashboardicon.png" alt="" className="w-5" />
            </div>
            <h1 className="text-white font-switzer text-[16px]">Dashboard</h1>
          </Link>
        </div>
        <div className=""></div>
      </div>
    </section>
  );
}

export default Sidebar;
