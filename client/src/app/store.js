import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from "../features/employees/employeesSlice";
import leaveReducer from "../features/employees/leaveSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
    auth: authReducer,
    leaves: leaveReducer,
  },
})