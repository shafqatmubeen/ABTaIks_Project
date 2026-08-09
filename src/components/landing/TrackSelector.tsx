import React from 'react';
import { Layers, Bot, Server, Palette } from 'lucide-react';
import { SectionReveal } from '../common/SectionReveal';

export const TrackSelector: React.FC = () => {
  const tracks = [
    {
      id: 'fullstack',
      title: 'Full-Stack Web Dev',
      desc: 'React, Vite, Node.js, REST APIs, Tailwind CSS, & Database integration.',
      icon: Layers,
      badge: 'Most Popular',
      color: 'text-[#7C5CFF]',
    },
    {
      id: 'ai',
      title: 'AI Engineering',
      desc: 'Gemini API, LLM prompt chaining, Vector search, RAG pipelines, & Agents.',
      icon: Bot,
      badge: 'Trending',
      color: 'text-[#22D3A6]',
    },
    {
      id: 'backend',
      title: 'Systems & Backend',
      desc: 'Microservices, Rate limiters, Caching layers, WebSockets, & SQL architecture.',
      icon: Server,
      badge: 'High Demand',
      color: 'text-[#F5C451]',
    },
    {
      id: 'frontend',
      title: 'Frontend & UI/UX',
      desc: 'Design systems, Framer Motion, Accessibility, Canvas animations, & Micro-interactions.',
      icon: Palette,
      badge: 'Design-First',
      color: 'text-[#7C5CFF]',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0E1320]/60 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <SectionReveal>
            <span className="text-xs font-mono font-bold uppercase text-[#22D3A6] tracking-widest px-3 py-1 rounded-full bg-[#22D3A6]/10 border border-[#22D3A6]/20">
              Pick Your Specialty
            </span>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              4 Specialized Coding Tracks
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Choose the technology stack that aligns with your dream role.
            </p>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tracks.map((track, idx) => {
            const Icon = track.icon;
            return (
              <SectionReveal key={track.id} delay={0.1 + idx * 0.05}>
                <div className="bg-[#141A27] border border-white/10 rounded-2xl p-5 relative h-full flex flex-col justify-between hover:border-white/20 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-[#080B12] border border-white/10">
                        <Icon className={`w-5 h-5 ${track.color}`} />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#7C5CFF]/15 text-[#7C5CFF] border border-[#7C5CFF]/30">
                        {track.badge}
                      </span>
                    </div>

                    <h3 className="font-heading text-base font-bold text-white mb-2">
                      {track.title}
                    </h3>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      {track.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/5 text-[11px] font-mono text-[#22D3A6]">
                    60 Daily Missions Included →
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
