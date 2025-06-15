import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { HTTP_JWT_SECRET } from "@repo/backend-common/config";
import { SignUpSchema, SignInSchema } from "@repo/zodschemas/zod";
import { prismaClient, prismaError } from "@repo/db/prismaClient";
import crypto from "crypto";
import {users,User} from "@repo/ws-backend/wsUsers";

export const userSignUp = async (req: Request, res: Response) => {
	console.log(HTTP_JWT_SECRET);
	try {
		const email = req.body.email;
		const username = req.body.username;
		const password = req.body.password;

		console.log(email);
		const hashPassword = crypto
			.createHash("sha256")
			.update(password)
			.digest("hex");

		const user = SignUpSchema.safeParse({ email, username, password });

		if (!user.success) {
			res.json({
				message: "Invalid input",
				error: user.error.issues[0]?.message,
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
	} catch (error) {
		if (error instanceof prismaError && error.code === "P2002") {
			res.status(411).json({
				message: "User already exists",
			});
		} else {
			res.json({ error: error });
		}
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
	const token = jwt.sign({ userId }, HTTP_JWT_SECRET);
	console.log(userId);

	res.status(200).json({
		message: "Sign In successfull",
		token: token,
	});
};

export const getRoom = async (req: Request, res: Response) => {
	console.log(users);
	const connectedUser: User[] = [];
	const userId = req.params.userId;
	console.log(userId);
	
	users.forEach((user) => {
		console.log(user.userId);
		if (user.isAlive && user.userId === userId) {
			connectedUser.push();
		}
	});
	res.status(200).json({
		message: JSON.stringify(connectedUser),
	});
};
