const express = require("express");
const openai = require("../config/openai");

const router = express.Router();

router.post("/analyze", async (req, res) => {
  const { text } = req.body;
  if (!text)
    return res.status(400).json({ message: "No Resume Text Provided" });

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a resume expert. Analyze the resume, suggest improvements, and make it ATS-friendly. Don't use bold headlines instead underline the headlines.",
        },
        {
          role: "user",
          content: `Here is the text extracted from the resume: ${text}. `,
        },
      ],
    });

    const analysis =
      response?.choices?.[0]?.message?.content || "No analysis available";
    res.status(200).json({ analysis });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error analyzing resume", error: error.message });
  }
});

module.exports = router;
