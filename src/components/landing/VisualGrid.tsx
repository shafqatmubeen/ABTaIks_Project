import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Flame, ArrowUpRight, Sparkles, Trophy } from 'lucide-react';
import { SectionReveal } from '../common/SectionReveal';
import { ChallengeDay } from '../../types';

interface VisualGridProps {
  days: ChallengeDay[];
  currentDay: number;
  onSelectDay: (dayId: number) => void;
}

export const VisualGrid: React.FC<VisualGridProps> = ({ days, currentDay, onSelectDay }) => {
  const [selectedPhase, setSelectedPhase] = useState<'all' | 'phase1' | 'phase2' | 'phase3'>('all');

  // Filter or highlight days based on phase
  const filteredDays = days.filter((day) => {
    if (selectedPhase === 'phase1') return day.id <= 20;
    if (selectedPhase === 'phase2') return day.id > 20 && day.id <= 40;
    if (selectedPhase === 'phase3') return day.id > 40;
    return true;
  });

  const completedCount = days.filter((d) => d.isCompleted).length;

  return (
    <section className="py-16 md:py-24 bg-[#0E1320]/90 border-y border-white/10 relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-[radial-[#7C5CFF]/0.03_1px,transparent_1px] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div>
            <SectionReveal>
              <span className="text-xs font-mono font-bold uppercase text-[#F5C451] tracking-widest px-3.5 py-1.5 rounded-full bg-[#F5C451]/10 border border-[#F5C451]/20 inline-block">
                Visual Momentum Map
              </span>
            </SectionReveal>
            <SectionReveal delay={0.05}>
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-2.5">
                60 Days of Unstoppable Output
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="text-[#94A3B8] text-xs sm:text-sm max-w-xl mt-1.5 leading-relaxed">
                Every square represents a shipped project. Click any day square to inspect the mission brief, success criteria, and submitted proofs.
              </p>
            </SectionReveal>
          </div>

          {/* Status Legend & Completion Stats */}
          <SectionReveal delay={0.15}>
            <div className="bg-[#141A27] p-3.5 sm:p-4 rounded-2xl border border-white/10 flex flex-wrap items-center justify-between sm:justify-start gap-3 sm:gap-5 text-xs font-mono">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-md bg-[#22D3A6] shadow-sm shadow-[#22D3A6]/40" />
                <span className="text-white font-semibold">Completed ({completedCount})</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-md bg-[#7C5CFF] animate-pulse shadow-sm shadow-[#7C5CFF]/50" />
                <span className="text-white font-semibold">Current (Day {currentDay})</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-md bg-[#080B12] border border-white/20" />
                <span className="text-[#94A3B8]">Upcoming</span>
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Phase Filter Tabs */}
        <SectionReveal delay={0.12}>
          <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-4 no-scrollbar">
            {[
              { id: 'all', label: 'All 60 Days', badge: 'Days 1-60' },
              { id: 'phase1', label: 'Phase 1: Foundations', badge: 'Days 1-20' },
              { id: 'phase2', label: 'Phase 2: Full-Stack & APIs', badge: 'Days 21-40' },
              { id: 'phase3', label: 'Phase 3: AI & Production', badge: 'Days 41-60' },
            ].map((tab) => {
              const active = selectedPhase === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedPhase(tab.id as any)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all shrink-0 flex items-center space-x-2 cursor-pointer ${
                    active
                      ? 'bg-[#7C5CFF] text-white border border-[#A892FF]/50 shadow-lg shadow-[#7C5CFF]/20'
                      : 'bg-[#141A27] text-[#94A3B8] border border-white/10 hover:text-white hover:border-white/20'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded ${
                    active ? 'bg-white/20 text-white' : 'bg-black/30 text-[#94A3B8]'
                  }`}>
                    {tab.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </SectionReveal>

        {/* The 60-Day Grid Box */}
        <SectionReveal delay={0.15}>
          <div className="bg-[#141A27] border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl space-y-6">
            
            {/* Grid Items */}
            <div className="grid grid-cols-5 sm:grid-cols-10 lg:grid-cols-12 gap-2 sm:gap-2.5">
              {filteredDays.map((day) => {
                const isCompleted = day.isCompleted;
                const isCurrent = day.id === currentDay;
                const paddedNum = day.id < 10 ? `0${day.id}` : `${day.id}`;

                return (
                  <motion.button
                    key={day.id}
                    onClick={() => onSelectDay(day.id)}
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`aspect-square rounded-xl flex flex-col items-center justify-center p-1 relative text-xs font-mono font-bold transition-all cursor-pointer ${
                      isCompleted
                        ? 'bg-[#22D3A6]/15 border border-[#22D3A6]/40 text-[#22D3A6] shadow-sm hover:border-[#22D3A6]'
                        : isCurrent
                        ? 'bg-[#7C5CFF] text-white border-2 border-[#A892FF] shadow-lg shadow-[#7C5CFF]/40 glow-purple'
                        : 'bg-[#080B12] border border-white/10 text-[#94A3B8] hover:text-white hover:border-white/30'
                    }`}
                    title={`Day ${day.id}: ${day.title}`}
                  >
                    {isCompleted ? (
                      <div className="flex flex-col items-center justify-center">
                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                        <span className="text-[9px] font-mono text-[#22D3A6]/80 mt-0.5">{paddedNum}</span>
                      </div>
                    ) : isCurrent ? (
                      <div className="flex flex-col items-center justify-center">
                        <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F5C451] fill-[#F5C451] animate-bounce" />
                        <span className="text-[10px] font-mono leading-none mt-0.5">{paddedNum}</span>
                      </div>
                    ) : (
                      <span className="text-xs sm:text-sm font-mono">{paddedNum}</span>
                    )}

                    {/* Active Day Indicator Pulse */}
                    {isCurrent && (
                      <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3A6] opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#22D3A6]" />
                      </span>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Quick Action Footer inside Grid */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex items-center space-x-2 text-xs text-[#94A3B8]">
                <Sparkles className="w-4 h-4 text-[#F5C451] shrink-0" />
                <span>Current Active Target: <strong className="text-white font-semibold">Day 12 — Weather Dashboard</strong></span>
              </div>

              <button
                onClick={() => onSelectDay(currentDay)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#7C5CFF] hover:bg-[#6338FF] text-white text-xs font-extrabold transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-[#7C5CFF]/20"
              >
                <span>Launch Active Day {currentDay} Mission</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </SectionReveal>

      </div>
    </section>
  );
};

