import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import axios from "axios";

// 🔹 Helper to attach token
const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

/* ================================
   THUNKS
================================ */

// 🔹 FETCH USERS (ADMIN)
export const fetchEmployees = createAsyncThunk(
  "employees/fetchEmployees",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/users/all-users",
        authHeader()
      );

      // ✅ BACKEND RETURNS: { success, users }
      return res.data.users; // ⬅️ ARRAY ONLY
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Failed to fetch users" }
      );
    }
  }
);

// 🔹 ADD USER (ADMIN)
export const addEmployee = createAsyncThunk(
  "employees/addEmployee",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/create-users",
        data,
        authHeader()
      );

      // ✅ BACKEND RETURNS: { success, user }
      return res.data.user;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Failed to add employee" }
      );
    }
  }
);

// 🔹 UPDATE USER (ADMIN)
export const updateEmployee = createAsyncThunk(
  "employees/updateEmployee",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/users/${id}`,
        data,
        authHeader()
      );

      // ✅ BACKEND RETURNS: { success, user }
      return res.data.user;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Failed to update employee" }
      );
    }
  }
);

// 🔹 DELETE USER (ADMIN)
export const deleteEmployee = createAsyncThunk(
  "employees/deleteEmployee",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/users/${id}`,
        authHeader()
      );

      return id; // ⬅️ only id needed
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Failed to delete employee" }
      );
    }
  }
);

/* ================================
   SLICE
================================ */

const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    list: [],          // ✅ ALWAYS ARRAY
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 🔹 FETCH
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.list = action.payload; // ✅ guaranteed array
        state.loading = false;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch employees";
      })

      // 🔹 ADD
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.list.push(action.payload); // ✅ user object
      })

      // 🔹 UPDATE
      .addCase(updateEmployee.fulfilled, (state, action) => {
        const index = state.list.findIndex(
          (u) => u._id === action.payload._id
        );
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })

      // 🔹 DELETE
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (u) => u._id !== action.payload
        );
      });
  },
});

/* ================================
   SELECTORS
================================ */

export const selectEmployees = (state) => state.employees.list;

export const selectSalaryStats = createSelector(
  [selectEmployees],
  (employees) => {
    // employees is GUARANTEED to be array now
    const totalSalary = employees.reduce(
      (acc, emp) => acc + Number(emp.salary || 0),
      0
    );

    const salaryByDept = employees.reduce((acc, emp) => {
      const dept = emp.department || "Unassigned";
      acc[dept] = (acc[dept] || 0) + Number(emp.salary || 0);
      return acc;
    }, {});

    return { totalSalary, salaryByDept };
  }
);

export default employeesSlice.reducer;
