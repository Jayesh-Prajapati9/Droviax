import { Request, Response } from "express";
import { prismaClient, prismaError } from "@repo/db/prismaClient";
import { RoomSchema } from "@repo/zodschemas/zod";

export const createRoomId = async (req: Request, res: Response) => {
	try {
		const roomSlug = req.body.slug;
		// const roomSlug = Math.floor(Math.random() * 100000).toString();
		const userId = req.body.userId;
		const room = RoomSchema.safeParse({
			roomSlug: roomSlug,
			adminId: userId,
		});
		if (!room.success) {
			res.status(400).json({
				message: "Invalid format",
				error: `${room.error.issues[0]?.message} for ${room.error.issues[0]?.path}`,
			});
			return;
		}

		const insertRoom = await prismaClient.room.create({
			data: {
				adminId: userId,
				slug: roomSlug,
			},
		});

		if (!insertRoom) {
			res.json({
				message: "Data not inserted in DB",
			});
			return;
		}
		res.status(200).json({
			message: "Room id created successfully",
			roomId: insertRoom.id,
			roomSlug: insertRoom.slug,
			admin: insertRoom.adminId,
		});
	} catch (error) {}
};

export const getRoomSlug = async (req: Request, res: Response) => {
	const roomId = req.body.roomId;
	const chats = await prismaClient.chat.findMany({
		where: {
			roomId: roomId,
		},
	});
	
};
