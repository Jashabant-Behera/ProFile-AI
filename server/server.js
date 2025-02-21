const express = require("express");
const cors = require("cors");
const { PORT } = require("./config/env");
const coverLetterRoutes = require("./routes/coverLetter");

const uploadRoutes = require("./routes/upload");
const analyzeRoutes = require("./routes/analyze");
const feedbackRoutes = require("./routes/feedback");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", uploadRoutes);
app.use("/api", analyzeRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api", coverLetterRoutes); 

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
