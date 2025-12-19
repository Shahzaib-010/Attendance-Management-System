import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyLeaves, fetchAllLeaves, applyLeave, updateLeaveStatus, resetLeaveState } from 'features/employees/leaveSlice';

const LeaveDashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth); // Assuming you have auth state
  const { list: leaves, loading, success, error } = useSelector((state) => state.leaves);

  const isAdmin = user?.role === 'admin';
  const [formData, setFormData] = useState({ reason: '', fromDate: '', toDate: '' });

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


  const handleAction = (id, status) => {
    const adminComment = prompt("Enter admin comment (optional):");
    dispatch(updateLeaveStatus({ id, status, adminComment }));
  };

  return (
    <div className="p-8 bg-black min-h-screen text-white">
      <h1 className="text-[2.5vw] font-wix2 mb-8 text-white">
       User Leaves
      </h1>

  

        {/* RIGHT COLUMN: Leave List */}
       
          <div className="bg-transparent backdrop-blur-2xl bg-white/4 
                    border border-white/20  rounded-2xl  overflow-hidden">
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
                        leave.status === 'approved' ? 'bg-green-900 text-green-300' : 
                        leave.status === 'rejected' ? 'bg-red-700 text-red-200' : 'bg-yellow-900 text-yellow-300'
                      }`}>
                        {leave.status}
                      </span>
                    </td>
                    {isAdmin && (
                      <td className="p-4 space-x-2">
                        {leave.status === 'pending' && (
                          <>
                            <button onClick={() => handleAction(leave._id, 'approved')} className="text-green-500 hover:underline">Approve</button>
                            <button onClick={() => handleAction(leave._id, 'rejected')} className="text-red-500 hover:underline">Reject</button>
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
      
    
  );
};

export default LeaveDashboard;