import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";

// Public pages
import LandingPage from "../pages/LandingPage";
import SignupPage from "../pages/SignupPage";
import NotFound from "../pages/NotFound";

// Layouts
import AdminDashboardLayout from "../layouts/AdminDashboardLayout";
import UserDashboardLayout from "../layouts/UserDashboardLayout";

// Admin pages
import AdminHome from "../pages/AdminPages/Home";
import RegisterUser from "../pages/AdminPages/RegisterUser";
import UserCards from "../pages/AdminPages/UserCards";
import Leaves from "pages/AdminPages/Leaves";


// User pages
import UserHome from "../pages/UserPages/UserHome";
import ProtectedRoute from "./ProtectedRoute";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <NotFound />,
    children: [
      // ---------------- PUBLIC ----------------
      { index: true, element: <LandingPage /> },
      { path: "signup", element: <SignupPage /> },

      // ---------------- USER DASHBOARD ----------------
      // USER
{
  path: "dashboard",
  element: (
    <ProtectedRoute role="user">
      <UserDashboardLayout />
    </ProtectedRoute>
  ),
  children: [
    { index: true, element: <UserHome /> },
  ],
},



      // ---------------- ADMIN DASHBOARD ----------------
     
{
  path: "admin",
  element: (
    <ProtectedRoute role="admin">
      <AdminDashboardLayout />
    </ProtectedRoute>
  ),
  children: [
    { index: true, element: <AdminHome /> },
    { path: "register-user", element: <RegisterUser /> },
    { path: "leaves", element: <Leaves /> },
    { path: "user-cards", element: <UserCards /> },
  ],
},

      // ---------------- 404 ----------------
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
