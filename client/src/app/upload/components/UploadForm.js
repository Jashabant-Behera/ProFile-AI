import { useState } from "react";
import { uploadResume } from "../../../utils/api";
import Loader from "./Loader";

export default function UploadForm({ onUploadSuccess }) {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please Select a File First");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const data = await uploadResume(file);
      setMessage("File uploaded successfully!");
      onUploadSuccess(data);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="mb-4 p-2 border rounded" />
      <button onClick={handleUpload} className="px-4 py-2 bg-blue-500 text-white rounded" disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>
      {loading && <Loader />}
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
