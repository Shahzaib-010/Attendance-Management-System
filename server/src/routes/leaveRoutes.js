import express from "express";
import {
  applyLeave,
  getMyLeaves,
  getAllLeaves,
  updateLeaveStatus,
} from "../controllers/leaveController.js";

import authMiddleware from "../middlewares/authMiddleware.js";
import isAdmin from "../middlewares/isAdmin.js";

const router = express.Router();

// USER
router.post("/apply", authMiddleware, applyLeave);
router.get("/my", authMiddleware, getMyLeaves);

// ADMIN
router.get("/all", authMiddleware, isAdmin, getAllLeaves);
router.put("/:id/status", authMiddleware, isAdmin, updateLeaveStatus);

export default router;