import "dotenv/config";
import bcrypt from "bcryptjs";
import User from "./src/models/User.js";
import connectToDatabase from "./config/db.js";

const userRegister = async () => {
  await connectToDatabase();

  try {
    const hashPassword = await bcrypt.hash("shahzaib", 10);

    const newUser = new User({
      name: "Shahzaib",
      employeeId: "Emp-001",
      email: "shahzaib@gmail.com",
      password: hashPassword,
      designation: "admin",
      jobRole:"HR-Manager",
      department: "HR",
      salary:"190000",
      dob:"04-04-2002",
    });

    await newUser.save();
    console.log("✅ Admin user created");
    process.exit();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

userRegister();
