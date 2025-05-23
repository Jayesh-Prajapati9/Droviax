import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
// import { HTTP_JWT_SECRET } from "@repo/backend-common/config";
import { SignUpSchema, SignInSchema } from "@repo/zodschemas/zod";
import { prismaClient } from "@repo/db/prismaClient";
import crypto from "crypto";

const HTTP_JWT_SECRET = "123456789";

export const userSignUp = async (req: Request, res: Response) => {
	try {
		const email = req.body.email;
		const username = req.body.username;
		const password = req.body.password;

		const hashPassword = crypto
			.createHash("sha256")
			.update(password)
			.digest("hex");

		const user = SignUpSchema.safeParse({ email, username, password });

		if (!user.success) {
			res.json({
				message: "Invalid input",
			});
			return;
		}

		const dbInsert = await prismaClient.user.create({
			data: {
				username: username,
				email: email,
				password: hashPassword,
				photo: "url",
			},
		});

		if (!dbInsert) {
			res.json({
				message: "User not inserted into Database",
			});
			return;
		}

		res.status(200).json({
			message: "Sign Up successfull",
		});
	} catch (e) {
		console.log(e);
		res.status(411).json({
			message: "User already exists",
		});
	}
};
export const userSignIn = async (req: Request, res: Response) => {
	const username = req.body.username;
	const password = req.body.password;

	const user = SignInSchema.safeParse({ username, password });

	const hashPassword = crypto
		.createHash("sha256")
		.update(password)
		.digest("hex");

	if (!user.success) {
		res.json({
			message: "Invalid input",
		});
		return;
	}

	const getUser = await prismaClient.user.findUnique({
		where: {
			username: username,
			password: hashPassword,
		},
	});

	if (!getUser) {
		res.json({
			message: "Invalid User Credentials",
		});
		return;
	}

	const userId = getUser.id;
	const token = sign({ userId }, HTTP_JWT_SECRET);

	res.status(200).json({
		message: "Sign In successfull",
		token: token,
	});
};
