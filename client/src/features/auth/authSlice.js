import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 🔐 LOGIN
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      console.log("🟢 LOGIN RESPONSE:", res.data);

      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.error || "Login failed"
      );
    }
  }
);

// 🔁 VERIFY ON REFRESH (REPLACES AuthProvider useEffect)
export const verifyUser = createAsyncThunk(
  "auth/verifyUser",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found");

      const res = await axios.get(
        "http://localhost:5000/api/auth/verify",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log("🟢 VERIFY RESPONSE:", res.data.user);

      return res.data.user;
    } catch (error) {
      console.log("🔴 VERIFY FAILED:", error.message);
      localStorage.removeItem("token");
      return rejectWithValue("Session expired");
    }
  }
);

const initialState = {
  user: null,              
  token: localStorage.getItem("token") || null,
  loading: true,           
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      console.log("🔴 LOGOUT");
      state.user = null;
      state.token = null;
      state.loading = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder

      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;

        localStorage.setItem("token", action.payload.token);

        console.log("✅ USER STORED IN REDUX:", state.user);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // VERIFY
      .addCase(verifyUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;

        console.log("✅ VERIFIED USER SET:", action.payload);
      })
      .addCase(verifyUser.rejected, (state) => {
        state.loading = false;
        state.user = null;
        state.token = null;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
