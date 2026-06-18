import React from 'react';
import { motion } from 'motion/react';
import { AboutMeContent } from '../data';

export default function AboutPanel() {
  return (
    <div className="text-white max-w-3xl mx-auto py-12 px-4 font-sans select-text">
      {/* Dynamic Intro Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <span className="text-xs font-mono tracking-[0.25em] text-zinc-500 uppercase">
          ABOUT ADRIAN
        </span>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight font-sans">
          Hello, I am Adrian Kwach welcome to my journey in Tech and Engineering.
        </h2>

        {/* Core Sub-headlines */}
        <div className="text-zinc-400 text-sm sm:text-base space-y-2 border-l border-zinc-700 pl-4 py-1 italic">
          <div>Electrical and Electronic Engineering Student</div>
          <div>Network Engineering & Security Professional</div>
          <div>Operational Technology (OT) & Smart Grid Cybersecurity Interest</div>
        </div>

        {/* Narrative / Bio */}
        <div className="space-y-6 text-zinc-300 text-sm sm:text-base leading-relaxed pt-4">
          <p>
            {AboutMeContent.academicText}
          </p>

          <p>
            {AboutMeContent.cybersecText}
          </p>

          <p>
            {AboutMeContent.socialText}
          </p>
        </div>

        {/* Education Timeline Block - minimal and elegant, pure typography */}
        <div className="pt-10 border-t border-zinc-900 mt-10">
          <h3 className="text-xs font-mono tracking-[0.25em] text-zinc-500 uppercase mb-6">
            EDUCATION BACKGROUND
          </h3>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
              <span className="text-base font-bold text-white">University of Nairobi</span>
              <span className="text-xs font-mono text-zinc-500">Nairobi, Kenya</span>
            </div>
            <div>
              <div className="text-sm font-medium text-zinc-300">
                Bachelor of Science in Electrical and Electronic Engineering (EEE)
              </div>
              <div className="text-xs text-zinc-500 mt-1">
                Specializing in power systems telemetry and cyber-physical security integrations.
              </div>
            </div>
          </div>
        </div>

        {/* OT Security Perspective */}
        <div className="pt-10 border-t border-zinc-900 mt-10">
          <h3 className="text-xs font-mono tracking-[0.25em] text-zinc-500 uppercase mb-4">
            FOCUS INTEGRATION
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed font-sans">
            My engineering perspective combines physical power grids with dynamic security. I design with standard-level security guidelines like IEC 62443 to secure control centers, outstation RTUs, and distributed resources from vulnerabilities.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
