import React, { useState } from 'react'
import { skillCategories } from '../data/portfolioData'
import {
  Code2,
  Database,
  Layout,
  BarChart3,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />
      case 'Database':
        return <Database className="w-5 h-5 text-blue-400" />
      case 'Layout':
        return <Layout className="w-5 h-5 text-indigo-400" />
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-sky-400" />
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />
      default:
        return <Code2 className="w-5 h-5 text-cyan-400" />
    }
  }

  const filteredCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.title.toLowerCase().includes(selectedCategory.toLowerCase()))

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3 border border-cyan-500/20">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Skills Matrix
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Specialized toolkit spanning frontend architectures, backend databases,
            business intelligence analytics, and software testing rigor.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              All Skills ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
            </button>
            {skillCategories.map((cat) => {
              const key = cat.title.toLowerCase().split(' ')[0]
              const isSelected = selectedCategory === key
              return (
                <button
                  key={cat.title}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                      : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  {cat.title}
                </button>
              )
            })}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.title}
              className="glass-card p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800/80">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                </div>

                <div className="space-y-3.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors group"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-semibold text-slate-200 text-sm group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                            skill.level === 'Expert' || skill.level === 'Advanced'
                              ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                              : skill.level === 'Certified'
                              ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                              : 'bg-blue-500/15 text-blue-400 border border-blue-500/30'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      {skill.tags && (
                        <p className="text-xs text-slate-400 leading-normal">
                          {skill.tags}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Software Analyst Deliverables Spotlight */}
        <div className="mt-12 glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-cyan-400" />
            <h3 className="text-xl font-bold text-white">How This Stack Serves a Software Analyst Role</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80">
              <div className="font-bold text-white text-sm mb-1 text-cyan-400">1. Data Requirement Tracing</div>
              <p className="text-xs text-slate-400">
                Uses SQL schemas and Power BI DAX to audit data models, ensuring business logic translates directly into table relations without redundancy.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80">
              <div className="font-bold text-white text-sm mb-1 text-cyan-400">2. Root Cause Debugging</div>
              <p className="text-xs text-slate-400">
                Trained in systematic fault isolation across browser consoles, network payloads, API states, and backend database transactions.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80">
              <div className="font-bold text-white text-sm mb-1 text-cyan-400">3. Rapid Prototyping</div>
              <p className="text-xs text-slate-400">
                Quickly builds proof-of-concept user interfaces with React, Vite, and Supabase to validate requirements with stakeholders before full release.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80">
              <div className="font-bold text-white text-sm mb-1 text-cyan-400">4. Executive Reporting</div>
              <p className="text-xs text-slate-400">
                Transforms raw transaction logs into executive Power BI visual stories, highlighting churn, retention cohorts, and revenue margins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
