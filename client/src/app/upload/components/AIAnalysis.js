import ReactMarkdown from "react-markdown";
import DownloadButton from "./DownloadButton";

export default function AIAnalysis({ analysis }) {
  return (
    analysis && (
      <div className="feedbackText mt-6 p-4">
        <h2 className="text-lg font-bold mb-6 header2">AI Feedback</h2>
        <ReactMarkdown className="aitext text-sm">{analysis}</ReactMarkdown>
        <DownloadButton content={analysis} filename="AI_Feedback.txt" />
      </div>
    )
  );
}
