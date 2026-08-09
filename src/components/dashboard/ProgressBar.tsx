import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, CheckCircle, Clock } from 'lucide-react';
import { SectionReveal } from '../common/SectionReveal';

interface ProgressBarProps {
  currentDay: number;
  totalDays?: number;
  completedDaysCount: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentDay,
  totalDays = 60,
  completedDaysCount,
}) => {
  const [animatedPercent, setAnimatedPercent] = useState(0);
  const targetPercent = Math.round((completedDaysCount / totalDays) * 100);
  const daysRemaining = totalDays - completedDaysCount;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercent(targetPercent);
    }, 150);
    return () => clearTimeout(timer);
  }, [targetPercent]);

  return (
    <SectionReveal delay={0.05}>
      <div className="bg-[#141A27] border border-white/10 rounded-2xl p-5 shadow-lg">
        {/* Header Stats Line */}
        <div className="flex items-center justify-between mb-3 text-xs">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-[#7C5CFF]" />
            <span className="font-heading font-extrabold text-white text-sm sm:text-base">
              DAY {currentDay} OF {totalDays}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs font-bold text-[#22D3A6] bg-[#22D3A6]/10 px-2.5 py-1 rounded-lg border border-[#22D3A6]/20">
              {animatedPercent}% COMPLETE
            </span>
          </div>
        </div>

        {/* Animated Progress Bar */}
        <div className="w-full h-3 bg-[#080B12] rounded-full overflow-hidden p-0.5 border border-white/5 relative mb-3">
          <motion.div
            className="h-full bg-gradient-to-r from-[#7C5CFF] via-[#A892FF] to-[#22D3A6] rounded-full shadow-lg"
            initial={{ width: 0 }}
            animate={{ width: `${animatedPercent}%` }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        {/* Subtitle Details */}
        <div className="flex items-center justify-between text-xs text-[#94A3B8]">
          <span className="flex items-center space-x-1">
            <CheckCircle className="w-3.5 h-3.5 text-[#22D3A6]" />
            <span>{completedDaysCount} builds verified</span>
          </span>

          <span className="flex items-center space-x-1 text-[#F5C451]">
            <Clock className="w-3.5 h-3.5" />
            <span className="font-mono">{daysRemaining} days remaining</span>
          </span>
        </div>
      </div>
    </SectionReveal>
  );
};
