import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { authRouter } from "./routes/auth.js";
import { projectsRouter } from "./routes/projects.js";
import { blogRouter } from "./routes/blog.js";
import { publishRouter } from "./routes/publish.js";
import { requireAuth } from "./middleware/auth.js";

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.set("trust proxy", 1);
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/projects", requireAuth, projectsRouter);
app.use("/api/blog", requireAuth, blogRouter);
app.use("/api/publish", requireAuth, publishRouter);

app.listen(PORT, () => {
  console.log(`Admin API listening on http://localhost:${PORT}`);
});
