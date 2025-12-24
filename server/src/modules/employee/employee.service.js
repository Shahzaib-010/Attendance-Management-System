import mongoose from "mongoose";
import User from "../../models/users/User.js";
import Employee from "../../models/employees/employee.js";
import EmployeeCoreProfile from "../../models/employees/employee-core-profile.js";
import EmployeeHRProfile from "../../models/hr/employee-hr-profile.js";
import EmployeeFinanceProfile from "../../models/finance/employee-fiance.js";

export const createEmployee = async (payload) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const user = await User.create([{
      name: payload.name,
      email: payload.email,
      password: payload.password,
      employeeId: payload.employeeId,
      designation: payload.designation,
      jobRole: payload.jobRole,
      department: payload.department,
      dob: payload.dob
    }], { session });

    const employee = await Employee.create([{
      user: user[0]._id,
      employeeId: payload.employeeId,
      status: "active"
    }], { session });

    await EmployeeCoreProfile.create([{
      employee: employee[0]._id,
      phone: payload.phone,
      address: payload.address,
      emergencyContact: payload.emergencyContact
    }], { session });

    await EmployeeHRProfile.create([{
      employee: employee[0]._id,
      joiningDate: payload.joiningDate,
      employmentType: payload.employmentType
    }], { session });

    await EmployeeFinanceProfile.create([{
      employee: employee[0]._id,
      salary: payload.salary,
      bankAccount: payload.bankAccount
    }], { session });

    await session.commitTransaction();
    session.endSession();

    return employee[0];

  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};
