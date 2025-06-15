import express, { Router } from "express";
import { getRoom, userSignIn, userSignUp } from "../controllers/userController.js";
import { userMiddleware } from "../middleware/userMiddleware.js";


const router: Router = express.Router();

router.post("/signup", userSignUp);
router.get("/signin", userSignIn);
router.get("/:userId/rooms",userMiddleware,getRoom)
export const userRoutes = router;
