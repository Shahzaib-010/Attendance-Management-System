import { useAuth } from "@/context/AuthProvider";
import axios from "axios";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router"; 

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fieldErrors, setFieldErrors] = useState({}); 
  const [serverError, setServerError] = useState(null); 
  const {login} = useAuth();

  const navigate = useNavigate();

  // Helper function to handle input changes and clear errors
  const handleInputChange = (e) => {
    // Clear any general server error on input
    setServerError(null);
    
    // Update the specific state hook
    if (e.target.name === "email") {
      setEmail(e.target.value);
      // Clear field error
      setFieldErrors(prev => ({ ...prev, email: "" }));
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
      // Clear field error
      setFieldErrors(prev => ({ ...prev, password: "" }));
    }
  };

  // 3. Re-implemented and corrected validation logic
  const validateForm = () => {
    let newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 4) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setFieldErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // 4. Reset server error before new attempt
    setServerError(null); 

    try {
      // Send data to backend
      const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });

      if (response.data.success) {
        login(response.data.user)
        localStorage.setItem("token", response.data.token)
        if(response.data.user.role === "admin"){
            navigate("/admin"); 
        }else{
          navigate("/dashboard")
        }
        
        
      }
    } catch (error) {
      if (error.response && error.response.data && !error.response.data.success) {
        // Handle field-level errors or a specific login failed message from the backend
        const backendError = error.response.data.error;
        if (typeof backendError === 'object' && backendError !== null) {
            setFieldErrors(backendError);
        } else {
            // This handles a single error message string from the backend
            setServerError(backendError || "Login failed due to incorrect credentials.");
        }
      } else {
        // Network error, server down, etc.
        setServerError("Server Error. Could not connect to the API.");
      }
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex items-center">
        <h1 className="font-wix2 md:text-[2.9vw] text-[5vw] text-white">
          User Login
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mt-10 space-y-5 font-switzer text-white"
      >
        {/* 1. FIX: Render serverError (string) only if it exists */}
        {serverError && <p className="text-red-500 text-center font-bold">{serverError}</p>}

        {/* EMAIL */}
        <div>
          <label className="text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={email} // Controlled input
            onChange={handleInputChange}
            placeholder="eg. johnfranc@mail.com"
            className="w-full mt-1 p-3 rounded-lg bg-[#1a1a1a] placeholder-gray-400 text-sm outline-none"
          />
          {fieldErrors.email && (
            <p className="text-red-400 text-xs mt-1">{fieldErrors.email}</p>
          )}
        </div>

        {/* PASSWORD */}
        <div>
          <label className="text-sm">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={password} // Controlled input
              onChange={handleInputChange}
              placeholder="Enter your password"
              className="w-full mt-1 p-3 rounded-lg bg-[#1a1a1a] placeholder-gray-400 text-sm outline-none pr-10"
            />
            <span
              className="absolute right-3 top-4 cursor-pointer text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
          <p className="text-gray-500 text-xs mt-1">
            Must be at least 8 characters.
          </p>
          {fieldErrors.password && (
            <p className="text-red-400 text-xs mt-1">{fieldErrors.password}</p>
          )}
        </div>

        {/* SUBMIT BUTTON (Link wrapper removed, use navigation in handleSubmit) */}
        {/* The Link around the button is still incorrect. It will override the form submission. */}
        <button
          type="submit"
          className="w-full py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Login
        </button>
        {/* Use Link for non-submit actions like forgot password or signup */}
        <div className="text-center text-sm">
            Don't have an account? <Link to="/signup" className="text-blue-400 hover:text-blue-300">Register</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;