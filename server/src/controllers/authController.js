
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// 🔐 LOGIN
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        error: "User not found",
      });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        error: "Incorrect password",
      });
    }

    // ✅ MAP designation → role
    const role = user.designation;

    // ✅ JWT SHOULD ALWAYS CONTAIN ROLE
    const token = jwt.sign(
      {
        _id: user._id,
        role,
      },
      process.env.JWT_KEY,
      { expiresIn: "10d" }
    );

    console.log("🟢 LOGIN USER:", {
      id: user._id,
      role,
    });

    res.status(200).json({
      success: true,
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role, // 🔥 FRONTEND EXPECTS THIS
      },
    });
  } catch (error) {
    console.error("🔴 LOGIN ERROR:", error.message);
    res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

// 🔁 VERIFY TOKEN
const verify = (req, res) => {
  console.log("🟢 VERIFIED USER:", req.user);

  res.status(200).json({
    success: true,
    user: req.user, // req.user MUST contain role
  });
};

export { login, verify };
