import React from 'react';
import { TrendingUp, Users, ShieldCheck } from 'lucide-react';
import { SectionReveal } from '../common/SectionReveal';

interface StandingCardProps {
  standingPercentile: number;
  completedBuilds: number;
}

export const StandingCard: React.FC<StandingCardProps> = ({
  standingPercentile,
  completedBuilds,
}) => {
  return (
    <SectionReveal delay={0.18}>
      <div className="bg-[#141A27] border border-white/10 rounded-2xl p-5 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-[#22D3A6]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#22D3A6]">
              YOUR STANDING
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#94A3B8] bg-[#080B12] px-2 py-0.5 rounded border border-white/5">
            Active Cohort #4
          </span>
        </div>

        <div className="flex items-baseline space-x-3 mb-2">
          <h3 className="font-heading text-3xl font-extrabold text-white">
            Top {standingPercentile}%
          </h3>
          <span className="text-xs font-mono text-[#22D3A6] font-semibold">
            {completedBuilds} builds verified
          </span>
        </div>

        <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
          You're ahead of <strong className="text-white">80% of active builders</strong> worldwide for consistency and public GitHub proof submissions.
        </p>

        {/* Visual Percentile Meter */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-[10px] font-mono text-[#94A3B8]">
            <span>Top 100%</span>
            <span className="text-[#22D3A6] font-bold">Top 20% (You)</span>
            <span>Top 1%</span>
          </div>

          <div className="w-full h-2.5 bg-[#080B12] rounded-full overflow-hidden p-0.5 border border-white/5 relative">
            <div
              className="h-full bg-gradient-to-r from-[#7C5CFF] to-[#22D3A6] rounded-full"
              style={{ width: '80%' }}
            />
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#94A3B8]">
          <span className="flex items-center space-x-1">
            <Users className="w-3.5 h-3.5 text-[#7C5CFF]" />
            <span>Cohort Size: 10,420 Builders</span>
          </span>
          <span className="flex items-center space-x-1 text-[#22D3A6]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Leaderboard Synced</span>
          </span>
        </div>
      </div>
    </SectionReveal>
  );
};
