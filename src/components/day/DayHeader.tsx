import React from 'react';
import { ArrowLeft, Flame, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SectionReveal } from '../common/SectionReveal';

interface DayHeaderProps {
  dayId: number;
  totalDays?: number;
  title: string;
  category: string;
  isCompleted: boolean;
  onBack: () => void;
}

export const DayHeader: React.FC<DayHeaderProps> = ({
  dayId,
  totalDays = 60,
  title,
  category,
  isCompleted,
  onBack,
}) => {
  return (
    <SectionReveal>
      <div className="bg-[#0E1320] border-b border-white/10 pt-6 pb-6 mb-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Back Navigation & Breadcrumb */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onBack}
              className="inline-flex items-center space-x-2 text-xs font-semibold text-[#94A3B8] hover:text-white px-3 py-1.5 rounded-lg bg-[#141A27] border border-white/10 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Dashboard</span>
            </button>

            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-[#7C5CFF]/20 text-[#7C5CFF] border border-[#7C5CFF]/30">
                DAY {dayId} / {totalDays}
              </span>
              {isCompleted && (
                <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-[#22D3A6]/20 text-[#22D3A6] border border-[#22D3A6]/30 flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>COMPLETED</span>
                </span>
              )}
            </div>
          </div>

          {/* Title Area */}
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-xs font-mono font-bold text-[#7C5CFF] uppercase tracking-wider">
                BUILD CHALLENGE
              </span>
              <span className="text-white/20">•</span>
              <span className="text-xs font-mono text-[#22D3A6]">{category} Track</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {title}
            </h1>
          </div>

        </div>
      </div>
    </SectionReveal>
  );
};
