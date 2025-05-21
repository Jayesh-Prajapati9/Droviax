import Express, { Router } from "express";
import { userSignIn, userSignUp } from "../controllers/userController";

const router: Router = Express.Router();

router.get("/signup", userSignUp);
router.get("/signin", userSignIn);

export const userRoutes = router;
