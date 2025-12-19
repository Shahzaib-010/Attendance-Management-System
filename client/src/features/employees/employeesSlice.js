import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 1️⃣ Fetch all users from backend
export const fetchEmployees = createAsyncThunk(
  "employees/fetchEmployees",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:5000/api/users/all-users");
      return res.data; // array of users
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// 2️⃣ Add a new employee
export const addEmployee = createAsyncThunk(
  "employees/addEmployee",
  async (employeeData, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/create-users",
        employeeData
      );
      return res.data; // newly created user
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // fetchEmployees
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message || "Failed to fetch employees";
      });

    // addEmployee
    builder
      .addCase(addEmployee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push(action.payload); // Add new employee to list
      })
      .addCase(addEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message || "Failed to add employee";
      });
  },
});




// Selector for Salary Analytics
export const selectSalaryStats = (state) => {
  const employees = state.employees.list;

  // Calculate Total Salary
  const totalSalary = employees.reduce((acc, emp) => acc + Number(emp.salary || 0), 0);

  // Calculate Salary per Department
  const salaryByDept = employees.reduce((acc, emp) => {
    const dept = emp.department || "Unassigned";
    const salary = Number(emp.salary || 0);
    
    if (!acc[dept]) {
      acc[dept] = 0;
    }
    acc[dept] += salary;
    
    return acc;
  }, {});

  return {
    totalSalary,
    salaryByDept, // This will look like: { IT: 50000, HR: 45000 }
  };
};

export default employeesSlice.reducer;
