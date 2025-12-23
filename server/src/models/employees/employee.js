import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    employeeCode: {
      type: String,
      required: true,
      unique: true,
      index: true, // attendance will rely on this later
    },

    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE", "TERMINATED"],
      default: "ACTIVE",
    },

    department: {
      type: String,
      required: true,
      index: true, // dept-wise admins
    },

    designation: {
      type: String,
      required: true,
    },

    dateOfJoining: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Employee", employeeSchema);
