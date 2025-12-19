import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/leaves";

/**
 * ==========================================
 * ASYNC THUNKS
 * ==========================================
 */

// 1. Fetch Admin View (All Leaves)
export const fetchAllLeaves = createAsyncThunk(
  "leaves/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${API_URL}/all`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data.leaves; // Backend returns { success: true, leaves: [...] }
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// 2. Fetch User View (Own History)
export const fetchMyLeaves = createAsyncThunk(
  "leaves/fetchMy",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${API_URL}/my`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data.leaves;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// 3. Apply for Leave (User)
export const applyLeave = createAsyncThunk(
  "leaves/apply",
  async (leaveData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(`${API_URL}/apply`, leaveData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data.leave;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// 4. Update Leave Status (Admin)
export const updateLeaveStatus = createAsyncThunk(
  "leaves/updateStatus",
  async ({ id, status, adminComment }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `${API_URL}/${id}/status`,
        { status, adminComment },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.leave;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

/**
 * ==========================================
 * SLICE DEFINITION
 * ==========================================
 */

const leaveSlice = createSlice({
  name: "leaves",
  initialState: {
    list: [],
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    resetLeaveState: (state) => {
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      /* --- 1. ALL addCase() FIRST --- */
      .addCase(fetchAllLeaves.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchMyLeaves.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(applyLeave.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.list.unshift(action.payload); // Add new leave to top of list
      })
      .addCase(updateLeaveStatus.fulfilled, (state, action) => {
        state.loading = false;
        // Find the leave in the list and update its status locally
        const index = state.list.findIndex((l) => l._id === action.payload._id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })

      /* --- 2. ALL addMatcher() SECOND --- */
      // Global Loading State for any Leave-related "Pending" action
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
          state.success = false;
        }
      )
      // Global Error State for any Leave-related "Rejected" action
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.payload?.error || "An error occurred";
        }
      );
  },
});


export const selectLeaveStats = (state) => {
  const leaves = state.leaves.list;

  return {
    total: leaves.length,
    approved: leaves.filter((l) => l.status === "approved").length,
    rejected: leaves.filter((l) => l.status === "rejected").length,
    pending: leaves.filter((l) => l.status === "pending").length,
  };
};

export const { resetLeaveState } = leaveSlice.actions;
export default leaveSlice.reducer;