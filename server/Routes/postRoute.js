import express from "express";
import { getFeedPosts, getUserPosts, likePost,createPost } from "../Controllers/postControllers.js";
import { verifyToken } from "../Middlewares/verifyToken.js";

const router = express.Router();

//create
router.post("/",verifyToken,createPost);

//get
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

//like/dislike
router.patch("/:id/like", verifyToken, likePost);

export default router;
