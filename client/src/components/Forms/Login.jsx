import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { loginUser } from "@/features/auth/authSlice";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [serverError, setServerError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state) => state.auth);

  const handleInputChange = (e) => {
    setServerError(null);
    if (e.target.name === "email") {
      setEmail(e.target.value);
      setFieldErrors((prev) => ({ ...prev, email: "" }));
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
      setFieldErrors((prev) => ({ ...prev, password: "" }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Enter a valid email";
    if (!password.trim()) newErrors.password = "Password is required";
    else if (password.length < 4) newErrors.password = "Password must be at least 8 characters";
    setFieldErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const resultAction = await dispatch(loginUser({ email, password }));
      if (loginUser.fulfilled.match(resultAction)) {
        if (resultAction.payload.user.role === "admin") navigate("/admin");
        else navigate("/dashboard");
      } else {
        setServerError(resultAction.payload || "Login failed");
      }
    } catch (err) {
      setServerError("Server error");
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
        {serverError && <p className="text-red-500 text-center font-bold">{serverError}</p>}
        <div>
          <label className="text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="eg. johnfranc@mail.com"
            className="w-full mt-1 p-3 rounded-lg bg-[#1a1a1a] placeholder-gray-400 text-sm outline-none"
          />
          {fieldErrors.email && <p className="text-red-400 text-xs mt-1">{fieldErrors.email}</p>}
        </div>

        <div>
          <label className="text-sm">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              className="w-full mt-1 p-3 rounded-lg bg-[#1a1a1a] placeholder-gray-400 text-sm outline-none pr-10"
            />
          </div>
          <p className="text-gray-500 text-xs mt-1">Must be at least 8 characters.</p>
          {fieldErrors.password && <p className="text-red-400 text-xs mt-1">{fieldErrors.password}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
