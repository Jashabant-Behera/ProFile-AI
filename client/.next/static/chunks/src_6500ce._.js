(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_6500ce._.js", {

"[project]/src/utils/api.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "analyzeResume": (()=>analyzeResume),
    "generateCoverLetter": (()=>generateCoverLetter),
    "uploadResume": (()=>uploadResume)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const API_BASE_URL = "http://localhost:5000/api";
const uploadResume = async (file)=>{
    const formData = new FormData();
    formData.append("resume", file);
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("http://localhost:5000/api/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data;
    } catch (error) {
        console.error("❌ Upload Error:", error);
        return null;
    }
};
const analyzeResume = async (text)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${API_BASE_URL}/analyze`, {
            text
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response.data.analysis;
    } catch (error) {
        console.error("❌ AI Analysis Error:", error);
        throw error;
    }
};
const generateCoverLetter = async (resumeText)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("http://localhost:5000/api/cover-letter", {
            text: resumeText
        });
        return response.data.coverLetter;
    } catch (error) {
        console.error("Error generating cover letter:", error);
        return null;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/upload/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Upload)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// import { useState } from "react";
// import { uploadResume, analyzeResume, generateCoverLetter } from "../../utils/api";
// import "../../styles/globals.css";
// import ReactMarkdown from "react-markdown";
// import { ClipLoader } from "react-spinners";
// export default function Upload() {
//   const [file, setFile] = useState(null);
//   const [message, setMessage] = useState("");
//   const [analysis, setAnalysis] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [fileUrl, setFileUrl] = useState("");
//   const [coverLetter, setCoverLetter] = useState("");
//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };
//   const handleUpload = async () => {
//     if (!file) {
//       setMessage("Please Select a File First");
//       return;
//     }
//     setLoading(true);
//     setMessage("");
//     setFileUrl("");
//     setAnalysis("");
//     try {
//       const response = await uploadResume(file);
//       setMessage(response.message);
//       console.log("File Uploaded Successfully:", response);
//       if (response.fileUrl) setFileUrl(response.fileUrl);
//       if (response.extractedText) {
//         const aiFeedback = await analyzeResume(response.extractedText);
//         setAnalysis(aiFeedback);
//       }
//     } catch (error) {
//       setMessage("Upload Failed. Please Try Again.");
//     } finally {
//       setLoading(false);
//     }
//   };
//   const handleDownloadFeedback = () => {
//     if (!analysis) return;
//     const file = new Blob([analysis], { type: "text/plain" });
//     const fileURL = URL.createObjectURL(file);
//     const a = document.createElement("a");
//     a.href = fileURL;
//     a.setAttribute("download", "AI_Feedback.txt");
//     a.click();
//     URL.revokeObjectURL(fileURL);
//   };
//   const handleGenerateCoverLetter = async () => {
//     if (!analysis) return;
//     try {
//       const coverLetterText = await generateCoverLetter(analysis);
//       setCoverLetter(coverLetterText);
//     } catch (error) {
//       setCoverLetter("Failed to generate cover letter.");
//     }
//   };
//   const handleDownloadCoverLetter = () => {
//     if (!coverLetter) return;
//     const file = new Blob([coverLetter], { type: "text/plain" });
//     const fileURL = URL.createObjectURL(file);
//     const a = document.createElement("a");
//     a.href = fileURL;
//     a.setAttribute("download", "AI_Cover_Letter.txt");
//     a.click();
//     URL.revokeObjectURL(fileURL);
//   };
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <form onSubmit={(e) => e.preventDefault()}>
//         <h1 className="text-2xl font-bold mb-4">Upload Your Resume</h1>
//         <input
//           type="file"
//           accept=".pdf,.doc,.docx"
//           className="mb-4 p-2 border rounded"
//           onChange={handleFileChange}
//         />
//         <button
//           type="button"
//           onClick={handleUpload}
//           className="px-4 py-2 bg-blue-500 text-white rounded"
//           disabled={loading}
//         >
//           {loading ? "Analyzing..." : "Upload"}
//         </button>
//       </form>
//       {loading && (
//         <div className="flex justify-center items-center mt-3">
//           <ClipLoader color="#3498db" loading={loading} size={40} />
//         </div>
//       )}
//       {message && <p className="mt-4"> {message} </p>}
//       {analysis && (
//         <div className="mt-6 p-4 bg-blue-100 shadow rounded max-w-screen">
//           <h2 className="text-lg font-bold">AI Feedback</h2>
//           <ReactMarkdown className="text-sm">{analysis}</ReactMarkdown>
//           <button onClick={handleDownloadFeedback} className="mt-2 px-4 py-2 bg-green-500 text-white rounded">
//             Download Feedback
//           </button>
//           <button onClick={handleGenerateCoverLetter} className="mt-2 ml-2 px-4 py-2 bg-purple-500 text-white rounded">
//             Generate Cover Letter
//           </button>
//         </div>
//       )}
//       {coverLetter && (
//         <div className="mt-6 p-4 bg-green-100 shadow rounded max-w-screen">
//           <h2 className="text-lg font-bold">Generated Cover Letter</h2>
//           <ReactMarkdown className="text-sm">{coverLetter}</ReactMarkdown>
//           <button onClick={handleDownloadCoverLetter} className="mt-2 px-4 py-2 bg-green-500 text-white rounded">
//             Download Cover Letter
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/api.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../components/CoverLetter'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipLoader$3e$__ = __turbopack_import__("[project]/node_modules/react-spinners/esm/ClipLoader.js [app-client] (ecmascript) <export default as ClipLoader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_import__("[project]/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
function Upload() {
    _s();
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [analysis, setAnalysis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fileUrl, setFileUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleFileChange = (e)=>{
        setFile(e.target.files[0]);
    };
    const handleUpload = async ()=>{
        if (!file) {
            setMessage("Please Select a File First");
            return;
        }
        setLoading(true);
        setMessage("");
        setFileUrl("");
        setAnalysis("");
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadResume"])(file);
            setMessage(response.message);
            console.log("File Uploaded Successfully:", response);
            if (response.fileUrl) setFileUrl(response.fileUrl);
            if (response.extractedText) {
                const aiFeedback = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyzeResume"])(response.extractedText);
                setAnalysis(aiFeedback);
            }
        } catch (error) {
            setMessage("Upload Failed. Please Try Again.");
        } finally{
            setLoading(false);
        }
    };
    const handleDownloadFeedback = ()=>{
        if (!analysis) return;
        const file = new Blob([
            analysis
        ], {
            type: "text/plain"
        });
        const fileURL = URL.createObjectURL(file);
        const a = document.createElement("a");
        a.href = fileURL;
        a.setAttribute("download", "AI_Feedback.txt");
        a.click();
        URL.revokeObjectURL(fileURL);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center min-h-screen bg-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: (e)=>e.preventDefault(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold mb-4",
                        children: "Upload Your Resume"
                    }, void 0, false, {
                        fileName: "[project]/src/app/upload/page.js",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        accept: ".pdf,.doc,.docx",
                        className: "mb-4 p-2 border rounded",
                        onChange: handleFileChange
                    }, void 0, false, {
                        fileName: "[project]/src/app/upload/page.js",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleUpload,
                        className: "px-4 py-2 bg-blue-500 text-white rounded",
                        disabled: loading,
                        children: loading ? "Analyzing..." : "Upload"
                    }, void 0, false, {
                        fileName: "[project]/src/app/upload/page.js",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/upload/page.js",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center mt-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipLoader$3e$__["ClipLoader"], {
                    color: "#3498db",
                    loading: loading,
                    size: 40
                }, void 0, false, {
                    fileName: "[project]/src/app/upload/page.js",
                    lineNumber: 216,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/upload/page.js",
                lineNumber: 215,
                columnNumber: 9
            }, this),
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4",
                children: [
                    " ",
                    message,
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/upload/page.js",
                lineNumber: 220,
                columnNumber: 19
            }, this),
            analysis && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 p-4 bg-blue-100 shadow rounded max-w-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-bold",
                        children: "AI Feedback"
                    }, void 0, false, {
                        fileName: "[project]/src/app/upload/page.js",
                        lineNumber: 224,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                        className: "text-sm",
                        children: analysis
                    }, void 0, false, {
                        fileName: "[project]/src/app/upload/page.js",
                        lineNumber: 225,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleDownloadFeedback,
                        className: "mt-2 px-4 py-2 bg-green-500 text-white rounded",
                        children: "Download Feedback"
                    }, void 0, false, {
                        fileName: "[project]/src/app/upload/page.js",
                        lineNumber: 226,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/upload/page.js",
                lineNumber: 223,
                columnNumber: 9
            }, this),
            analysis && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CoverLetter, {
                analysis: analysis
            }, void 0, false, {
                fileName: "[project]/src/app/upload/page.js",
                lineNumber: 236,
                columnNumber: 20
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/upload/page.js",
        lineNumber: 195,
        columnNumber: 5
    }, this);
}
_s(Upload, "kQKZGWwWoH4lJhySenrxJfwkzFM=");
_c = Upload;
var _c;
__turbopack_refresh__.register(_c, "Upload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/upload/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_6500ce._.js.map