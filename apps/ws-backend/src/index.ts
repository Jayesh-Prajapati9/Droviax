import WebSocket, { WebSocketServer } from "ws";
import jwt from "jsonwebtoken";
import { HTTP_JWT_SECRET } from "@repo/backend-common/config";
import { v4 as uuidv4 } from "uuid";
import { prismaClient } from "@repo/db/prismaClient";

// Interfaces for type safety
export interface User {
	ws: WebSocket;
	userId: string;
	connectionId: string;
	rooms: Set<string>;
	slug: string;
	isAlive: boolean; // Track keep-alive state
}

interface MessageData {
	type: "join_room" | "leave_room" | "chat";
	roomId: string;
	message?: string;
	slug: string;
}

// Configuration
const WSS_PORT = 8080;

// Initialize WebSocket server
const wss = new WebSocketServer({ port: WSS_PORT });

export const users = new Map<string, User>();

const verifyUser = (token: string): string | jwt.JsonWebTokenError => {
	try {
		const decoded = jwt.verify(token, HTTP_JWT_SECRET) as jwt.JwtPayload;
		if (!decoded.userId)
			throw new jwt.JsonWebTokenError("Missing userId in token");
		return decoded.userId;
	} catch (error) {
		return error instanceof jwt.JsonWebTokenError
			? error
			: new jwt.JsonWebTokenError("Invalid Token");
	}
};

// Send error message and close connection
const sendErrorAndClose = (ws: WebSocket, message: string) => {
	ws.send(JSON.stringify({ type: "error", message }));
	ws.close();
};

// Cleanup on disconnect
const cleanupConnection = async (connectionId: string) => {
	const user = users.get(connectionId);
	if (user) {
		users.delete(connectionId);
		console.log(`User ${user.userId} disconnected`);
	}
};

// WebSocket connection handler
wss.on("connection", async (ws: WebSocket, request) => {
	const connectionId = uuidv4(); // Unique ID for the connection

	// Extract and verify token
	const url = request.url;
	if (!url) {
		sendErrorAndClose(ws, "Missing URL");
		return;
	}

	const queryParams = new URLSearchParams(url.split("?")[1]);
	const token = queryParams.get("token");
	if (!token) {
		sendErrorAndClose(ws, "Missing token");
		return;
	}

	const userId = verifyUser(token);
	if (userId instanceof jwt.JsonWebTokenError) {
		sendErrorAndClose(ws, userId.message);
		return;
	}

	// Store user with isAlive flag
	const user: User = {
		ws,
		userId,
		connectionId,
		rooms: new Set(),
		isAlive: true,
		slug: "",
	};

	users.set(connectionId, user);
	console.log(`User ${userId} connected with connection ID ${connectionId}`);

	// Message handler
	ws.on("message", async (data) => {
		try {
			// Validate message
			if (typeof data.toString() !== "string") {
				ws.send(
					JSON.stringify({
						type: "error",
						message: "Invalid or oversized message",
					})
				);
				return;
			}

			let parsedData: MessageData;
			try {
				parsedData = JSON.parse(data.toString());
			} catch {
				ws.send(JSON.stringify({ type: "error", message: "Invalid JSON" }));
				return;
			}

			if (
				!parsedData.roomId ||
				!["join_room", "leave_room", "chat"].includes(parsedData.type)
			) {
				ws.send(
					JSON.stringify({ type: "error", message: "Invalid message format" })
				);
				return;
			}

			const { type, roomId, message, slug } = parsedData;
			// Handle message types
			switch (type) {
				case "join_room":
					if (message) {
						ws.send(
							JSON.stringify({
								error: "join room route can't have message field",
							})
						);
						return;
					}

					if (!user.rooms.has(roomId) && !user.slug) {
						user.slug = slug;
						user.rooms.add(roomId);
						console.log(users);
						
						ws.send(JSON.stringify({ type: "joined_room", slug }));
						console.log(
							`User ${userId} joined room ${slug} having room id ${roomId}`
						);
					}
					break;

				case "leave_room":
					if (message) {
						ws.send(
							JSON.stringify({
								error: "leave room route can't have message field",
							})
						);
						return;
					}
					if (user.rooms.has(roomId)) {
						user.rooms.delete(roomId);
						ws.send(JSON.stringify({ type: "left_room", roomId }));
						console.log(`User ${userId} left room ${roomId}`);
					}
					break;

				case "chat":
					if (!message) {
						ws.send(
							JSON.stringify({ type: "error", message: "Message is required" })
						);
						return;
					}
					if (!user.rooms.has(roomId)) {
						ws.send(JSON.stringify({ type: "error", message: "Not in room" }));
						return;
					}
					// Publish message to Redis channel
					const chatMessage = JSON.stringify({
						type: "chat",
						message,
						roomId,
						userId,
					});
					users.forEach((x) => {
						if (x.rooms.has(roomId)) x.ws.send(chatMessage);
					});

					console.log(`User ${userId} sent message to room ${roomId}`);

					const prismaResponse = await prismaClient.chat.create({
						data: {
							message: message,
							roomId: roomId,
							userId: userId,
						},
					});

					if (!prismaResponse) {
						throw new Error("Chat not saved in Database");
					}
					break;
			}
		} catch (error) {
			console.error(`Error processing message: ${error}`);
			ws.send(
				JSON.stringify({ type: "error", message: "Internal server error" })
			);
		}
	});

	// Handle disconnection
	ws.on("close", () => cleanupConnection(connectionId));

	// Handle errors
	ws.on("error", (error) => {
		console.error(`WebSocket error for user ${userId}: ${error}`);
		cleanupConnection(connectionId);
	});
});

// Handle server errors
wss.on("error", (error) => {
	console.error(`WebSocket server error: ${error}`);
});

// Log server startup
console.log(`WebSocket server running on port ${WSS_PORT}`);