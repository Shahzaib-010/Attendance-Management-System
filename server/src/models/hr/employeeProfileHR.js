const employeeHRProfileSchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
      unique: true,
    },

    jobInfo: {
      jobTitle: String,
      department: String,
      officeLocation: String,
      dateOfJoining: Date,
    },

    remarks: String,
    observation: String,

    approvals: {
      hod: Boolean,
      managerHR: Boolean,
      ceo: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("EmployeeHRProfile", employeeHRProfileSchema);
