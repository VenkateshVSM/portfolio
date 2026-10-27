import React from 'react'
import { personalInfo } from '../data/portfolioData'
import {
  FileText,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Terminal,
  BarChart2,
  Code2,
  Award,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

interface HeroProps {
  onOpenResume: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Glow Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/15 to-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[350px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-medium text-cyan-300 mb-6 shadow-md shadow-cyan-950/40 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personalInfo.status}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          {/* Subtitle / Role */}
          <p className="text-xl sm:text-2xl font-semibold text-slate-300 mb-4 flex items-center justify-center flex-wrap gap-2">
            <span>{personalInfo.role}</span>
            <span className="text-cyan-500 hidden sm:inline">•</span>
            <span className="text-cyan-400 text-lg sm:text-xl font-medium">B.Tech IT (2023–2027)</span>
          </p>

          {/* Bio text */}
          <p className="text-base sm:text-lg text-slate-400 max-w-3xl leading-relaxed mb-8">
            Specializing in <span className="text-slate-200 font-semibold">Python</span>,{' '}
            <span className="text-slate-200 font-semibold">TypeScript & React</span>,{' '}
            <span className="text-slate-200 font-semibold">SQL & Supabase</span>, and{' '}
            <span className="text-slate-200 font-semibold">Power BI Business Intelligence</span>.
            Experienced in full-lifecycle SDLC development, normalized database schema design, and high-performance analytical reporting.
          </p>

          {/* Interactive Actions CTA */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm sm:text-base hover:opacity-95 shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-slate-200 border border-slate-700/80 hover:border-cyan-500/50 hover:bg-slate-800/90 font-semibold text-sm sm:text-base transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Interactive Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/60 text-slate-300 border border-slate-700/60 hover:text-white hover:border-slate-500 text-sm sm:text-base font-medium transition-all"
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Contact & Social Quick Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-400 border-t border-slate-800/80 pt-6 max-w-3xl w-full">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>{personalInfo.email}</span>
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>{personalInfo.phone}</span>
            </a>
            <span className="text-slate-700">•</span>
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>{personalInfo.location}</span>
            </span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3 mt-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 text-xs font-medium transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>github.com/VenkateshVSM</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 text-xs font-medium transition-all"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>

        {/* Highlight Quick Stats Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-5xl mx-auto">
          <div className="glass-card p-5 rounded-2xl border border-slate-800/80 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-3">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">5+</div>
            <div className="text-xs text-slate-400 font-medium">Engineered Projects</div>
            <div className="text-[11px] text-cyan-400 mt-1">Full-Stack & Analytics</div>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-slate-800/80 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all pointer-events-none" />
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-3">
              <Terminal className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">3</div>
            <div className="text-xs text-slate-400 font-medium">Industry Internships</div>
            <div className="text-[11px] text-blue-400 mt-1">Web & Data Science</div>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-slate-800/80 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all pointer-events-none" />
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto mb-3">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">7+</div>
            <div className="text-xs text-slate-400 font-medium">Certifications & Training</div>
            <div className="text-[11px] text-indigo-400 mt-1">IIT Kharagpur & Industry</div>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-slate-800/80 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all pointer-events-none" />
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
              <BarChart2 className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">NCC 'C'</div>
            <div className="text-xs text-slate-400 font-medium">Lance Corporal (Grade B)</div>
            <div className="text-[11px] text-emerald-400 mt-1">Military Leadership</div>
          </div>
        </div>
      </div>
    </section>
  )
}
