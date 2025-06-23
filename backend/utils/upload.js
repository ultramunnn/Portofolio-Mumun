import multer from "multer";
import path from "path";
import sharp from "sharp";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "../public/uploads");
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

// File filter for images
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error("Invalid file type. Only JPEG, PNG and GIF are allowed."),
      false
    );
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

// Process uploaded image
const processImage = async (file) => {
  try {
    const optimizedFilename = "opt-" + file.filename;
    const outputPath = path.join(file.destination, optimizedFilename);

    const imageProcessor = sharp(file.path).resize(800, 800, {
      fit: "inside",
      withoutEnlargement: true,
    });

    // Preserve transparency for PNG files
    if (file.mimetype === "image/png") {
      await imageProcessor.png({ quality: 80 }).toFile(outputPath);
    } else {
      await imageProcessor.jpeg({ quality: 80 }).toFile(outputPath);
    }

    // Delete original file
    fs.unlinkSync(file.path);

    // Return the path relative to public folder
    return "/uploads/" + optimizedFilename;
  } catch (error) {
    console.error("Error processing image:", error);
    throw error;
  }
};

export { upload, processImage };
