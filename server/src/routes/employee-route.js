import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import allowRoles from "../middlewares/rbac.js";
import { requireAdminType } from "../middlewares/adminScope.js";

const router = express.Router();

// Super admin only
router.get(
  "/all",
  authMiddleware,
  allowRoles("super_admin"),
  getAllEmployees
);

// HR + Super admin
router.post(
  "/create",
  authMiddleware,
  allowRoles("super_admin", "admin"),
  requireAdminType("hr"),
  createEmployee
);

// Finance salary access
router.get(
  "/:id/salary",
  authMiddleware,
  allowRoles("super_admin", "admin"),
  requireAdminType("finance"),
  getEmployeeSalary
);

// User self access
router.get(
  "/me",
  authMiddleware,
  allowRoles("user", "admin", "super_admin"),
  getMyProfile
);

export default router;
