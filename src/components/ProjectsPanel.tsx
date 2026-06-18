import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ProjectsData } from '../data';
import { Project } from '../types';
import { Network, Cpu, Terminal, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ProjectsPanel() {
  const [selectedProject, setSelectedProject] = useState<Project>(ProjectsData[0]);

  return (
    <div className="text-white max-w-5xl mx-auto py-12 px-4 font-sans select-text">
      {/* Intro Header */}
      <div className="border-b border-zinc-900 pb-8 mb-10 text-center sm:text-left">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
          PROJECT RELEASES
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-white">
          Secure Operational Systems
        </h2>
        <p className="text-zinc-400 mt-2 text-sm sm:text-base max-w-xl">
          Hey, check out my active engineering projects focusing on critical infrastructure, electrical power nodes, and secure control environments.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left List: Apple Gloss/Glass Cards */}
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block pl-1">
            LAB DATA SHEETS
          </span>
          {ProjectsData.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`w-full p-6 text-left rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between cursor-pointer focus:outline-none ${
                selectedProject.id === project.id
                  ? 'bg-white/5 border-white/20 shadow-xl backdrop-blur-md'
                  : 'bg-transparent border-zinc-900 hover:bg-white/[0.02] hover:border-zinc-800'
              }`}
            >
              {/* Apple Gloss Sub-Layer */}
              {selectedProject.id === project.id && (
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
              )}

              <div className="space-y-3">
                <span className="text-[10px] font-mono font-medium tracking-widest text-zinc-500 uppercase block">
                  {project.category}
                </span>
                <h4 className="font-bold text-lg text-white leading-snug">
                  {project.title}
                </h4>
                <p className="text-zinc-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 mt-2">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="text-[9px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400 px-2.5 py-1 rounded-full uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>

        {/* Right Detail: Pure elegant typography document */}
        <div className="lg:col-span-7 space-y-8 bg-zinc-950/40 p-2 sm:p-6 rounded-2xl border border-zinc-900/40">
          <motion.div
            key={selectedProject.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-8 text-left"
          >
            {/* Headers */}
            <div className="space-y-2 pb-6 border-b border-zinc-900">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                {selectedProject.category} // {selectedProject.duration}
              </span>
              <h3 className="text-2xl font-black text-white font-sans leading-tight">
                {selectedProject.title}
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed pt-2">
                {selectedProject.description}
              </p>
            </div>

            {/* Role & Core Stack */}
            <div className="grid grid-cols-2 gap-4 text-xs font-mono uppercase bg-zinc-900/20 p-4 rounded-xl border border-zinc-850">
              <div>
                <span className="text-[9px] text-zinc-500 block">ROLE DESIGNATION</span>
                <span className="text-zinc-200 font-bold block mt-1">{selectedProject.role}</span>
              </div>
              <div>
                <span className="text-[9px] text-zinc-500 block">CORE PLATFORMS</span>
                <span className="text-zinc-200 font-bold block mt-1">Industrial Stack</span>
              </div>
            </div>

            {/* Core Blueprint Objectives */}
            <div className="space-y-4">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">
                CORE SYSTEM OBJECTIVES
              </span>
              <ul className="space-y-3">
                {selectedProject.objectives.map((obj, i) => (
                  <li key={i} className="flex gap-3 text-zinc-300 text-xs sm:text-sm leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture description if present */}
            {selectedProject.architecture && (
              <div className="space-y-3 pt-4 border-t border-zinc-900">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">
                  SYSTEM ARCHITECTURE
                </span>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {selectedProject.architecture}
                </p>
              </div>
            )}

            {/* Configuration snippet if present */}
            {selectedProject.configSnippets && selectedProject.configSnippets.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-zinc-900">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">
                  DEPLOYMENT EXAMPLES
                </span>
                {selectedProject.configSnippets.map((snippet, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <div className="text-xs font-medium text-zinc-300">
                      {snippet.title}
                    </div>
                    <p className="text-[11px] text-zinc-500 leading-normal">
                      {snippet.description}
                    </p>
                    <pre className="p-4 rounded-xl bg-zinc-900/40 text-xs font-mono text-zinc-300 leading-normal overflow-x-auto select-all max-h-72 border border-zinc-900">
                      <code>{snippet.code}</code>
                    </pre>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
