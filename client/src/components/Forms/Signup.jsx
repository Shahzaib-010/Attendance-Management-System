import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "features/employees/employeesSlice";

function AddEmployee() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.employees);

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    employeeId: "",
    dob: "",
    gender: "",
    department: "",
    salary: "",
    role: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  // Validation
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 4) {
      newErrors.password = "Password must be at least 4 characters";
    }

    if (!formData.employeeId.trim())
      newErrors.employeeId = "Employee ID is required";

    if (!formData.dob) newErrors.dob = "Date of Birth is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.department) newErrors.department = "Department is required";
    if (!formData.salary) newErrors.salary = "Salary is required";
    if (!formData.role.trim()) newErrors.role = "Role is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Dispatch Redux thunk to add employee
    const resultAction = await dispatch(addEmployee(formData));

    // Check if success
    if (addEmployee.fulfilled.match(resultAction)) {
      // Reset form
      setFormData({
        name: "",
        email: "",
        password: "",
        employeeId: "",
        dob: "",
        gender: "",
        department: "",
        salary: "",
        role: "",
      });
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl mt-10 space-y-5 font-switzer text-white"
      >
        {/* NAME + EMPLOYEE ID */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="eg: John Alex"
              className="w-full mt-1 p-3 rounded-lg bg-[#1a1a1a] placeholder-gray-400 text-sm outline-none"
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="text-sm">Employee ID</label>
            <input
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleChange}
              placeholder="EMP-001"
              className="w-full mt-1 p-3 rounded-lg bg-[#1a1a1a] placeholder-gray-400 text-sm outline-none"
            />
            {errors.employeeId && (
              <p className="text-red-400 text-xs mt-1">{errors.employeeId}</p>
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
              placeholder="Enter password"
              className="w-full mt-1 p-3 rounded-lg bg-[#1a1a1a] placeholder-gray-400 text-sm outline-none pr-10"
            />
            <span
              className="absolute right-3 top-4 cursor-pointer text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
          {errors.password && (
            <p className="text-red-400 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        {/* DOB + GENDER */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg bg-[#1a1a1a] text-sm outline-none"
            />
            {errors.dob && (
              <p className="text-red-400 text-xs mt-1">{errors.dob}</p>
            )}
          </div>

          <div>
            <label className="text-sm">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg bg-[#1a1a1a] text-sm outline-none"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-400 text-xs mt-1">{errors.gender}</p>
            )}
          </div>
        </div>

        {/* DEPARTMENT + SALARY */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm">Department</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg bg-[#1a1a1a] text-sm outline-none"
            >
              <option value="">Select Department</option>
              <option value="Engineering">Engineering</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
              <option value="Tech">Tech</option>
            </select>
            {errors.department && (
              <p className="text-red-400 text-xs mt-1">
                {errors.department}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm">Salary</label>
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="50000"
              className="w-full mt-1 p-3 rounded-lg bg-[#1a1a1a] placeholder-gray-400 text-sm outline-none"
            />
            {errors.salary && (
              <p className="text-red-400 text-xs mt-1">{errors.salary}</p>
            )}
          </div>
        </div>

        {/* ROLE */}
        <div>
          <label className="text-sm">Role</label>
          {/* <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="eg: "
            className="w-full mt-1 p-3 rounded-lg bg-[#1a1a1a] placeholder-gray-400 text-sm outline-none"
          /> */}
          <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg bg-[#1a1a1a] text-sm outline-none"
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
          {errors.role && (
            <p className="text-red-400 text-xs mt-1">{errors.role}</p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
        >
          {loading ? "Adding..." : "Add Employee"}
        </button>

        {/* Global error */}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
}

export default AddEmployee;
