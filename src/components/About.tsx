import React from 'react'
import { personalInfo, educationData, languagesSpoken } from '../data/portfolioData'
import {
  CheckCircle,
  Database,
  Cpu,
  GraduationCap,
  Globe2,
  Shield,
  FileCheck2,
  TrendingUp,
} from 'lucide-react'

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Database,
      title: 'Database Architecture & Schema Design',
      desc: 'Hands-on proficiency in structuring normalized relational databases, optimizing SQL queries, and utilizing Supabase for cloud persistence, role-based security, and real-time syncing.',
    },
    {
      icon: Cpu,
      title: 'Full Software Lifecycle (SDLC)',
      desc: 'Comfortable executing every phase from requirements discovery and wireframing to frontend coding, rigorous debugging, automated error tracing, and production deployment.',
    },
    {
      icon: TrendingUp,
      title: 'Business Intelligence & Data Modeling',
      desc: 'Proven capability with Power BI and DAX to build 4-page enterprise analytical reports, track millions in revenue, analyze customer retention cohorts, and present executive metrics.',
    },
    {
      icon: Shield,
      title: 'Discipline, Leadership & Rigor',
      desc: 'NCC "C" Certificate Lance Corporal holding Grade "B". Brings military-grade team coordination, unwavering reliability under tight timelines, and analytical composure to software engineering teams.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3 border border-cyan-500/20">
            Professional Overview
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Clean Code & Data-Driven Systems
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Bridging the gap between software development and deep data analysis to deliver
            applications that are performant, scalable, and easy to maintain.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-cyan-400" />
                <span>Executive Summary</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
                {personalInfo.summary}
              </p>
              <div className="pt-4 border-t border-slate-800 space-y-2.5">
                <div className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Target Position:</strong> Software Analyst / Full-Stack Developer
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Core Expertise:</strong> Python, TypeScript, React, SQL, Supabase, Power BI
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Work Location:</strong> Tirunelveli, Tamil Nadu, India (Open to Remote / Relocation)
                  </span>
                </div>
              </div>
            </div>

            {/* Languages and Communication */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800">
              <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-cyan-400" />
                <span>Communication & Languages</span>
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {languagesSpoken.map((lang) => (
                  <div
                    key={lang.language}
                    className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80"
                  >
                    <div className="font-semibold text-white text-sm">{lang.language}</div>
                    <div className="text-xs text-cyan-400">{lang.proficiency}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Key Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <div
                  key={i}
                  className="glass-card p-5 rounded-2xl border border-slate-800/80 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">{pillar.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Education Timeline Cards */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800">
          <div className="flex items-center gap-2.5 mb-6">
            <GraduationCap className="w-6 h-6 text-cyan-400" />
            <h3 className="text-xl font-bold text-white">Education History</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/70 border border-slate-800/90 relative group hover:border-cyan-500/30 transition-all"
              >
                <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
                  {edu.period}
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {edu.degree}
                </h4>
                <p className="text-sm font-medium text-slate-300 mt-1 mb-2">
                  {edu.institution}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {edu.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
