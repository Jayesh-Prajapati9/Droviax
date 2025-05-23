import express, { Router } from "express";
import { userSignIn, userSignUp } from "../controllers/userController.js";


const router: Router = express.Router();

router.get("/signup", userSignUp);
router.get("/signin", userSignIn);

export const userRoutes = router;
