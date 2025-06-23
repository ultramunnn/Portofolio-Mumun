import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import skillsRouter from "./routes/skills.js";
import projectsRouter from "./routes/projects.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files - serve uploads directory at /uploads URL path
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));
app.use(express.static(path.join(__dirname, "views")));

// Routes
app.use("/api/skills", skillsRouter);
app.use("/api/projects", projectsRouter);

// Admin panel route
app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "views/admin.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Admin panel available at http://localhost:${port}/admin`);
});
