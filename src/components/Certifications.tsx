import React, { useState } from 'react'
import { certificationsData } from '../data/portfolioData'
import {
  Award,
  Cloud,
  Terminal,
  Coffee,
  Globe,
  Cpu,
  Layers,
  CheckCircle2,
  Calendar,
} from 'lucide-react'

export const Certifications: React.FC = () => {
  const [filter, setFilter] = useState<string>('all')

  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-cyan-400" />
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-emerald-400" />
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-amber-400" />
      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-400" />
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-purple-400" />
      case 'Layers':
        return <Layers className="w-5 h-5 text-indigo-400" />
      default:
        return <Award className="w-5 h-5 text-cyan-400" />
    }
  }

  const filteredCerts =
    filter === 'all'
      ? certificationsData
      : certificationsData.filter((c) => c.category === filter)

  return (
    <section id="certifications" className="py-20 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3 border border-cyan-500/20">
            Continuous Learning
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & Technical Training
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Rigorous programs from premier institutions including IIT Kharagpur (NPTEL),
            industry training academies, and specialized technology workshops.
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              All ({certificationsData.length})
            </button>
            <button
              onClick={() => setFilter('cloud')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === 'cloud'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              Cloud (IIT Kharagpur)
            </button>
            <button
              onClick={() => setFilter('programming')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === 'programming'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              Programming & Java
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === 'web'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              Frontend Web
            </button>
            <button
              onClick={() => setFilter('specialized')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === 'specialized'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              Specialized
            </button>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {getCertIcon(cert.iconName)}
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span>{cert.period}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                  {cert.title}
                </h3>
                <p className="text-xs font-medium text-cyan-400 mb-3">{cert.issuer}</p>

                {cert.gradeOrDetail && (
                  <p className="text-xs text-slate-400 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                    {cert.gradeOrDetail}
                  </p>
                )}
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Credential
                </span>
                <span className="font-mono uppercase text-slate-500">{cert.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
