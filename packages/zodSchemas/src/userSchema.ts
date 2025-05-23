import { z } from "zod";

export const SignUpSchema = z.object({
	username: z
		.string()
		.min(3, { message: "Username must be at least 3 characters long" })
		.max(10, { message: "username should not be greater than 10 Char" }),
	email: z.string().email(),
	password: z
		.string()
		.min(5, { message: "Password must be at least 5 characters long" })
		.max(10, { message: "Password must be at most 10 characters long" })
		.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).*$/, {
			message:
				"Password must include at least one lowercase letter, one uppercase letter, one number, and one special character.",
		}),
});
export const SignInSchema = z.object({
	username: z
		.string()
		.min(3, { message: "Username must me min of 3 Char" })
		.max(10, { message: "username should not be greater than 10 Char" }),
	password: z
		.string()
		.min(5, { message: "Password must be at least 5 characters long" })
		.max(10, { message: "Password must be at most 10 characters long" })
		.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).*$/, {
			message:
				"Password must include at least one lowercase letter, one uppercase letter, one number, and one special character.",
		}),
});

export const RoomSchema = z.object({
	roomSlug: z.string().length(5, { message: "Room id must be 5 char long" }),
	adminId: z.number(),
});
