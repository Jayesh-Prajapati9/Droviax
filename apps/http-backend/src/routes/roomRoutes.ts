import express, { Router } from "express";
import { createRoomId } from "../controllers/roomController.js";
import { userMiddleware } from "../middleware/userMiddleware.js";


const router: Router = express.Router();

router.get("/create_room", userMiddleware, createRoomId);

export const roomRoutes = router;
