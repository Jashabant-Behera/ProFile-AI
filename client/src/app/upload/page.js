"use client";
import { useState } from "react";
import { uploadResume, analyzeResume } from "../../utils/api";
import "../../styles/globals.css";
import Loader from "./components/Loader";
import CoverLetter from "./components/CoverLetter";
import AIAnalysis from "./components/AIAnalysis";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);
  const [fileUrl, setFileUrl] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please Select a File First");
      return;
    }

    setLoading(true);
    setMessage("");
    setFileUrl("");
    setAnalysis("");

    try {
      const response = await uploadResume(file);
      setMessage(response.message);
      console.log("File Uploaded Successfully:", response);

      if (response.fileUrl) setFileUrl(response.fileUrl);

      if (response.extractedText) {
        const aiFeedback = await analyzeResume(response.extractedText);
        setAnalysis(aiFeedback);
      }
    } catch (error) {
      setMessage("Upload Failed. Please Try Again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="headerdiv">
        <h1 className="header1">
          Quick upload.<br/> Smarter feedback.<br/> Better results.
        </h1>
        <h1 className="header2">
          Smart resume feedback is just an upload away!
        </h1>
      </div>
      <div className="main-blur">
        <h1 className="text-2xl font-bold text-white mb-4">
          Upload Your Resume
        </h1>
        <form onSubmit={(e) => e.preventDefault()} className="upload-section">
          <label className="file-input-label">
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden-file-input"
              onChange={handleFileChange}
            />
            <span className="custom-file-button">Choose File</span>
            {file && <span className="file-name">{file.name}</span>}
          </label>
          <button
            type="button"
            onClick={handleUpload}
            className="uploadbtn"
            disabled={loading}
          >
            {loading ? "Uploaded" : "Upload"}
          </button>
        </form>
      </div>

      {message && <p className="mt-4 text-white"> {message} </p>}

      {loading && <Loader />}

      {analysis && <AIAnalysis analysis={analysis} />}

      {analysis && <CoverLetter analysis={analysis} />}
    </div>
  );
}
