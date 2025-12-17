import React from 'react'
import { useSelector } from "react-redux";

function Topbar() {

  const { user } = useSelector((state) => state.auth);
  return (
    <section className="
       w-full h-[8rem] flex flex-col justify-center border border-b-zinc-800
      bg-[#0a0a0a]
       [background-image:radial-gradient(circle_at_25%_25%,#222_0.5px,transparent_1px),radial-gradient(circle_at_75%_75%,#111_0.5px,transparent_1px)]
       [background-size:10px_10px]
       [image-rendering:pixelated]
    ">
        <div className="flex items-center justify-between px-5">
          <div className="p-2">
          <h1 className="text-white font-wix2 text-2xl">
            Presence<span className="text-orange-500">Pro</span>
          </h1>
        </div>
            <div className="">
                
            </div>
            <div className="flex space-x-3 ">
                <img 
                src="/images/pfp.jpeg" 
                alt="pfp"
                className="size-13 rounded shrink-0 bg-violet-500 shadow hover:bg-yellow-300" 
                />
                <div className="flex flex-col justify-start item-center">
                     <h1 className="font-wix2 text-white text-[20px]">{user?.name}</h1>
                    <p className="font-switzer text-orange-400 text-[14px]">{user?.role}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Topbar