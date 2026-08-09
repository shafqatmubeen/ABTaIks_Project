import React from 'react';
import { ArrowRight, Clock, Code2, CloudSun, CheckCircle2 } from 'lucide-react';
import { SectionReveal } from '../common/SectionReveal';
import { ChallengeDay } from '../../types';

interface TodayBuildCardProps {
  day: ChallengeDay;
  onOpenDay: (dayId: number) => void;
}

export const TodayBuildCard: React.FC<TodayBuildCardProps> = ({ day, onOpenDay }) => {
  return (
    <SectionReveal delay={0.1}>
      <div className="bg-[#0E1320] border-2 border-[#7C5CFF]/40 rounded-2xl p-5 sm:p-6 shadow-2xl relative overflow-hidden group hover:border-[#7C5CFF]/70 transition-all glow-purple">
        {/* Subtle Background Accent */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#7C5CFF]/15 rounded-full blur-2xl pointer-events-none" />

        {/* Card Header Tag */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#22D3A6] animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#22D3A6]">
              TODAY'S BUILD
            </span>
          </div>

          <span className="px-2.5 py-0.5 rounded text-xs font-mono font-extrabold bg-[#7C5CFF]/20 text-[#7C5CFF] border border-[#7C5CFF]/30">
            DAY {day.id} OF 60
          </span>
        </div>

        {/* Main Title & Category */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <span className="text-[11px] font-mono font-semibold uppercase text-[#94A3B8] block mb-1">
              {day.category} Track
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center space-x-2">
              <span>{day.title}</span>
              <CloudSun className="w-6 h-6 text-[#F5C451]" />
            </h3>
          </div>

          <div className="flex items-center space-x-1 text-xs text-[#94A3B8] font-mono bg-[#141A27] px-2.5 py-1.5 rounded-lg border border-white/5 shrink-0">
            <Clock className="w-3.5 h-3.5 text-[#F5C451]" />
            <span>{day.estimatedTime}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-5">
          {day.summary}
        </p>

        {/* Quick Highlights list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
          <div className="flex items-center space-x-2 text-xs text-[#F8FAFC] bg-[#141A27] px-3 py-2 rounded-xl border border-white/5">
            <CheckCircle2 className="w-4 h-4 text-[#22D3A6] shrink-0" />
            <span>Live Weather & 5-Day Forecast</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-[#F8FAFC] bg-[#141A27] px-3 py-2 rounded-xl border border-white/5">
            <CheckCircle2 className="w-4 h-4 text-[#22D3A6] shrink-0" />
            <span>Mobile-First 390px Responsive Layout</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onOpenDay(day.id)}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#6338FF] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-[#7C5CFF]/30 hover:shadow-[#7C5CFF]/50 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center space-x-2.5 cursor-pointer glow-purple"
        >
          <span>Continue Day {day.id} Build</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </SectionReveal>
  );
};
