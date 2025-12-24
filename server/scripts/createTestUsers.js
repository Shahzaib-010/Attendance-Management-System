import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "../src/models/users/User.js";

dotenv.config();

const run = async () => {
  await mongoose.connect(process.env.MONGODB_URL);

  await User.deleteMany({ email: { $regex: "@test.com" } });

  const hashedPassword = await bcrypt.hash("Test@123", 10);

  const users = [
    {
      name: "Super Admin",
      email: "super@test.com",
      password: hashedPassword,
      employeeId: "EMP001",
      designation: "super_admin",
    },
    {
      name: "HR Admin",
      email: "hr@test.com",
      password: hashedPassword,
      employeeId: "EMP002",
      designation: "admin",
      adminType: "hr",
    },
    {
      name: "Finance Admin",
      email: "finance@test.com",
      password: hashedPassword,
      employeeId: "EMP003",
      designation: "admin",
      adminType: "finance",
    },
    {
      name: "Dept Admin",
      email: "dept@test.com",
      password: hashedPassword,
      employeeId: "EMP004",
      designation: "admin",
      adminType: "dept",
      department: "Engineering",
    },
    {
      name: "Normal User",
      email: "user@test.com",
      password: hashedPassword,
      employeeId: "EMP005",
      designation: "user",
      department: "Engineering",
    },
  ];

  await User.insertMany(users);
  console.log("✅ Test users created with password: Test@123");

  process.exit();
};

run();
