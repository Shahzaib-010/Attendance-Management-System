import express from "express";
import { login } from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// LOGIN
router.post("/login", login);

// VERIFY TOKEN
router.get("/verify", authMiddleware, (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user
  });
});

export default router;
