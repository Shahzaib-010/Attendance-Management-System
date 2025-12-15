
import { useAuth } from "@/context/AuthProvider";
import React, { useEffect } from "react";



function Home() {

 

 const { user } = useAuth();



  return (
    <div className="bg-black w-full h-[88vh] p-4">
      <div className=" flex flex-col space-y-6">
        <h1 className="text-[2.5vw] font-wix2 text-white">Welcome {user?.name}
</h1>
        
        {/* CARDS */}
        <div className=" flex items-center flex-wrap  gap-6">
          <div
            className="min-w-[25vw] min-h-[8vw] rounded-3xl bg-transparent backdrop-blur-2xl bg-white/4 
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
          <div
            className="min-w-[25vw] min-h-[8vw] rounded-3xl bg-transparent backdrop-blur-2xl bg-white/4 
                    border border-white/10 flex flex-col justify-center  p-7 font-switzer space-y-6 text-gray-200 transition duration-300 transform hover:scale-[1.03] "
          >
            <div
              className="w-6 h-6 backdrop-blur-4xl bg-white/4 
                    border border-white/10 rounded-full flex justify-center items-center     "
            >
              <p className="text-[15px]">2</p>
            </div>
            <h3>Request Your Leaves</h3>
          </div>
          <div
            className="min-w-[25vw] min-h-[8vw] rounded-3xl bg-transparent backdrop-blur-2xl bg-white/4 
                    border border-white/10 flex flex-col justify-center  p-7 font-switzer space-y-6 text-gray-200 transition duration-300 transform hover:scale-[1.03] "
          >
            <div
              className="w-6 h-6 backdrop-blur-4xl bg-white/4 
                    border border-white/10 rounded-full flex justify-center items-center     "
            >
              <p className="text-[15px]">3</p>
            </div>
            <h3>Get Detailed Insight </h3>
          </div>
        </div>
        {/* chart */}
        
      </div>
    </div>
  );
}

export default Home;
