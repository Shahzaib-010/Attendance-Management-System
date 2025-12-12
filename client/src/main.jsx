import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import LandingPage from "pages/LandingPage";
import LoginPage from "pages/LoginPage";
import SignupPage from "pages/SignupPage";
import Home from "pages/Home";
import Sidebar from "components/navigation/Sidebar";
import DashboardLayout from "./layouts/DashboardLayout";

const router = createBrowserRouter([
  {
        element: <DashboardLayout/> ,   // Navbar + Footer + PageTransition + pages
        children: [
          { path: "/", element: <Home /> },
        
        ],
      },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
