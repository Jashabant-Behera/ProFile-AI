import { useState } from "react";
import { generateCoverLetter } from "../../../utils/api";
import ReactMarkdown from "react-markdown";
import DownloadButton from "./DownloadButton";
import Loader from "./Loader"; 
import "../../../styles/globals.css";


export default function CoverLetter({ analysis }) {
  const [coverLetter, setCoverLetter] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateCoverLetter = async () => {
    setIsLoading(true);
    try {
      const result = await generateCoverLetter(analysis);
      setCoverLetter(result);
    } catch (error) {
      setCoverLetter("Failed to generate cover letter.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="coverletterText mt-6 p-4">
      <h2 className="text-lg font-bold mb-6 header2">Cover Letter</h2>
      {isLoading ? (
        <Loader />
      ) : coverLetter ? (
        <>
          <ReactMarkdown className="aitext text-sm mt-2">{coverLetter}</ReactMarkdown>
          <DownloadButton content={coverLetter} filename="Cover Letter" />
        </>
      ) : (
        <button
          onClick={handleGenerateCoverLetter}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Generate Cover Letter 
        </button>
      )}
    </div>
  );
}
