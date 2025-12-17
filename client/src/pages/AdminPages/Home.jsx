import { fetchEmployees } from "features/employees/employeesSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";





function Home() {
  


  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
   const { list: users, loading, error } = useSelector(
    (state) => state.employees
  );

  


  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  





  return (
    <div className="bg-black w-full  p-5">
      <div className=" flex flex-col ">
        <h1 className="text-[2.5vw] font-wix2 text-white leading-none ">Hello <span className="text-orange-500">{user?.name}</span></h1>
        <p className=" font-switzer text-neutral-400">Hope you're having a <span className="text-white">productive</span> day  :)</p>
        
        {/* CARDS */}
        <div className=" flex items-center flex-wrap  gap-6 pt-[4vw]">
          <div
            className="min-w-[20vw] min-h-[8vw] rounded-3xl bg-transparent backdrop-blur-2xl bg-white/4 
                    border border-white/20 flex flex-col flex-grow justify-center p-7 font-switzer space-y-6 text-gray-200 transition duration-300 transform hover:scale-[1.03]"
          >
            <h3>Total Users</h3>
            <div
              className=" "
            >
              <p className="text-[3vw] font-switzer text-orange-500 leading-none">{users.length}</p>
            </div>
          </div>
          <div
            className="min-w-[20vw] min-h-[8vw] rounded-3xl bg-transparent backdrop-blur-2xl bg-white/4 
                    border border-white/20 flex flex-col flex-grow justify-center p-7 font-switzer space-y-6 text-gray-200 transition duration-300 transform hover:scale-[1.03]"
          >
            <h3>Total Users</h3>
            <div
              className=" "
            >
              <p className="text-[3vw] font-switzer text-orange-500 leading-none">{users.length}</p>
            </div>
          </div>
          <div
            className="min-w-[20vw] min-h-[8vw] rounded-3xl bg-transparent backdrop-blur-2xl bg-white/4 
                    border border-white/20 flex flex-col flex-grow justify-center p-7 font-switzer space-y-6 text-gray-200 transition duration-300 transform hover:scale-[1.03]"
          >
            <h3>Total Users</h3>
            <div
              className=" "
            >
              <p className="text-[3vw] font-switzer text-orange-500 leading-none">{users.length}</p>
            </div>
          </div>
         
        </div>
        {/* chart */}
        
        
      </div>

       <div
            className="min-w-[40vw] min-h-[20vw] mt-[10vw] rounded-3xl bg-transparent backdrop-blur-2xl bg-white/4 
                    border border-white/20 flex flex-col justify-center p-7 font-switzer space-y-6 text-gray-200 transition duration-300 transform hover:scale-[1.03]"
          >
            <h3>Total Users</h3>
            <div
              className="w-6 h-6 backdrop-blur-4xl bg-white/4 
                    border border-white/10 rounded-full flex justify-center items-center     "
            >
              <p className="text-[15px]"></p>
            </div>
          </div>
    </div>
  );
}

export default Home;
