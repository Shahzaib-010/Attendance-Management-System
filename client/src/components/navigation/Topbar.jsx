import React from 'react'

function Topbar() {
  return (
    <section className="
       w-full h-[6rem] absolute inset-0 z-0 flex flex-col justify-center
      bg-[#0a0a0a]
       [background-image:radial-gradient(circle_at_25%_25%,#222_0.5px,transparent_1px),radial-gradient(circle_at_75%_75%,#111_0.5px,transparent_1px)]
       [background-size:10px_10px]
       [image-rendering:pixelated]
    ">
        <div className="flex items-center justify-end">
            <div className="">
                
            </div>
            <div className="flex space-x-3 px-5">
                <img 
                src="/images/pfp.jpeg" 
                alt="pfp"
                className="rounded-xl w-14 h-14 " 
                />
                <div className="flex flex-col justify-start item-center">
                    <h1 className="font-wix2 text-white text-[20px]">Shahzaib</h1>
                    <p className="font-switzer text-gray-400">Admin</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Topbar