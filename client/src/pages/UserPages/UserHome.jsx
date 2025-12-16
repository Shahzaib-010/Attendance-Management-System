import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function Home() {


const { user } = useSelector((state) => state.auth);
 
 


  return (
    <div className="bg-black w-full p-4">
      <div className=" flex flex-col ">
        <h1 className="text-[2.5vw] font-wix2 text-white leading-none">Hello <span className="text-orange-500">{user?.name},</span></h1>
        <p className=" font-switzer text-neutral-400">Hope you're having a <span className="text-white">productive</span> day  :)</p>
        
        {/* CARDS */}
        <div className=" flex items-center flex-wrap  gap-6 pt-[6vw]">
          <div
            className="min-w-[35vw] min-h-[55vw] rounded-3xl bg-transparent backdrop-blur-2xl bg-white/4 
                    border border-white/20 flex flex-col justify-center p-7 font-switzer space-y-6 text-gray-200 transition duration-300 transform hover:scale-[1.03]"
          >
            <h3>Total Users</h3>
            <div
              className="w-6 h-6 backdrop-blur-4xl bg-white/4 
                    border border-white/10 rounded-full flex justify-center items-center     "
            >
              <p className="text-[15px]">1</p>
            </div>
          </div>
         
        </div>
        {/* chart */}
        <div className="p-2">
                 
        </div>
      </div>
    </div>
  );
}

export default Home;
