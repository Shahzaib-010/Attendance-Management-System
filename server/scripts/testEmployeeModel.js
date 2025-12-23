// server/scripts/testEmployeeModel.js

import mongoose from "mongoose";
import dotenv from "dotenv";

// MODELS (adjusted paths)
import User from "../src/models/User.js";
import Employee from "../src/models/employees/employee.js";
import EmployeeCoreProfile from "../src/models/employees/employeeProfile.js";

dotenv.config();

async function run() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ MongoDB connected");

    // 1️⃣ Create User
    const user = await User.create({
      name: "Test User",
      email: "testuser1@ems.com",
      password: "hashed-password",
      employeeId: "EMP-9002",
      designation: "user",
      jobRole: "Developer",
      department: "IT",
      dob: new Date("1998-01-01"),
      salary: 50000,
    });

    console.log("✅ User created:", user._id);

    // 2️⃣ Create Employee
    const employee = await Employee.create({
      user: user._id,
      employeeCode: "EMP-9002",
      department: "IT",
      designation: "Software Engineer",
      dateOfJoining: new Date(),
    });

    console.log("✅ Employee created:", employee._id);

    // 3️⃣ Create Core Profile
    await EmployeeCoreProfile.create({
      employee: employee._id,
      personalInfo: {
        fullName: "Test User",
        dob: new Date("1998-01-01"),
      },
      contactInfo: {
        mobile: "03001234567",
      },
    });

    console.log("✅ Employee Core Profile created");

  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 MongoDB disconnected");
    process.exit(0);
  }
}

run();
