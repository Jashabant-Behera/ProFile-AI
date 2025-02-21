import axios from "axios";
const API_BASE_URL = "http://localhost:5000/api";

export const uploadResume = async (file) => {
  const formData = new FormData();
  formData.append("resume", file);

  try {
    const response = await axios.post(
      "http://localhost:5000/api/upload",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Upload Error:", error);
    return null;
  }
};

export const analyzeResume = async (text) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/analyze`,
      { text },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data.analysis;
  } catch (error) {
    console.error("AI Analysis Error:", error);
    throw error;
  }
};

export const generateCoverLetter = async (resumeText) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/cover-letter",
      { text: resumeText }
    );
    return response.data.coverLetter;
  } catch (error) {
    console.error("Error generating cover letter:", error);
    return null;
  }
};
