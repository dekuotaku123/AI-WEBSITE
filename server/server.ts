import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import userRouter from "./routes/userRoutes";
import projectRouter from "./routes/ProjectRoutes";

const app = express();
const port = process.env.PORT || 3000;

// 1. CORS first
const corsOptions = {
  origin: process.env.TRUSTED_ORIGINS?.split(",") || [],
  credentials: true,
};
app.use(cors(corsOptions));

// 2. Auth handler (must be before express.json)
app.use("/api/auth", toNodeHandler(auth));

// 3. Body parser once
app.use(express.json({ limit: '50mb' }));

// 4. Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Server is Live!");
});
app.use('/api/user', userRouter);
app.use('/api/project', projectRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});