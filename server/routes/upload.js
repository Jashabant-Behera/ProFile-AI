const express = require("express");
const multer = require("multer");
const path = require("path");
const pdfParse = require("pdf-parse");
const mammoth = require("mammoth");
const supabase = require("../config/supabase");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });

const extractTextPDF = async (buffer) => {
  const data = await pdfParse(buffer);
  return data.text;
};

const extractTextDOCX = async (buffer) => {
  const { value } = await mammoth.extractRawText({ buffer });
  return value;
};

router.post("/upload", upload.single("resume"), async (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ message: "No file uploaded or invalid format" });
  }

  try {
    const { originalname, buffer, mimetype } = req.file;
    const fileExt = path.extname(originalname).toLowerCase();
    let extractedText = "";

    if (fileExt === ".pdf") {
      extractedText = await extractTextPDF(buffer);
    } else if (fileExt === ".docx") {
      extractedText = await extractTextDOCX(buffer);
    } else {
      return res.status(400).json({ message: "Invalid File Format" });
    }

    if (!extractedText.trim()) {
      return res
        .status(500)
        .json({ message: "No text extracted from resume!" });
    }

    const { data, error } = await supabase.storage
      .from("resumes")
      .upload(`uploads/${uuidv4()}_${originalname}`, buffer, {
        contentType: mimetype,
      });

    if (error) throw error;

    const fileUrl = supabase.storage.from("resumes").getPublicUrl(data.path);

    await supabase
      .from("resumes")
      .insert([{ file_url: fileUrl, extracted_text: extractedText }]);

    res
      .status(200)
      .json({ message: "File uploaded successfully", fileUrl, extractedText });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error Extracting Text", error: error.message });
  }
});

module.exports = router;
