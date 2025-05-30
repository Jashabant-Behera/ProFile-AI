# ProFile-AI
ProFile-AI: Resume Analyzer & Cover Letter Generator

Overview
ProFile-AI is an AI-powered web application designed to help job seekers improve their resumes and generate personalized cover letters. 
The platform analyzes uploaded resumes for Applicant Tracking System (ATS) compatibility and provides customized cover letters based on 
the job description and resume content.

Key Features
✅ Resume Analysis: Upload your resume to receive insights on its ATS-friendliness.

✅ Cover Letter Generation: Generate tailored cover letters aligned with the job description.

✅ PDF Upload Support: Accepts resumes in PDF format and extracts text using PDF Parse.

✅ Secure Data Storage: Stores uploaded files securely using Supabase.

✅ Real-time AI Responses: Utilizes OpenAI API for instant resume feedback and cover letter generation.


Technology Stack
Frontend:
- Framework: Next.js (React-based)
- Hosting: Vercel (Frontend deployment)
- Styling: Tailwind CSS & Custom CSS

Backend:
- Platform: Node.js
- Hosting: Render (Backend deployment)
- Libraries: PDF Parse for text extraction, Axios for API communication

APIs & Databases:
- OpenAI API: For AI-based resume analysis and cover letter generation
- Supabase: For secure storage of uploaded resumes

System Architecture
1. User Uploads Resume: The resume is uploaded through the client-side interface.
2. PDF Parsing: The backend processes the uploaded PDF using PDF Parse to extract the text.
3. OpenAI API Call: The extracted text is sent to OpenAI API for ATS analysis and cover letter generation.
4. Data Storage: The resume file and extracted text are securely stored in Supabase.
5. Results Displayed: The frontend displays analysis results and the generated cover letter in real-time.

Deployment

Frontend Deployment on Vercel
1. Connect GitHub Repository to Vercel.
2. Set root directory as /client and define the build command as npm run build.
3. Add environment variables from .env file (excluding sensitive backend keys).
4. Deploy the frontend and access the live website.

Backend Deployment on Render
1. Connect GitHub Repository to Render.
2. Set root directory as /server and define the start command as node index.js.
3. Add backend environment variables such as OpenAI API keys and Supabase credentials.
4. Deploy the backend and obtain the live API endpoint.

Installation (Local Development)
1. Clone the Repository:
git clone https://github.com/Jashabant-Behera/ProFile-AI.git
cd ProFile-AI

2. Frontend Setup:
cd client
npm install
npm run dev

3. Backend Setup:
cd server
npm install
node index.js

4. Environment Variables:
Create .env files in both /client and /server directories and add necessary variables.

Environment Variables
Frontend:
- NEXT_PUBLIC_BACKEND_URL: URL of the Render backend

Backend:
- OPENAI_API_KEY: API key for OpenAI
- SUPABASE_URL: Supabase project URL
- SUPABASE_KEY: Supabase service role key

Usage
1. Upload your resume as a PDF.
2. Receive ATS compatibility insights within seconds.
3. Generate a personalized cover letter by entering the job description.
4. Download the cover letter in PDF format.

Security Measures
✅ Environment variables are used to protect sensitive keys.

✅ Uploaded files are securely stored in Supabase.

✅ CORS policies are configured to prevent unauthorized access.


Future Enhancements
- Add support for DOCX files.
- Enable customizable cover letter templates.
- Implement multilingual support.
- Offer real-time suggestions while editing resumes.

Contributors
- Jashabant Behera - Full-Stack Developer

