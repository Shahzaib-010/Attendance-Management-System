import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyLeaves, fetchAllLeaves, applyLeave, updateLeaveStatus, resetLeaveState } from 'features/employees/leaveSlice';
import { selectLeaveStats } from 'features/employees/leaveSlice';
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

function Leaves() {


     const dispatch = useDispatch();
      const { user } = useSelector((state) => state.auth); // Assuming you have auth state
      const { list: leaves, loading, success, error } = useSelector((state) => state.leaves);
    
      const isAdmin = user?.role === 'admin';
      const [formData, setFormData] = useState({ reason: '', fromDate: '', toDate: '' });

      const { total, approved, rejected, pending } = useSelector(selectLeaveStats);


       useEffect(() => {
          isAdmin ? dispatch(fetchAllLeaves()) : dispatch(fetchMyLeaves());
        }, [dispatch, isAdmin]);
      
        useEffect(() => {
          if (success) {
            alert("Leave Applied Successfully!");
            setFormData({ reason: '', fromDate: '', toDate: '' });
            dispatch(resetLeaveState());
          }
        }, [success, dispatch]);
      
        const handleSubmit = (e) => {
          e.preventDefault();
          dispatch(applyLeave(formData));
        };
      
        const handleAction = (id, status) => {
          const adminComment = prompt("Enter admin comment (optional):");
          dispatch(updateLeaveStatus({ id, status, adminComment }));
        };


  return (
    <div className="p-8 bg-black min-h-screen text-white font-switzer">
      <h1 className="text-[2.5vw] font-wix2 pb-[2vw] text-white">
       User Leaves
      </h1>
        {/* cards */}
        <div className=" flex items-center flex-wrap  gap-6 pt-[4vw]">
          <div
            className="min-w-[20vw] min-h-[8vw] rounded-3xl bg-transparent backdrop-blur-2xl bg-white/4 
                    border border-white/20 flex flex-col flex-grow justify-center p-7 font-switzer space-y-6 text-gray-200 transition duration-300 transform hover:scale-[1.03]"
          >
            <h3>Total Leaves Applied</h3>
            <div
              className=" "
            >
              <p className="text-[3vw] font-switzer text-orange-500 leading-none">{total}</p>
            </div>
          </div>
          <div
            className="min-w-[20vw] min-h-[8vw] rounded-3xl bg-transparent backdrop-blur-2xl bg-white/4 
                    border border-white/20 flex flex-col flex-grow justify-center p-7 font-switzer space-y-6 text-gray-200 transition duration-300 transform hover:scale-[1.03]"
          >
            <h3>Accepted Leaves</h3>
            <div
              className=" "
            >
              <p className="text-[3vw] font-switzer text-orange-500 leading-none">{approved}</p>
            </div>
          </div>
          <div
            className="min-w-[20vw] min-h-[8vw] rounded-3xl bg-transparent backdrop-blur-2xl bg-white/4 
                    border border-white/20 flex flex-col flex-grow justify-center p-7 font-switzer space-y-6 text-gray-200 transition duration-300 transform hover:scale-[1.03]"
          >
            <h3>Rejected Leaves</h3>
            <div
              className=" "
            >
              <p className="text-[3vw] font-switzer text-orange-500 leading-none">{rejected}</p>
            </div>
          </div>
          <div
            className="min-w-[20vw] min-h-[8vw] rounded-3xl bg-transparent backdrop-blur-2xl bg-white/4 
                    border border-white/20 flex flex-col flex-grow-1 justify-center p-7 font-switzer space-y-6 text-gray-200 transition duration-300 transform hover:scale-[1.03]"
          >
            <h3>Pending Leaves</h3>
            <div
              className=" "
            >
              <p className="text-[3vw] font-switzer text-orange-500 leading-none">{pending}</p>
            </div>
          </div>
         
        </div>

  

        {/* RIGHT COLUMN: Leave List */}
        <div className="pt-[4vw]">
          <div className="bg-transparent backdrop-blur-2xl bg-white/4 
                    border border-white/20  rounded-2xl  overflow-hidden ">
            <table className="w-full text-left">
              <thead className=" text-gray-300">
                <tr>
                  {isAdmin && <th className="p-4">Employee</th>}
                  <th className="p-4">Duration</th>
                  <th className="p-4">Reason</th>
                  <th className="p-4">Status</th>
                  {isAdmin && <th className="p-4">Actions</th>}
                </tr>
              </thead>
              <tbody>
                {leaves.map((leave) => (
                  <tr key={leave._id} className="border-t border-gray-700 hover:bg-gray-750">
                    {isAdmin && (
                      <td className="p-4">
                        <p className="font-bold">{leave.user?.name}</p>
                        <p className="text-xs text-gray-400">{leave.employeeId}</p>
                      </td>
                    )}
                    <td className="p-4 text-sm">
                      {new Date(leave.fromDate).toLocaleDateString()} - <br/>
                      {new Date(leave.toDate).toLocaleDateString()}
                    </td>
                    <td className="p-4 text-sm italic">"{leave.reason}"</td>
                    <td className="p-4">
                      <span className={`px-4 py-2 rounded text-xs font-bold uppercase ${
                        leave.status === 'approved' ? 'bg-[#39FF14] text-black' : 
                        leave.status === 'rejected' ? 'bg-[#ff0a0a]  text-black' : 'bg-[#FFFF00] text-black'
                      }`}>
                        {leave.status}
                      </span>
                    </td>
                    {isAdmin && (
                      <td className="p-4 space-x-2 flex justify-start items-center">
                        {leave.status === 'pending' && (
                          <>
                            <button onClick={() => handleAction(leave._id, 'approved')} className="text-green-500 text-2xl"><FaCheck /></button>
                            <button onClick={() => handleAction(leave._id, 'rejected')} className="text-red-500 text-2xl"><RxCross2 /></button>
                          </>
                        )}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
            {loading && <p className="p-10 text-center animate-pulse">Loading data...</p>}
            {!loading && leaves.length === 0 && <p className="p-10 text-center text-gray-500">No leaves found.</p>}
          </div>
          </div>
        </div>
      
    
  );
}

export default Leaves