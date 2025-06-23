import express from "express";
import db from "../config/db.js";
import { upload, processImage } from "../utils/upload.js";

const router = express.Router();

// Get all projects
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM projects ORDER BY created_at DESC"
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new project with image upload
router.post("/", upload.single("image"), async (req, res) => {
  try {
    let imageUrl = req.body.image_url;

    // If a file was uploaded, process it
    if (req.file) {
      imageUrl = await processImage(req.file);
    }

    const { title, description, project_url } = req.body;
    const [result] = await db.query(
      "INSERT INTO projects (title, description, image_url, project_url) VALUES (?, ?, ?, ?)",
      [title, description, imageUrl, project_url]
    );

    res.status(201).json({
      id: result.insertId,
      title,
      description,
      image_url: imageUrl,
      project_url,
    });
  } catch (error) {
    console.error("Error adding project:", error);
    res.status(500).json({ message: error.message });
  }
});

// Delete a project
router.delete("/:id", async (req, res) => {
  try {
    const [result] = await db.query("DELETE FROM projects WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
