import { fetchEmployees } from "features/employees/employeesSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSalaryStats } from "features/employees/employeesSlice";


import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Day 1",
    Users: 4000,
    Active: 2400,
    Inactive: 2400,
  },
  {
    name: "Day 2",
    Users: 3000,
    Active: 1398,
    Inactive: 2210,
  },
  {
    name: "Day 3",
    Users: 2000,
    Active: 9800,
    Inactive: 2290,
  },
  {
    name: "Day 4",
    Users: 2780,
    Active: 3908,
    Inactive: 2000,
  },
  {
    name: "Day 5",
    Users: 1890,
    Active: 4800,
    Inactive: 2181,
  },
  {
    name: "Day 6",
    Users: 2390,
    Active: 3800,
    Inactive: 2500,
  },
  {
    name: "Day 7",
    Users: 3490,
    Active: 2300,
    Inactive: 2100,
  },
];




function Home() {
  
  // const user = useSelector((state) => state.auth.user);

  // const dispatch = useDispatch();
  //  const { list: users, loading, error } = useSelector(
  //   (state) => state.employees
  // );

  // const { totalSalary, salaryByDept } = useSelector(selectSalaryStats);


  // useEffect(() => {
  //   dispatch(fetchEmployees());
  // }, [dispatch]);

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const { list: users, loading, error } = useSelector((state) => state.employees);

  const { totalSalary, salaryByDept } = useSelector(selectSalaryStats);

  useEffect(() => {
    // Only admin can fetch all employees
    if (user?.role === "admin") {
      dispatch(fetchEmployees());
    }
  }, [dispatch, user?.role]);

  





  return (
    <div className="bg-black w-full  p-5 space-y-[4vw] ">
      <div className=" flex flex-col ">
        <h1 className="text-[2.5vw] font-clash-bold text-white leading-none ">Hello <span className="text-orange-500">{user?.name}</span></h1>
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
              <p className="text-[3vw] font-switzer text-orange-500 leading-none">{users?.length}</p>
            </div>
          </div>
          <div
            className="min-w-[20vw] min-h-[8vw] rounded-3xl bg-transparent backdrop-blur-2xl bg-white/4 
                    border border-white/20 flex flex-col flex-grow justify-center p-7 font-switzer space-y-6 text-gray-200 transition duration-300 transform hover:scale-[1.03]"
          >
            <h3>Total Departments</h3>
            <div
              className=" "
            >
              <p className="text-[3vw] font-switzer text-orange-500 leading-none">4</p>
            </div>
          </div>
          <div
            className="min-w-[20vw] min-h-[8vw] rounded-3xl bg-transparent backdrop-blur-2xl bg-white/4 
                    border border-white/20 flex flex-col flex-grow justify-center p-7 font-switzer space-y-6 text-gray-200 transition duration-300 transform hover:scale-[1.03]"
          >
            <h3>Total Salary</h3>
            <div
              className=" "
            >
              <p className="text-[3vw] font-switzer text-orange-500 leading-none">${totalSalary.toLocaleString()}</p>
            </div>
          </div>
         
        </div>
      </div>

      {/* chart */}
      {/* <div className="w-1/2 h-[50vh] bg-transparent backdrop-blur-4xl bg-white/4 rounded-4xl p-6 pt-">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="Users"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="Active"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
              <Area
                type="monotone"
                dataKey="Inactive"
                stackId="1"
                stroke="#ffc658"
                fill="#ffc658"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div> */}

      {/* user leave list */}

      <div className="">
          
      </div>


    </div>
  );
}

export default Home;
