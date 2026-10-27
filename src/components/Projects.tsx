import React, { useState } from 'react'
import { projects } from '../data/portfolioData'
import { PowerBISimulator } from './PowerBISimulator'
import { ChronicleWidget } from './ChronicleWidget'
import {
  Sparkles,
  Layers,
  BarChart3,
  Music,
  CheckCircle,
  Play,
  ExternalLink,
} from 'lucide-react'
import { GithubIcon } from './Icons'

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'data' | 'tool'>('all')
  const [activeLiveDemo, setActiveLiveDemo] = useState<'powerbi' | 'chronicle' | null>('powerbi')

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  const getProjectIcon = (category: string) => {
    switch (category) {
      case 'data':
        return <BarChart3 className="w-5 h-5 text-emerald-400" />
      case 'tool':
        return <Music className="w-5 h-5 text-amber-400" />
      case 'web':
      default:
        return <Layers className="w-5 h-5 text-cyan-400" />
    }
  }

  const webCount = projects.filter((p) => p.category === 'web').length
  const dataCount = projects.filter((p) => p.category === 'data').length
  const toolCount = projects.filter((p) => p.category === 'tool').length

  return (
    <section id="projects" className="py-20 bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3 border border-cyan-500/20">
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Real-world deployed web applications, relational SQL architectures,
            enterprise Power BI business intelligence dashboards, and media utilities.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30 font-bold'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveCategory('web')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === 'web'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30 font-bold'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              Full-Stack & Web ({webCount})
            </button>
            <button
              onClick={() => setActiveCategory('data')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === 'data'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30 font-bold'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              Data & Power BI ({dataCount})
            </button>
            <button
              onClick={() => setActiveCategory('tool')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === 'tool'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30 font-bold'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              Media & Utilities ({toolCount})
            </button>
          </div>
        </div>

        {/* Live Interactive Playground Section */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-bold text-white">Live In-Page Simulators</h3>
              <span className="text-xs text-slate-400">(Interact with working logic)</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveLiveDemo('powerbi')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  activeLiveDemo === 'powerbi'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 shadow-md shadow-emerald-500/20 font-bold'
                    : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Power BI Sales Simulator</span>
              </button>

              <button
                onClick={() => setActiveLiveDemo('chronicle')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  activeLiveDemo === 'chronicle'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/20 font-bold'
                    : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Chronicle Note Playground</span>
              </button>
            </div>
          </div>

          {activeLiveDemo === 'powerbi' && <PowerBISimulator />}
          {activeLiveDemo === 'chronicle' && <ChronicleWidget />}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl border border-slate-800/90 overflow-hidden flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div className="p-6 sm:p-7">
                {/* Card Top Pill & Category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                      {getProjectIcon(project.category)}
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block">
                        {project.highlight}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-sm"
                        title="Open Live Deployment in new tab"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.featuredMetric && (
                      <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-900/90 text-slate-300 border border-slate-800">
                        {project.featuredMetric}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 mb-4 font-medium">{project.subtitle}</p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2 pt-3 border-t border-slate-800/80">
                  {project.bulletPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-slate-950/70 border-t border-slate-800/90 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  {/* Live App Link Button */}
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:opacity-95 shadow-sm shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Launch Live App</span>
                    </a>
                  )}

                  {/* GitHub Source Link */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Source Code</span>
                    </a>
                  )}

                  {/* Live Simulation Trigger (Power BI) */}
                  {project.id === 'powerbi-sales' && (
                    <button
                      onClick={() => {
                        setActiveLiveDemo('powerbi')
                        window.scrollTo({
                          top: document.getElementById('projects')?.offsetTop! + 200,
                          behavior: 'smooth',
                        })
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/25 transition-colors"
                    >
                      <Play className="w-3 h-3 text-emerald-400" />
                      <span>Interactive Simulator</span>
                    </button>
                  )}

                  {/* Live Simulation Trigger (Chronicle) */}
                  {project.id === 'chronicle' && (
                    <button
                      onClick={() => {
                        setActiveLiveDemo('chronicle')
                        window.scrollTo({
                          top: document.getElementById('projects')?.offsetTop! + 200,
                          behavior: 'smooth',
                        })
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/25 transition-colors"
                    >
                      <Play className="w-3 h-3 text-cyan-400" />
                      <span>Try Playground</span>
                    </button>
                  )}
                </div>

                <span className="text-[11px] text-slate-500 font-mono">
                  {project.category.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
