export default function DownloadButton({ content, filename }) {
    if (!content) return null;
  
    const handleDownload = () => {
      const file = new Blob([content], { type: "text/plain" });
      const fileURL = URL.createObjectURL(file);
      const a = document.createElement("a");
      a.href = fileURL;
      a.setAttribute("download", filename);
      a.click();
      URL.revokeObjectURL(fileURL);
    };
  
    return (
      <button onClick={handleDownload} className="downloadbtn m-6 px-4 py-2 rounded">
        Download
      </button>
    );
  }
