import Head from "next/head";
import "../styles/globals.css";

export const metadata = {
  title: "ProFile-AI",
  description: "AI-powered Resume & Cover Letter Generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Head>
      <body className="page-background">
        <div className="overlay">
          <div className="profilediv">
              <h1 className="protext1">Pro</h1>
              <h1 className="protext2">File AI</h1>
          </div>
        </div>
        <main className="content">{children}</main>
      </body>
    </html>
  );
}
