import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BlogsData } from '../data';
import { BlogPost } from '../types';
import { Calendar, Clock } from 'lucide-react';

export default function BlogsPanel() {
  const [selectedPost, setSelectedPost] = useState<BlogPost>(BlogsData[0]);

  return (
    <div className="text-white max-w-5xl mx-auto py-12 px-4 font-sans select-text">
      {/* Header Block */}
      <div className="border-b border-zinc-900 pb-8 mb-10 text-center sm:text-left">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
          JOURNAL RELEASES
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-white">
          Securing High Voltage Networks
        </h2>
        <p className="text-zinc-400 mt-2 text-sm sm:text-base max-w-xl">
          Hey, welcome to my blog page! Follow my articles below detailing my progress, study logs, and dynamic SCADA security systems guidelines.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Hand: Slick Minimal List with Apple Gloss hover */}
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block pl-1">
            ALL DISPATCHES
          </span>
          {BlogsData.map((post) => (
            <button
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className={`w-full p-6 text-left rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between cursor-pointer focus:outline-none ${
                selectedPost.id === post.id
                  ? 'bg-white/5 border-white/20 shadow-xl backdrop-blur-md'
                  : 'bg-transparent border-zinc-900 hover:bg-white/[0.02] hover:border-zinc-800'
              }`}
            >
              {/* Apple Gloss Sub-layer */}
              {selectedPost.id === post.id && (
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
              )}

              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500">
                  <span className="uppercase tracking-widest">{post.category}</span>
                  <span>{post.readingTime}</span>
                </div>
                <h4 className="font-bold text-lg text-white leading-snug">
                  {post.title}
                </h4>
                <p className="text-zinc-400 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                  {post.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4">
                {post.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 rounded-md uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>

        {/* Right Hand: Pure pristine typographically aligned reader */}
        <div className="lg:col-span-7 bg-zinc-950/40 p-2 sm:p-6 rounded-2xl border border-zinc-900/40">
          <motion.article
            key={selectedPost.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6 text-left"
          >
            {/* Headers */}
            <div className="space-y-3 pb-6 border-b border-zinc-900">
              <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 uppercase tracking-widest">
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readingTime}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {selectedPost.title}
              </h3>
              <p className="text-zinc-400 text-sm font-sans italic leading-relaxed">
                {selectedPost.summary}
              </p>
            </div>

            {/* Custom Markdown-like rendering wrapper using Apple SF standard styling */}
            <div className="prose prose-invert max-w-none text-zinc-300 text-sm sm:text-base leading-relaxed space-y-6 font-sans">
              {selectedPost.content.split('\n\n').map((paragraph, pIdx) => {
                // Render custom headers
                if (paragraph.startsWith('###')) {
                  return (
                    <h4 key={pIdx} className="text-lg font-bold text-white pt-4 tracking-tight">
                      {paragraph.replace('###', '').trim()}
                    </h4>
                  );
                }
                // Render list items
                if (paragraph.startsWith('*')) {
                  return (
                    <ul key={pIdx} className="list-disc pl-5 space-y-2 text-zinc-300">
                      {paragraph.split('\n').map((item, itemIdx) => (
                        <li key={itemIdx}>
                          {item.replace('*', '').trim()}
                        </li>
                      ))}
                    </ul>
                  );
                }
                // Render numeric list items
                if (paragraph.match(/^\d+\./)) {
                  return (
                    <ol key={pIdx} className="list-decimal pl-5 space-y-2 text-zinc-300">
                      {paragraph.split('\n').map((item, itemIdx) => (
                        <li key={itemIdx}>
                          {item.replace(/^\d+\.\s*/, '').trim()}
                        </li>
                      ))}
                    </ol>
                  );
                }
                // Render command lines pre
                if (paragraph.startsWith('```')) {
                  return (
                    <pre key={pIdx} className="p-4 rounded-xl bg-zinc-900/40 text-xs font-mono text-zinc-300 leading-normal overflow-x-auto border border-zinc-900">
                      <code>{paragraph.replace(/```[a-z]*/g, '').trim()}</code>
                    </pre>
                  );
                }

                return (
                  <p key={pIdx}>
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </motion.article>
        </div>
      </div>
    </div>
  );
}
