import express from "express";
import { checkAdmin, checkAuth } from "../middleware/auth.middleware.js";
import { deleteUser, getUserByID, getUsers, updateUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/:id", checkAuth, checkAdmin,  getUserByID);
router.get("/", checkAuth, checkAdmin,  getUsers);
router.delete("/:id", checkAuth, checkAdmin,  deleteUser);
router.put("/:id", checkAuth, checkAdmin,  updateUser);
export default router;
