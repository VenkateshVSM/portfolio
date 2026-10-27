import React, { useState } from 'react'
import {
  Calendar,
  PlusCircle,
  Search,
  Sparkles,
  BookOpen,
  Check,
  Trash2,
  ArrowUpRight,
} from 'lucide-react'

interface Note {
  id: string
  date: string
  title: string
  category: string
  content: string
}

export const ChronicleWidget: React.FC = () => {
  const initialNotes: Note[] = [
    {
      id: '1',
      date: '2026-10-26',
      title: 'Supabase RLS Policy & PostgreSQL Schema Validation',
      category: 'Database Architecture',
      content:
        'Audited row-level security policies on student tables. Configured foreign key cascade rules to prevent orphan records during bulk updates.',
    },
    {
      id: '2',
      date: '2026-10-25',
      title: 'Power BI DAX CALCULATE & YTD Measures',
      category: 'Business Intelligence',
      content:
        'Refactored DATESYTD calculation to handle non-contiguous fiscal calendar slices without memory blowouts in Power BI service.',
    },
    {
      id: '3',
      date: '2026-10-24',
      title: 'FFmpeg Audio Transcoding Bitrate Benchmark',
      category: 'Python & Media',
      content:
        'Verified constant 320kbps vs variable VBR audio encoding times on 4K MP4 inputs. Reduced processing time by 38% using FFmpeg subprocess stream piping.',
    },
  ]

  const [notes, setNotes] = useState<Note[]>(initialNotes)
  const [newTitle, setNewTitle] = useState('')
  const [newContent, setNewContent] = useState('')
  const [newCategory, setNewCategory] = useState('Full Stack')
  const [searchQuery, setSearchQuery] = useState('')
  const [saveSuccess, setSaveSuccess] = useState(false)

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTitle.trim() || !newContent.trim()) return

    const newNote: Note = {
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      title: newTitle.trim(),
      category: newCategory,
      content: newContent.trim(),
    }

    setNotes([newNote, ...notes])
    setNewTitle('')
    setNewContent('')
    setSaveSuccess(true)
    setTimeout(() => setSaveSuccess(false), 2500)
  }

  const handleDeleteNote = (id: string) => {
    setNotes(notes.filter((n) => n.id !== id))
  }

  const filteredNotes = notes.filter(
    (n) =>
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-blue-500/30 shadow-2xl relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              Live Interactive Workspace Demo
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Chronicle: Date-Based Noting Playground
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Test the live concept: capture time-anchored engineering notes and review retention schedules.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/VenkateshVSM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
          >
            <span>GitHub Repo</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Left Column: Form to Write Date-Based Note */}
        <div className="lg:col-span-5 bg-slate-900/70 p-5 rounded-xl border border-slate-800">
          <div className="flex items-center gap-2 text-white font-bold text-sm mb-4">
            <PlusCircle className="w-4 h-4 text-cyan-400" />
            <span>Write New Date-Anchored Note</span>
          </div>

          <form onSubmit={handleAddNote} className="space-y-3.5 text-xs">
            <div>
              <label className="block text-slate-400 mb-1 font-medium">Topic / Title</label>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="e.g., Supabase Auth RLS Rules..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-slate-400 mb-1 font-medium">Log Date</label>
                <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 font-mono text-[11px]">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{new Date().toISOString().split('T')[0]}</span>
                </div>
              </div>
              <div>
                <label className="block text-slate-400 mb-1 font-medium">Domain Category</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-2 text-slate-300 focus:outline-none focus:border-cyan-400"
                >
                  <option value="Full Stack">Full Stack</option>
                  <option value="Database Architecture">Database Architecture</option>
                  <option value="Business Intelligence">Business Intelligence</option>
                  <option value="Software Quality & QA">Software Quality & QA</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-medium">Technical Note Body</label>
              <textarea
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                rows={3}
                placeholder="Record observation, algorithm approach, or debugging notes..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={!newTitle.trim() || !newContent.trim()}
              className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 disabled:opacity-50 hover:opacity-95 transition-all shadow-md shadow-cyan-500/20"
            >
              {saveSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Saved to Chronicle!</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Save Note to Chronicle</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Column: Note Feed with search and review cards */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>Indexed Chronicle Notes ({filteredNotes.length})</span>
              </div>

              {/* Search bar */}
              <div className="relative w-44 sm:w-56">
                <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter notes..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            {/* Note Cards List */}
            <div className="space-y-3 max-h-[290px] overflow-y-auto pr-1">
              {filteredNotes.length === 0 ? (
                <div className="text-center py-8 text-slate-500 text-xs">
                  No notes match your filter.
                </div>
              ) : (
                filteredNotes.map((note) => (
                  <div
                    key={note.id}
                    className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 transition-all text-xs group"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-cyan-400 font-semibold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                          {note.date}
                        </span>
                        <span className="text-[10px] text-slate-400 px-2 py-0.5 rounded bg-slate-800">
                          {note.category}
                        </span>
                      </div>
                      <button
                        onClick={() => handleDeleteNote(note.id)}
                        className="text-slate-500 hover:text-rose-400 transition-colors p-1"
                        title="Delete note"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h5 className="font-bold text-white text-sm mb-1 group-hover:text-cyan-300 transition-colors">
                      {note.title}
                    </h5>
                    <p className="text-slate-300 leading-relaxed">{note.content}</p>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span>Powered by React state & Supabase PostgreSQL relational schemas</span>
            <span className="text-cyan-400 font-semibold">Date-Anchored Retention Engine</span>
          </div>
        </div>
      </div>
    </div>
  )
}
