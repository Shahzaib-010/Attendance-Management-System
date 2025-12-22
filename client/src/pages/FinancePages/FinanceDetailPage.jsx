import React from "react";

export default function FinanceDetailPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto my-5">
        <div className="p-5 bg-white rounded-xl shadow-md mb-5 flex  flex-col sm:flex-row items-center sm:items-start gap-5 border border-gray-100 md:items-center">
          {/* Profile Image */}
          <img
            src="/images/human.jpg"
            alt="Profile"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-gray-200"
          />

          {/* User Details */}
          <div className="flex-1 flex flex-col sm:flex-row sm:justify-between w-full gap-4">
            {/* Left section */}
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
              <p className="text-gray-500 flex items-center gap-2">
                john123@gmail.com
              </p>
            </div>
            <div className="info">
              <p className="text-gray-500">
                <span className="font-medium">Role:</span> Developer
              </p>
              <p className="text-gray-500">
                <span className="font-medium">Department:</span> IT
              </p>
              <p className="text-gray-500">
                <span className="font-medium">Joining Date:</span> 10-Dec-2025
              </p>
            </div>

            {/* Right section */}
            <div className="flex items-center gap-2 mt-2 sm:mt-0">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                Active
              </span>
            </div>
          </div>
        </div>

        {/* finance over-view */}
        <div className="p-5 bg-white rounded shadow mb-5">
          <h3 className="text-lg font-semibold mb-3">Financial Overview</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="bg-gray-50 p-3 rounded text-center">
              <p className="text-gray-500">Monthly Salary</p>
              <p className="font-bold">$5,000</p>
            </div>
            <div className="bg-gray-50 p-3 rounded text-center">
              <p className="text-gray-500">Pending Salary</p>
              <p className="font-bold">$1,200</p>
            </div>
            <div className="bg-gray-50 p-3 rounded text-center">
              <p className="text-gray-500">Bonus</p>
              <p className="font-bold">$500</p>
            </div>
            <div className="bg-gray-50 p-3 rounded text-center">
              <p className="text-gray-500">Deductions</p>
              <p className="font-bold">$100</p>
            </div>
          </div>
        </div>
        {/* new-section */}
        <div className="p-5 bg-white rounded shadow">
          <h3 className="text-lg font-semibold mb-3">Payment History</h3>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">Amount</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2">2025-12-01</td>
                  <td className="px-4 py-2">$1,000</td>
                  <td className="px-4 py-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                      Paid
                    </span>
                  </td>
                  <td className="px-4 py-2">December Salary</td>
                </tr>
                <tr className="border-t border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2">2025-11-01</td>
                  <td className="px-4 py-2">$1,000</td>
                  <td className="px-4 py-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                      Paid
                    </span>
                  </td>
                  <td className="px-4 py-2">November Salary</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
