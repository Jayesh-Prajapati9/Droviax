import express from "express";
import { roomRoutes } from "./routes/roomRoutes.js";
import { userRoutes } from "./routes/userRoutes.js";

const app = express();
const port = 8000;

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/create-room", roomRoutes);

app.get("/", (req, res) => {
	res.status(200).json({
		message: "Express Server",
	});
	return;
});

app.listen(port, () => {
	console.log(`Http Server listing on ${port}`);
});
