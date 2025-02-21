const express = require("express");
const OpenAI = require("openai");
require("dotenv").config();

const router = express.Router();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post("/cover-letter", async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ message: "No Resume Text Provided" });

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a professional writer. Generate a well-structured, tailored cover letter based on the given resume text.",
        },
        {
          role: "user",
          content: `Resume text:\n\n${text}\n\nGenerate a professional cover letter. Also make sure to give proper text alignments that the letter should look like an actual letter. Also the cover letter should be short, minimalist, clean and should be to the point.`,
        },
      ],
    });

    const coverLetter = response?.choices?.[0]?.message?.content || "No cover letter available";
    res.status(200).json({ coverLetter });

  } catch (error) {
    console.error("Cover Letter Generation Error:", error);
    res.status(500).json({ message: "Error generating cover letter", error: error.message });
  }
});

module.exports = router;
