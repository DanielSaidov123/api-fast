import express from "express";
import { login, registerUser } from "../controllers/auth.controller.js";
import { checkAdmin, checkAuth } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", checkAuth, checkAdmin, registerUser);
router.post("/login", checkAuth, login);
export default router;
