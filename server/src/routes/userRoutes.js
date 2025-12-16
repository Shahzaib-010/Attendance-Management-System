import express from "express";
import { createUser, getAllUsers } from "../controllers/userController.js";

const router = express.Router();

router.post("/create-users", createUser); // Admin only (later middleware)
router.get("/all-users", getAllUsers);  // Admin only

export default router;
