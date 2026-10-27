import React from 'react'
import { experienceData } from '../data/portfolioData'
import { Calendar, Building2, CheckCircle2 } from 'lucide-react'

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3 border border-cyan-500/20">
            Professional Track
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry Internships & Practical Experience
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Hands-on exposure to commercial software development environments, database integration,
            and data science collaboration.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-5 sm:before:left-8 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-blue-500 before:to-slate-800">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative pl-12 sm:pl-20 group">
              {/* Timeline marker */}
              <div className="absolute left-3 sm:left-6 -translate-x-1/2 top-1.5 w-5 h-5 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 group-hover:border-white transition-all shadow-md shadow-cyan-500/40 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

              {/* Card Container */}
              <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 mb-1.5">
                      {exp.badge}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Company */}
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-4">
                  <Building2 className="w-4 h-4 text-cyan-400" />
                  <span>{exp.company}</span>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs text-slate-400 mr-2 font-medium">Domain Exposure:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
