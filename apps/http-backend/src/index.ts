import Express from "express";
import { userRoutes } from "./routes/userRoutes";
import { roomRoutes } from "./routes/roomRoutes";

const app = Express();
const port = 8000;

app.use(Express.json());

app.use("/api/user",userRoutes);
app.use("/api/create-room",roomRoutes);

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Express Server",
    });
});

app.listen(port, () => {
    console.log(`Http Server listing on ${port}`);
});
