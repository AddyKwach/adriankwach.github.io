import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import AboutPanel from './components/AboutPanel';
import BlogsPanel from './components/BlogsPanel';
import ProjectsPanel from './components/ProjectsPanel';
import ContactPanel from './components/ContactPanel';

export default function App() {
  // Navigation State
  const [activePanel, setActivePanel] = useState<'about' | 'projects' | 'blog' | 'contact' | null>(null);

  return (
    <div className="relative min-h-screen bg-zinc-950 font-sans text-white select-text overflow-x-hidden flex flex-col justify-between selection:bg-white selection:text-zinc-950">
      
      {/* Background Ambience Underlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.06),rgba(255,255,255,0))] pointer-events-none z-0" />

      {/* 
         CENTER TOP NAVIGATION BAR
         Designed with high-end Apple-style glass-blur, glossy hover select, and pristine sizing
      */}
      <header className="w-full z-30 flex justify-center pt-8 px-4 relative">
        <div className="flex items-center justify-between w-full max-w-4xl">
          {/* Logo Brand Title */}
          <button
            onClick={() => setActivePanel(null)}
            className="text-xs font-bold tracking-[0.25em] text-white focus:outline-none uppercase hover:opacity-80 transition-opacity"
          >
            Adrian Kwach
          </button>

          {/* Centered navigation with glossy glass effects */}
          <nav className="flex items-center p-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-lg shadow-2xl">
            <button
              onClick={() => setActivePanel('about')}
              className={`px-4 py-2 rounded-full text-[11px] font-medium tracking-widest uppercase transition-all duration-300 ${
                activePanel === 'about'
                  ? 'bg-white/10 text-white shadow-inner border border-white/5'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              About
            </button>
            <button
              onClick={() => setActivePanel('projects')}
              className={`px-4 py-2 rounded-full text-[11px] font-medium tracking-widest uppercase transition-all duration-300 ${
                activePanel === 'projects'
                  ? 'bg-white/10 text-white shadow-inner border border-white/5'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActivePanel('blog')}
              className={`px-4 py-2 rounded-full text-[11px] font-medium tracking-widest uppercase transition-all duration-300 ${
                activePanel === 'blog'
                  ? 'bg-white/10 text-white shadow-inner border border-white/5'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              Blog
            </button>
            <button
              onClick={() => setActivePanel('contact')}
              className={`px-4 py-2 rounded-full text-[11px] font-medium tracking-widest uppercase transition-all duration-300 ${
                activePanel === 'contact'
                  ? 'bg-white/10 text-white shadow-inner border border-white/5'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Quick empty spacer matching left brand title or reset button */}
          <div className="w-[100px] hidden sm:flex justify-end">
            {activePanel !== null && (
              <button
                onClick={() => setActivePanel(null)}
                className="text-[9px] font-mono tracking-widest text-zinc-500 hover:text-white transition-colors uppercase"
              >
                Reset // Home
              </button>
            )}
          </div>
        </div>
      </header>

      {/* MAIN DYNAMIC CONTENT ROUTER CONTAINER */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-12 relative z-10 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {!activePanel ? (
            /* ==========================================
               STATE A: HOME SCREEN (Pristine Apple Minimalist Layout)
               ========================================== */
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center space-y-12 py-16"
            >
              {/* Giant clean typography title */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-white font-sans uppercase leading-none select-none">
                  Adrian Kwach
                </h1>
                <p className="text-zinc-500 font-mono text-xs tracking-[0.2em] uppercase">
                  JOURNAL & ENGINEERING BLUEPRINT
                </p>
              </div>

              {/* Friendly Introduction Sentence */}
              <p className="text-zinc-400 text-base sm:text-lg max-w-lg mx-auto font-sans leading-relaxed">
                Hey, check out my portfolio or my latest blog page. I'm exploring resilient electronic communications and critical infrastructure security.
              </p>

              {/* Premium Grayscale Background Portrait Holder in-line */}
              <div className="max-w-md mx-auto h-64 rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-950 relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800"
                  alt="Industrial power environment background"
                  className="w-full h-full object-cover opacity-25 filter grayscale contrast-125 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <span className="text-[10px] font-mono tracking-[0.3em] text-zinc-500 uppercase">
                    POWER GRIDS & NETWORKS SECURITY
                  </span>
                </div>
              </div>

              {/* Flat regular structured columns - clean text */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-20 text-[11px] font-mono text-zinc-500 pt-8 border-t border-zinc-900 max-w-lg mx-auto">
                <div className="text-center sm:text-left space-y-1">
                  <div className="text-zinc-600 font-bold uppercase tracking-wider">Role Directives</div>
                  <div className="text-zinc-300">Cisco Systems</div>
                  <div className="text-zinc-400">Fortinet Systems</div>
                </div>
                <div className="text-center sm:text-left space-y-1">
                  <div className="text-zinc-600 font-bold uppercase tracking-wider">Operation Bases</div>
                  <div className="text-zinc-300">Nairobi, Kenya</div>
                  <div className="text-zinc-400">University of Nairobi</div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* ==========================================
               STATE B: SUB-PANEL SWITCH VIEWER (Clean typed structure)
               ========================================== */
            <motion.div
              key={activePanel}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="py-4"
            >
              {activePanel === 'about' && <AboutPanel />}
              {activePanel === 'projects' && <ProjectsPanel />}
              {activePanel === 'blog' && <BlogsPanel />}
              {activePanel === 'contact' && <ContactPanel />}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 
         FOOTER: Pristine, humble white-text San Francisco Regular typography
         "even the footer, just clean sanfransico basically something similar to what you wrote KWACH with but regular font size on all pages"
      */}
      <footer className="w-full py-8 border-t border-zinc-900 relative z-20">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-500">
          <div className="text-zinc-400 hover:text-white transition-colors font-sans">
            © {new Date().getFullYear()} Adrian Kwach
          </div>

          <div className="flex gap-6 items-center">
            <a 
              href="mailto:adriankwach.security@gmail.com" 
              className="hover:text-white transition-colors"
            >
              Email
            </a>
            <span className="text-zinc-800">•</span>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-zinc-800">•</span>
            <span className="uppercase text-[10px] text-zinc-600">
              Nairobi, Kenya
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
