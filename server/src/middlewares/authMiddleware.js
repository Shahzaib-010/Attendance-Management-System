
import jwt from "jsonwebtoken";
import User from "../models/users/User.js";

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        error: "No token provided",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_KEY);

    const user = await User.findById(decoded._id).select(
      "_id name email designation"
    );

    if (!user) {
      return res.status(401).json({
        success: false,
        error: "User not found",
      });
    }

    // 🔥 NORMALIZE USER OBJECT
    req.user = {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.designation, // ✅ MAP HERE
    };

    console.log("🛡️ AUTH MIDDLEWARE USER:", req.user);

    next();
  } catch (error) {
    console.error("🔴 AUTH ERROR:", error.message);

    return res.status(401).json({
      success: false,
      error: "Unauthorized",
    });
  }
};

export default authMiddleware;
 