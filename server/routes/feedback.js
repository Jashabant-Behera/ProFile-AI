const express = require("express");
const supabase = require("../config/supabase");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("resumes")
      .select("*")
      .order("id", { ascending: false });

    if (error) throw error;

    res.status(200).json(data);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching feedback", error: err.message });
  }
});

module.exports = router;
