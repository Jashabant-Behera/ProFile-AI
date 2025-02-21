"use client";
import Link from "next/link";
import "../styles/globals.css";

export default function Home() {
  return (
    <div className="container">
      <div className="headerdiv">
        <h1 className="header1">The AI Resume Analyzer</h1>
        <h1 className="header2">
          Let AI handle your resume and cover letter,<br/> so you can focus on
          your career.
        </h1>
      </div>
      <div className="main-blur">
        <Link href="/upload">
          <button className="uploadbtn">Upload Resume</button>
        </Link>
      </div>
    </div>
  );
}
