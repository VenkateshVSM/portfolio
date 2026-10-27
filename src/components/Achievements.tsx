import React from 'react'
import { achievementsData } from '../data/portfolioData'
import { Shield, Trophy, Flag, Target } from 'lucide-react'

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3 border border-cyan-500/20">
            Honors & Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Achievements & Extracurricular Excellence
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Distinguished by military-grade discipline from the National Cadet Corps and
            competitive victories in national technical symposiums.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-7 sm:p-8 rounded-2xl border border-slate-800/90 relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all" />

              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    {item.id === 'ncc-c' ? <Shield className="w-6 h-6" /> : <Trophy className="w-6 h-6" />}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-cyan-400 mb-4">{item.subtitle}</p>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-cyan-400" />
                  <span>{item.badge}</span>
                </span>
                <span className="font-mono text-slate-500 font-semibold">{item.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Callout */}
        <div className="mt-12 max-w-5xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/90 border border-cyan-500/25 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Flag className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                What NCC Leadership Brings to Engineering Teams
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Punctuality, clear task delegation, accountability in high-stakes deployments, and proactive communication.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <span className="inline-block px-4 py-2 rounded-xl text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              Verified Directorate Rank
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
