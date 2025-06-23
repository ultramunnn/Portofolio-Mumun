import express from "express";
import db from "../config/db.js";
import { upload, processImage } from "../utils/upload.js";

const router = express.Router();

// Get all skills
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM skills ORDER BY category, created_at DESC"
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new skill with image upload
router.post("/", upload.single("icon"), async (req, res) => {
  try {
    const { name, level, category } = req.body;

    // Validate required fields
    if (!name || !level || !category) {
      return res.status(400).json({
        message: "Name, level, and category are required fields",
        receivedData: { name, level, category },
      });
    }

    let iconUrl = null;
    // If a file was uploaded, process it
    if (req.file) {
      iconUrl = await processImage(req.file);
    }

    const [result] = await db.query(
      "INSERT INTO skills (name, level, category, icon_url) VALUES (?, ?, ?, ?)",
      [name, level, category, iconUrl]
    );

    res.status(201).json({
      id: result.insertId,
      name,
      level,
      category,
      icon_url: iconUrl,
    });
  } catch (error) {
    console.error("Error adding skill:", error);
    res.status(500).json({
      message: error.message,
      details: "An error occurred while adding the skill",
    });
  }
});

// Delete a skill
router.delete("/:id", async (req, res) => {
  try {
    const [result] = await db.query("DELETE FROM skills WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Skill not found" });
    }
    res.json({ message: "Skill deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
