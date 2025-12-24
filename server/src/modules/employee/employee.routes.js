import express from "express";
import { createEmployeeController } from "./employee.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { rbacMiddleware } from "../../middlewares/rbac.middleware.js";
import auth from "../middlewares/authMiddleware.js";
import authorize from "../middlewares/authorize.js";
import { PERMISSIONS } from "../config/permissions.js";

const router = express.Router();


router.get(
  "/",
  auth,
  authorize(PERMISSIONS.VIEW_ALL_EMPLOYEES),
  getAllEmployees
);

router.get(
  "/me",
  auth,
  authorize(PERMISSIONS.VIEW_SELF),
  getMyProfile
);

router.post(
  "/",
  authMiddleware,
  rbacMiddleware(["super_admin", "admin_hr"]),
  createEmployeeController
);

export default router;
