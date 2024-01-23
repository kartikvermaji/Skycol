import express from "express";
import {getUser, getUserFriends,addRemoveFriend } from "../Controllers/userControllers.js";
import { verifyToken } from "../Middlewares/verifyToken.js";
const router=express.Router()

router.get("/:id",verifyToken,getUser)
router.get("/:id/friends",verifyToken,getUserFriends)

router.patch("/:id/:friendId",verifyToken,addRemoveFriend);

export default router