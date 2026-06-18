import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, MapPin } from 'lucide-react';

export default function ContactPanel() {
  return (
    <div className="text-white max-w-2xl mx-auto py-16 px-4 font-sans select-text text-center flex flex-col justify-center items-center min-h-[50vh]">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-10 w-full"
      >
        <div className="space-y-4">
          <span className="text-[10px] font-mono tracking-[0.25em] text-zinc-500 uppercase block">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            I would love to hear from you.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            Whether you want to discuss power systems, network security configurations, dynamic grid routing, or just want to say hello—please feel free to reach out.
          </p>
        </div>

        {/* Minimal channels with beautiful Apple Gloss/Glass buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
          <a
            href="mailto:adriankwach.security@gmail.com"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-100 hover:text-white hover:bg-zinc-850 hover:border-zinc-700 transition-all duration-300 font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-sm cursor-pointer"
          >
            <Mail className="w-4 h-4 text-zinc-400" />
            <span>adriankwach.security@gmail.com</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-100 hover:text-white hover:bg-zinc-850 hover:border-zinc-700 transition-all duration-300 font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-sm cursor-pointer"
          >
            <Linkedin className="w-4 h-4 text-zinc-400" />
            <span>LinkedIn Profile</span>
          </a>
        </div>

        {/* Minimal Location Indicator */}
        <div className="pt-6 flex items-center justify-center gap-2 text-zinc-500 text-xs font-mono tracking-wider uppercase">
          <MapPin className="w-4 h-4 text-zinc-600" />
          <span>Nairobi, Kenya</span>
        </div>
      </motion.div>
    </div>
  );
}
