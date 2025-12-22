// import express from "express";
// import { createUser, getAllUsers } from "../controllers/userController.js";

// const router = express.Router();

// router.post("/create-users", createUser); // Admin only (later middleware)
// router.get("/all-users", getAllUsers);  // Admin only

// export default router;


import express from "express";
import {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

import authMiddleware from "../middlewares/authMiddleware.js";
import isAdmin from "../middlewares/isAdmin.js";

const router = express.Router();

// ADMIN ONLY ROUTES
router.post("/create-users", authMiddleware, isAdmin, createUser);
router.get("/all-users", authMiddleware, isAdmin, getAllUsers);
router.put("/:id", authMiddleware, isAdmin, updateUser);
router.delete("/:id", authMiddleware, isAdmin, deleteUser);

export default router;
