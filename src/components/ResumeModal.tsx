import React, { useState } from 'react'
import { personalInfo } from '../data/portfolioData'
import {
  X,
  Printer,
  Copy,
  Check,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from 'lucide-react'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false)

  if (!isOpen) return null

  const handlePrint = () => {
    window.print()
  }

  const handleCopyText = () => {
    const resumeText = `
M. VENKATESH
B.Tech Information Technology | Aspiring Software Analyst / Developer
Email: ${personalInfo.email} | Phone: ${personalInfo.phone} | Location: ${personalInfo.location}
LinkedIn: ${personalInfo.linkedin} | GitHub: ${personalInfo.github}

PROFESSIONAL SUMMARY
${personalInfo.summary}

EDUCATION
Bachelor of Technology, Information Technology (2023 – 2027)
Loyola Institute of Science and Technology
Higher Secondary, Computer Science
Kendriya Vidyalaya, Vijayanarayanam, Tirunelveli

TECHNICAL SKILLS
Languages: Python, JavaScript, TypeScript, Java (training), HTML, CSS
Databases: SQL, Supabase (cloud database and backend), database design and record management
Frameworks: React, Vite, Bootstrap
Tools: Git, GitHub, FFmpeg, Microsoft Excel, Power BI, DAX
Strengths: Debugging, Problem Solving, Analytical Thinking, Attention to Detail, Team Collaboration

PROJECTS
• Chronicle: Date-Based Noting & Review Workspace (Diary) (React, TypeScript, Vite, Supabase)
  Live: https://venkateshvsm.github.io/diary/ | GitHub: https://github.com/VenkateshVSM
• AI-Powered Student Management System (HTML, CSS, JavaScript, Supabase, SQL)
  Live: https://venkateshvsm.github.io/student-management-system/ | GitHub: https://github.com/VenkateshVSM
• Instagram Media & Reel Downloader (React, TypeScript, Vercel)
  Live: https://instagram-downloader-8oitem8vy-venkatesh292005-6275s-projects.vercel.app/
• Sales Dashboard: Interactive Power BI Report (Power BI, DAX) - ₹8.76M sales, ₹2.15M profit, 3K orders, 545 customers
  GitHub: https://github.com/VenkateshVSM
• MP4 to MP3 Audio Extractor & Converter (Python, FFmpeg)
  Live: https://venkateshvsm.github.io/mp4_to_mp3_converter/ | GitHub: https://github.com/VenkateshVSM

INTERNSHIPS
• Web Development Intern, Thisai Technologies Private Limited (Jun 17 – Jul 4, 2026)
• Intern, AK Infopark Private Limited (Full Stack Web: 10–23 Jul 2025; Data Science with Python: 21 Jan–4 Feb 2025)

CERTIFICATIONS
• Cloud Computing, NPTEL, IIT Kharagpur (12 weeks, Jan–Apr 2025)
• AK Infopark: Python Training, Front-End Web Development, JAVA Expert Program
• Java Training, MyInception Tech, Chennai | Tekla Structural Steel (Grade A+) | Python SoloLearn

ACHIEVEMENTS
• NCC 'C' Certificate, Grade 'B' (2026): Lance Corporal, 29 (TN) Indep Coy NCC
• Galactico's Fest 2K25: Certificate of Achievement in Connection; Debugging & Web Designing
    `.trim()

    navigator.clipboard.writeText(resumeText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-6">
        {/* Modal Controls Toolbar (Hidden in print) */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan-400" />
            <h3 className="text-sm font-bold text-white">Resume Document Preview</h3>
            <span className="text-xs text-slate-400 hidden sm:inline">| M. Venkatesh</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors shadow-md shadow-cyan-500/20"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div
          id="printable-resume"
          className="p-6 sm:p-10 bg-white text-slate-900 font-sans max-h-[82vh] overflow-y-auto print:max-h-none print:overflow-visible print:p-0 print:text-black selection:bg-slate-200"
        >
          {/* Header */}
          <div className="text-center pb-5 border-b-2 border-slate-900">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mb-1">
              M. VENKATESH
            </h1>
            <p className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-2.5">
              B.Tech Information Technology | Aspiring Software Analyst / Developer
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-700">
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-slate-900" />
                {personalInfo.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-slate-900" />
                {personalInfo.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-900" />
                {personalInfo.location}
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-blue-700 font-medium mt-1">
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                linkedin.com/in/venkatesh-m-3556722a2
              </a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:underline">
                github.com/VenkateshVSM
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mt-5">
            <h2 className="text-sm font-extrabold tracking-wider text-slate-950 uppercase border-b border-slate-300 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-800 leading-relaxed text-justify">
              {personalInfo.summary}
            </p>
          </div>

          {/* Education */}
          <div className="mt-5">
            <h2 className="text-sm font-extrabold tracking-wider text-slate-950 uppercase border-b border-slate-300 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-baseline">
                <div>
                  <strong className="text-slate-950 font-bold">
                    Bachelor of Technology, Information Technology
                  </strong>
                  <div className="text-slate-700">Loyola Institute of Science and Technology</div>
                </div>
                <div className="font-semibold text-slate-900">2023 – 2027</div>
              </div>

              <div className="flex justify-between items-baseline pt-1">
                <div>
                  <strong className="text-slate-950 font-bold">
                    Higher Secondary, Computer Science
                  </strong>
                  <div className="text-slate-700">
                    Kendriya Vidyalaya, Vijayanarayanam, Tirunelveli
                  </div>
                </div>
                <div className="font-semibold text-slate-900">Completed</div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mt-5">
            <h2 className="text-sm font-extrabold tracking-wider text-slate-950 uppercase border-b border-slate-300 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="space-y-1 text-xs text-slate-800">
              <div>
                <strong className="font-bold text-slate-950">Languages:</strong> Python, JavaScript, TypeScript, Java (training), HTML, CSS
              </div>
              <div>
                <strong className="font-bold text-slate-950">Databases:</strong> SQL, Supabase (cloud database and backend), database design and record management
              </div>
              <div>
                <strong className="font-bold text-slate-950">Frameworks:</strong> React, Vite, Bootstrap
              </div>
              <div>
                <strong className="font-bold text-slate-950">Tools:</strong> Git, GitHub, FFmpeg, Microsoft Excel, Power BI, DAX
              </div>
              <div>
                <strong className="font-bold text-slate-950">Strengths:</strong> Debugging, Problem Solving, Analytical Thinking, Attention to Detail, Team Collaboration
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mt-5">
            <h2 className="text-sm font-extrabold tracking-wider text-slate-950 uppercase border-b border-slate-300 pb-1 mb-2">
              Projects & Live Deployments
            </h2>
            <div className="space-y-3.5 text-xs">
              <div>
                <div className="flex flex-wrap justify-between items-center font-bold text-slate-950 gap-1">
                  <span>Chronicle: Date-Based Noting & Review Workspace (Diary) <span className="font-normal italic">(React, TypeScript, Vite, Supabase)</span></span>
                  <div className="flex items-center gap-2 text-[11px]">
                    <a href="https://venkateshvsm.github.io/diary/" target="_blank" rel="noreferrer" className="text-blue-700 hover:underline flex items-center gap-0.5">
                      <span>Live App</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                    <span>•</span>
                    <a href="https://github.com/VenkateshVSM" target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                      GitHub
                    </a>
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-0.5 text-slate-800">
                  <li>Built a web workspace for writing date-based notes and reviewing them later, with Supabase as the backend.</li>
                  <li>Designed a clean, responsive interface with custom web fonts and instant cloud synchronization.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap justify-between items-center font-bold text-slate-950 gap-1">
                  <span>AI-Powered Student Management System <span className="font-normal italic">(HTML, CSS, JavaScript, Supabase, SQL)</span></span>
                  <div className="flex items-center gap-2 text-[11px]">
                    <a href="https://venkateshvsm.github.io/student-management-system/" target="_blank" rel="noreferrer" className="text-blue-700 hover:underline flex items-center gap-0.5">
                      <span>Live App</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                    <span>•</span>
                    <a href="https://github.com/VenkateshVSM" target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                      GitHub
                    </a>
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-0.5 text-slate-800">
                  <li>Developed a web-based application to manage student records, from requirements and design through coding and deployment.</li>
                  <li>Designed and managed SQL tables for storing and retrieving student data; integrated Supabase for cloud storage.</li>
                  <li>Built responsive user interfaces with zero schema anomalies.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap justify-between items-center font-bold text-slate-950 gap-1">
                  <span>Instagram Media & Reel Downloader <span className="font-normal italic">(React, TypeScript, Vercel)</span></span>
                  <div className="flex items-center gap-2 text-[11px]">
                    <a href="https://instagram-downloader-8oitem8vy-venkatesh292005-6275s-projects.vercel.app/" target="_blank" rel="noreferrer" className="text-blue-700 hover:underline flex items-center gap-0.5">
                      <span>Live App</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-0.5 text-slate-800">
                  <li>High-speed web app deployed on Vercel to fetch, preview, and download high-resolution Instagram reels and media.</li>
                  <li>Optimized API pipeline with instant asset streaming and responsive UI.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap justify-between items-center font-bold text-slate-950 gap-1">
                  <span>Sales Dashboard: Interactive Power BI Report <span className="font-normal italic">(Power BI, DAX)</span></span>
                  <a href="https://github.com/VenkateshVSM" target="_blank" rel="noreferrer" className="text-blue-700 hover:underline text-[11px]">
                    GitHub
                  </a>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-0.5 text-slate-800">
                  <li>Built a 4-page dashboard (Executive Overview, Customer, Product, Sales & Profitability) with slicers and monthly trends.</li>
                  <li>Tracked 8.76M total sales, ₹2.15M profit, 3K orders and 545 customers; analysed segmentation (520 returning customers, 95% return rate).</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap justify-between items-center font-bold text-slate-950 gap-1">
                  <span>MP4 to MP3 Audio Extractor & Converter <span className="font-normal italic">(Python, FFmpeg)</span></span>
                  <div className="flex items-center gap-2 text-[11px]">
                    <a href="https://venkateshvsm.github.io/mp4_to_mp3_converter/" target="_blank" rel="noreferrer" className="text-blue-700 hover:underline flex items-center gap-0.5">
                      <span>Live App</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-0.5 text-slate-800">
                  <li>Built an application to convert MP4 videos into MP3 audio with file handling, media processing and a simple interface.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Internships */}
          <div className="mt-5">
            <h2 className="text-sm font-extrabold tracking-wider text-slate-950 uppercase border-b border-slate-300 pb-1 mb-2">
              Internships
            </h2>
            <div className="space-y-2.5 text-xs">
              <div>
                <div className="flex justify-between font-bold text-slate-950">
                  <span>Web Development Intern, Thisai Technologies Private Limited</span>
                  <span>Jun 17 – Jul 4, 2026</span>
                </div>
                <ul className="list-disc list-outside ml-4 mt-0.5 text-slate-800">
                  <li>Gained practical exposure to web development concepts and project-based implementation; received a Certificate of Internship.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-950">
                  <span>Intern, AK Infopark Private Limited</span>
                  <span>Jan 2025 and Jul 2025</span>
                </div>
                <ul className="list-disc list-outside ml-4 mt-0.5 text-slate-800 space-y-0.5">
                  <li>Full Stack Web Development (10 – 23 Jul 2025): worked with databases and web technologies.</li>
                  <li>Data Science with Python (21 Jan – 4 Feb 2025): collaborated with team members during project development.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications and Training */}
          <div className="mt-5">
            <h2 className="text-sm font-extrabold tracking-wider text-slate-950 uppercase border-b border-slate-300 pb-1 mb-2">
              Certifications and Training
            </h2>
            <ul className="list-disc list-outside ml-4 text-xs text-slate-800 space-y-1">
              <li>
                <strong>AK Infopark:</strong> Placement Oriented Python Training (2024–25); Front-End Web Development with HTML, CSS, JavaScript, Bootstrap (2024–25); JAVA Expert Training Program (2025–26)
              </li>
              <li>
                <strong>Java Training</strong>, MyInception Tech, Chennai (10 days, Dec 2025) | <strong>Cloud Computing</strong>, NPTEL, IIT Kharagpur (12 weeks, Jan–Apr 2025)
              </li>
              <li>
                <strong>Tekla Structural Steel Basic Training</strong>, SWT Enterprises (Grade A+, Jul 2023) | <strong>Python</strong> (Introduction, Beginners, Intermediate), SoloLearn
              </li>
            </ul>
          </div>

          {/* Achievements and Extra-Curricular */}
          <div className="mt-5">
            <h2 className="text-sm font-extrabold tracking-wider text-slate-950 uppercase border-b border-slate-300 pb-1 mb-2">
              Achievements and Extra-Curricular
            </h2>
            <ul className="list-disc list-outside ml-4 text-xs text-slate-800 space-y-1">
              <li>
                <strong>NCC 'C' Certificate, Grade 'B' (2026):</strong> Lance Corporal, 29 (TN) Indep Coy NCC, Tamil Nadu, Puducherry & Andaman Nicobar Directorate
              </li>
              <li>
                <strong>Galactico's Fest 2K25 (national-level symposium, 7 Oct 2025):</strong> Certificate of Achievement in Connection; Participation in Debugging and Web Designing
              </li>
              <li>
                <strong>Languages:</strong> English, Tamil
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
