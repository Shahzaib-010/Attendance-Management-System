




import User from "../models/User.js";
import bcrypt from "bcryptjs";

/**
 * ADMIN → Create User
 */
export const createUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      employeeId,
      designation,
      jobRole,
      dob,
      salary,
      department,
    } = req.body;

    // Check required fields
    if (
      !name ||
      !email ||
      !password ||
      !employeeId ||
      !designation ||
      !jobRole ||
      !dob ||
      !salary ||
      !department
    ) {
      return res.status(400).json({
        success: false,
        error: "All fields are required",
      });
    }

    // Check existing user
    const existingUser = await User.findOne({
      $or: [{ email }, { employeeId }],
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: "User with email or employee ID already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      employeeId,
      designation,
      jobRole,
      dob,
      salary,
      department,
    });

    const responseUser = user.toObject();
    delete responseUser.password;

    res.status(201).json({
      success: true,
      user: responseUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

/**
 * ADMIN → Get All Users
 */
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

/**
 * ADMIN → Update User
 */
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Prevent password update here
    if (req.body.password) {
      delete req.body.password;
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        error: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

/**
 * ADMIN → Delete User
 */
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        error: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
