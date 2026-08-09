import React from 'react';
import { Sparkles, ArrowRight, Flame } from 'lucide-react';
import { SectionReveal } from '../common/SectionReveal';

interface FirstDayBannerProps {
  onStartDay1: () => void;
}

export const FirstDayBanner: React.FC<FirstDayBannerProps> = ({ onStartDay1 }) => {
  return (
    <SectionReveal>
      <div className="bg-[#0E1320] border-2 border-[#22D3A6]/40 rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#080B12] border border-[#22D3A6]/40 flex flex-col items-center justify-center shrink-0">
              <Flame className="w-6 h-6 text-[#94A3B8]" />
              <span className="text-[10px] font-mono text-[#94A3B8] font-bold">0 STREAK</span>
            </div>

            <div>
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded bg-[#22D3A6]/10 text-[#22D3A6] text-xs font-mono font-bold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>WELCOME TO DAY 1</span>
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-extrabold text-white">
                Today is Day 1. Your journey starts here.
              </h3>
              <p className="text-xs text-[#94A3B8] mt-0.5">
                No fake streaks. Build your first personal portfolio card and earn your Day 1 verified badge.
              </p>
            </div>
          </div>

          <button
            onClick={onStartDay1}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#22D3A6] text-[#080B12] text-xs font-extrabold hover:bg-[#1ebf94] transition-all flex items-center justify-center space-x-2 shrink-0 cursor-pointer"
          >
            <span>Start Day 1 Build</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </SectionReveal>
  );
};
