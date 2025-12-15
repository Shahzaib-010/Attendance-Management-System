
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";

// Import the router configuration from the file we just defined
import router from './router/router'; 

// Import your global state provider
// import { AttendanceProvider } from './context/AttendanceContext'; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);