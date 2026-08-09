import React from 'react';
import { User, UserCheck, ArrowRight } from 'lucide-react';
import { SectionReveal } from '../common/SectionReveal';

interface EmptyProfileBannerProps {
  onOpenProfile: () => void;
}

export const EmptyProfileBanner: React.FC<EmptyProfileBannerProps> = ({ onOpenProfile }) => {
  return (
    <SectionReveal>
      <div className="bg-[#0E1320] border border-[#7C5CFF]/30 rounded-2xl p-4 sm:p-5 shadow-lg mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#141A27] border border-[#7C5CFF]/30 flex items-center justify-center text-[#7C5CFF] shrink-0">
              <User className="w-5 h-5" />
            </div>

            <div>
              <h3 className="font-heading text-sm font-bold text-white">
                Welcome, Builder 👋
              </h3>
              <p className="text-xs text-[#94A3B8]">
                Complete your profile to personalize your challenge experience.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenProfile}
            className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#7C5CFF] text-white text-xs font-bold hover:bg-[#6338FF] transition-all flex items-center justify-center space-x-1.5 shrink-0 cursor-pointer"
          >
            <span>Complete Profile</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </SectionReveal>
  );
};
