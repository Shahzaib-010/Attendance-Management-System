import "dotenv/config";
import bcrypt from "bcryptjs";
import User from "./src/models/User.js";
import connectToDatabase from "./config/db.js";

const userRegister = async () => {
  await connectToDatabase();

  try {
    const hashPassword = await bcrypt.hash("admin1234", 10);

    const newUser = new User({
      name: "Admin",
      email: "admin@gmail.com",
      password: hashPassword,
      role: "admin",
      employeeId: "EMP-ADMIN-001",
      department: "HR",
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
