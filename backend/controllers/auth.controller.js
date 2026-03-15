import { User } from "../model/usersTable.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const registerUser = async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fildes are required" });
    }

    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ message: "email uniqe" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      fullName,
      email,
      password: passwordHash,
      role: role ? role : "user",
    });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fildes are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "user is not found" });
    }

    const pass = await bcrypt.compare(password, user.password);

    if (!pass) {
      return res.status(401).json({ message: "password is not good" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({message : "login true" ,role :  user.role})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
