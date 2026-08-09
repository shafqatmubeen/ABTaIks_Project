import React from 'react';
import { Lock, Award } from 'lucide-react';
import { SectionReveal } from '../common/SectionReveal';
import { Achievement } from '../../types';

interface AchievementsGridProps {
  achievements: Achievement[];
}

export const AchievementsGrid: React.FC<AchievementsGridProps> = ({ achievements }) => {
  return (
    <SectionReveal delay={0.15}>
      <div className="bg-[#0E1320] border border-white/10 rounded-2xl p-5 sm:p-6 shadow-xl">
        <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-[#F5C451]" />
            <h3 className="font-heading text-lg font-bold text-white">
              Verified Badges & Achievements
            </h3>
          </div>
          <span className="text-xs font-mono text-[#94A3B8]">
            3 / 6 Unlocked
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {achievements.map((item) => {
            return (
              <div
                key={item.id}
                className={`p-3.5 rounded-xl border transition-all relative flex flex-col justify-between ${
                  item.unlocked
                    ? 'bg-[#141A27] border-[#7C5CFF]/30 hover:border-[#7C5CFF]/60 shadow-md'
                    : 'bg-[#080B12]/80 border-white/5 opacity-60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{item.icon}</span>
                    {!item.unlocked && (
                      <Lock className="w-3.5 h-3.5 text-[#94A3B8]" />
                    )}
                  </div>

                  <h4 className="font-heading text-xs sm:text-sm font-bold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#94A3B8] leading-tight line-clamp-2 mb-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono">
                  {item.unlocked ? (
                    <span className="text-[#22D3A6] font-semibold">✓ {item.unlockedAt}</span>
                  ) : (
                    <span className="text-[#94A3B8]">{item.progress || 'Keep going to unlock'}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
};
