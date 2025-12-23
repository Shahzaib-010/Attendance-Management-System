import mongoose from "mongoose";


const employeeCoreProfileSchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
      unique: true,
    },

    personalInfo: {
      fullName: { type: String, required: true },
      fatherName: String,
      cnic: { type: String }, // sensitive, but HR-visible
      dob: Date,
      maritalStatus: String,
      religion: String,
      education: String,
    },

    contactInfo: {
      mobile: String,
      email: String,
      currentAddress: String,
      permanentAddress: String,
    },

    emergencyContact: {
      name: String,
      relationship: String,
      mobile: String,
      alternateMobile: String,
      address: String,
    },

    references: [
      {
        name: String,
        relationship: String,
        contact: String,
        cnic: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model(
  "EmployeeCoreProfile",
  employeeCoreProfileSchema
);
