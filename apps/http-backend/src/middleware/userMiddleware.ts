import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { HTTP_JWT_SECRET } from "@repo/backend-common/config";
// const HTTP_JWT_SECRET = "123456789";

export const userMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.body.token;
    const decoded = jwt.verify(token, HTTP_JWT_SECRET);

    if (!decoded) {
        res.status(404).json({
            message: "Invaild Token",
        });
    }
    // @ts-ignore
    req.body.userId = decoded.userId;
    next();
};
