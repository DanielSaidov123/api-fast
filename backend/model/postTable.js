import { request } from "express";
import mongoose from "mongoose";

const postsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    title: {
      type: String,
      request: true,
    },
    contect: {
      type: String,
      request: true,
    },
  },
  { timestamps: true },
);

export const Post = mongoose.model("Post", postsSchema);
