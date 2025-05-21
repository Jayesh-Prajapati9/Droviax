import { Request, Response } from "express";
import { sign }  from "jsonwebtoken";
import { HTTP_JWT_SECRET } from "@repo/backend-common/config";
import { SignUpSchema, SignInSchema } from "@repo/zodschemas/zod";
export const userSignUp = (req: Request, res: Response) => {

	const email = req.body.email;
	const username = req.body.username;
	const password = req.body.password;

	const user = SignUpSchema.safeParse({ email, username, password });
	if (!user.success) {
		res.json({
			message: "Invalid input",
		});
		return;
	}

	res.status(200).json({
		message: "Sign Up successfull",
	});
};
export const userSignIn = (req: Request, res: Response) => {
	const password = req.body.password;
	const username = req.body.username;

	const user = SignInSchema.safeParse({ username, password });
	if (!user.success) {
		res.json({
			message: "Invalid input",
		});
		return;
	}

	// db call

	const token = sign({ username }, HTTP_JWT_SECRET);

	res.status(200).json({
		message: "Sign In successfull",
		token: token,
	});
};