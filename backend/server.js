import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv"
const PORT = process.env.PORT
dotenv.config()
const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json());

app.use(cookieParser());


app.get("/api", (req, res) => {
  res.status(200).json("Welcome ");
});

app.listen(PORT, () => {
  console.log("server is running on port 5000");
});