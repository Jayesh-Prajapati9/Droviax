import Express, { Router } from "express";
import { userMiddleware } from "../middleware/userMiddleware";
import { createRoomId } from "../controllers/roomController";

const router: Router = Express.Router();

router.get("/create_room", userMiddleware, createRoomId);

export const roomRoutes = router;
