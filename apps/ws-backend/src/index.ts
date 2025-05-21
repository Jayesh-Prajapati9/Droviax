import { WebSocketServer } from "ws";
import jwt from "jsonwebtoken";
import { WS_JWT_SECRET } from "@repo/backend-common/config";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws, request) {
    console.log(WS_JWT_SECRET);
    
    const url = request.url;
    if (!url) {
        return;
    }
    const queryParams = new URLSearchParams(url.split("?")[1]);
    const token = queryParams.get("token");
    if (!token) {
        return;
    }

    const decoded = jwt.verify(token, WS_JWT_SECRET);

    if (typeof decoded !== "object") {
        return;
    }

    if (typeof decoded === "object" && (!decoded || !decoded.userId)) {
        ws.close();
        return;
    }

    ws.on("message", (data) => {
        ws.send("Pong");
    });
});
