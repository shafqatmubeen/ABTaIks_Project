import React from 'react';
import { ArrowRight, Compass, AlertCircle, CheckCircle } from 'lucide-react';
import { SectionReveal } from '../common/SectionReveal';

interface NextActionWidgetProps {
  githubSubmitted: boolean;
  linkedinSubmitted: boolean;
  onActionClick: () => void;
}

export const NextActionWidget: React.FC<NextActionWidgetProps> = ({
  githubSubmitted,
  linkedinSubmitted,
  onActionClick,
}) => {
  let title = 'Finish your GitHub & LinkedIn proof.';
  let subtitle = "You're one step away from completing today's challenge and keeping your streak alive.";
  let buttonText = 'Submit Proof →';
  let isReadyToComplete = githubSubmitted && linkedinSubmitted;

  if (isReadyToComplete) {
    title = 'All proofs verified for Day 12!';
    subtitle = "You've successfully submitted both GitHub & LinkedIn proof. Claim today's completion now!";
    buttonText = 'Complete Day 12 🎉';
  } else if (githubSubmitted && !linkedinSubmitted) {
    title = 'Finish your LinkedIn proof.';
    subtitle = 'Your GitHub proof is verified. Connect your LinkedIn post URL to lock in Day 12.';
    buttonText = 'Submit LinkedIn Proof →';
  }

  return (
    <SectionReveal delay={0.12}>
      <div className="bg-[#141A27] border border-[#7C5CFF]/30 rounded-2xl p-5 shadow-lg relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Compass className="w-4 h-4 text-[#7C5CFF]" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#7C5CFF]">
                YOUR NEXT BEST ACTION
              </span>
            </div>

            <h4 className="font-heading text-base sm:text-lg font-bold text-white">
              {title}
            </h4>
            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-xl">
              {subtitle}
            </p>
          </div>

          <button
            onClick={onActionClick}
            className={`w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center space-x-2 shrink-0 cursor-pointer ${
              isReadyToComplete
                ? 'bg-[#22D3A6] text-[#080B12] hover:bg-[#1ebf94] shadow-lg shadow-[#22D3A6]/20'
                : 'bg-[#7C5CFF] text-white hover:bg-[#6338FF] shadow-lg shadow-[#7C5CFF]/20'
            }`}
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>
      </div>
    </SectionReveal>
  );
};
