

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: { type: String, required: true },

    employeeId: {
      type: String,
      required: true,
      unique: true,
    },

    // 🔐 Access control
    designation: {
      type: String,
      enum: ["admin", "user"],
      required: true,
    },

    // 💼 Job-specific role
    jobRole: {
      type: String,
      required: true,
      trim: true,
    },

    department: {
      type: String,
      required: true,
      trim: true,
    },

    dob: { type: Date, required: true },

    salary: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
