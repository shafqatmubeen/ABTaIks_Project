import React from 'react';
import { motion } from 'motion/react';
import { Flame, Zap, Award } from 'lucide-react';
import { SectionReveal } from '../common/SectionReveal';

interface StreakCardProps {
  streakCount: number;
  missedYesterday?: boolean;
}

export const StreakCard: React.FC<StreakCardProps> = ({ streakCount, missedYesterday = false }) => {
  return (
    <SectionReveal>
      <div className="relative bg-[#0E1320] border border-white/10 rounded-2xl p-5 sm:p-6 shadow-xl overflow-hidden glow-purple">
        {/* Ambient Subtle Flame Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#F5C451]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 relative z-10 text-center sm:text-left">
          
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-5">
            {/* Animated Flame Icon Badge */}
            <motion.div
              animate={{
                scale: [1, 1.06, 1],
                filter: [
                  'drop-shadow(0 0 15px rgba(245,196,81,0.4))',
                  'drop-shadow(0 0 25px rgba(245,196,81,0.7))',
                  'drop-shadow(0 0 15px rgba(245,196,81,0.4))',
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#080B12] border-2 border-[#F5C451]/40 flex flex-col items-center justify-center p-2 shadow-inner"
            >
              <Flame className="w-8 h-8 text-[#F5C451] fill-[#F5C451]" />
              <span className="text-[10px] font-mono font-bold text-[#F5C451] uppercase tracking-tighter">
                ACTIVE
              </span>
            </motion.div>

            <div>
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <h2 className="font-heading text-4xl sm:text-5xl font-black text-white tracking-tight">
                  {streakCount}
                </h2>
                <div className="text-left">
                  <p className="text-xs font-mono font-bold uppercase text-[#F5C451] tracking-wider">
                    DAY STREAK
                  </p>
                  <p className="text-[11px] text-[#94A3B8]">
                    {missedYesterday ? 'Streak Paused — Re-ignite Today!' : 'Unbroken Daily Discipline'}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#94A3B8] mt-2 leading-relaxed">
                {missedYesterday
                  ? "That's okay! Your 60-day journey isn't over. Ship today's build to resume your streak."
                  : "You're on a roll. Keep today's momentum alive by completing Day 12."}
              </p>
            </div>
          </div>

          {/* Quick Streak Stats Badge */}
          <div className="bg-[#141A27] border border-white/5 rounded-xl px-4 py-2.5 text-center sm:text-right shrink-0">
            <span className="text-[10px] font-mono uppercase text-[#94A3B8] block">Next Milestone</span>
            <span className="text-xs font-bold text-[#22D3A6] flex items-center justify-center sm:justify-end space-x-1 mt-0.5">
              <Award className="w-3.5 h-3.5" />
              <span>15 Day Badge</span>
            </span>
          </div>

        </div>
      </div>
    </SectionReveal>
  );
};
