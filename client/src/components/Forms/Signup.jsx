import React, { useState } from "react";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Signup Successful!");
    }
  };

  return (

    
    <div className="w-full flex flex-col items-center">
      
      {/* <div className="flex  items-center ">
        <h1 className="font-wix2 md:text-[2.9vw] text-[5vw] text-white">
          Create an Account
        </h1>
      </div>
       */}



      

       <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mt-10 space-y-5 font-switzer text-white"
      >
        {/* FIRST + LAST NAME */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="eg: John"
              className="w-full mt-1 p-3 rounded-lg bg-[#1a1a1a] placeholder-gray-400 text-sm outline-none text-white"
            />
            {errors.firstName && (
              <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="text-sm">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="eg: Alex"
              className="w-full mt-1 p-3 rounded-lg bg-[#1a1a1a] placeholder-gray-400 text-sm outline-none"
            />
            {errors.lastName && (
              <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>
        

        {/* EMAIL */}
        <div>
          <label className="text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="abc@gmail.com"
            className="w-full mt-1 p-3 rounded-lg bg-[#1a1a1a] placeholder-gray-400 text-sm outline-none"
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* PASSWORD */}
        <div>
          <label className="text-sm">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
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
          {errors.password && (
            <p className="text-red-400 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="w-full py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Sign Up
        </button>
      </form>

      



    </div>



      


    
  );
}

export default Signup;
