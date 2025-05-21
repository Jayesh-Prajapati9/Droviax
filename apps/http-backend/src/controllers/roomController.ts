import { Request, Response } from "express";

export const createRoomId = (req: Request, res: Response) => {
    const roomId = Math.floor(Math.random() * 100000);

    // db call

    res.status(200).json({
        message: "Room id created successfully",
        roomId: roomId,
    });
};
