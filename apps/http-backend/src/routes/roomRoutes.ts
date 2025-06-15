import express, { Router } from "express";
import { createRoomId, getRoomSlug } from "../controllers/roomController.js";
import { userMiddleware } from "../middleware/userMiddleware.js";


const router: Router = express.Router();

router.get("/create_room", userMiddleware, createRoomId);
router.get("/room/chats/:slug",userMiddleware,getRoomSlug)
export const roomRoutes = router;
