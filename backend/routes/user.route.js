import express from "express";
import { checkAdmin, checkAuth } from "../middleware/auth.middleware.js";
import { getUserByID } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/:id", checkAuth, checkAdmin,  getUserByID);
export default router;
