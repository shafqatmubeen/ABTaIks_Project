import React from 'react';
import { AlertTriangle, ArrowRight, RefreshCw } from 'lucide-react';
import { SectionReveal } from '../common/SectionReveal';

interface MissedDayBannerProps {
  onContinue: () => void;
}

export const MissedDayBanner: React.FC<MissedDayBannerProps> = ({ onContinue }) => {
  return (
    <SectionReveal>
      <div className="bg-[#141A27] border-2 border-[#F5C451]/50 rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#080B12] border border-[#F5C451]/40 flex items-center justify-center text-[#F5C451] shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div>
              <span className="text-[10px] font-mono font-bold text-[#F5C451] bg-[#F5C451]/10 px-2 py-0.5 rounded border border-[#F5C451]/20">
                STREAK PAUSED
              </span>
              <h3 className="font-heading text-base sm:text-lg font-bold text-white mt-1">
                You missed yesterday. That's okay!
              </h3>
              <p className="text-xs text-[#94A3B8] mt-0.5">
                Your 60-day journey isn't over. Start building again today to resume your streak.
              </p>
            </div>
          </div>

          <button
            onClick={onContinue}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#F5C451] text-[#080B12] text-xs font-extrabold hover:bg-[#e0b043] transition-all flex items-center justify-center space-x-2 shrink-0 cursor-pointer"
          >
            <span>Resume Challenge</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </SectionReveal>
  );
};
