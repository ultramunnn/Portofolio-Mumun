import express from "express";
import db from "../config/db.js";
import { upload, processImage } from "../utils/upload.js";

const router = express.Router();

// Get all projects with their tech stacks
router.get("/", async (req, res) => {
  try {
    const [projects] = await db.query(
      "SELECT * FROM projects ORDER BY created_at DESC"
    );

    // Fetch tech stacks for each project
    for (let project of projects) {
      const [techStacks] = await db.query(
        "SELECT tech_name FROM project_tech_stacks WHERE project_id = ?",
        [project.id]
      );
      project.techStacks = techStacks.map((tech) => tech.tech_name);
    }

    res.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ message: error.message });
  }
});

// Add a new project with image upload and tech stacks
router.post("/", upload.single("image"), async (req, res) => {
  const connection = await db.getConnection();
  try {
    await connection.beginTransaction();

    let imageUrl = req.body.image_url;
    if (req.file) {
      imageUrl = await processImage(req.file);
    }

    // Log the incoming data for debugging
    console.log("Received project data:", {
      title: req.body.title,
      description: req.body.description,
      project_url: req.body.project_url,
      techStacks: req.body.techStacks,
    });

    const { title, description, project_url, techStacks } = req.body;

    // Insert project
    const [result] = await connection.query(
      "INSERT INTO projects (title, description, image_url, project_url) VALUES (?, ?, ?, ?)",
      [title, description, imageUrl, project_url]
    );

    const projectId = result.insertId;

    // Handle tech stacks
    let techStacksArray = [];
    try {
      if (techStacks) {
        techStacksArray = JSON.parse(techStacks);
        if (Array.isArray(techStacksArray)) {
          for (const tech of techStacksArray) {
            await connection.query(
              "INSERT INTO project_tech_stacks (project_id, tech_name) VALUES (?, ?)",
              [projectId, tech]
            );
          }
        }
      }
    } catch (parseError) {
      console.error("Error parsing tech stacks:", parseError);
      // Don't throw here, just log the error
    }

    await connection.commit();

    // Fetch the newly created project with its tech stacks
    const [[newProject]] = await connection.query(
      "SELECT * FROM projects WHERE id = ?",
      [projectId]
    );
    const [newTechStacks] = await connection.query(
      "SELECT tech_name FROM project_tech_stacks WHERE project_id = ?",
      [projectId]
    );

    res.status(201).json({
      ...newProject,
      techStacks: newTechStacks.map((t) => t.tech_name),
    });
  } catch (error) {
    await connection.rollback();
    console.error("Error adding project:", error);
    res.status(500).json({
      message: error.message,
      details: "Failed to create project",
    });
  } finally {
    connection.release();
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
