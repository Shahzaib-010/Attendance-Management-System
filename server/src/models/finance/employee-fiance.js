const employeeFinanceProfileSchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
      unique: true,
    },

    salary: {
      basic: Number,
      allowances: Number,
      deductions: Number,
      netSalary: Number,
    },

    bankDetails: {
      accountTitle: String,
      accountNumber: String,
      bankName: String,
      branch: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model(
  "EmployeeFinanceProfile",
  employeeFinanceProfileSchema
);
